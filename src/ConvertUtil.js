'use strict';

const NullUtil = require('./NullUtil')


module.exports.convertNumber = (data = "") => {
    if (NullUtil.NullString(data) !== "") {
        if (typeof data === "boolean") {
            return data ? 1 : 0
        } else if (typeof data === "string") {
            return parseInt(data)
        }
        return data;
    }
    return 0;
}

module.exports.convertString = (data = "") => {
    if (data !== undefined && data !== null) {
        return "" + data
    } else {
        return ""
    }
}

module.exports.convertDate = (data = "") => {
    if (data !== undefined && data !== null && data !== "") {
        try {
            return new Date(data)
        } catch (e) {
            return ""
        }
    } else {
        return ""
    }
}

module.exports.offsetYear = (year, format = "auto") => {
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
module.exports.convertDateInt = (value, format= "auto") => {
    try {
        let valueInt = Number(value) || 0;
        if (valueInt < 0) return "";

        let valueStr = "" + valueInt;
        if (valueStr.length < 8) return "";
        if (/\D/.test(valueStr)) return "";

        let year = valueStr.substring(0, 4);
        let yearInt = Number(year) || 0;
        yearInt = this.offsetYear(yearInt, format);

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