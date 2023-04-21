export const onGetYearList = () => {
    let yearList = [{ value: "-1", label: '-กรุณาเลือก-' }];
    let year = new Date().getFullYear() + 543;
    for (let i = year; i > 2514; i--) {
        yearList.push({ value: i.toString(), label: i.toString() })
    }
    return yearList
};