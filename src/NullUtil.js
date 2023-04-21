
'use strict';
  
module.exports.NullString = (value) => {
    return !value || value === null ? "" : value;
}

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


module.exports.NullPicture = (value) => {
    return !value || value === null ? "assets/layout/images/no-file.png" : value;
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