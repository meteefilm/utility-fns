'use strict';

const DateUtil = require('./DateUtil')


module.exports.replaceNoENtoTH = (value) => {
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

module.exports.replaceDataToKey = (dataObj, keyObj) => {
    if (Array.isArray(keyObj)) {
        return dataObj.map((item, index) => 
            replaceDataToKey(item || {}, keyObj[0])
        );
    } else if (typeof keyObj === "object" && keyObj !== null) {
        const newData = {};
        for (const key in keyObj) {
            if (keyObj[key] instanceof Object && !(keyObj[key] instanceof Date)) {
                newData[key] = replaceDataToKey(dataObj[key] || {}, keyObj[key]);
            } else if (typeof keyObj[key] === "number") {
                // Convert date to formatted string for number type in keyObj
                if (dataObj[key] instanceof Date) {
                    newData[key] = DateUtil.formatDateInt({ date: dataObj[key] });
                } else {
                    newData[key] = dataObj[key] !== undefined && dataObj[key] !== null
                        ? isNaN(Number(dataObj[key]))
                            ? keyObj[key]
                            : Number(dataObj[key])
                        : keyObj[key];
                }
            } else if (typeof keyObj[key] === "string") {
                // Convert date to formatted string for string type in keyObj
                if (dataObj[key] instanceof Date) {
                    newData[key] = DateUtil.formatDateAPI({ date: dataObj[key] });
                } else {
                    newData[key] = dataObj[key] !== undefined && dataObj[key] !== null
                        ? ""+dataObj[key]
                        : keyObj[key];
                }
            } else {
                newData[key] = dataObj[key] !== undefined && dataObj[key] !== null
                    ? dataObj[key]
                    : keyObj[key];
            }
        }
        return newData;
    }
    return dataObj;
};

module.exports.replaceNull = (dataObj) => {
    if (dataObj) {
        for (const key in dataObj) {
            if (dataObj[key] === null) {
                dataObj[key] = ""
            }
        }
    }
    return dataObj
}

