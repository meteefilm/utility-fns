"use strict";
const NullUtil = require("./NullUtil");

/**
 * Find the maximum value of a key in an array of objects
 * @param arr - The array to search.
 * @param key - The key to use for the comparison.
 * @returns The index of the max value.
 */
const indexOfMax = ({ arr, key = "seq" }) => {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0][key];
    }

    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i][key] > max[key]) {
            // maxIndex = max[key];
            max = arr[i];
        }
    }
    return max[key];
};

/**
 * Given an array of objects, return the name of the object with the matching code
 * @param [arr] - the array to search
 * @param [code] - The code of the list to be found.
 * @returns The name of the list item that matches the code.
 */
const indexOfList = ({ arr = [], code = "", key = "code", name = "name" }) => {
    let data = "";
    if (Array.isArray(arr) && arr.length > 0) {
        let index = arr.findIndex((item) => item[key] === code);
        if (index > -1) {
            data = NullUtil.NullString(arr[index][name]);
        }
    }
    return data;
};

/**
 * Given an array of objects, return the name of the object with the matching code
 * @param [arr] - the array to search
 * @param [code] - The code of the list to be found.
 * @returns The name of the list item that matches the code.
 */
const findList = ({ arr = [], code = "", key = "value", name = "label" }) => {
    let data = "";
    if (Array.isArray(arr) && arr.length > 0) {
        let _data = arr.find((item) => item[key] === code);
        data = _data ? NullUtil.NullString(_data[name]) : "";
    }
    return data;
};

/**
 * It takes an array of objects, a code, and a key, and returns the object in the array that has the
 * code as the value of the key
 * @param [arr] - the array you want to search
 * @param [code] - The code you want to find in the array
 * @param [key=code] - the key of the object you want to find
 */
const objectOfList = ({ arr = [], code = "", key = "code" }) => {
    let data = undefined;
    if (Array.isArray(arr) && arr.length > 0) {
        let index = arr.findIndex((item) => item[key] === code);
        if (index > -1) {
            data = arr[index];
        }
    }
    return data;
};

/**
 * It takes an array of objects and returns a new array of objects with an index property added to each
 * object.
 * @param arr - the array you want to sort
 * @param [key=index] - the key to sort by
 * @returns An array of objects with the key of index and the value of the index + 1
 */
const sortIndexOfList = ({ arr, key = "index" }) => {
    if (arr && arr.length > 0) {
        return arr.map((item, index) => {
            return {
                ...item,
                [key]: index + 1,
            };
        });
    }
    return arr;
};

//** Delete data and Sort List by index */
const dnsList = (selectList, dataList) => {
    if (typeof selectList === "number") {
        dataList.splice(selectList[selectList].index, 1);
    } else {
        for (let d = selectList.length - 1; d >= 0; d--) {
            dataList.splice(selectList[d].index, 1);
        }
    }

    //setค่า index และ seq ใหม่
    for (var i = 0; i < dataList.length; ++i) {
        dataList[i].index = i;
        dataList[i].charge_seq = i + 1;
    }
    return dataList;
};

const sortList = ({ arr, key = "index", sort = 1 }) => {
    if (arr && arr.length > 0) {
        if (sort === 1) {
            arr.sort((a, b) => a[key] - b[key]);
        } else if (sort === -1) {
            arr.sort((a, b) => b[key] - a[key]);
        }
    }
    return arr;
};

const sortAndOrderList = ({ arr, key = "index", sort = 1 }) => {
    if (arr && arr.length > 0) {
        arr = sortList({ arr, key, sort });
        arr = arr.map((item, index) => {
            return {
                ...item,
                index: index + 1,
            };
        });
    }
    return arr;
};

const groupBy = (items, keySelector) => {
    const getNestedValue = (obj, key) => {
        let keyList = key.split(".");
        return keyList.reduce((prev, key) => {
            if (prev === null || prev === undefined || typeof prev !== "object") return undefined;
            if (key in prev) return prev[key];
            return undefined;
        }, obj);
    };

    return TypeConverter.array(items).reduce((acc, item, index) => {
        const key = typeof keySelector === "string" ? getNestedValue(item, keySelector) : keySelector(item, index);
        if (!(key in acc)) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

// export
module.exports = {
    sortAndOrderList,
    sortList,
    dnsList,
    sortIndexOfList,
    objectOfList,
    findList,
    indexOfList,
    indexOfMax,
    groupBy,
};
