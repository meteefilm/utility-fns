module.exports.convertNumber = (data="") => { 
    if(NullString(data) !== ""){
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
    if(NullString(data) !== ""){
        return ""+data
    }else{
        return ""
    }
}