export const DeleteData = (selectList, dataList) => {
    for (let d = selectList.length - 1; d >= 0; d--) {
        dataList.splice(selectList[d].index, 1);
    }

    //setค่า index และ seq ใหม่
    for (var i = 0; i < dataList.length; ++i) {
        dataList[i].index = i;
        dataList[i].charge_seq = (i + 1);
    }
    return dataList
}