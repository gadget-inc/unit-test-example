"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelListIndex = exports.modelsMap = void 0;
/**
 * Internal variable to store model blobs with GraphQL typename as the key, and use them in the action code functions.
 * @internal
 */
exports.modelsMap = { "User": { "key": "DataModel-dta0gg09Nl0f", "name": "User", "apiIdentifier": "user", "fields": { "ModelField-X8LDgqkX519c-system-id": { "fieldType": "ID", "key": "ModelField-X8LDgqkX519c-system-id", "name": "ID", "apiIdentifier": "id", "configuration": { "type": "IDConfig", "key": "IDConfig-VAkNhZdGURre", "createdDate": 1692801450890 }, "internalWritable": true }, "ModelField-OGqYWiHj3jcy-system-createdAt": { "fieldType": "DateTime", "key": "ModelField-OGqYWiHj3jcy-system-createdAt", "name": "Created At", "apiIdentifier": "createdAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-8UMieEximeJ0", "createdDate": 1692801450891, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-McDQC9MzQ33d-system-updatedAt": { "fieldType": "DateTime", "key": "ModelField-McDQC9MzQ33d-system-updatedAt", "name": "Updated At", "apiIdentifier": "updatedAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-Csv39jOg4ddJ", "createdDate": 1692801450891, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-5eJgQR2ZMad4": { "fieldType": "RoleAssignments", "key": "ModelField-5eJgQR2ZMad4", "name": "Roles", "apiIdentifier": "roles", "configuration": { "type": "RoleAssignmentsConfig", "key": "RoleAssignmentsConfig-dUC3ipmTozaZ", "createdDate": 1692801450940, "default": ["signed-in"] }, "internalWritable": true }, "ModelField-5g6QRUMoXAF6": { "fieldType": "URL", "key": "ModelField-5g6QRUMoXAF6", "name": "Google Image URL", "apiIdentifier": "googleImageUrl", "configuration": { "type": "URLConfig", "key": "URLConfig-FDDojwc3AjAn", "createdDate": 1692801450937, "default": null }, "internalWritable": true }, "ModelField-AtPff_xDPLz0": { "fieldType": "String", "key": "ModelField-AtPff_xDPLz0", "name": "Last Name", "apiIdentifier": "lastName", "configuration": { "type": "StringConfig", "key": "StringConfig-V8BAiXUv4M-n", "createdDate": 1692801450931, "default": null }, "internalWritable": true }, "ModelField-Tmsfk1yTDNXj": { "fieldType": "Email", "key": "ModelField-Tmsfk1yTDNXj", "name": "Email", "apiIdentifier": "email", "configuration": { "type": "EmailConfig", "key": "EmailConfig-Ei4N-9IOau2h", "createdDate": 1692801450932, "default": null }, "internalWritable": true }, "ModelField-X4L4XXtVQhpG": { "fieldType": "String", "key": "ModelField-X4L4XXtVQhpG", "name": "First Name", "apiIdentifier": "firstName", "configuration": { "type": "StringConfig", "key": "StringConfig-Foz_x_kyQb2O", "createdDate": 1692801450929, "default": null }, "internalWritable": true }, "ModelField-jv13kCj_luAb": { "fieldType": "Password", "key": "ModelField-jv13kCj_luAb", "name": "Password", "apiIdentifier": "password", "configuration": { "type": "PasswordConfig", "key": "PasswordConfig-Amc8zmyS4rxO", "createdDate": 1692801450943 }, "internalWritable": true }, "ModelField-p7-TGMCLvGVs": { "fieldType": "DateTime", "key": "ModelField-p7-TGMCLvGVs", "name": "Last Signed In", "apiIdentifier": "lastSignedIn", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-eytsUUgwbv6M", "createdDate": 1692801450941, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-XqeBYIWhUE2H": { "fieldType": "HasMany", "key": "ModelField-XqeBYIWhUE2H", "name": "posts", "apiIdentifier": "posts", "configuration": { "type": "HasManyConfig", "key": "HasManyConfig-e9FkjorBygk5", "createdDate": 1692896709909, "relatedModelKey": "DataModel-og59aaWfCq9P", "inverseFieldKey": "ModelField-Ijcb5p3HDdZl", "dependent": "ignore" }, "internalWritable": true } }, "graphqlTypeName": "User" }, "Session": { "key": "DataModel-uMwttl3WxKkd", "name": "Session", "apiIdentifier": "session", "fields": { "ModelField-0RsvIoLOQNVe-system-id": { "fieldType": "ID", "key": "ModelField-0RsvIoLOQNVe-system-id", "name": "ID", "apiIdentifier": "id", "configuration": { "type": "IDConfig", "key": "IDConfig-nwgMhE0qpQ0H", "createdDate": 1692801450823 }, "internalWritable": true }, "ModelField-NN6WzoxPW3__-system-createdAt": { "fieldType": "DateTime", "key": "ModelField-NN6WzoxPW3__-system-createdAt", "name": "Created At", "apiIdentifier": "createdAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-HByI2togjWAz", "createdDate": 1692801450823, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-2jAnVmcMphsu-system-updatedAt": { "fieldType": "DateTime", "key": "ModelField-2jAnVmcMphsu-system-updatedAt", "name": "Updated At", "apiIdentifier": "updatedAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-v_fR_JTV6F4i", "createdDate": 1692801450824, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-DataModel-uMwttl3WxKkd-system-state": { "fieldType": "RecordState", "key": "ModelField-DataModel-uMwttl3WxKkd-system-state", "name": "State", "apiIdentifier": "state", "configuration": { "type": "RecordStateConfig", "key": "RecordStateConfig-nchZoao-OEIj", "createdDate": 1692801450838 }, "internalWritable": true }, "ModelField--UKrKtkGKMfL": { "fieldType": "BelongsTo", "key": "ModelField--UKrKtkGKMfL", "name": "User", "apiIdentifier": "user", "configuration": { "type": "BelongsToConfig", "key": "BelongsToConfig-vHdp7O7oFCvw", "createdDate": 1692801450995, "relatedModelKey": "DataModel-dta0gg09Nl0f" }, "internalWritable": true } }, "graphqlTypeName": "Session" }, "Post": { "key": "DataModel-og59aaWfCq9P", "name": "post", "apiIdentifier": "post", "fields": { "ModelField-CF-Fss4Vs8P--system-id": { "fieldType": "ID", "key": "ModelField-CF-Fss4Vs8P--system-id", "name": "ID", "apiIdentifier": "id", "configuration": { "type": "IDConfig", "key": "IDConfig-vCjkpbvgp5XP", "createdDate": 1692884546773 }, "internalWritable": true }, "ModelField-t-3WVgHNE0zB-system-createdAt": { "fieldType": "DateTime", "key": "ModelField-t-3WVgHNE0zB-system-createdAt", "name": "Created At", "apiIdentifier": "createdAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-GoDaVyt-FXe8", "createdDate": 1692884546774, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-3_B_PY0raRb9-system-updatedAt": { "fieldType": "DateTime", "key": "ModelField-3_B_PY0raRb9-system-updatedAt", "name": "Updated At", "apiIdentifier": "updatedAt", "configuration": { "type": "DateTimeConfig", "key": "DateTimeConfig-Dv122BrSds_E", "createdDate": 1692884546775, "includeTime": true, "default": null }, "internalWritable": true }, "ModelField-eOp_k2z2m56a": { "fieldType": "String", "key": "ModelField-eOp_k2z2m56a", "name": "title", "apiIdentifier": "title", "configuration": { "type": "StringConfig", "key": "StringConfig-ExNL4BD9AnLQ", "createdDate": 1692884549595, "default": null }, "internalWritable": true }, "ModelField-Gtu4QSJ0FWMZ": { "fieldType": "RichText", "key": "ModelField-Gtu4QSJ0FWMZ", "name": "content", "apiIdentifier": "content", "configuration": { "type": "RichTextConfig", "key": "RichTextConfig-WTw6__tnDMla", "createdDate": 1692884560189, "default": null }, "internalWritable": true }, "ModelField-QZhS7plg8N9B": { "fieldType": "Number", "key": "ModelField-QZhS7plg8N9B", "name": "wordCount", "apiIdentifier": "wordCount", "configuration": { "type": "NumberConfig", "key": "NumberConfig-aW2qya3LXOxg", "createdDate": 1692884572183, "decimals": null, "default": null }, "internalWritable": true }, "ModelField-7Kzx5Dcdory5": { "fieldType": "Boolean", "key": "ModelField-7Kzx5Dcdory5", "name": "isPublished", "apiIdentifier": "isPublished", "configuration": { "type": "BooleanConfig", "key": "BooleanConfig-ZLT7uDpU-9fk", "createdDate": 1692884608549, "default": false }, "internalWritable": true }, "ModelField-Ijcb5p3HDdZl": { "fieldType": "BelongsTo", "key": "ModelField-Ijcb5p3HDdZl", "name": "user", "apiIdentifier": "user", "configuration": { "type": "BelongsToConfig", "key": "BelongsToConfig-FqEfywNN5oRX", "createdDate": 1692896703771, "relatedModelKey": "DataModel-dta0gg09Nl0f" }, "internalWritable": true } }, "graphqlTypeName": "Post" } };
/**
 * Internal variable to map model apiIdentifier to GraphQL typename in modelsMap.
 * @internal
 */
exports.modelListIndex = { "api:user": "User", "api:session": "Session", "api:post": "Post" };
//# sourceMappingURL=metadata.js.map