"use strict";

const safeExecute = (fns, defaultValue = null) => {
    try {
        return typeof fns === "function" ? fns() : fns;
    } catch (error) {
        return defaultValue;
    }
};

const safeExecuteAsync = async (fns, defaultValue = null) => {
    try {
        return typeof fns === "function" ? await fns() : fns;
    } catch (error) {
        return defaultValue;
    }
};

module.exports = {
    safeExecute,
    safeExecuteAsync,
};
