import { NullString } from "./NullUtil";
// var dateFormat = require('dateformat');

export const addDays = (date, days) => {
    const newDate = new Date(Number(date));
    newDate.setDate(date.getDate() + days);
    return newDate;
};

export const displayDateTH = () => {
    let th = {
        firstDayOfWeek: 1,
        numthai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
        dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุทธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
        dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค", "เม.ย", "พ.ค", "มิ.ย", "ก.ค.", "ส.ค", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        today: "Hoy",
        clear: "Limpiar",
        dateFormat: "dd/mm/yyyy",
        weekHeader: "Sm",
    };
    return th;
};

export const monthNamesTH = () => {
    const data = [
        { label: "มกราคม", value: "01" },
        { label: "กุมภาพันธ์", value: "02" },
        { label: "มีนาคม", value: "03" },
        { label: "เมษายน", value: "04" },
        { label: "พฤษภาคม", value: "05" },
        { label: "มิถุนายน", value: "06" },
        { label: "กรกฎาคม", value: "07" },
        { label: "สิงหาคม", value: "08" },
        { label: "กันยายน", value: "09" },
        { label: "ตุลาคม", value: "10" },
        { label: "พฤศจิกายน", value: "11" },
        { label: "ธันวาคม", value: "12" },
    ];
    return data;
};

export const yearTH = (start, end) => {
    //รับ start, end เข้ามาจะได้ เริ่ม -> สิ้นสุด
    const data = [];
    for (let index = start; index < end; index++) {
        data.push({ label: index.toString(), value: index });
    }
    return data;
};

export const dayTH = (month, year) => {
    //รับ month, year เข้ามาจะได้ max day เดือนนั้นออกไป
    const data = [];
    let maxDayInMonth = new Date(year, month, 0).getDate();

    for (let index = 1; index <= maxDayInMonth; index++) {
        data.push({ label: index.toString(), value: index });
    }
    return data;
};

export const monthNamesTH_Short = (mm) => {
    const data_list = [
        { label: "ม.ค.", value: "01" },
        { label: "ก.พ.", value: "02" },
        { label: "มี.ค.", value: "03" },
        { label: "เม.ย.", value: "04" },
        { label: "พ.ค.", value: "05" },
        { label: "มิ.ย.", value: "06" },
        { label: "ก.ค.", value: "07" },
        { label: "ส.ค.", value: "08" },
        { label: "ก.ย.", value: "09" },
        { label: "ต.ค.", value: "10" },
        { label: "พ.ย.", value: "11" },
        { label: "ธ.ค.", value: "12" },
    ];

    let data = data_list.filter((y) => y.value === mm);

    return data[0].label;
};

export const monthNamesTH_full = (mm, key ="label") => {
    const data_list = [
        { label: "มกราคม", value: "01" , full : '01 - มกราคม' },
        { label: "กุมภาพันธ์", value: "02", full : '02 - กุมภาพันธ์' },
        { label: "มีนาคม", value: "03", full : '03 - มีนาคม' },
        { label: "เมษายน", value: "04", full : '04 - เมษายน' },
        { label: "พฤษภาคม", value: "05", full : '05 - พฤษภาคม' },
        { label: "มิถุนายน", value: "06", full : '06 - มิถุนายน' },
        { label: "กรกฎาคม", value: "07", full : '07 - กรกฎาคม' },
        { label: "สิงหาคม", value: "08", full : '08 - สิงหาคม' },
        { label: "กันยายน", value: "09", full : '09 - กันยายน' },
        { label: "ตุลาคม", value: "10", full : '10 - ตุลาคม' },
        { label: "พฤศจิกายน", value: "11", full : '11 - พฤศจิกายน' },
        { label: "ธันวาคม", value: "12", full : '12 - ธันวาคม' },
    ];

    let data = data_list.filter((y) => y.value === mm);

    if(data && data.length > 0){
        return NullString(data[0][key])
    }

    return mm;
};

//yyyy-mm-dd
const mainConvertDate = (date="",time=false) => {

    if(date){
        let cur_date =  new Date(date);
        let timezoneOffset = cur_date.getTimezoneOffset() / 60 ;
        cur_date.setHours(cur_date.getHours() - timezoneOffset);
        cur_date = cur_date.toISOString().replace("T"," ").replace("Z","")

        // let _data = cur_date.split(" ")
        // let _day = _data[0].split("-")
        // if(_day.length === 3){
        //     _day = _day[0]+_day[1]+_day[2]
        // }else{
        //     _day = _data[0]
        // }

        // if(time===true){
        //     let _time = _data[1].substring(0,_data[1].indexOf(".")).split(":")
        //     if(_time.length === 3){
        //         _time = _time[0]+_time[1]+_time[2]
        //     }else{
        //         _time = _data[1].substring(0,_data[1].indexOf("."))
        //     }

        //     return _data[0]+" "+_time
        // }else{
        //     return _data[0]
        // }
        if(date && NullString(date) !== "" && date !== "null"){
            let cur_date =  new Date(date);
            let timezoneOffset = cur_date.getTimezoneOffset() / 60 ;
            cur_date.setHours(cur_date.getHours() - timezoneOffset); 
            cur_date = cur_date.toISOString().replace("T"," ").replace("Z","")
      
            let _data = cur_date.split(" ")
            if(time===true){
                return _data[0]+" "+_data[1].substring(0,_data[1].indexOf("."))
            }else{
                return _data[0]
            }
        }
    }

    return date;
}

export const convertDateYearMonth = (date) => {
    if(date){
        let data = mainConvertDate(date);
        let _data = data.split("-")
        return (parseInt(_data[0])+543)+"/"+_data[1];
    }
    return date;
}

export const convertYearMonthDate = (data) => {
    let _data =  data.split("/")
    if(data && _data.length === 2){
        return new Date(parseInt(_data[0])-543+"-"+_data[1]+"-01")
    }
    return data
}



export const formatDateTH = (date="", isTime = false) => {
    // dd/mm/25xx
    if(date){
        let cur_date =  new Date(date);
        let timezoneOffset = cur_date.getTimezoneOffset() / 60 ;
        cur_date.setHours(cur_date.getHours() - timezoneOffset);
        cur_date = cur_date.toISOString().replace("T"," ").replace("Z","")

        let _data = cur_date.split(" ")
        let _inDay = _data[0].split("-")

        if(isTime===true){
          return _inDay[2]+"/"+_inDay[1]+"/"+(parseInt(_inDay[0])+543)+" "+_data[1].substring(0,_data[1].indexOf("."))
        }else{
          return  _inDay[2]+"/"+_inDay[1]+"/"+(parseInt(_inDay[0])+543)
        }
      }

      return date;


    // date = date.replace(" ", "T") + "Z";
    // let conv_to_date = new Date(date);
    // const offset = conv_to_date.getTimezoneOffset() / 60; //-7
    // conv_to_date.setHours(conv_to_date.getHours() + offset);
    // let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear() + 543));

    // let data = "";
    // if (date !== undefined && date !== null) {
    //     if (isTime === true) {
    //         data = dateFormat(date_dt, "dd/mm/yyyy HH:MM");
    //     } else {
    //         data = dateFormat(date_dt, "dd/mm/yyyy");
    //     }
    // }
    // return data;
};
export const formatDateInvalue = (date="", istime = false) => {
    let year = date.substring(0,4);
    let month = date.substring(4,6);
    let day = date.substring(8,6);

    let time = date.substring(9);
    let time1 = time.substring(0,2);
    let time2 = time.substring(2,4);
    let all = year +"-"+ month +"-"+ day;
    let allTime = year +"-"+ month +"-"+ day + " "+ time1 + ":"+time2;
    let newDate = new Date(istime === true ? allTime : all);
    return newDate;
}
export const formatDateInvalueCut = (date="") => {
    let dateNewsBeginDt = date.split("/");
    let day = dateNewsBeginDt[2].split(" ");
    let day2 = dateNewsBeginDt[1];
    let day3 = dateNewsBeginDt[0];
    let newDate = (day[0]-543)+"-"+day2+"-"+day3+" "+day[1];

    return newDate;
}
export const formatDateInvalueYear2 = (date="") => {
    let dateNew = date.split("/");        
    let year = "25"+dateNew[2]
    let newDate = year-543+"-"+dateNew[1]+"-"+dateNew[0];
    return new Date(newDate);
}

export const formatDateAPI = (date="", type) => {
    /**
     * type Formate
     * dateForm => 2,from,f
     * dateTo => 3,to,t
     * not show time => 0,false
     * normal : true,1,"",undefine, unsent
     */
    let data = "";
    if (date !== undefined && date !== null && date !== "") {
        data = new Date(date);
        type = typeof type === "string" ? type.toUpperCase() : type;
        switch (type) {
            case 2:
            case "FROM":
            case "F":
              data = mainConvertDate(data,false)+ " 00:00:00";
              break;
            case 3:
            case "TO":
            case "T":
                data = mainConvertDate(data,false) + " 23:59:59";
                break;
            case false:
            case 0:
              data = mainConvertDate(data,false)
                break;
            case 1:
            case true:
            default: data = mainConvertDate(data,true)
        }
    }
    return data;
};

export const formatDateFull = (date, isTime=false) => {

    if(date){
        let cur_date =  new Date(date);
        let timezoneOffset = cur_date.getTimezoneOffset() / 60 ;
        cur_date.setHours(cur_date.getHours() - timezoneOffset);
        cur_date = cur_date.toISOString().replace("T"," ").replace("Z","")

        let _data = cur_date.split(" ")
        let _inDay = _data[0].split("-")
        if(isTime===true){
            return _inDay[2]+"/"+_inDay[1]+"/"+_inDay[0]+" "+_data[1].substring(0,_data[1].indexOf("."))
        }else{
            return _data[0]
        }
    }

    return date;

    // let conv_to_date = new Date(date);
    // // let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear()));
    // let data = "";
    // if (date !== undefined && date !== null) {
    //     if (isTime === true) {
    //         data = dateFormat(date_dt, "dd/mm/yyyy HH:MM");
    //     } else {
    //         data = dateFormat(date_dt, "dd/mm/yyyy");
    //     }
    // }
    // return data;
};

export const formatDateSession = (date="", isTime) => {

    let data=""
    if (date !== undefined && date !== null) {
        if (isTime === true) {
            data = mainConvertDate(date,isTime).replaceAll("-","").replaceAll(":","")
        } else {
            data = mainConvertDate(date,isTime).replaceAll("-","")
        }
    }
    return data;
};

export const formatDateToken = (date, isTime) => {
    let data = "";
    if (date !== undefined && date !== null) {
        data = mainConvertDate(date,isTime)
    }
    return data;
};

export const formatDateFile = (date, isTime) => {
    let data=""
    if (date !== undefined && date !== null) {
        if (isTime === true) {
            data = mainConvertDate(date,isTime).replaceAll("-","").replaceAll(":","")
        } else {
            data = mainConvertDate(date,isTime).replaceAll("-","")
        }
    }
    return data;
};

export const getThaiYear = () => {
    let date = new Date();
    let year = date.getFullYear() + 543 || "";
    return year;
};

export const dropdownYear = (yaer = new Date(), start = 15, end = 0) => {
    let fullYear = yaer.getFullYear() + 543;
    let startYaer = fullYear - start;
    let endYear = fullYear + end;

    let list = [];
    for (let i = endYear; i >= startYaer; i--) {
        list.push({ code: i, name: i, value: (i - 543) })

    }
    return list
}


//old function vvv
// export const formatDateCounting_full = (data_date, isTime) => {
//     let conv_to_date = new Date(data_date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear() + 543));
//     let date = dateFormat(date_dt, "dd/mm/yyyy HH:MM:ss");
//     let date_time_arr = date.split(" ");
//     let date_arr = [];
//     let date_full = "";
//     if (date_time_arr[0] !== undefined && date_time_arr[0] !== "") {
//         date_arr = date_time_arr[0].split("/");

//         if (isTime === true) {
//             date_full = date_arr[0] + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + date_arr[2] + "  เวลา " + date_time_arr[1] + " น.";
//         } else {
//             date_full = date_arr[0] + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + replaceNoENtoTH(date_arr[2]);
//         }
//     }
//     return date_full;
// };

// export const formatDateTH = (date, isTime) => {
//     let conv_to_date = new Date(date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear() + 543));

//     let data = '';
//     if (date !== undefined && date !== null) {
//         if (isTime === true) {
//             data = dateFormat(date_dt, "dd/mm/yyyy HH:MM");

//         } else {
//             data = dateFormat(date_dt, "dd/mm/yyyy");
//         }
//     }
//     return data;
// }

// export const formatDateTH_full = (data_date, isTime) => {
//     let conv_to_date = new Date(data_date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear()));
//     let date = dateFormat(date_dt, "dd/mm/yyyy HH:MM");
//     let date_time_arr = date.split(" ");
//     let date_arr = [];
//     let date_full = "";
//     if (date_time_arr[0] !== undefined && date_time_arr[0] !== "") {
//         date_arr = date_time_arr[0].split("/");

//         if (isTime === true) {
//             date_full = "วันที่ " + replaceNoENtoTH(date_arr[0]) + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + replaceNoENtoTH(date_arr[2]) + "  เวลา " + replaceNoENtoTH(date_time_arr[1]) + " นาฬิกา";
//         } else {
//             date_full = "วันที่ " + replaceNoENtoTH(date_arr[0]) + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + replaceNoENtoTH(date_arr[2]);
//         }
//     }
//     return date_full;
// };

// export const formatDateTH_full2 = (data_date, isTime) => {
//     let conv_to_date = new Date(data_date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear() + 543));
//     let date = dateFormat(date_dt, "dd/mm/yyyy HH:MM");
//     let date_time_arr = date.split(" ");
//     let date_arr = [];
//     let date_full = "";
//     if (date_time_arr[0] !== undefined && date_time_arr[0] !== "") {
//         date_arr = date_time_arr[0].split("/");

//         if (isTime === true) {
//             date_full = "วันที่ " + replaceNoENtoTH(date_arr[0]) + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + replaceNoENtoTH(date_arr[2]) + "  เวลา " + replaceNoENtoTH(date_time_arr[1]) + " น.";
//         } else {
//             date_full = "วันที่ " + replaceNoENtoTH(date_arr[0]) + " " + replaceNoENtoTH(monthNamesTH_full(date_arr[1])) + " " + replaceNoENtoTH(date_arr[2]);
//         }
//     }
//     return date_full;
// };

// export const formatDateSession = (date, isTime) => {
//     let conv_to_date = new Date(date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear()));
//     let data = "";
//     if (date !== undefined && date !== null) {
//         if (isTime === true) {
//             data = dateFormat(date_dt, "yyyymmdd HH:MM");
//         } else {
//             data = dateFormat(date_dt, "yyyymmdd");
//         }
//     }
//     return data;
// };

// export const formatDateAPI = (date="", type) => {
//     /**
//      * type Formate
//      * dateForm => 2,from,f
//      * dateTo => 3,to,t
//      * not show time => 0,false
//      * normal : true,1,"",undefine, unsent
//      */
//     let data = "";
//     if (date !== undefined && date !== null && date !== "") {
//         data = new Date(date);
//         type = typeof type === "string" ? type.toUpperCase() : type;
//         switch (type) {
//             case 2:
//             case "FROM":
//             case "F":
//                 data = dateFormat(data, "yyyy-mm-dd") + " 00:00:00";
//                 break;
//             case 3:
//             case "TO":
//             case "T":
//                 data = dateFormat(data, "yyyy-mm-dd") + " 23:59:59";
//                 break;
//             case false:
//             case 0:
//                 data = dateFormat(data, "yyyy-mm-dd");
//                 break;
//             case 1:
//             case true:
//             default:
//                 data = dateFormat(data, "yyyy-mm-dd HH:MM:ss");
//         }
//     }
//     return data;
// };

// export const formatDateFullTH = (date, isTime) => {
//     let conv_to_date = new Date(date);
//     let date_dt = new Date(conv_to_date.setFullYear(conv_to_date.getFullYear() + 543));
//     let data = "";
//     if (date !== undefined && date !== null) {
//         if (isTime === true) {
//             data = dateFormat(date_dt, "dd/mm/yyyy HH:MM:ss");
//         } else {
//             data = dateFormat(date_dt, "dd/mm/yyyy");
//         }
//     }
//     return data;
// };


