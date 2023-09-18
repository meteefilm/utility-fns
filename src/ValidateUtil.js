'use strict';

const NullUtil = require('./NullUtil');

let randomKey = "";

// module.exports.validateText = (text) => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
// };

// module.exports.validateNumber = () => {
//     id = RandomText(10)
//     return <small id={id} className="p-invalid block" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
// };

// /** Validate : Data Table */
// module.exports.validateDT = (text) => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`กรุณาระบุ ${text}`}</small>;
// };

// /** Validate : Number of Data Table */
// module.exports.validateDTT = () => {
//     randomKey = RandomText(10)
//     return <small id={randomKey} className="p-invalid block text-center" style={{color:"#FF0000"}}>{`จำนวนไม่ถูกต้อง`}</small>;
// };

module.exports.validateDateSF = (obj,startId, endId,report=false) => {  
    if(obj && NullUtil.NullString(startId) !== "" && NullUtil.NullString(endId) !== ""  ){
        if(NullUtil.NullString(obj[startId]) !== "" && NullUtil.NullString(obj[endId]) === "" ){
            obj= {
                ...obj,
                [endId] : obj[startId]
            }
        }

        if(report){
            let disabled = true
            if(NullUtil.NullString(obj[startId]) !== "" && NullUtil.NullString(obj[endId]) !== "" ){
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

module.exports.validateCitizenId = (id = "") => {
    if (id?.substring(0, 1) === 0) return false;
    if (id?.length !== 13) return false;
    let i,sum = 0;
    for (i = 0; i < 12; i++) sum += parseFloat(id?.charAt(i)) * (13 - i);
    if ((11 - (sum % 11)) % 10 !== parseFloat(id?.charAt(12))) return false;
    return true;
};


