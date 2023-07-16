/** Null **/
const NullUtil = require('./src/NullUtil');
exports.NullInt = NullUtil.NullInt;
exports.NullPicture = NullUtil.NullPicture;
exports.NullSelect = NullUtil.NullSelect;
exports.NullString = NullUtil.NullString;
exports.ZeroToNull = NullUtil.ZeroToNull;
exports.NullToPoint = NullUtil.NullToPoint;

/** Array **/
const ArrayListUtil = require('./src/ArrayListUtil');
module.exports.indexOfMax = ArrayListUtil.indexOfMax;
module.exports.indexOfList = ArrayListUtil.indexOfList;
module.exports.objectOfList = ArrayListUtil.objectOfList;
module.exports.sortIndexOfList = ArrayListUtil.sortIndexOfList;
module.exports.dnsList = ArrayListUtil.dnsList;

/** Replace **/
const ReplaceUtil = require('./src/ReplaceUtil');
module.exports.replaceDataToKey = ReplaceUtil.replaceDataToKey;
module.exports.replaceNoENtoTH = ReplaceUtil.replaceNoENtoTH;
module.exports.replaceNull = ReplaceUtil.replaceNull;

/** Replace **/
const TextUtil = require('./src/TextUtil');
module.exports.NumberFormat = TextUtil.NumberFormat;
module.exports.RandomText = TextUtil.RandomText;

/** ValidateUtil **/
const ValidateUtil = require('./src/ValidateUtil');
module.exports.validateDateSF = ValidateUtil.validateDateSF;
module.exports.validateCitizenId = ValidateUtil.validateCitizenId;


/** storeUtil **/
const storeUtil = require('./src/storeUtil');
module.exports.storeCDI = storeUtil.storeCDI;
module.exports.storeCDL = storeUtil.storeCDL;
module.exports.storeCDO = storeUtil.storeCDO;
module.exports.storeFT = storeUtil.storeFT;
module.exports.storeSBR = storeUtil.storeSBR;
module.exports.storeSDD = storeUtil.storeSDD;
module.exports.storeSDL = storeUtil.storeSDL;
module.exports.storeSDO = storeUtil.storeSDO;

/** storeUtil **/
const DateUtil = require('./src/DateUtil');
module.exports.addDays = DateUtil.addDays;
module.exports.configDateTH = DateUtil.configDateTH;
module.exports.formatDateAPI = DateUtil.formatDateAPI;
module.exports.formatDateSession = DateUtil.formatDateSession;
module.exports.formatDateTH = DateUtil.formatDateTH;
module.exports.getCurYearTH = DateUtil.getCurYearTH;
module.exports.getDayData = DateUtil.getDayData;
module.exports.getDayList = DateUtil.getDayList;
module.exports.getMonthData = DateUtil.getMonthData;
module.exports.getMonthList = DateUtil.getMonthList;
module.exports.getYearList = DateUtil.getYearList;

// 'use strict';

// module.exports = require('./src/ArrayListUtil'); /** Array **/
// module.exports = require('./src/DateUtil'); /** Date **/
// module.exports = require('./src/NullUtil'); /** Null **/
// module.exports = require('./src/ReplaceUtil'); /** Replace **/
// module.exports = require('./src/storeUtil'); /** store toolkit **/
// module.exports = require('./src/TextUtil'); /** Text **/
// module.exports = require('./src/ValidateUtil'); /** Validate **/



