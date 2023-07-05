'use strict';

module.exports.replaceNoENtoTH = (value) => {
    value = value.toString();
    var find_full = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var replace_full = ["๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๐"];

    for (var i = 0; i < replace_full.length; i++) {
        value = value.replace(new RegExp(find_full[i], "gi"), replace_full[i]);
    }
    return value;
};

module.exports.replaceDataToKey = (dataObj,keyObj) => { 
    let newData = {...keyObj}
    for(const key in newData){
        if(typeof newData[key]  === "number"){
            newData[key] = dataObj[key] && data[key] !== null?dataObj[key]:newData[key]
        }else {
            newData[key] = dataObj[key] && data[key] !== null?dataObj[key]:newData[key]
        }
    }
    return newData
}

module.exports.replaceNull = (dataObj) => { 
    if(dataObj){
        for(const key in dataObj){
            if(dataObj[key] === null){
                dataObj[key] = ""
            }
        }
    }
    return dataObj
}
