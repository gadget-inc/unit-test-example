"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FieldType: ()=>FieldType,
    createGadgetRecord: ()=>createGadgetRecord,
    applyParams: ()=>applyParams,
    save: ()=>save,
    deleteRecord: ()=>deleteRecord,
    ShopifyShopState: ()=>ShopifyShopState,
    ShopifySyncState: ()=>ShopifySyncState,
    ShopifyBulkOperationState: ()=>ShopifyBulkOperationState,
    ShopifySellingPlanGroupProductVariantState: ()=>ShopifySellingPlanGroupProductVariantState,
    ShopifySellingPlanGroupProductState: ()=>ShopifySellingPlanGroupProductState,
    transitionState: ()=>transitionState,
    shopifySync: ()=>shopifySync,
    preventCrossShopDataAccess: ()=>preventCrossShopDataAccess,
    finishBulkOperation: ()=>finishBulkOperation,
    globalShopifySync: ()=>globalShopifySync
});
function _apiClientCore() {
    const data = require("@gadgetinc/api-client-core");
    _apiClientCore = function() {
        return data;
    };
    return data;
}
const _errors = require("./errors");
const _globals = require("./globals");
const _metadata = require("./metadata");
const _tenancy = require("./tenancy");
const _utils = require("./utils");
function getBelongsToRelationParams(model, params) {
    const belongsToParams = {};
    for (const field of Object.values(model.fields)){
        if (field.fieldType != "BelongsTo") continue;
        const modelParams = typeof params[model.apiIdentifier] === "object" ? params[model.apiIdentifier] : undefined;
        const belongsToParam = modelParams && typeof modelParams[field.apiIdentifier] === "object" ? modelParams[field.apiIdentifier] : undefined;
        const belongsToId = belongsToParam?.[LINK_PARAM] !== undefined ? belongsToParam[LINK_PARAM] : belongsToParam?.id;
        if (belongsToId !== undefined) {
            belongsToParams[`${field.apiIdentifier}Id`] = belongsToId;
        }
    }
    return belongsToParams;
}
function createGadgetRecord(apiIdentifier, data) {
    const model = getModelByApiIdentifier(apiIdentifier);
    const baseRecord = new (_apiClientCore()).GadgetRecord({
        __typename: model.graphqlTypeName
    });
    return Object.assign(baseRecord, data);
}
function applyParams(params, record) {
    const model = getModelByTypename(record.__typename);
    // override the record with any new params, including relationId params from any _link params on belongs to relationships
    // Change the code snippet in `ApplyParamsDetailsPanel.tsx` when the code below updates
    Object.assign(record, params[model.apiIdentifier], getBelongsToRelationParams(model, params));
}
async function save(record) {
    const context = maybeGetActionContextFromLocalStorage();
    const api = (0, _utils.assert)(context ? context.api : getRequestContext().api, "api client is missing from the current context");
    const model = getModelByTypename(record.__typename);
    await (await _globals.Globals.modelValidator(model.key)).validate({
        api,
        logger: _globals.Globals.logger
    }, record);
    if (!api.internal[model.apiIdentifier]) {
        throw new _errors.InternalError(`Gadget API client doesn't have an internal model manager for ${model.apiIdentifier} to run a Save Record function -- has it finished regenerating or was it recently removed?`);
    }
    let result;
    if ("createdAt" in record && record.createdAt) {
        result = await api.internal[model.apiIdentifier].update(record.id, {
            [model.apiIdentifier]: changedAttributes(model, record)
        });
    } else {
        result = await api.internal[model.apiIdentifier].create({
            [model.apiIdentifier]: writableAttributes(model, record)
        });
    }
    Object.assign(record, {
        ...result
    });
    record.flushChanges(_apiClientCore().ChangeTracking.SinceLastPersisted);
}
async function deleteRecord(record) {
    const context = maybeGetActionContextFromLocalStorage();
    const api = (0, _utils.assert)(context ? context.api : getRequestContext().api, "api client is missing from the current context");
    const scope = context ? context.scope : {};
    const model = getModelByTypename(record.__typename);
    const id = (0, _utils.assert)(record.id, `record.id not set on record in scope, has the record been persisted?`);
    if (!api.internal[model.apiIdentifier]) {
        throw new _errors.InternalError(`Gadget API client doesn't have an internal model manager for ${model.apiIdentifier} to run a Delete Record effect -- has it finished regenerating or was it recently removed?`);
    }
    await api.internal[model.apiIdentifier].delete(id);
    scope.recordDeleted = true;
}
const ShopifyShopState = {
    Installed: {
        created: "installed"
    },
    Uninstalled: {
        created: "uninstalled"
    }
};
const ShopifySyncState = {
    Created: "created",
    Running: "running",
    Completed: "completed",
    Errored: "errored"
};
const ShopifyBulkOperationState = {
    Created: "created",
    Completed: "completed",
    Canceled: "canceled",
    Failed: "failed",
    Expired: "expired"
};
const ShopifySellingPlanGroupProductVariantState = {
    Started: "started",
    Created: "created",
    Deleted: "deleted"
};
const ShopifySellingPlanGroupProductState = {
    Started: "started",
    Created: "created",
    Deleted: "deleted"
};
function transitionState(record, transition) {
    const stringRecordState = typeof record.state === "string" ? record.state : JSON.stringify(record.state);
    const stringTransitionFrom = typeof transition.from === "string" ? transition.from : JSON.stringify(transition.from);
    if (transition.from && stringRecordState !== stringTransitionFrom) {
        throw new _errors.InvalidStateTransitionError(undefined, {
            state: record.state,
            expectedFrom: transition.from
        });
    }
    record.state = transition.to;
}
async function shopifySync(params, record) {
    const context = getActionContextFromLocalStorage();
    const effectAPIs = context.effectAPIs;
    const syncRecord = (0, _utils.assert)(record, "cannot start a shop sync from this action");
    const shopId = (0, _utils.assert)(syncRecord.shopId, "a shop is required to start a sync");
    // verify that models is an array of strings if defined
    if (!syncRecord.models || Array.isArray(syncRecord.models) && syncRecord.models.every((m)=>typeof m == "string")) {
        try {
            await effectAPIs.sync(syncRecord.id.toString(), shopId, syncRecord.syncSince, syncRecord.models, syncRecord.force, params.startReason);
        } catch (error) {
            _globals.Globals.logger.error({
                error,
                connectionSyncId: syncRecord.id
            }, "an error occurred starting shop sync");
            throw error;
        }
    } else {
        throw new _errors.InvalidActionInputError("Models must be an array of api identifiers");
    }
}
async function preventCrossShopDataAccess(params, record, options) {
    const context = getActionContextFromLocalStorage();
    if (context.type != "effect") {
        throw new Error("Can't prevent cross shop data access outside of an action effect");
    }
    if (!params) {
        throw new Error("The `params` parameter is required in preventCrossShopDataAccess(params, record, options?: { shopBelongsToField: string })");
    }
    if (!record) {
        throw new Error("The `record` parameter is required in preventCrossShopDataAccess(params, record, options?: { shopBelongsToField: string })");
    }
    const model = context.model;
    const appTenancy = context[_tenancy.AppTenancyKey];
    const shopBelongsToField = options?.shopBelongsToField;
    // if there's no tenancy let's continue
    if (appTenancy?.shopify?.shopId === undefined) {
        return;
    }
    // if this effect is not run in the context of a model then it does not apply
    if (!model) {
        return;
    }
    const shopId = String(appTenancy.shopify.shopId);
    // If this effect is being added to the Shopify Shop model, simply compare the record's ID
    if (model.key == ShopifyShopKey) {
        if (record && String(record.id) !== shopId) {
            throw new _errors.PermissionDeniedError();
        }
        return;
    }
    const fieldsIsBelongsToShopifyShop = Object.values(model.fields).filter((f)=>f.fieldType === FieldType.BelongsTo && f.configuration.relatedModelKey === ShopifyShopKey);
    if (fieldsIsBelongsToShopifyShop.length === 0) {
        throw new _errors.MisconfiguredActionError("This model is missing a related shop field.");
    }
    if (fieldsIsBelongsToShopifyShop.length > 1 && !shopBelongsToField) {
        throw new _errors.MisconfiguredActionError("This function is missing a related shop field option. `shopBelongsToField` is a required option parameter if the model has more than one related shop field.");
    }
    let relatedField = fieldsIsBelongsToShopifyShop[0];
    if (shopBelongsToField) {
        const selectedField = Object.values(model.fields).find((f)=>f.apiIdentifier === shopBelongsToField);
        if (!selectedField) {
            throw new _errors.MisconfiguredActionError("The selected shop relation field does not exist.");
        }
        if (selectedField.fieldType !== FieldType.BelongsTo || selectedField.configuration.relatedModelKey !== ShopifyShopKey) {
            throw new _errors.MisconfiguredActionError("The selected shop relation field should be a `Belongs To` relationship to the `Shopify Shop` model.");
        } else {
            relatedField = selectedField;
        }
    }
    const input = params[model.apiIdentifier];
    // if we're trying to set the params to a shop other than the tenant we should reject
    if ((0, _utils.isObjectLike)(input)) {
        const objectInput = input;
        if (objectInput[relatedField.apiIdentifier]) {
            if (String(objectInput[relatedField.apiIdentifier][LINK_PARAM]) !== shopId) {
                throw new _errors.PermissionDeniedError();
            }
        } else {
            objectInput[relatedField.apiIdentifier] = {
                [LINK_PARAM]: shopId
            };
        }
    } else {
        params[model.apiIdentifier] = {
            [relatedField.apiIdentifier]: {
                [LINK_PARAM]: shopId
            }
        };
    }
    if (record) {
        const value = record.getField(relatedField.apiIdentifier);
        // if the record doesn't have a shop set then anyone can update it
        if (value) {
            const recordShopId = typeof value === "object" ? value[LINK_PARAM] : value;
            if (String(recordShopId) !== shopId) {
                throw new _errors.PermissionDeniedError();
            }
        } else {
            // we have to re-apply the params to the record to ensure that this effect still works correctly if it occurs after "apply params"
            record.setField(relatedField.apiIdentifier, {
                [LINK_PARAM]: shopId
            });
        }
    }
}
async function finishBulkOperation(record) {
    if (!record?.id) {
        _globals.Globals.logger.warn(`Expected bulk operation record to be present for action`);
        return;
    }
    const context = getActionContextFromLocalStorage();
    const shopifyAPI = await context.connections.shopify.forShopId(record.shopId);
    if (!shopifyAPI) {
        _globals.Globals.logger.error(`Could not instantiate Shopify client for shop ID ${record.shopId}`);
        return;
    }
    const bulkOperation = (await shopifyAPI.graphql(`query {
        node(id: "${ShopifyBulkOperationGIDForId(record.id)}") {
          ... on BulkOperation {
            id
            status
            errorCode
            createdAt
            completedAt
            objectCount
            fileSize
            url
            type
            partialDataUrl
            rootObjectCount
          }
        }
      }`)).node;
    // normalize the mixed upper/lowercase (GraphQL/REST) to lowercase
    const { status , errorCode , type  } = bulkOperation;
    Object.assign(record, {
        ...bulkOperation,
        status: status?.toLowerCase(),
        errorCode: errorCode?.toLowerCase(),
        type: type?.toLowerCase(),
        id: record.id
    });
}
async function globalShopifySync(params) {
    const context = maybeGetActionContextFromLocalStorage();
    const effectAPIs = (0, _utils.assert)(context ? context.effectAPIs : getRequestContext().effectAPIs, "effect apis is missing from the current context");
    const api = (0, _utils.assert)(context ? context.api : getRequestContext().api, "api client is missing from the current context");
    const { apiKeys , syncSince , models , force , startReason  } = params;
    const { shopModelIdentifier , installedViaKeyFieldIdentifier , runShopSyncIdentifier , accessTokenIdentifier , forceFieldIdentifier  } = await effectAPIs.getSyncIdentifiers();
    const pageSize = 250;
    let pageInfo = {
        first: pageSize,
        hasNextPage: true
    };
    const results = [];
    if (apiKeys && apiKeys.length > 0) {
        try {
            while(pageInfo.hasNextPage){
                const records = await api.internal[shopModelIdentifier].findMany({
                    filter: {
                        [installedViaKeyFieldIdentifier]: {
                            in: apiKeys
                        },
                        state: {
                            inState: "created.installed"
                        },
                        planName: {
                            notIn: [
                                "frozen",
                                "fraudulent",
                                "cancelled"
                            ]
                        }
                    },
                    first: pageInfo.first,
                    after: pageInfo.endCursor
                });
                results.push(...records);
                pageInfo = records.pagination.pageInfo;
            }
        } catch (error) {
            _globals.Globals.logger.info({
                userVisible: true,
                error,
                apiKeys
            }, "could not get shops for all API keys");
            throw error;
        }
        for (const result of results){
            // skip the sync if there is no accessToken set or if the state is uninstalled
            if ((0, _utils.isEmpty)(result[accessTokenIdentifier]) || result.state?.created == "uninstalled") {
                _globals.Globals.logger.info({
                    shopId: result.id
                }, "skipping sync for shop without access token or is uninstalled");
                continue;
            }
            try {
                const response = await api.mutate(`
            mutation runSync($shopId: GadgetID!, $domain: String!, $syncSince: DateTime, $models: JSON${forceFieldIdentifier ? ", $force: Boolean" : ""}, $startReason: String) {
              ${runShopSyncIdentifier}(shopifySync:{
                domain:$domain
                syncSince:$syncSince
                models:$models
                ${forceFieldIdentifier ? `${forceFieldIdentifier}:$force` : ""}
                shop:{
                  _link:$shopId
                }
              }, startReason: $startReason) {
                success
                errors {
                  message
                }
              }
            }
          `, {
                    shopId: result.id,
                    domain: result.domain,
                    syncSince,
                    models,
                    ...forceFieldIdentifier ? {
                        force
                    } : undefined,
                    startReason
                });
                // we might have some errors such as the desired models not being enabled for the connection
                if (response[runShopSyncIdentifier] && !response[runShopSyncIdentifier].success) {
                    _globals.Globals.logger.warn({
                        userVisible: true,
                        shop: result,
                        error: response[runShopSyncIdentifier].errors
                    }, "couldn't start sync for shop");
                }
            } catch (error) {
                // log that the sync could not be started for the shop but continue
                _globals.Globals.logger.warn({
                    userVisible: true,
                    error,
                    shop: result
                }, "couldn't start sync for shop");
            }
        }
    } else {
        throw new _errors.InvalidActionInputError("missing at least 1 api key");
    }
}
/**
 * Internal helper functions and variables
 */ /**
 * Get action context without `params` and `record` from async local storage.
 */ function getActionContextFromLocalStorage() {
    return (0, _utils.assert)(_globals.actionContextLocalStorage.getStore(), "this effect function should only be called from within an action");
}
/**
 * Similar to `getActionContextFromLocalStorage` but returns `undefined` if there is no action context. (i.e. possibly called from a route)
 */ function maybeGetActionContextFromLocalStorage() {
    return _globals.actionContextLocalStorage.getStore();
}
function getRequestContext() {
    return _globals.Globals.requestContext.get("requestContext");
}
const LINK_PARAM = "_link";
function writableAttributes(model, record) {
    const fieldsByApiIdentifier = (0, _utils.keyBy)(Object.values(model.fields), "apiIdentifier");
    return (0, _utils.pickBy)(record, (v, k)=>fieldsByApiIdentifier[k]?.internalWritable);
}
function changedAttributes(model, record) {
    const changes = record.changes();
    const attributes = Object.keys(changes).reduce((attrs, key)=>{
        attrs[key] = record[key];
        return attrs;
    }, {});
    return writableAttributes(model, attributes);
}
const getModelByApiIdentifier = (apiIdentifier)=>{
    const typename = _metadata.modelListIndex[`api:${apiIdentifier}`];
    if (!typename) {
        throw new _errors.InternalError(`Model ${apiIdentifier} not found in available model metadata`, {
            availableApiIdentifiers: Object.keys(_metadata.modelListIndex)
        });
    }
    return getModelByTypename(typename);
};
const getModelByTypename = (typename)=>{
    if (!typename) {
        throw new _errors.InternalError(`No typename found on record, __typename must be set for accessing model metadata`);
    }
    const model = _metadata.modelsMap[typename];
    if (!model) {
        throw new _errors.InternalError(`Model with typename ${typename} not found in available model metadata`, {
            availableTypenames: Object.keys(_metadata.modelsMap)
        });
    }
    return model;
};
var FieldType;
(function(FieldType) {
    FieldType["ID"] = "ID";
    FieldType["Number"] = "Number";
    FieldType["String"] = "String";
    FieldType["Enum"] = "Enum";
    FieldType["RichText"] = "RichText";
    FieldType["DateTime"] = "DateTime";
    FieldType["Email"] = "Email";
    FieldType["URL"] = "URL";
    FieldType["Money"] = "Money";
    FieldType["File"] = "File";
    FieldType["Color"] = "Color";
    FieldType["Password"] = "Password";
    FieldType["Computed"] = "Computed";
    FieldType["HasManyThrough"] = "HasManyThrough";
    FieldType["BelongsTo"] = "BelongsTo";
    FieldType["HasMany"] = "HasMany";
    FieldType["HasOne"] = "HasOne";
    FieldType["Boolean"] = "Boolean";
    FieldType["Model"] = "Model";
    FieldType["Object"] = "Object";
    FieldType["Array"] = "Array";
    FieldType["JSON"] = "JSON";
    FieldType["Code"] = "Code";
    FieldType["EncryptedString"] = "EncryptedString";
    FieldType["Vector"] = "Vector";
    FieldType[/**
   * Any value at all.
   * Prefer FieldType.JSON where possible, it's more descriptive.
   */ "Any"] = "Any";
    FieldType["Null"] = "Null";
    FieldType["RecordState"] = "RecordState";
    FieldType["RoleAssignments"] = "RoleAssignments";
})(FieldType || (FieldType = {}));
const shopifyModelKey = (modelName)=>{
    const modelKey = modelName.replaceAll(" ", "");
    return `DataModel-Shopify-${modelKey}`;
};
const ShopifyShopKey = shopifyModelKey("Shop");
const ShopifyBulkOperationGIDForId = (id)=>`gid://shopify/BulkOperation/${id}`;
