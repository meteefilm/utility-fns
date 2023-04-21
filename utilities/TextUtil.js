
export const RandomText = (length = 10) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const NumberFormat = (value, float = true) => {
    let newData = value;
    if (value !== undefined && value !== "" && value !== null) {
        const numeral = require("numeral");
        if (float) {
            newData = numeral(newData).format("0,0.00");
        } else {
            newData = numeral(newData).format("0,0");
        }
    }

    return newData;
};

export const messagesWarning = (label="การทำรายการ") => { 
    return (
        <>
            <span>
                <b>กดปุ่มยืนยัน</b> เพื่อทำการยืนยัน{label}
            </span>
            <br />
            <span className="ml-2">
                หรือ <b>กดปุ่มยกเลิก</b> เพื่อยกเลิกการทำรายการ
            </span>
        </>
    )

}

export const getErrorMessage = (res) => {
    let dataList = res?.dataList || [];
    if (!dataList.length)
        return '';
    let data = dataList[0];
    return data?.statusMessage || '';
}
