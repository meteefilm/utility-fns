"use strict";

const uuidFromRandomBytes = (bytes) => {
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const hex = Array.prototype.map.call(bytes, (byte) => byte.toString(16).padStart(2, "0"));
    return [
        hex.slice(0, 4).join(""),
        hex.slice(4, 6).join(""),
        hex.slice(6, 8).join(""),
        hex.slice(8, 10).join(""),
        hex.slice(10, 16).join(""),
    ].join("-");
};

const insecureRandomBytes = () => {
    const bytes = new Array(16);
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
    return bytes;
};

const generateUUIDClient = () => {
    const cryptoObj = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
    if (cryptoObj && typeof cryptoObj.randomUUID === "function") return cryptoObj.randomUUID();
    if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
        return uuidFromRandomBytes(cryptoObj.getRandomValues(new Uint8Array(16)));
    }
    return uuidFromRandomBytes(insecureRandomBytes());
};

const generateUUIDNode = () => {
    try {
        const crypto = require("crypto");
        if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
        if (crypto && typeof crypto.randomBytes === "function") return uuidFromRandomBytes(crypto.randomBytes(16));
    } catch (error) {
        return generateUUIDClient();
    }
    return generateUUIDClient();
};

const generateUUID = () => {
    const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
    return isNode ? generateUUIDNode() : generateUUIDClient();
};

module.exports = {
    generateUUID,
    generateUUIDClient,
    generateUUIDNode,
    uuid: generateUUID,
};
