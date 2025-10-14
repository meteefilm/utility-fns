"use strict";

const NullUtil = require("./NullUtil");

const convertNumber = (data, defaultValue = 0) => {
    const num = Number(data ?? defaultValue);
    return isFinite(num) ? num : defaultValue;
};

const convertString = (data, defaultValue = "") => {
    return String(data ?? defaultValue);
};

const TypeConverterArray = (val, defaultValue = []) => {
    return Array.isArray(val) ? val : defaultValue;
};

const TypeConverterCurrency = (val, fractionDigits = 2, defaultValue = 0) => {
    // let numStr = String(val ?? defaultValue).replaceAll(',', '');
    let numStr = String(val ?? defaultValue).replace(/,/g, "");

    const num = Number(numStr);
    return isFinite(num) ? Number(num.toFixed(fractionDigits)) : defaultValue;
};

const TypeConverterFormatNumber = (val, fractionDigits = 2, defaultValue = 0) => {
    const num = TypeConverterCurrency(val, fractionDigits, defaultValue);
    return num.toLocaleString("en-US", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
};

const isDateConvertible = (value) => {
    return value instanceof Date || typeof value === "number" || typeof value === "string";
};

const convertDate = (data = "") => {
    if (data !== undefined && data !== null && data !== "") {
        if (!isDateConvertible(data)) {
            return "";
        }
        try {
            let result = new Date(data);
            if (isFinite(result.getTime())) {
                return result;
            }
            return "";
        } catch (e) {
            return "";
        }
    } else {
        return "";
    }
};

const TypeConverter = {
    number: convertNumber,
    string: convertString,
    array: TypeConverterArray,
    currency: TypeConverterCurrency,
    formatNumber: TypeConverterFormatNumber,
    date: convertDate,
};

const offsetYear = (year, format = "auto") => {
    try {
        const THRESHOLD_YEAR = 2500;
        if (format === "en") return year;
        if (format === "th") return year - 543;
        if (year > THRESHOLD_YEAR) return year - 543;
        return year;
    } catch (e) {
        return year;
    }
};

// value: unknown, format: "auto" | "th" | "en" = "auto"
const convertDateInt = (value, format = "auto") => {
    try {
        let valueInt = Number(value) || 0;
        if (valueInt < 0) return "";

        let valueStr = "" + valueInt;
        if (valueStr.length < 8) return "";
        if (/\D/.test(valueStr)) return "";

        let year = valueStr.substring(0, 4);
        let yearInt = Number(year) || 0;
        yearInt = offsetYear(yearInt, format);

        let month = valueStr.substring(4, 6);
        let monthInt = Number(month) || 0;

        let day = valueStr.substring(6, 8);
        let dayInt = Number(day) || 0;

        let hour = valueStr.substring(8, 10);
        let hourInt = Number(hour) || 0;

        let minute = valueStr.substring(10, 12);
        let minuteInt = Number(minute) || 0;

        let second = valueStr.substring(12, 14);
        let secondInt = Number(second) || 0;

        let millisecond = valueStr.substring(14, 17);
        let millisecondInt = Number(millisecond) || 0;

        let result = new Date();
        result.setFullYear(yearInt, monthInt - 1, dayInt);
        result.setHours(hourInt, minuteInt, secondInt, millisecondInt);

        if (isNaN(result.getTime())) return "";
        return result;
    } catch (err) {
        console.error(err);
        return "";
    }
};

const convertDateIntFormate = (value, format = "auto") => {
    try {
        let valueInt = Number(value) || 0;
        if (valueInt < 0) return "";

        let valueStr = "" + valueInt;
        if (valueStr.length < 8) return "";
        if (/\D/.test(valueStr)) return "";

        let year = valueStr.substring(0, 4);
        let yearInt = Number(year) || 0;
        yearInt = offsetYear(yearInt, format);

        let month = valueStr.substring(4, 6);
        let monthInt = Number(month) || 0;

        let day = valueStr.substring(6, 8);
        let dayInt = Number(day) || 0;

        let hour = valueStr.substring(8, 10);
        let hourInt = Number(hour) || 0;

        let minute = valueStr.substring(10, 12);
        let minuteInt = Number(minute) || 0;

        let second = valueStr.substring(12, 14);
        let secondInt = Number(second) || 0;

        let millisecond = valueStr.substring(14, 17);
        let millisecondInt = Number(millisecond) || 0;

        let result = new Date();
        result.setFullYear(yearInt, monthInt - 1, dayInt);
        result.setHours(hourInt, minuteInt, secondInt, millisecondInt);

        if (isNaN(result.getTime())) return "";
        return result;
    } catch (err) {
        console.error(err);
        return "";
    }
};

// export
module.exports = {
    convertNumber,
    convertString,
    convertDate,
    convertDateInt,
    convertDateIntFormate,
    TypeConverter,
};
