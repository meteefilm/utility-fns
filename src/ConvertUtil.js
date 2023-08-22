'use strict';

const NullUtil = require('./NullUtil')


module.exports.convertNumber = (data="") => { 
    if(NullUtil.NullString(data) !== ""){
        if(typeof data === "boolean"){
            return data?1:0
        }else if(typeof data === "string"){
            return parseInt(data)
        }
        return data;
    }
    return 0;
}

module.exports.convertString = (data="") => { 
    if(data !== undefined && data !== null){
        return ""+data
    }else{
        return ""
    }
}

module.exports.convertDate = (data="") => { 
    if(data !== undefined && data !== null && data !== ""){
        try{
            return new Date(data)
        }catch (e){
            return ""
        }
    }else{
        return ""
    }
}