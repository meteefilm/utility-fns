"use strict";

const { NullString } = require("./NullUtil");

const toText = (value) => String(NullString(value));

const normalizeText = (value, options = {}) => {
    const { upper = false, lower = false, trim = true, collapseWhitespace = true } = options;
    let result = toText(value);
    if (trim) result = result.trim();
    if (collapseWhitespace) result = result.replace(/\s+/g, " ");
    if (upper) result = result.toUpperCase();
    if (lower) result = result.toLowerCase();
    return result;
};

const removeWhitespace = (value) => toText(value).replace(/\s+/g, "");

const onlyDigits = (value) => toText(value).replace(/\D/g, "");

const padNumber = (value, length = 2, padString = "0") => {
    return onlyDigits(value).padStart(length, padString);
};

const maskText = (value, options = {}) => {
    const { visibleStart = 0, visibleEnd = 4, mask = "*" } = options;
    const text = toText(value);
    if (text.length === 0) return "";
    if (visibleStart + visibleEnd >= text.length) return text;
    return text.slice(0, visibleStart) + mask.repeat(text.length - visibleStart - visibleEnd) + text.slice(text.length - visibleEnd);
};

const isThaiText = (value) => /^[\u0e00-\u0e7f\s]+$/.test(toText(value).trim());

const isEnglishText = (value) => /^[A-Za-z\s]+$/.test(toText(value).trim());

module.exports = {
    normalizeText,
    removeWhitespace,
    onlyDigits,
    maskText,
    padNumber,
    isThaiText,
    isEnglishText,
};
