import React from "react";
import { NullString } from "./NullUtil";
import { RandomText } from "./TextUtil";
let randomKey = ""

export const validateInput = (text) => {
    return validateInputText(undefined, text)
}

export const validateInputText = (id, text) => {
    randomKey = RandomText(10)
    return <small id={randomKey} className="p-invalid block" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
};

export const validateRdo = (id, text) => {
    return <small id={id} className="p-invalid block" style={{color:"#FF0000"}}>{`กรุณาเลือก ${text}`}</small>;
};

export const validateInputTextCus = (id, text) => {
    return <small id={id} className="p-invalid block" style={{color:"#FF0000"}}>{`${text}`}</small>;
};

export const validateQty = (id) => {
    return <small id={id} className="p-invalid block" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
};

export const validateDataTable = (text) => {
    randomKey = RandomText(10)
    return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
};

export const validateQtyDataTable = (id, text) => {
    randomKey = RandomText(10)

    return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
};

export const validateDateStartEnd = (obj,startId, endId,report=false) => {  
    if(obj && NullString(startId) !== "" && NullString(endId) !== ""  ){
        if(NullString(obj[startId]) !== "" && NullString(obj[endId]) === "" ){
            obj= {
                ...obj,
                [endId] : obj[startId]
            }
        }

        if(report){
            let disabled = true
            if(NullString(obj[startId]) !== "" && NullString(obj[endId]) !== "" ){
                disabled = false
            }

            obj= {
                ...obj,
                disabled
            }
        }
    }
    return obj

}
