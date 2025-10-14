"use strict";

const NullUtil = require("./NullUtil");
const ConvertUtil = require("./ConvertUtil");

let randomKey = "";

// module.exports.validateText = (text) => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
// };

// module.exports.validateNumber = () => {
//     id = RandomText(10)
//     return <small id={id} className="p-invalid block" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
// };

// /** Validate : Data Table */
// module.exports.validateDT = (text) => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
// };

// /** Validate : Number of Data Table */
// module.exports.validateDTT = () => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
// };

const validateDateSF = (obj, startId, endId, report = false) => {
    if (obj && NullUtil.NullString(startId) !== "" && NullUtil.NullString(endId) !== "") {
        if (NullUtil.NullString(obj[startId]) !== "" && NullUtil.NullString(obj[endId]) === "") {
            obj = {
                ...obj,
                [endId]: obj[startId],
            };
        } else if (NullUtil.NullString(obj[startId]) === "" && NullUtil.NullString(obj[endId]) !== "") {
            obj = {
                ...obj,
                [startId]: obj[endId],
            };
        }

        if (report) {
            let disabled = true;
            if (NullUtil.NullString(obj[startId]) !== "" && NullUtil.NullString(obj[endId]) !== "") {
                disabled = false;
            }

            obj = {
                ...obj,
                disabled,
            };
        }
    }
    return obj;
};

const validateCitizenId = (id = "") => {
    if (id?.substring(0, 1) === 0) return false;
    if (id?.length !== 13) return false;
    let i,
        sum = 0;
    for (i = 0; i < 12; i++) sum += parseFloat(id?.charAt(i)) * (13 - i);
    if ((11 - (sum % 11)) % 10 !== parseFloat(id?.charAt(12))) return false;
    return true;
};

const ValidatorRegEx = {
    thaiID: /^[0-9]{13}$/,
    containerIDTrimmed: /^[A-Z]{3}[UJZ]\d{6}$/,
    containerID: /^[A-Z]{3}[UJZ]\d{6}\d$/,
    email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    thaiChar: /^[\u0e01-\u0e3a\u0e3f-\u0e5b]+$/,
    thaiName: /^[\u0e01-\u0e2e\u0e30-\u0e3a\u0e40-\u0e4d]+$/,
    thaiFullName: /^[\u0e01-\u0e2e\u0e30-\u0e3a\u0e40-\u0e4d]+(\s+[\u0e01-\u0e2e\u0e30-\u0e3a\u0e40-\u0e4d]+){1,2}$/,
    thaiTitleName: /^[\u0e01-\u0e2f\u0e30-\u0e3a\u0e40-\u0e4d.]+$/,
    thaiFullNameWithTitle: /^[\u0e01-\u0e2f\u0e30-\u0e3a\u0e40-\u0e4d.]+(\s+[\u0e01-\u0e2e\u0e30-\u0e3a\u0e40-\u0e4d]+){1,3}$/,
    engName: /^[a-zA-Z]+$/,
    engFullName: /^[a-zA-Z]+(\s[a-zA-Z]+){1,2}$/,
    engTitleName: /^[a-zA-Z0-9\/\-]+(\s[a-zA-Z]+){0,3}$/,
    engFullNameWithTitle: /^[a-zA-Z0-9\/\-]+(\s[a-zA-Z]+){1,6}$/,
    phoneNoTH: /^0\d{8,9}$/,
    passwordMinLength6: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={[\]}|\\:;"'<,>.?/])(?=.{6,})/,
    passwordMinLength8: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={[\]}|\\:;"'<,>.?/])(?=.{8,})/,
    passwordMinLength16: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={[\]}|\\:;"'<,>.?/])(?=.{16,})/,
};

const ValidatorIsNullish = (value) => {
    return value === null || value === undefined;
};
const ValidatorIsFalsy = (value) => {
    return !value;
};

const ValidatorIsDate = (value) => {
    return value instanceof Date;
};

const ValidatorIsArray = (value) => {
    return Array.isArray(value);
};

const ValidatorIsObject = (value) => {
    return typeof value === "object" && value !== null && !ValidatorIsArray(value);
};

const ValidatorIsEmpty = (value) => {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === "string") {
        return value.trim() === "";
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }
    return false;
};

const calChecksumDigitContainerID = (value) => {
    // ISO_6346
    let valueStr = ConvertUtil.TypeConverter.string(value);
    let validateLength = valueStr.length === 10;
    let validatePattern = ValidatorRegEx.containerIDTrimmed.test(valueStr);
    if (!validateLength || !validatePattern) {
        return null;
    }

    let letterValues = {
        A: 10,
        B: 12,
        C: 13,
        D: 14,
        E: 15,
        F: 16,
        G: 17,
        H: 18,
        J: 20,
        K: 21,
        L: 23,
        M: 24,
        N: 25,
        P: 27,
        Q: 28,
        R: 29,
        S: 30,
        T: 31,
        U: 32,
        V: 34,
        W: 35,
        X: 36,
        Y: 37,
        Z: 38,
    };

    let positions = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        let char = valueStr[i];
        let value = ConvertUtil.TypeConverter.number(char >= "A" ? letterValues[char] : char);
        sum += value * positions[i];
    }
    let remainder = sum % 11;
    return remainder === 10 ? 0 : remainder;
};

const ValidatorIsContainerID = (value) => {
    let valueStr = ConvertUtil.TypeConverter.string(value);
    let validateLength = valueStr.length === 11;
    let validatePattern = ValidatorRegEx.containerID.test(valueStr);
    if (!validateLength || !validatePattern) {
        return false;
    }

    let trimmedValue = valueStr.substring(0, 10);
    let checkDigit = valueStr.charAt(10);

    let calChecksum = calChecksumDigitContainerID(trimmedValue);
    return calChecksum === ConvertUtil.TypeConverter.number(checkDigit);
};

const Validator = {
    isNullish: ValidatorIsNullish,
    isFalsy: ValidatorIsFalsy,
    isDate: ValidatorIsDate,
    isArray: ValidatorIsArray,
    isObject: ValidatorIsObject,
    isEmpty: ValidatorIsEmpty,
    isCitizenId: validateCitizenId,
    isContainerID: ValidatorIsContainerID,
};

module.exports = {
    validateDateSF,
    validateCitizenId,
    ValidatorRegEx,
    Validator,
};
