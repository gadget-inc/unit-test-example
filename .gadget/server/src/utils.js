// hacky copy of lodash utils we need for gadget-server that doesn't require us to have lodash available in gadget-server
// we can't add it to all apps' node_modules, so we copy what we need over here
// we plan to add a versioning scheme to gadget-server that will trigger a yarn install when the version changes, so when we have that, we can delete this and add a real dependency on lodash
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
    assert: ()=>assert,
    isObject: ()=>isObject,
    isObjectLike: ()=>isObjectLike,
    isFunction: ()=>isFunction,
    isArrayLike: ()=>isArrayLike,
    isEmpty: ()=>isEmpty,
    keyBy: ()=>keyBy,
    pickBy: ()=>pickBy,
    defaults: ()=>defaults
});
const argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
const symToStringTag = Symbol.toStringTag;
const nativeObjectToString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : nativeObjectToString.call(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {
    //
    }
    const result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
function assert(value, message) {
    if (!value) {
        throw new Error(message ?? "value is not truthy");
    }
    return value;
}
function isObject(value) {
    const type = typeof value;
    return value != null && (type == "object" || type == "function");
}
function isObjectLike(value) {
    return value != null && typeof value == "object";
}
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    const tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
function isArrayLike(value) {
    return value != null && typeof value.length == "number" && !isFunction(value);
}
function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (Array.isArray(value)) {
        return !value.length;
    }
    const tag = baseGetTag(value);
    if (tag == mapTag || tag == setTag) {
        return !value.size;
    }
    for(const key in value){
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
function keyBy(array, iteratee) {
    return array.reduce((result, value)=>{
        // check if iteratee is a function or a string
        if (typeof iteratee === "function") {
            result[iteratee(value)] = value;
        } else if (typeof iteratee === "string") {
            result[value[iteratee]] = value;
        }
        return result;
    }, {});
}
function pickBy(object, predicate) {
    const result = {};
    for(const key in object){
        if (hasOwnProperty.call(object, key) && predicate(object[key], key)) {
            result[key] = object[key];
        }
    }
    return result;
}
const defaults = (...args)=>args.reverse().reduce((acc, obj)=>({
            ...acc,
            ...obj
        }), {});
