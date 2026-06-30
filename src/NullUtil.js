
'use strict';

const NullString = (value) => {
    return !value || value === null ? "" : value;
};

const toStringSafe = (value, defaultValue = "") => {
    if (value === null || value === undefined) return defaultValue;
    return String(value);
};

const isBlank = (value) => {
    return value === null || value === undefined || String(value).trim() === "";
};

module.exports.NullString = NullString;

module.exports.toStringSafe = toStringSafe;

module.exports.isBlank = isBlank;

module.exports.NullSelect = (value) => {
    return !value || value === null ? "N" : value;
}

module.exports.NullInt = (value) => {
    return !value || value === null ? 0 : value;
}

module.exports.ZeroToNull = (value) => {
    return !value || value === 0 ? "" : value;
}

module.exports.NullToPoint = (value) => {
    return !value || value === null ? "-" : value;
}

module.exports.NullToPoint = (value) => {
    return !value || value === null ? "-" : value;
}

module.exports.NullPicture = (value) => {
    return !value || value === null ? "assets/layout/images/no-file.png" : value;
}

module.exports.NullArray = (value) => {
    return !value || value === null ? [] : value;
}
