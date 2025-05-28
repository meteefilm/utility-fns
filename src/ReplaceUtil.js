'use strict';

const DateUtil = require('./DateUtil')


const replaceNoENtoTH = (value) => {
    value = value.toString();
    var find_full = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var replace_full = ["๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๐"];

    for (var i = 0; i < replace_full.length; i++) {
        value = value.replace(new RegExp(find_full[i], "gi"), replace_full[i]);
    }
    return value;
};

// module.exports.replaceDataToKey = (dataObj,keyObj) => { 
//     let newData = {...keyObj}
//     for(const key in newData){
//         if(typeof newData[key]  === "number"){
//             newData[key] = dataObj[key] && dataObj[key] !== null?ConvertUtil.convertNumber(dataObj[key]):newData[key]
//         }else if(dataObj[key] instanceof Object) {
//             newData[key] = dataObj[key] && dataObj[key] !== null?dataObj[key]:newData[key]
//         }else if(dataObj[key] instanceof Date) {
//             newData[key] = dataObj[key] && dataObj[key] !== null?DateUtil.formatDateAPI({ date : dataObj[key]}):newData[key]
//         }else{
//             newData[key] = dataObj[key] && dataObj[key] !== null?""+dataObj[key]:newData[key]
//         }
//     }
//     return newData
// }

const replaceDataToKey = (dataObj, keyObj) => {
    if (Array.isArray(keyObj)) {
        if (Array.isArray(dataObj)) {
            return dataObj.map((item) =>
                replaceDataToKey(item || {}, keyObj[0])
            );
        } else {
            return [];
        }
    } else if (typeof keyObj === "object" && keyObj !== null) {
        const newData = {};
        for (const key in keyObj) {
            const templateValue = keyObj[key];
            const actualValue = dataObj?.[key];

            if (Array.isArray(templateValue)) {
                newData[key] = replaceDataToKey(actualValue || [], templateValue);
            } else if (typeof templateValue === "object" && templateValue !== null && !(templateValue instanceof Date)) {
                newData[key] = replaceDataToKey(actualValue || {}, templateValue);
            } else if (typeof templateValue === "number") {
                if (actualValue instanceof Date) {
                    newData[key] = DateUtil.formatDateInt({ date: actualValue });
                } else {
                    newData[key] = actualValue !== undefined && actualValue !== null
                        ? isNaN(Number(actualValue))
                            ? templateValue
                            : Number(actualValue)
                        : templateValue;
                }
            } else if (typeof templateValue === "string") {
                if (actualValue instanceof Date) {
                    newData[key] = DateUtil.formatDateAPI({ date: actualValue });
                } else {
                    newData[key] = actualValue !== undefined && actualValue !== null
                        ? String(actualValue)
                        : templateValue;
                }
            } else {
                newData[key] = actualValue !== undefined && actualValue !== null
                    ? actualValue
                    : templateValue;
            }
        }
        return newData;
    }

    // default fallback
    return dataObj;
};


const replaceNull = (dataObj) => {
    if (dataObj) {
        for (const key in dataObj) {
            if (dataObj[key] === null) {
                dataObj[key] = ""
            }
        }
    }
    return dataObj
}


// export
module.exports = {
    replaceDataToKey,
    replaceNull,
    replaceNoENtoTH
}
