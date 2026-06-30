"use strict";

const TH_DAY_NAMES = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
const TH_DAY_NAMES_SHORT = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
const TH_DAY_NAMES_MIN = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
const TH_MONTH_NAMES = [
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
];
const TH_MONTH_NAMES_SHORT = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

const EN_DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const EN_DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const EN_MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const EN_MONTH_NAMES_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LOCALE_DAY_NAMES = { th: TH_DAY_NAMES, TH: TH_DAY_NAMES, en: EN_DAY_NAMES, EN: EN_DAY_NAMES };
const LOCALE_MONTH_NAMES = { th: TH_MONTH_NAMES, TH: TH_MONTH_NAMES, en: EN_MONTH_NAMES, EN: EN_MONTH_NAMES };

const TH_CALENDAR_LOCALE = {
    firstDayOfWeek: 1,
    dayNames: TH_DAY_NAMES,
    dayNamesShort: TH_DAY_NAMES_SHORT,
    dayNamesMin: TH_DAY_NAMES_MIN,
    monthNames: TH_MONTH_NAMES,
    monthNamesShort: TH_MONTH_NAMES_SHORT,
    today: "วันนี้",
    clear: "ล้าง",
    dateFormat: "dd/mm/yy",
    weekHeader: "Wk",
};

module.exports = {
    TH_DAY_NAMES,
    TH_DAY_NAMES_SHORT,
    TH_DAY_NAMES_MIN,
    TH_MONTH_NAMES,
    TH_MONTH_NAMES_SHORT,
    EN_DAY_NAMES,
    EN_DAY_NAMES_SHORT,
    EN_MONTH_NAMES,
    EN_MONTH_NAMES_SHORT,
    LOCALE_DAY_NAMES,
    LOCALE_MONTH_NAMES,
    TH_CALENDAR_LOCALE,
};
