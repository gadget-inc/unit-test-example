export declare function assert<T>(value: T | false | undefined | null, message?: string): T;
export declare function isObject(value: any): boolean;
export declare function isObjectLike(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isArrayLike(value: any): boolean;
export declare function isEmpty(value: null | undefined | any[] | object): boolean;
export declare function keyBy<T>(array: T[], iteratee: keyof T | ((value: T) => string)): Record<string, T>;
export declare function pickBy<T extends object>(object: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T>;
export declare const defaults: (...args: any[]) => any;
