"use strict";

const { getPath } = require("./ObjectUtil");

const isPlainObject = (value) => {
    return value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);
};

const isEmptyValue = (value) => {
    return value === null || value === undefined || (typeof value === "string" && value.trim() === "");
};

const transformPayload = (data, transformer) => {
    if (Array.isArray(data)) return data.map((item) => transformPayload(item, transformer));
    if (!isPlainObject(data)) return transformer(data);

    return Object.keys(data).reduce((acc, key) => {
        acc[key] = transformPayload(data[key], transformer);
        return acc;
    }, {});
};

const trimPayload = (data) => transformPayload(data, (value) => (typeof value === "string" ? value.trim() : value));

const emptyToNull = (data) => transformPayload(data, (value) => (typeof value === "string" && value.trim() === "" ? null : value));

const nullToEmpty = (data) => transformPayload(data, (value) => (value === null || value === undefined ? "" : value));

const removeEmptyKeys = (data) => {
    if (Array.isArray(data)) return data.map(removeEmptyKeys);
    if (!isPlainObject(data)) return data;

    return Object.keys(data).reduce((acc, key) => {
        const value = removeEmptyKeys(data[key]);
        if (!isEmptyValue(value)) acc[key] = value;
        return acc;
    }, {});
};

const cleanPayload = (data, options = {}) => {
    const { trim = true, emptyAsNull = false, nullAsEmpty = false, removeEmpty = false } = options;
    let result = data;
    if (trim) result = trimPayload(result);
    if (emptyAsNull) result = emptyToNull(result);
    if (nullAsEmpty) result = nullToEmpty(result);
    if (removeEmpty) result = removeEmptyKeys(result);
    return result;
};

const getMissingKeys = (data, keys = []) => {
    if (!Array.isArray(keys)) return [];
    return keys.filter((key) => isEmptyValue(getPath(data, key)));
};

const requiredByKeys = (data, keys = []) => {
    return getMissingKeys(data, keys).length === 0;
};

const getMissingNumberKeys = (data, keys = [], options = {}) => {
    const { allowZero = false } = options;
    if (!Array.isArray(keys)) return [];

    return keys.filter((key) => {
        const value = getPath(data, key);
        if (isEmptyValue(value)) return true;
        const numberValue = Number(value);
        if (!Number.isFinite(numberValue)) return true;
        return allowZero ? false : numberValue === 0;
    });
};

const validateRequiredKeys = (data, options = {}) => {
    const {
        keys = [],
        intKeys = [],
        numberKeys = intKeys,
        allowZero = false,
    } = options;

    const missingKeys = getMissingKeys(data, keys);
    const missingIntKeys = getMissingNumberKeys(data, numberKeys, { allowZero });
    const missingAll = [...missingKeys, ...missingIntKeys];
    const valid = missingAll.length === 0;

    return {
        valid,
        submitted: !valid,
        missingKeys,
        missingIntKeys,
        missingNumberKeys: missingIntKeys,
        missingAll,
    };
};

const isRequiredValid = (data, options = {}) => validateRequiredKeys(data, options).valid;

const reqCheck = (data, keys = [], intKeys = [], allowZero = false) => {
    return validateRequiredKeys(data, { keys, intKeys, allowZero });
};

const reqKeys = (data, keys = [], intKeys = [], allowZero = false) => {
    return reqCheck(data, keys, intKeys, allowZero).valid;
};

const getMissingValues = (values = []) => {
    if (!Array.isArray(values)) return [];
    return values.reduce((acc, value, index) => {
        if (isEmptyValue(value)) acc.push(index);
        return acc;
    }, []);
};

const getMissingNumberValues = (values = [], allowZero = false) => {
    if (!Array.isArray(values)) return [];
    return values.reduce((acc, value, index) => {
        if (isEmptyValue(value)) {
            acc.push(index);
            return acc;
        }
        const numberValue = Number(value);
        if (!Number.isFinite(numberValue) || (!allowZero && numberValue === 0)) acc.push(index);
        return acc;
    }, []);
};

const reqValueCheck = (values = [], intValues = [], allowZero = false) => {
    const missingValueIndexes = getMissingValues(values);
    const missingIntValueIndexes = getMissingNumberValues(intValues, allowZero);
    const valid = missingValueIndexes.length === 0 && missingIntValueIndexes.length === 0;

    return {
        valid,
        submitted: !valid,
        missingValueIndexes,
        missingIntValueIndexes,
        missingNumberValueIndexes: missingIntValueIndexes,
        missingAllIndexes: [...missingValueIndexes, ...missingIntValueIndexes],
    };
};

const reqValues = (values = [], intValues = [], allowZero = false) => {
    return reqValueCheck(values, intValues, allowZero).valid;
};

module.exports = {
    cleanPayload,
    emptyToNull,
    nullToEmpty,
    trimPayload,
    removeEmptyKeys,
    getMissingKeys,
    requiredByKeys,
    getMissingNumberKeys,
    validateRequiredKeys,
    isRequiredValid,
    reqCheck,
    reqKeys,
    getMissingValues,
    getMissingNumberValues,
    reqValueCheck,
    reqValues,
};
