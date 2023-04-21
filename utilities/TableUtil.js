import React from 'react';

export const currentPageReportTemplate = (text = 'TH') => {
    if (text === 'TH') {
        return "กำลังแสดง {first} ถึง {last} จากทั้งหมด {totalRecords} รายการ";
    } else {
        return "Showing {first} to {last} of {totalRecords} products";
    }
};

export const paginatorTemplate = (text = 'EN') => {
    return "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown";

};

export const rowsPerPageOptions = () => {
    return [5, 10, 25, 50, 100];

};

export const totalRecordsHeader = (total) => {
    return (
        <div style={{ textAlign: 'right', marginBottom: '-0.5rem', marginRight: '-0.5rem', marginTop: '0.5rem' }}>
            <span className="p-input-icon-left">
                รวมจำนวนทั้งสิ้น  <span style={{ color: 'red' }}>{total}</span> รายการ
            </span>
        </div>
    );
};

export const totalRecords = (total) => {
    return (
        <div style={{ textAlign: 'right', fontWeight: 'bold', marginBottom: "2px" }}>
            <span className="p-input-icon-left">
                รวมจำนวนทั้งสิ้น  <span style={{ color: 'red' }}>{total}</span> รายการ
            </span>
        </div>
    );
};