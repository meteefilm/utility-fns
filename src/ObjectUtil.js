"use strict";

const { NullString } = require("./NullUtil");

const isPlainObject = (value) => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
};

const getObjectKey = (data, key, options = {}) => {
    const { ignoreCase = true } = options;
    if (!isPlainObject(data) || key === null || key === undefined) return undefined;

    const keyStr = String(key);
    if (Object.prototype.hasOwnProperty.call(data, keyStr)) return keyStr;
    if (!ignoreCase) return undefined;

    const lowerKey = keyStr.toLowerCase();
    return Object.keys(data).find((item) => item.toLowerCase() === lowerKey);
};

const getValue = (data, key, defaultValue = undefined, options = {}) => {
    const dataKey = getObjectKey(data, key, options);
    return dataKey !== undefined ? data[dataKey] : defaultValue;
};

const toPathArray = (path) => {
    if (Array.isArray(path)) return path.map(String).filter((key) => key !== "");
    if (path === null || path === undefined) return [];
    return String(path).split(".").filter((key) => key !== "");
};

const getPath = (data, path, defaultValue = undefined) => {
    const keys = toPathArray(path);
    if (keys.length === 0) return defaultValue;

    let current = data;
    for (const key of keys) {
        if (current === null || current === undefined || typeof current !== "object") return defaultValue;
        if (!Object.prototype.hasOwnProperty.call(current, key)) return defaultValue;
        current = current[key];
    }

    return current === undefined ? defaultValue : current;
};

const setPath = (data, path, value) => {
    const keys = toPathArray(path);
    if (keys.length === 0) return data;

    const root = Array.isArray(data) ? data.slice() : { ...(isPlainObject(data) ? data : {}) };
    let current = root;

    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            current[key] = value;
            return;
        }

        const next = current[key];
        current[key] = Array.isArray(next) ? next.slice() : { ...(isPlainObject(next) ? next : {}) };
        current = current[key];
    });

    return root;
};

const isEmptyValue = (value, options = {}) => {
    const { trim = true, skipEmptyString = true } = options;
    if (value === undefined || value === null) return true;
    if (!skipEmptyString) return false;
    if (typeof value === "string") return (trim ? value.trim() : value) === "";
    return false;
};

const normalizeReturnValue = (value, options = {}) => {
    const { trim = true, stringify = true } = options;
    let result = value;
    if (trim && typeof result === "string") result = result.trim();
    return stringify ? NullString(result) : result;
};

const getFirstValue = (data, keys = [], options = {}) => {
    const {
        defaultValue = "",
        ignoreCase = true,
        trim = true,
        skipEmptyString = true,
        stringify = true,
    } = options;

    if (!isPlainObject(data) || !Array.isArray(keys)) {
        return normalizeReturnValue(defaultValue, { trim, stringify });
    }

    for (const key of keys) {
        const dataKey = getObjectKey(data, key, { ignoreCase });
        const value = dataKey !== undefined ? data[dataKey] : undefined;
        if (!isEmptyValue(value, { trim, skipEmptyString })) {
            return normalizeReturnValue(value, { trim, stringify });
        }
    }

    return normalizeReturnValue(defaultValue, { trim, stringify });
};

const pickByKeys = (data, keys = [], options = {}) => {
    const { ignoreCase = true, includeMissing = false, defaultValue = undefined } = options;
    const result = {};
    if (!isPlainObject(data) || !Array.isArray(keys)) return result;

    keys.forEach((key) => {
        const dataKey = getObjectKey(data, key, { ignoreCase });
        if (dataKey !== undefined) {
            result[key] = data[dataKey];
        } else if (includeMissing) {
            result[key] = defaultValue;
        }
    });

    return result;
};

const omitByKeys = (data, keys = [], options = {}) => {
    const { ignoreCase = true } = options;
    if (!isPlainObject(data) || !Array.isArray(keys)) return {};

    const omitSet = new Set();
    keys.forEach((key) => {
        const dataKey = getObjectKey(data, key, { ignoreCase });
        if (dataKey !== undefined) omitSet.add(dataKey);
    });

    return Object.keys(data).reduce((acc, key) => {
        if (!omitSet.has(key)) acc[key] = data[key];
        return acc;
    }, {});
};

const renameKeys = (data, keyMap = {}, options = {}) => {
    const { ignoreCase = true, keepUnmapped = true } = options;
    if (!isPlainObject(data) || !isPlainObject(keyMap)) return {};

    const result = keepUnmapped ? { ...data } : {};
    Object.keys(keyMap).forEach((oldKey) => {
        const dataKey = getObjectKey(data, oldKey, { ignoreCase });
        const newKey = keyMap[oldKey];
        if (dataKey === undefined || !newKey) return;
        if (keepUnmapped) delete result[dataKey];
        result[newKey] = data[dataKey];
    });

    return result;
};

const mapKeys = (data, mapper) => {
    if (!isPlainObject(data) || typeof mapper !== "function") return data;
    return Object.keys(data).reduce((acc, key) => {
        acc[mapper(key, data[key])] = data[key];
        return acc;
    }, {});
};

const normalizeKeys = (data, mode = "camel") => {
    if (!isPlainObject(data)) return data;

    const toCamel = (key) => key.replace(/[_-]+([a-zA-Z0-9])/g, (_, char) => char.toUpperCase());
    const toSnake = (key) => key.replace(/[A-Z]/g, (char) => "_" + char.toLowerCase()).replace(/^_/, "");
    const toLower = (key) => key.toLowerCase();

    const convertKey = (key) => {
        if (typeof mode === "function") return mode(key);
        if (mode === "snake") return toSnake(key);
        if (mode === "lower") return toLower(key);
        if (mode === "upper") return key.toUpperCase();
        return toCamel(key);
    };

    return Object.keys(data).reduce((acc, key) => {
        acc[convertKey(key)] = data[key];
        return acc;
    }, {});
};

const joinText = (values = [], separator = " ", options = {}) => {
    const { trim = true } = options;
    if (!Array.isArray(values)) return "";
    return values
        .map((value) => (trim ? NullString(value).trim() : NullString(value)))
        .filter((value) => value !== "")
        .join(separator);
};

const buildName = (data, keys = [], separator = " ", options = {}) => {
    if (!isPlainObject(data) || !Array.isArray(keys)) return "";

    const values = keys.map((key) => {
        if (Array.isArray(key)) {
            return getFirstValue(data, key, options);
        }
        return getFirstValue(data, [key], options);
    });

    return joinText(values, separator, options);
};

const buildFullName = (data, keyGroups, separator = " ") => {
    const groups = keyGroups || [
        ["titleName", "title", "prefix"],
        ["name", "Name", "firstName"],
        ["middleName"],
        ["surName", "SurName", "surname", "lastName"],
    ];

    return buildName(data, groups, separator);
};

module.exports = {
    getObjectKey,
    getValue,
    getPath,
    setPath,
    getFirstValue,
    pickByKeys,
    omitByKeys,
    renameKeys,
    mapKeys,
    normalizeKeys,
    joinText,
    buildName,
    buildFullName,
};
