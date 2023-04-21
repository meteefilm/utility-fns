import React from 'react'
import { getLocal } from '../utils/Crypto';
import Tabs from "../components/Tabpanel/Tabs";
import "../components/Tabpanel/Tabs.css";
//FORM
import FormAccused from '../components/Form/FormAccused';
import FormAccuser from '../components/Form/FormAccuser';
import FormAccusedCIV from '../components/Form/FormAccusedCIV';
import FormComplainant from '../components/Form/FormComplainant';
import FormVictim from '../components/Form/FormVictim';
import FormExhibit from '../components/Form/FormExhibit';
import FormDueDate from '../components/Form/FormDueDate';
import FormProsecute from '../components/Form/FormProsecute';
import FormCompetance from '../components/Form/FormCompetance';
import FormInform from '../components/Form/FormInform';
import FormAttachFile from '../components/Form/FormAttachFile';
import FormTransfer from '../components/Form/FormTransfer';
import FormTransferCIV from '../components/Form/FormTransferCIV';
import FormSchedule from '../components/Form/FormSchedule';
import FormWitness from '../components/Form/FormWitness';
import FormInterpreter from '../components/Form/FormInterpreter';
import FormReferDocument from '../components/Form/FormReferDocument';
import FormAppointment from '../components/Form/FormAppointment';
import FormNote from '../components/Form/FormNote';
import FormLog from '../components/Form/FormLog';
import FormDeathPersonAction from '../components/Form/FormDeathPersonAction';
import FormThirdPerson from '../components/Form/FormThirdPerson';
import FormBailsman from '../components/Form/FormBailsman';
import FormLawyer from '../components/Form/FormLawyer';
import FormInspectionResult from '../components/Form/FormInspectionResult';
import FormThirdPersonCIV from '../components/Form/FormThirdPersonCIV';
import FormAffLawyer from '../components/Form/FormAffLawyer';
import LED02001 from '../pages/LED/LED02001/LED02001';

//Tab ข้อมูลแสดงตาม Login
export const tabAddCri = (formMainCase, dataTable, setDataTable, formObject, showMessages, activeIndex, setActiveIndex, action, page, onGetData) => {
    let tab = [];
    let location_hash = window.location.hash.substring(2)
    let location = location_hash.split("_")
    let role_tab = (getLocal("login") === undefined ? "" : getLocal("login").role.role_tab);

    if (tab.length === 0) {
        for (let i = 0; i < role_tab.length; i++) {
            if (location[0] === role_tab[i].code) {

                if (location[0] === "CRI10001" && role_tab[i].code === "CRI10001") {
                    if (role_tab[i].label != 'ของกลาง') {
                        tab.push(role_tab[i].label)
                    }
                } else {
                    tab.push(role_tab[i].label)
                }

            }
        }
        if (location[0] === "CRI13001") {
            tab.splice(3, 1)
        }

    }
    
    let tab_add = ["ข้อมูลสำนวนหลัก"]
    let tab_show = (action === 'add' ? tab_add : tab)

    try {
        return (
            <>

                <Tabs activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{ paddingTop: '5px' }}>
                    {tab_show.map((item) => {
                        switch (item) {
                            case 'ข้อมูลสำนวนหลัก':
                                return (
                                    <div label="ข้อมูลสำนวนหลัก" flag={formObject.generallc_id === 0 ? '0' : '1'} >
                                        {formMainCase()}
                                    </div>
                                );
                            case 'ข้อมูลผู้ตาย':
                                return (<div label="ข้อมูลผู้ตาย" flag={dataTable.gen_tr_deathperson_list.length === 0 || !dataTable.gen_tr_deathperson_list ? '0' : '1'}>
                                    <FormDeathPersonAction dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} page={page} dataGeneral={formObject} />
                                </div>
                                );
                            case 'ข้อมูลผู้ต้องหา':
                                return (<div label={formObject.generallc.lc_type === '105' || formObject.generallc.lc_type === '106' || formObject.generallc.lc_type === '107' || formObject.generallc.lc_type === '108' ||
                                    formObject.generallc.lc_type === '109' || formObject.generallc.lc_type === '120' || formObject.generallc.lc_type === '121' ? "ข้อมูลจำเลย" : "ข้อมูลผู้ต้องหา"}
                                    flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                    <FormAccused dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} onGetData={onGetData} />
                                </div>
                                );
                            case 'ข้อมูลผู้กล่าวหา':
                                return (
                                    <div label="ข้อมูลผู้กล่าวหา" flag={dataTable.gen_tr_accuser_list.length > 0 ? '1' : '0'}>
                                        <FormAccuser dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ข้อมูลผู้เสียหาย':
                                return (
                                    <div label="ข้อมูลผู้เสียหาย" flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CRI" />
                                    </div>
                                );
                            case 'ข้อมูลผู้ถูกกระทำ':
                                return (
                                    <div label="ข้อมูลผู้ถูกกระทำ" flag={dataTable.gen_tr_victim_list.length > 0 ? '1' : '0'}>
                                        <FormVictim dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บุคคลที่สาม':
                                return (
                                    <div label="บุคคลที่สาม" flag={dataTable.gen_tr_third_persond_list.length > 0 ? '1' : '0'}>
                                        <FormThirdPerson dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ของกลาง':
                                return (

                                    <div label="ของกลาง" flag={dataTable.gen_tr_exhibit_list.length > 0 ? '1' : '0'}>
                                        <FormExhibit dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );

                            default:
                                return (
                                    <div label="" flag="2" />
                                );
                        }
                    })}

                </Tabs>
            </>
        )
    }
    catch (err) { console.log('err', err) }

};

export const tabEditCri = (formMainCase, dataTable, setDataTable, formObject, showMessages, activeIndex, setActiveIndex, page, showSafetyCode, formCourtResult, onGetData) => {
    let tab = [];
    let location_hash = window.location.hash.substring(2)
    let location = location_hash.split("_")
    let role_tab = (getLocal("login") === undefined ? "" : getLocal("login").role.role_tab);
    if (tab.length === 0) {
        for (let i = 0; i < role_tab.length; i++) {
            if (location[0] === role_tab[i].code) {
                tab.push(role_tab[i].label)
            }
        }
    }

    try {
        return (
            <>
                <Tabs activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e)} style={{ paddingTop: '5px' }}>
                    {tab.map((item) => {
                        switch (item) {
                            case 'ข้อมูลสำนวนหลัก':
                                return (
                                    <div label="ข้อมูลสำนวนหลัก" flag='1'>
                                        {formMainCase()}
                                    </div>
                                );
                            case 'การพิจารณาคดี':
                                return (
                                    <div label="การพิจารณาคดี" flag={formObject.court_court_type_id === -1 ? "0" : "1"}>
                                        {formCourtResult()}
                                    </div>
                                );
                            case 'ข้อมูลผู้ตาย':
                                return (<div label="ข้อมูลผู้ตาย" flag={dataTable.gen_tr_deathperson_list.length > 0 ? '1' : '0'}>
                                    <FormDeathPersonAction dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} page={page} dataGeneral={formObject} />
                                </div>
                                );
                            case 'ข้อมูลผู้ต้องหา':
                                return (
                                    <div label={formObject.generallc.lc_type === '105' || formObject.generallc.lc_type === '106' || formObject.generallc.lc_type === '107' || formObject.generallc.lc_type === '108' ||
                                        formObject.generallc.lc_type === '109' || formObject.generallc.lc_type === '120' || formObject.generallc.lc_type === '121' ? "ข้อมูลจำเลย" : "ข้อมูลผู้ต้องหา"}
                                        flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                        <FormAccused dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CRI" onGetData={onGetData} />
                                    </div>
                                );
                            case 'ข้อมูลผู้กล่าวหา':
                                return (
                                    <div label="ข้อมูลผู้กล่าวหา" flag={dataTable.gen_tr_accuser_list.length > 0 ? '1' : '0'}>
                                        <FormAccuser dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ข้อมูลผู้เสียหาย':
                                return (
                                    <div label="ข้อมูลผู้เสียหาย" flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'นิติกร':
                                return (
                                    <div label="ข้อมูลนิติกร" flag={dataTable.gen_tr_lawyer_list.length > 0 ? '1' : '0'}>
                                        <FormAffLawyer dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'ข้อมูลผู้ถูกกระทำ':
                                return (
                                    <div label="ข้อมูลผู้ถูกกระทำ" flag={dataTable.gen_tr_victim_list.length > 0 ? '1' : '0'}>
                                        <FormVictim dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บุคคลที่สาม':
                                return (
                                    <div label="บุคคลที่สาม" flag={dataTable.gen_tr_third_persond_list.length > 0 ? '1' : '0'}>
                                        <FormThirdPerson dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ของกลาง':
                                return (
                                    <div label="ของกลาง" flag={dataTable.gen_tr_exhibit_list.length > 0 ? '1' : '0'}>
                                        <FormExhibit dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'วันนัด/ครบกำหนด':
                                return (
                                    <div label="วันนัด/ครบกำหนด" flag={dataTable.gen_tr_duedate_list.length > 0 ? '1' : '0'}>
                                        <FormDueDate dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} type="CRI" />
                                    </div>
                                );
                            case 'อัยการและการจัดการ':
                                return (
                                    <div label="อัยการและการจัดการ" flag={dataTable.gen_tr_prosecute_list.length > 0 ? '1' : '0'}>
                                        <FormProsecute dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ความเห็นผู้รับเสนอ':
                                return (
                                    <div label="ความเห็นผู้รับเสนอ" flag={dataTable.gen_tr_competance_list.length > 0 ? '1' : '0'}>
                                        <FormCompetance dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'หนังสือเข้า/ออก':
                                return (
                                    <div label="หนังสือเข้า/ออก" flag={dataTable.gen_tr_inform_list.length > 0 ? '1' : '0'}>
                                        <FormInform dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ไฟล์เอกสารแนบ':
                                return (
                                    <div label="ไฟล์เอกสารแนบ" flag={dataTable.gen_tr_attachfile_list.length > 0 ? '1' : '0'}>
                                        <FormAttachFile dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showSafetyCode={showSafetyCode} showMessages={showMessages} onGetData={onGetData} />
                                    </div>
                                );
                            case 'โอนสำนวน':
                                return (
                                    <div label="โอนสำนวน" flag={dataTable.gen_tr_transfer_list.length > 0 ? '1' : '0'}>
                                        <FormTransfer dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'แผนงาน':
                                return (
                                    <div label="แผนงาน" flag={dataTable.caht_schedule_list[0].due_date !== null || dataTable.caht_schedule_list[1].due_date !== null ||
                                        dataTable.caht_schedule_list[2].due_date !== null || dataTable.caht_schedule_list[3].due_date !== null ||
                                        dataTable.caht_schedule_list[4].due_date !== null || dataTable.caht_schedule_list[5].due_date !== null ||
                                        dataTable.caht_schedule_list[6].due_date !== null ? '1' : '0'}>
                                        <FormSchedule dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บัญชีพยาน':
                                return (
                                    <div label="บัญชีพยาน" flag={dataTable.caht_tr_witness_list.length > 0 || dataTable.caht_tr_evidence_list.length > 0 ? '1' : '0'}>
                                        <FormWitness dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บัญชีล่าม':
                                return (
                                    <div label="บัญชีล่าม" flag={dataTable.caht_tr_interpreter_list.length === 0 || !dataTable.caht_tr_interpreter_list ? '0' : '1'}>
                                        <FormInterpreter dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'เอกสารเกี่ยวข้องกับคดี':
                                return (
                                    <div label="เอกสารเกี่ยวข้องกับคดี" flag={dataTable.caht_tr_refer_documen_list.length === 0 || !dataTable.caht_tr_refer_documen_list ? '0' : '1'}>
                                        <FormReferDocument dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'นัดหมาย':
                                return (
                                    <div label="นัดหมาย" flag={(dataTable.caht_tr_appointment_list.caht_tr_appointment_A_list.length > 0 || dataTable.caht_tr_appointment_list.caht_tr_appointment_C_list.length > 0 ? '1' : '0')}>
                                        <FormAppointment dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'บันทึกเพิ่มเติม':
                                return (
                                    <div label="บันทึกเพิ่มเติม" flag={dataTable.caht_tr_note_list.length === 0 || !dataTable.caht_tr_note_list ? '0' : '1'}>
                                        <FormNote dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'ประวัติการเปลี่ยนแปลง':
                                return (
                                    <div label="ประวัติการเปลี่ยนแปลง" flag={dataTable.caht_tr_history_log_list.length === 0 || !dataTable.caht_tr_history_log_list ? '0' : '1'}>
                                        <FormLog dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            default:
                                return (
                                    <div label="" flag="2" />
                                );
                        }
                    })}
                </Tabs>
            </>
        )
    }
    catch (err) { console.log('err', err) }


};

export const tabAddCiv = (formMainCase, dataTable, setDataTable, formObject, showMessages, activeIndex, setActiveIndex, action) => {
    let tab = [];
    let location_hash = window.location.hash.substring(2)
    let location = location_hash.split("_")
    let role_tab = (getLocal("login") === undefined ? "" : getLocal("login").role.role_tab);
    if (tab.length === 0) {
        for (let i = 0; i < role_tab.length; i++) {
            if (location[0] === role_tab[i].code) {
                tab.push(role_tab[i].label)
            }
        }
    }

    let tab_add = ["ข้อมูลสำนวนหลัก"]
    let tab_show = (action === 'add' ? tab_add : tab)

    try {
        return (
            <>
                <Tabs activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{ paddingTop: '5px' }}>
                    {tab_show.map((item) => {
                        switch (item) {
                            case 'ข้อมูลสำนวนหลัก':
                                return (
                                    <div label="ข้อมูลสำนวนหลัก" flag={formObject.generallc_id === 0 ? '0' : '1'} >
                                        {formMainCase()}
                                    </div>
                                );
                            case 'โจทก์':
                                return (
                                    <div label={formObject.generallc.lc_type === "202" ? "ตัวความ" : "โจทก์"} flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CIV" />
                                    </div>
                                );
                            case 'จำเลย':
                                return (
                                    <div label={formObject.generallc.lc_type === "202" ? "คู่กรณี" : "จำเลย"} flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                        <FormAccusedCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ผู้ฟ้องคดี':
                                return (
                                    <div label="ผู้ฟ้องคดี" flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CIV" />
                                    </div>
                                );

                            case 'ผู้ถูกฟ้องคดี':
                                return (
                                    <div label="ผู้ถูกฟ้องคดี" flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                        <FormAccusedCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บุคคลที่สาม':
                                return (
                                    <div label="บุคคลที่สาม" flag={dataTable.gen_tr_third_persond_list.length > 0 ? '1' : '0'}>
                                        <FormThirdPersonCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            default:
                                return (
                                    <div label="" flag="2" />
                                );
                        }
                    })}
                </Tabs>
            </>
        )
    }
    catch (err) { console.log('err', err) }

};

export const tabEditCiv = (formMainCase, dataTable, setDataTable, formObject, showMessages, activeIndex, setActiveIndex, formCourtResult, formComment) => {
    let tab = [];
    let location_hash = window.location.hash.substring(2)
    let location = location_hash.split("_")
    let role_tab = (getLocal("login") === undefined ? "" : getLocal("login").role.role_tab);

    if (tab.length === 0) {
        for (let i = 0; i < role_tab.length; i++) {
            if (location[0] === role_tab[i].code) {
                tab.push(role_tab[i].label)
            }
        }
    }
    try {
        return (
            <>
                <Tabs activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{ paddingTop: '5px' }}>
                    {tab.map((item) => {

                        switch (item) {
                            case 'ข้อมูลสำนวนหลัก':
                                return (
                                    <div label="ข้อมูลสำนวนหลัก" flag="1">
                                        {formMainCase()}
                                    </div>

                                );
                            case 'การพิจารณาคดี':
                                return (
                                    <div label="การพิจารณาคดี" flag={formObject.court_court_type_id === -1 ? "0" : "1"}>
                                        {formCourtResult()}
                                    </div>
                                );
                            case 'ความเห็นคณะกรรมการ':
                                return (
                                    <div label="ความเห็นคณะกรรมการ" flag={formObject.minister_perceive_date === null ? "0" : "1"}>
                                        {formComment()}
                                    </div>
                                );
                            case 'โจทก์':
                                return (
                                    <div label={formObject.generallc.lc_type === "202" ? "ตัวความ" : "โจทก์"} flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CIV" />
                                    </div>
                                );

                            case 'จำเลย':
                                return (
                                    <div label={formObject.generallc.lc_type === "202" ? "คู่กรณี" : "จำเลย"} flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                        <FormAccusedCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ผู้ฟ้องคดี':
                                return (
                                    <div label="ผู้ฟ้องคดี" flag={dataTable.gen_tr_complainant_list.length > 0 ? '1' : '0'}>
                                        <FormComplainant dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} type="CIV" />
                                    </div>
                                );

                            case 'ผู้ถูกฟ้องคดี':
                                return (
                                    <div label="ผู้ถูกฟ้องคดี" flag={dataTable.gen_tr_accused_list.length > 0 ? '1' : '0'}>
                                        <FormAccusedCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'บุคคลที่สาม':
                                return (
                                    <div label="บุคคลที่สาม" flag={dataTable.gen_tr_third_persond_list.length > 0 ? '1' : '0'}>
                                        <FormThirdPersonCIV dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ผู้ประกัน':
                                return (
                                    <div label="ผู้ประกัน" flag={dataTable.gen_tr_bailsman_list.length > 0 ? '1' : '0'}>
                                        <FormBailsman dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'อัยการและการจัดการ':
                                return (
                                    <div label="อัยการและการจัดการ" flag={dataTable.gen_tr_prosecute_list.length > 0 ? '1' : '0'}>
                                        <FormProsecute dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'เจ้าหน้าที่บังคับคดีและการจัดการ':
                                return (
                                    <div label="เจ้าหน้าที่บังคับคดีและการจัดการ" flag={dataTable.gen_tr_lawyere_list.length > 0 ? '1' : '0'}>
                                        <FormLawyer dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'วันครบกำหนด':
                                return (
                                    <div label="วันครบกำหนด" flag={dataTable.gen_tr_duedate_list.length > 0 ? '1' : '0'}>
                                        <FormDueDate dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} type="CIV" />
                                    </div>
                                );
                            case 'ความเห็นผู้รับเสนอ':
                                return (
                                    <div label="ความเห็นผู้รับเสนอ" flag={dataTable.gen_tr_competance_list.length > 0 ? '1' : '0'}>
                                        <FormCompetance dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'หนังสือเข้า/ออก':
                                return (
                                    <div label="หนังสือเข้า/ออก" flag={dataTable.gen_tr_inform_list.length > 0 ? '1' : '0'}>
                                        <FormInform dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ไฟล์เอกสารแนบ':
                                return (
                                    <div label="ไฟล์เอกสารแนบ" flag={dataTable.gen_tr_attachfile_list.length > 0 ? '1' : '0'}>
                                        <FormAttachFile dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'โอนสำนวน':
                                return (
                                    <div label="โอนสำนวน" flag={dataTable.gen_tr_transfer_list.length > 0 ? '1' : '0'}>
                                        <FormTransferCIV dataTable={dataTable} setDataTable={setDataTable} showMessages={showMessages} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'ผลการตรวจสอบทรัพย์สิน':
                                return (
                                    <div label="ผลการตรวจสอบทรัพย์สิน" flag={dataTable.gen_tr_inspection_result_list.length > 0 ? '1' : '0'}>
                                        <FormInspectionResult dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} />
                                    </div>
                                );
                            case 'นัดหมาย':
                                return (
                                    <div label="นัดหมาย" flag={(dataTable.caht_tr_appointment_list.caht_tr_appointment_A_list.length > 0 || dataTable.caht_tr_appointment_list.caht_tr_appointment_C_list.length > 0 ? '1' : '0')}>
                                        <FormAppointment dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            case 'การรับชำระหนี้':
                                return (
                                    <div label="การรับชำระหนี้" flag={dataTable.led02_list.length > 0 ? '1' : '0'}>
                                        <LED02001 dataTable={dataTable} setDataTable={setDataTable} dataGeneral={formObject} showMessages={showMessages} />
                                    </div>
                                );
                            default:
                                return (
                                    <div label="" flag="2" />
                                );
                        }
                    })}
                </Tabs>
            </>
        )
    }
    catch (err) { console.log('err', err) }

};