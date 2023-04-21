import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatDateTH_full, formatDateTH_full2 } from './DateUtil';

var d = new Date();
d.setFullYear(2564);

export const setTopMarginOfCellForVerticalCentering = (ri, node) => {
    const cellHeights = node.table.body[ri].map(cell => {
        if (cell._inlines && cell._inlines.length) {
            alert('height :' + cell._inlines[0].height);
            return cell._inlines[0].height
        } else if (cell.stack) {
            alert('height 2 :' + cell.stack[0]._inlines[0].height + '*' + cell.stack.length);
            return cell.stack[0]._inlines[0].height * cell.stack.length
        }
        return null
    })

    const maxRowHeight = Math.max(...cellHeights)
    node.table.body[ri].forEach((cell, ci) => {
        if (cellHeights[ci] && maxRowHeight > cellHeights[ci]) {
            let topMargin = (maxRowHeight - cellHeights[ci]) / 2
            if (cell._margin) {
                cell._margin[1] = topMargin
            } else {
                cell._margin = [0, topMargin, 0, 0]
            }
        }
    })

    return 2
}

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    AngsanaNew: {
        normal: "ANGSA.ttf",
        bold: "angsab.ttf",
        italics: "ANGSAI.ttf",
        bolditalics: "AngsanaNewBoldItalic.ttf"
    },
    THSarabunNew: {
        normal: "THSarabunNew.ttf",
        bold: "THSarabunNew-Bold.ttf",
        italics: "THSarabunNew-Italic.ttf",
        bolditalics: "THSarabunNew-BoldItalic.ttf"
    },
    Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf"
    }
};


export const generateHead_ADM05 = (searchData) => {

    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานจัดการสิทธิผู้ใช้งานระบบ",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.create_dtm_from, false) + " ถึง " + formatDateTH_full2(searchData.create_dtm_to, false),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        widths: ['4%', '12%', '20%', '12%', '24%', '20%', '8%'],
                        body: [
                            [
                                {
                                    text: 'ลำดับ',
                                    style: styleFont,
                                },
                                {
                                    text: 'วันเวลาลงทะเบียน',
                                    style: styleFont,
                                },
                                {
                                    text: 'ชื่อ-สกุล',
                                    style: styleFont,
                                },
                                {
                                    text: 'เลขประจำตัวประชาชน',
                                    style: styleFont,
                                },
                                {
                                    text: 'ชื่อผู้ใช้งาน',
                                    style: styleFont,
                                },
                                {
                                    text: 'ประเภทการลงทะเบียน',
                                    style: styleFont,
                                },
                                {
                                    text: 'สถานะ',
                                    style: styleFont,
                                }
                            ]
                        ]
                    }, layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },

                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        }

                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_ADM10 = () => {
    let style_header = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูลเจ้าของแปลงที่ดิน (เผยแพร่)",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: "รายงาน ณ " + formatDateTH_full2(new Date(), true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },

        {
            columns: [
                {
                    table: {
                        styles: { style_header },
                        widths: ['4%', '9%', '9%', '21%', '12%', '12%', '12%', '12%', '9%'],
                        body: [
                            [
                                {
                                    text: 'ลำดับ',
                                    style: style_header,
                                },
                                {
                                    text: 'วันที่เริ่มต้น',
                                    style: style_header,
                                },
                                {
                                    text: 'วันที่สิ้นสุด',
                                    style: style_header,
                                },
                                {
                                    text: 'สำนักงานที่ดิน',
                                    style: style_header,
                                },
                                {
                                    text: 'จังหวัด',
                                    style: style_header,
                                },
                                {
                                    text: 'อำเภอ',
                                    style: style_header,
                                },
                                {
                                    text: 'เลขโฉนดที่ดิน',
                                    style: style_header,
                                },
                                {
                                    text: 'ชื่อผู้ติดต่อ',
                                    style: style_header,
                                },
                                {
                                    text: 'เบอร์ติดต่อ',
                                    style: style_header,
                                },

                            ]
                        ]
                    }, layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },

                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        }

                    },
                    style: "tableExample",
                }

            ]
        },
    ];

}

export const generateHead_ADM11 = () => {
    let style_header = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานโครงการจัดสรรและอาคารชุด",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: "รายงาน ณ " + formatDateTH_full2(new Date(), true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },

        {
            columns: [
                {
                    widths: ['*'],
                    style: "tableExample",
                    table: {
                        styles: { style_header },
                        widths: ['4%', '23%', '23%', '12%', '10%', '14%', '14%'],
                        body: [
                            [
                                {
                                    text: 'ลำดับ',
                                    style: style_header,
                                },
                                {
                                    text: 'สำนักงานที่ดิน',
                                    style: style_header,
                                },
                                {
                                    text: 'ชื่อโครงการ',
                                    style: style_header,
                                },
                                {
                                    text: 'ใบอนุญาตเลขที่',
                                    style: style_header,
                                },
                                {
                                    text: 'ออกวันที่',
                                    style: style_header,
                                },
                                {
                                    text: 'ชื่อผู้จัดสรร',
                                    style: style_header,
                                },
                                {
                                    text: 'ทะเบียนนิติบุคคล',
                                    style: style_header,
                                },

                            ]
                        ]
                    }, layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },

                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        }

                    },
                    style: "tableExample",
                }

            ]
        },
    ];

}

export const generateHead_ADM12 = (searchData) => {

    let style_header = { alignment: "center", fontSize: 12 }

    return [
        {
            text: "รายงานตรวจสอบประวัติ OTP",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.otp_dtm, false) + " ถึง " + formatDateTH_full2(searchData.otp_expire, false),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            table: {
                widths: ['4%', '12%', '12%', '20%', '20%', '20%', '12%'],
                body: [
                    [{
                        text: 'ลำดับ',
                        style: style_header,
                    },
                    {
                        text: 'วันเวลาสร้าง OTP',
                        style: style_header,
                    },
                    {
                        text: 'วันเวลาหมดอายุ OTP',
                        style: style_header,
                    },
                    {
                        text: 'REF CODE',
                        style: style_header,
                    },
                    {
                        text: 'OTP',
                        style: style_header,
                    },
                    {
                        text: 'EMAIL',
                        style: style_header,
                    },
                    {
                        text: 'สถานะยืนยันตัวตน',
                        style: style_header,
                    },
                    ]
                ]
            }, layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                    return rowIndex < 2 ? "#CCCCCC" : null;
                },

                hLineWidth: function (i, node) {
                    return 0.25;
                },
                vLineWidth: function (i, node) {
                    return 0.25;
                }
            },
        },
    ];

}

export const generateHead_ADM13 = (searchData) => {
    let style_header = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานตรวจสอบประวัติการใช้งานระบบ",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.date_from, true) + " ถึง " + formatDateTH_full2(searchData.date_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    widths: ['*'],
                    style: "tableExample",
                    table: {
                        styles: { style_header },
                        widths: ['3.5%', '6.5%', '9%', '10%', '10%', '10%', '10%', '10%', '10%', '6.5%', '6.5%', '6%', '5.5%'],
                        body: [
                            [
                                {
                                    text: 'ลำดับ',
                                    style: style_header,
                                },
                                {
                                    text: 'วันเวลา' + "\n" + 'ประวัติ',
                                    style: style_header,
                                },
                                {
                                    text: 'IP Address',
                                    style: style_header,
                                },
                                {
                                    text: 'ผู้ใช้งาน',
                                    style: style_header,
                                },
                                {
                                    text: 'ชื่อระบบ',
                                    style: style_header,
                                },
                                {
                                    text: 'ชื่อ Service',
                                    style: style_header,
                                },
                                {
                                    text: 'รายละเอียด Log',
                                    style: style_header,
                                },
                                {
                                    text: 'สำนักงานที่ดิน',
                                    style: style_header,
                                },
                                {
                                    text: 'หน่วยงาน',
                                    style: style_header,
                                },
                                {
                                    text: 'วันเวลา Request',
                                    style: style_header,
                                },
                                {
                                    text: 'วันเวลา Response',
                                    style: style_header,
                                },
                                {
                                    text: 'ขนาดข้อมูล' + "\n" + '(byte)',
                                    style: style_header,
                                },
                                {
                                    text: 'สถานะ',
                                    style: style_header,
                                },
                            ]
                        ]
                    }, layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingRight: function (i, node) {
                            return 6;
                        },

                    },
                }

            ]
        },
    ];

}

export const generateHead_ADM14 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานตรวจสอบประวัติการใช้งานตาม Function ระบบงาน",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.date_from, true) + " ถึง " + formatDateTH_full2(searchData.date_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '10%', '11%', '16%', '20%', '20%', '22%'],
                        body: [
                            [
                                {
                                    text: 'ลำดับ',
                                    style: styleFont,
                                },
                                {
                                    text: 'วันเวลาประวัติ',
                                    style: styleFont,
                                },
                                {
                                    text: 'IP Address',
                                    style: styleFont,
                                },
                                {
                                    text: 'ผู้ใช้งาน',
                                    style: styleFont,
                                },
                                {
                                    text: 'ระบบ',
                                    style: styleFont,
                                },
                                {
                                    text: 'Function',
                                    style: styleFont,
                                },
                                {
                                    text: 'Log Desc',
                                    style: styleFont,
                                },

                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;

                        },
                    },
                    // style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_DBT06 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานสรุปการถ่ายโอนข้อมูล",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.start_date, false) + " ถึง " + formatDateTH_full2(searchData.end_date, false),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        // widths: [25, 80, 80, 120, 180, 110, 110],
                        widths: ['4%', '6%', '6%', '6%', '6%', '5%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '7%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วัน เวลา' + "\n" + 'เริ่มต้น',
                                style: styleFont,
                            },
                            {
                                text: 'วัน เวลา' + "\n" + 'สิ้นสุด',
                                style: styleFont,
                            },

                            {
                                text: 'แหล่งข้อมูล',
                                style: styleFont,
                            },
                            {
                                text: 'กลุ่มตาราง',
                                style: styleFont,
                            },
                            {
                                text: 'ลำดับการทำงาน',
                                style: styleFont,
                            },
                            {
                                text: 'แหล่งข้อมูลต้นทาง',
                                style: styleFont,
                            },
                            {
                                text: 'Schema ต้นทาง',
                                style: styleFont,
                            },
                            {
                                text: 'ตาราง' + "\n" + 'ต้นทาง',
                                style: styleFont,
                            },
                            {
                                text: 'แหล่งข้อมูล' + "\n" + 'ปลายทาง',
                                style: styleFont,
                            },
                            {
                                text: 'Schema ปลายทาง',
                                style: styleFont,
                            },
                            {
                                text: 'ตาราง' + "\n" + 'ปลายทาง',
                                style: styleFont,
                            },
                            {
                                text: 'Schedule Mode',
                                style: styleFont,
                            },
                            {
                                text: 'จำนวน' + "\n" + 'ข้อมูล',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะการ' + "\n" + 'ถ่ายโอน',
                                style: styleFont,
                            },
                            {
                                text: 'ข้อผิดพลาด',
                                style: styleFont,
                            },
                            {
                                text: 'Log Path',
                                style: styleFont,
                            },

                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingLeft: function (i, node) {
                            return 3.5;
                        },
                        paddingRight: function (i, node) {
                            return 3.5;
                        },

                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_LMS04 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูลการใช้งานโปรเเกรมประยุกต์",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        // widths: [25, 80, 80, 120, 180, 110, 110],
                        widths: ['4%', '11%', '25%', '10%', '10%', '11%', '11%', '10%', '11%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลาใช้งาน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อโปรแกรม',
                                style: styleFont,
                            },
                            {
                                text: 'IP Address Client',
                                style: styleFont,
                            },
                            {
                                text: 'IP Address Host',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา response',
                                style: styleFont,
                            },
                            {
                                text: 'Reponse Time(s)',
                                style: styleFont,
                            },
                            {
                                text: 'ผู้ใช้งาน',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingLeft: function (i, node) {
                            return 3.5;
                        },
                        paddingRight: function (i, node) {
                            return 3.5;
                        },

                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_LMS05 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานแสดงปริมาณการใช้งานของ API ตามผู้ขอใช้บริการ",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, false) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, false),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4.5%', '11%', '14%', '14%', '14%', '14%', '14%', '16%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันที่',
                                style: styleFont,
                            },
                            {
                                text: 'ผู้เข้าใช้บริการ (ราย)',
                                style: styleFont,
                            },
                            {
                                text: 'ค้นหาจาก เลขที่โฉนด (ครั้ง)',
                                style: styleFont,
                            },
                            {
                                text: 'ค้นหาจาก Double Click (ครั้ง)',
                                style: styleFont,
                            },
                            {
                                text: 'ค้นหาจาก StreetView (ครั้ง)',
                                style: styleFont,
                            },
                            {
                                text: 'ค้นหาจาก สถานที่สำคัญ (ครั้ง)',
                                style: styleFont,
                            },
                            {
                                text: 'ค้นหาจาก ตำแหน่งปัจจุบัน (ครั้ง)',
                                style: styleFont,
                            }]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },

                    },
                }

            ]
        },

    ];

}

export const generateHead_DEX02 = () => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานกำหนดข้อมูลการให้บริการ",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: "รายงาน ณ " + formatDateTH_full2(new Date(), true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '23%', '10%', '23%', '10%', '8%', '8%', '8%', '8%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'Service Name',
                                style: styleFont,
                            },
                            {
                                text: 'Protocal',
                                style: styleFont,
                            },
                            {
                                text: 'Path',
                                style: styleFont,
                            },
                            {
                                text: 'Parameter',
                                style: styleFont,
                            },
                            {
                                text: 'Method',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภท Service',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภทข้อมูล',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        // paddingLeft: function (i, node) {
                        //     return 3.5;
                        // },
                        // paddingRight: function (i, node) {
                        //     return 3.5;
                        // },

                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_DEX03 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานตรวจสอบประวัติแลกเปลี่ยนข้อมูล",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '7%', '8%', '16%', '12%', '11%', '7%', '7%', '7%', '7%', '7%', '7%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'หน่วยงานแลกเปลี่ยน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ Service',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภท Service',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา response',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะติดต่อ',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            {
                                text: 'ขนาดข้อมูล' + '\n' + '(byte)',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภท' + '\n' + 'แลกเปลี่ยน',
                                style: styleFont,
                            }
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        // paddingLeft: function (i, node) {
                        //     return 3.5;
                        // },
                        paddingRight: function (i, node) {
                            return 6;
                        },

                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS01 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูล Log การแลกเปลี่ยนข้อมูล",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['3.5%', '8%', '10%', '21%', '17%', '8%', '8%', '7%', '7%', '7%', '7%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'หน่วยงานแลกเปลี่ยน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ Service',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา response',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะติดต่อ',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            {
                                text: 'ขนาดข้อมูล' + '\n' + '(byte)',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภท' + '\n' + 'แลกเปลี่ยน',
                                style: styleFont,
                            },

                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingRight: function (i, node) {
                            return 10;
                        },
                    },
                }

            ]
        },

    ];

}

export const generateHead_SCS02 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูล Log ถ่ายโอนข้อมูล",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '9%', '10%', '12%', '14%', '12%', '12%', '12%', '11%', '7%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'เลขประจำตัวประชาชน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ-นามสกุลผู้ใช้งาน',
                                style: styleFont,
                            },
                            {
                                text: 'แหล่งข้อมูล',
                                style: styleFont,
                            },
                            {
                                text: 'กลุ่มตาราง',
                                style: styleFont,
                            },
                            {
                                text: 'แหล่งข้อมูลต้นทาง',
                                style: styleFont,
                            },
                            {
                                text: 'แหล่งข้อมูลปลายทาง',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS03 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูล Log Service",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '8%', '9%', '16%', '14%', '9%', '8%', '8%', '6%', '9%', '6%', '6%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'เลขประจำตัว' + '\n' + 'ประชาชน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ-นามสกุลผู้ใช้งาน',
                                style: styleFont,
                            },
                            {
                                text: 'หน่วยงาน',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา response',
                                style: styleFont,
                            },
                            {
                                text: 'Method',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ Service',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            {
                                text: 'ขนาดข้อมูล' + '\n' + '(byte)',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS04 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานข้อมูล Log Function",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '11%', '8%', '18%', '19%', '19%', '24%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อผู้ใช้งาน',
                                style: styleFont,
                            },
                            {
                                text: 'ระบบ',
                                style: styleFont,
                            },
                            {
                                text: 'Function',
                                style: styleFont,
                            },
                            {
                                text: 'Function Desc',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS05 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานปริมาณข้อมูลการเข้าใช้งาน ระบบแลกเปลี่ยน",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '9%', '10%', '19%', '14.5%', '9%', '9%', '9%', '6.5%', '6%', '7%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'จัดเก็บประวัติ',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'หน่วยงาน',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อ Service',
                                style: styleFont,
                            },

                            {
                                text: 'วันเวลา' + '\n' + 'request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา' + '\n' + 'response',
                                style: styleFont,
                            },
                            {
                                text: 'ประเภท Service',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะติดต่อ',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            {
                                text: 'ขนาดข้อมูล' + '\n' + '(byte)',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingRight: function (i, node) {
                            return 7;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS15 = (searchData) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานปริมาณข้อมูลการเข้าใช้งาน ระบบ LandsMaps",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: formatDateTH_full2(searchData.request_dtm_from, true) + " ถึง " + formatDateTH_full2(searchData.request_dtm_to, true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '11%', '12%', '32.5%', '32.5%', '10%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันที่ Request',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'ระบบ',
                                style: styleFont,
                            },
                            {
                                text: 'Function',
                                style: styleFont,
                            },
                            {
                                text: 'จำนวนการใช้งาน',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

export const generateHead_SCS15_Detail = (data) => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงานปริมาณข้อมูลการเข้าใช้งาน ระบบ LandsMaps รายละเอียดหมายเลขเครื่อง " + data.ip_address,
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: "รายงาน ณ " + formatDateTH_full2(new Date(), true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '10%', '10%', '13%', '13%', '13%', '15%', '12%', '6.5%', '6.5%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา Request',
                                style: styleFont,
                            }, {
                                text: 'วันเวลา Response',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อผู้ใช้งาน',
                                style: styleFont,
                            },
                            {
                                text: 'ระบบ',
                                style: styleFont,
                            },
                            {
                                text: 'Function',
                                style: styleFont,
                            }, {
                                text: 'Function Desc',
                                style: styleFont,
                            },
                            {
                                text: 'สำงานที่ดิน',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะติดต่อ',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                        paddingRight: function (i, node) {
                            return 6;
                        },
                    },
                }

            ]
        },

    ];

}

export const generateHead_SCS16 = () => {
    let styleFont = { alignment: "center", fontSize: 12 }
    return [
        {
            text: "รายงาน Monitor Response Time",
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            text: "รายงาน ณ " + formatDateTH_full2(new Date(), true),
            style: { alignment: "center", fontSize: 14, bold: true }
        },
        {
            columns: [
                {
                    table: {
                        headerRows: 1,
                        widths: ['4%', '15%', '9%', '9%', '9%', '9%', '7%', '28%', '13%'],
                        body: [
                            [{
                                text: 'ลำดับ',
                                style: styleFont,
                            },
                            {
                                text: 'ชื่อโปรแกรม',
                                style: styleFont,
                            },
                            {
                                text: 'หมายเลขเครื่อง',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา request',
                                style: styleFont,
                            },
                            {
                                text: 'วันเวลา response',
                                style: styleFont,
                            },
                            {
                                text: 'Response Time(s)',
                                style: styleFont,
                            },
                            {
                                text: 'สถานะ',
                                style: styleFont,
                            },
                            {
                                text: 'ที่อยู่ Service',
                                style: styleFont,
                            },
                            {
                                text: 'รายละเอียด',
                                style: styleFont,
                            },
                            ]
                        ],

                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return rowIndex < 2 ? "#CCCCCC" : null;
                        },
                        hLineWidth: function (i, node) {
                            return 0.25;
                        },
                        vLineWidth: function (i, node) {
                            return 0.25;
                        },
                    },
                    style: "tableExample",
                }

            ]
        },

    ];

}

const INITIAL_PDF_MAKER = (head) => {

    return {

        defaultStyle: {
            font: "THSarabunNew",
            // alignment: "justify",

        }

        , footer: (currentPage, pageCount) => {
            return [
                {
                    columns: [
                        // {
                        //     text: "",
                        //     alignment: "right",
                        //     margin: [0, 0, 0, 0]
                        // },
                        {
                            text: "หน้า " + currentPage.toString() + "/" + pageCount,
                            // alignment: "center",
                            alignment: "right",
                            margin: [50, 0, 50, 0],
                            // style: 'subheader',
                            fontSize: 14,
                        },
                    ]
                }
            ];
        },

        content: [{}],
    }
}

// add style here....
// simple how to use
// style: 'header' OR style: ['quote', 'small']
export const styles = {
    header: {
        fontSize: 20,
        bold: true
    },
    subheader: {
        fontSize: 18,
        bold: true
    },
    text: {
        fontSize: 16,
        bold: true
    },
    quote: {
        italics: true
    },
    small: {
        fontSize: 8
    }
}

export const generatePdf = (head, content, callback) => {
    let config_header = INITIAL_PDF_MAKER(head);
    let object = {
        ...config_header,
        ...content,
    }
    const obj = pdfMake.createPdf(object);
    obj.getDataUrl(data => callback(data));
}