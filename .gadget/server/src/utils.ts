// hacky copy of lodash utils we need for gadget-server that doesn't require us to have lodash available in gadget-server
// we can't add it to all apps' node_modules, so we copy what we need over here
// we plan to add a versioning scheme to gadget-server that will trigger a yarn install when the version changes, so when we have that, we can delete this and add a real dependency on lodash
const argsTag = "[object Arguments]",
  arrayTag = "[object Array]",
  asyncTag = "[object AsyncFunction]",
  boolTag = "[object Boolean]",
  dateTag = "[object Date]",
  domExcTag = "[object DOMException]",
  errorTag = "[object Error]",
  funcTag = "[object Function]",
  genTag = "[object GeneratorFunction]",
  mapTag = "[object Map]",
  numberTag = "[object Number]",
  nullTag = "[object Null]",
  objectTag = "[object Object]",
  promiseTag = "[object Promise]",
  proxyTag = "[object Proxy]",
  regexpTag = "[object RegExp]",
  setTag = "[object Set]",
  stringTag = "[object String]",
  symbolTag = "[object Symbol]",
  undefinedTag = "[object Undefined]",
  weakMapTag = "[object WeakMap]",
  weakSetTag = "[object WeakSet]";

const symToStringTag = Symbol.toStringTag;
const nativeObjectToString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;

function baseGetTag(value: any) {
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
 */
function getRawTag(value: any) {
  const isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];

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

export function assert<T>(value: T | false | undefined | null, message?: string): T {
  if (!value) {
    throw new Error(message ?? "value is not truthy");
  }
  return value;
}

export function isObject(value: any) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
export function isObjectLike(value: any) {
  return value != null && typeof value == "object";
}

export function isFunction(value: any) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

export function isArrayLike(value: any) {
  return value != null && typeof value.length == "number" && !isFunction(value);
}

export function isEmpty(value: null | undefined | any[] | object) {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
  const tag = baseGetTag(value);
  if (tag == mapTag || tag == setTag) {
    return !(value as Map<any, any> | Set<any>).size;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

export function keyBy<T>(array: T[], iteratee: keyof T | ((value: T) => string)) {
  return array.reduce<Record<string, T>>((result, value) => {
    // check if iteratee is a function or a string
    if (typeof iteratee === "function") {
      result[iteratee(value)] = value;
    } else if (typeof iteratee === "string") {
      result[value[iteratee] as any] = value;
    }
    return result;
  }, {});
}

export function pickBy<T extends object>(object: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T> {
  const result: Partial<T> = {};

  for (const key in object) {
    if (hasOwnProperty.call(object, key) && predicate(object[key], key)) {
      result[key] = object[key];
    }
  }

  return result;
}

export const defaults = (...args: any[]) => args.reverse().reduce((acc, obj) => ({ ...acc, ...obj }), {});
