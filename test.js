const LOCAL_CONFIG = {
  TH: {
    firstDayOfWeek: 1,
    numthai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    dayNames: [
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุทธ",
      "พฤหัสบดี",
      "ศุกร์",
      "เสาร์",
    ],
    dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    monthNames: [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ],
    monthNamesShort: [
      "ม.ค.",
      "ก.พ.",
      "มี.ค",
      "เม.ย",
      "พ.ค",
      "มิ.ย",
      "ก.ค.",
      "ส.ค",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ],
    today: "Hoy",
    clear: "Limpiar",
    dateFormat: "dd/mm/yyyy",
    weekHeader: "Sm",
  },
  EN: {
    firstDayOfWeek: 1,
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun.", "Mon.", "Tue.", "Wed.", "Tus.", "Fri.", "Sat."],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

const DateUtil = require("./src/DateUtil")

const first = () => { 

    // console.log('xx ',process.env.FORMATDATE);
    let now = new Date()
    let dd = ""

    dd = DateUtil.formatDateAPI({
        date : now
    })
    // now,true,true,"/"
    // console.log('--> ',dd);
    
    // dd = DateUtil.formatDateInvalueCut(dd)
    // console.log('--> ',dd);
    return ''
}

// first()
console.log(first());
