'use strict';

module.exports.replaceNoENtoTH = (str) => {
    str = str.toString();
    var find_full = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var replace_full = ["๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๐"];

    for (var i = 0; i < replace_full.length; i++) {
        str = str.replace(new RegExp(find_full[i], "gi"), replace_full[i]);
    }
    return str;
};

module.exports.replaceMonthENtoTH = (str) => {
    str = str.toString();
    var find_full = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var replace_full = ["๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๐"];

    for (var i = 0; i < replace_full.length; i++) {
        str = str.replace(new RegExp(find_full[i], "gi"), replace_full[i]);
    }
    return str;
};

module.exports.replaceDataToKey = (data,keyObj) => { 
    let newData = {...keyObj}
    for(const key in newData){
        if(typeof newData[key]  === "number"){
            newData[key] = data[key] && data[key] !== null?data[key]:newData[key]
        }else {
            newData[key] = data[key] && data[key] !== null?data[key]:newData[key]
        }
    }
    return newData
}

module.exports.replaceNull = (data) => { 
    if(data){
        for(const key in data){
            if(data[key] === null){
                data[key] = ""
            }
        }
    }
    return data
}
