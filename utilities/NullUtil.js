
export const NullString = (value) => {
    return !value || value === null ? "" : value;
}

export const NullSelect = (value) => {
    return !value || value === null ? "N" : value;
}

export const NullInt = (value) => {
    return !value || value === null ? 0 : value;
}

export const ZeroToNull = (value) => {
    return !value || value === 0 ? "" : value;
}

export const NullToPoint = (value) => {
    return !value || value === null ? "-" : value;
}


export const NullPicture = (value) => {
    return !value || value === null ? "assets/layout/images/no-file.png" : value;
}

export const replaceNull = (data) => { 
    if(data){
        for(const key in data){
            if(data[key] === null){
                data[key] = ""
            }
        }
    }
    return data
}