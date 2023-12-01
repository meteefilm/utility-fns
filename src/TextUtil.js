'use strict';

module.exports.RandomText = (length = 10) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

module.exports.NumberFormat = (value, float = true) => {
    let newData = value;
    if (value !== undefined && value !== "" && value !== null) {
        const numeral = require("numeral");
        if (float) {
            newData = numeral(newData).format("0,0.00");
        } else {
            newData = numeral(newData).format("0,0");
        }
    }
    return newData;
};