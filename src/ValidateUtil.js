'use strict';

const RandomText = require('./TextUtil');

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
