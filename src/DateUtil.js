"use strict";

const { indexOfList } = require("./ArrayUtil");
const { NullString } = require("./NullUtil");

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
    today: "วันนี้",
    clear: "ล้าง",
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

const initData = {
  date: new Date(),
  type: true,
  regEx: true,
  regStr: "-",
}

/**
 * Main Convert Dete Fns
 */
const mainConvertDate = (date = "", time = false, format = 0) => {
  if (date && NullString(date) !== "" && date !== "null") {
    let cur_date = new Date(date);
    if (isNaN(cur_date.getTime())) {
      console.warn("Invalid date input:", date);
      return "";
    }

    let timezoneOffset = cur_date.getTimezoneOffset() / 60;
    cur_date.setHours(cur_date.getHours() - timezoneOffset);
    cur_date = cur_date.toISOString().replace("T", " ").replace("Z", "");

    let _data = cur_date.split(" ");
    let day = _data[0];
    if (day.split("-").length === 3 && format === 1) {
      let _day = _data[0].split("-");
      day = _day[2] + "-" + _day[1] + "-" + _day[0];
    }

    if (time === true) {
      return day + " " + _data[1].substring(0, _data[1].indexOf("."));
    } else {
      return day;
    }
  }

  return date;
};


const configDateTH = () => {
  return LOCAL_CONFIG.TH;
};

/**
 * * Get Data List of Date By LOCAL
 * ! day
 * ! month
 * ! year
 */
const getDayList = (LOCAL = "TH") => {
  let list = [];
  let localData = LOCAL_CONFIG[LOCAL];
  if (localData) {
    for (let i = 0; i < 7; i++) {
      let keyStr = "" + (i + 1);
      let data = {
        index: i,
        id: i + 1,
        value: keyStr,
        code: keyStr.padStart(2, "0"),
      };

      if (localData.dayNames) {
        data = {
          ...data,
          label: localData.dayNames[i],
        };
      }

      if (localData.dayNamesShort) {
        data = {
          ...data,
          short: localData.dayNamesShort[i],
        };
      }

      list.push(data);
    }
  }
  return list;
};

const getMonthList = (LOCAL = "TH") => {
  let list = [];
  let localData = LOCAL_CONFIG[LOCAL];
  if (localData) {
    for (let i = 0; i < 12; i++) {
      let keyStr = "" + (i + 1);
      let data = {
        index: i,
        id: i + 1,
        value: keyStr,
        code: keyStr.padStart(2, "0"),
      };

      if (localData.monthNames) {
        data = {
          ...data,
          label: localData.monthNames[i],
          full: keyStr.padStart(2, "0") + " - " + localData.monthNames[i],
        };
      }

      if (localData.monthNamesShort) {
        data = {
          ...data,
          short: localData.monthNamesShort[i],
          fullShort:
            keyStr.padStart(2, "0") + " - " + localData.monthNamesShort[i],
        };
      }

      list.push(data);
    }
  }
  return list;
};

const getYearList = (start = 0, end = 0, LOCAL = "TH") => {
  const list = [];
  let curYear = new Date().getFullYear();
  if (LOCAL === "TH") {
    curYear = curYear > 2500 ? curYear : curYear + 543;
    start = start > 0 && start < 2500 ? start + 543 : start;
    end = end > 0 && end < 2500 ? end + 543 : end;
  }
  start = start > 0 ? start : start < 0 ? curYear : curYear - 10;
  end = end > 0 ? end : end < 0 ? curYear : curYear + 10;

  let _start = start > end ? start : end;
  let _end = start > end ? end : start;

  for (let i = _start; i >= _end; i--) {
    list.push({
      value: i,
      revalue: _start > 2500 ? i - 543 : i + 543,
      label: i,

    });
  }

  return list;
};

/**
 * * Get single Data
 * ! Day
 * ! Month
 * ! Current Thai year
 */
const getDayData = (value = "", key = "value", name = "label", LOCAL = "TH") => {
  return indexOfList({ arr: getDayList(LOCAL), code: value, key, name })
};


const getMonthData = (value = "", key = "value", name = "label", LOCAL = "TH") => {
  return indexOfList({ arr: getMonthList(LOCAL), code: value, key, name })
};

const getCurYearTH = () => {
  return new Date().getFullYear() > 2500
    ? new Date().getFullYear()
    : new Date().getFullYear() + 543;
};

/**
 * Custom Date Function
 * * ADD Date
 */
const addDays = (date, days = 1) => {
  const newDate = new Date(Number(date));
  newDate.setDate(date.getDate() + days);
  return newDate;
};

const diffInDays = (date1, date2) => {
    const diff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const formatDateAPI = ({
  date = "",
  type = true,
  regEx = true,
  regStr = "-",
  format = 0,
} = initData) => {
  /**
   * type Formate
   * dateForm => 2,from,f
   * dateTo => 3,to,t
   * not show time => 0,false formatDateTH
   * normal : true,1,"",undefine, unsent
   */
  try {
    if (NullString(date) === "") {
      return "";
    } else {
      let data = NullString(date) !== "" ? date : new Date();
      data = new Date(date);
      type = typeof type === "string" ? type.toUpperCase() : type;
      switch (type) {
        case 2:
        case "FROM":
        case "F":
          data = mainConvertDate(data, false, format) + " 00:00:00";
          break;
        case 3:
        case "TO":
        case "T":
          data = mainConvertDate(data, false, format) + " 23:59:59";
          break;
        case false:
        case 0:
        case "R":
          data = mainConvertDate(data, false, format);
          break;
        case 1:
        case true:
        case "RT":
        case "RTS":
        default:
          data = mainConvertDate(data, true, format);
      }

      if (["R", "RT", "RTS"].includes(type)) {
        regEx = false
      }

      if (regEx === false || type === "R") {
        data = data.replaceAll("-", "").replaceAll(":", "");
        if (type === "RTS") {
          data = data.replaceAll(" ", "");
        }
      } else {
        if (regStr !== "-") {
          data = data.replaceAll("-", regStr);
        }
      }
      return data;
    }
  } catch (e) {
    return date
  }
};

const formatDateTH = ({ date = "", type = false } = { ...initData, type: false }) => {
  if (date && NullString(date) !== "" && date !== "null") {
    let cur_date = new Date(date);
    let timezoneOffset = cur_date.getTimezoneOffset() / 60;
    cur_date.setHours(cur_date.getHours() - timezoneOffset);
    cur_date = cur_date.toISOString().replace("T", " ").replace("Z", "");

    let _data = cur_date.split(" ");
    let _inDay = _data[0].split("-");

    if (type === true) {
      return _inDay[2] + "/" + _inDay[1] + "/" + (parseInt(_inDay[0]) + 543) + " " + _data[1].substring(0, _data[1].indexOf("."));
    } else {
      return _inDay[2] + "/" + _inDay[1] + "/" + (parseInt(_inDay[0]) + 543);
    }
  }

  return date;
};

const formatDateTHSession = ({ date = "", type = false, format = 0 } = { ...initData, type: false }) => {
  if (date && NullString(date) !== "" && date !== "null") {
    let cur_date = new Date(date);
    let timezoneOffset = cur_date.getTimezoneOffset() / 60;
    cur_date.setHours(cur_date.getHours() - timezoneOffset);
    cur_date = cur_date.toISOString().replace("T", " ").replace("Z", "");

    let _data = cur_date.split(" ");
    let _inDay = _data[0].split("-");
    let newDate = ""
    if (format === 1) {
      newDate += (parseInt(_inDay[0]) + 543) + _inDay[1] + _inDay[2]
    } else {
      newDate += _inDay[1] + _inDay[2] + (parseInt(_inDay[0]) + 543)

    }
    if (type === true) {
      return newDate + " " + _data[1].substring(0, _data[1].indexOf("."));
    } else {
      return newDate;
    }

  }

  return date;
};


const formatDateInt = ({ date = "", type = false } = { ...initData, type: false }) => {
  let data = "";
  if (date !== undefined && date !== null) {
    if (type === true) {
      data = mainConvertDate(date, type).replaceAll("-", "").replaceAll(":", "");
    } else {
      data = mainConvertDate(date, type).replaceAll("-", "");
    }
  }
  return data;
};


module.exports = {
  configDateTH,
  getDayList,
  getMonthList,
  getYearList,
  getDayData,
  getMonthData,
  getCurYearTH,
  addDays,
  diffInDays,
  formatDateAPI,
  formatDateTH,
  formatDateTHSession,
  formatDateInt
}