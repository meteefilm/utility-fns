const { getMonthList, getDayList } = require("./DateUtil");

const CrontabData = {
    minute: (["*", ...Array(60).keys()].map(item => ({ value: "" + item, label: item }))),
    hour: (["*", ...Array(24).keys()].map(item => ({ value: "" + item, label: item }))),
    day: (["*", ...Array(31).keys()].map((item, i) => ({ value: i === 0 ? item : (item + 1) + "", label: i === 0 ? item : (item + 1) + "" }))),
    month: [{ value: '*', label: "*" }, ...getMonthList().map(item => ({ value: "" + item.value, label: "" + item.label }))],
    weekday: [{ value: '*', label: "*" }, ...getDayList().map(item => ({ value: "" + item.index, label: "" + item.label }))],
}

module.exports = { CrontabData }