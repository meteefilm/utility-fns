import CryptoJS from "crypto-js";

const KEY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

export const setSession = (keys = "", values = {}) => {
    let encrypt = CryptoJS.AES.encrypt(typeof values === "object" ? JSON.stringify(values) : values, KEY + keys);
    localStorage.setItem(keys, encrypt);
    return true;
};

export const getSession = (keys = "") => {
    try {
        let bytes = CryptoJS.AES.decrypt(localStorage.getItem(keys), KEY + keys);
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(plaintext);
    } catch (error) {
        let plaintext;
        let bytes;
        if (localStorage.getItem(keys) !== undefined && localStorage.getItem(keys) !== null ) {
            bytes = CryptoJS.AES.decrypt(localStorage.getItem(keys), KEY + keys);
            plaintext = bytes.toString(CryptoJS.enc.Utf8);
        }
        return plaintext;
    }
};

export const setEncrypt = (values = "" , keys = "") => {
    let encrypt = CryptoJS.AES.encrypt(typeof values === "object" ? JSON.stringify(values) : values, KEY + keys).toString();
    return encrypt;
};

export const getDecrypt = (values = "", keys = "") => {
    try{
        let bytes = CryptoJS.AES.decrypt(values, KEY + keys);
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(plaintext);
    }catch(error){
        let bytes = CryptoJS.AES.decrypt(values, KEY + keys);
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return plaintext;
    }
};

