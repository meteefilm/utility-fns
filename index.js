/** Null **/
const NullUtil = require('./src/NullUtil');
module.exports.NullInt = NullUtil.NullInt;
module.exports.NullPicture = NullUtil.NullPicture;
module.exports.NullSelect = NullUtil.NullSelect;
module.exports.NullString = NullUtil.NullString;
module.exports.ZeroToNull = NullUtil.ZeroToNull;
module.exports.replaceNull = NullUtil.replaceNull;

/** Array **/
const ArrayListUtil = require('./src/ArrayListUtil');
module.exports.indexOfMax = ArrayListUtil.indexOfMax;
module.exports.indexOfMsList = ArrayListUtil.indexOfMsList;
module.exports.ObjectOfMsList = ArrayListUtil.ObjectOfMsList;
module.exports.sortIndexOfList = ArrayListUtil.sortIndexOfList;

/** Replace **/
const ReplaceUtil = require('./src/ReplaceUtil');
module.exports.replaceDataToKey = ReplaceUtil.replaceDataToKey;
module.exports.replaceMonthENtoTH = ReplaceUtil.replaceMonthENtoTH;
module.exports.replaceNoENtoTH = ReplaceUtil.replaceNoENtoTH;
module.exports.replaceNull = ReplaceUtil.replaceNull;

/** Replace **/
const TextUtil = require('./src/TextUtil');
module.exports.NumberFormat = TextUtil.NumberFormat;
module.exports.RandomText = TextUtil.RandomText;
// module.exports.messagesWarning = TextUtil.messagesWarning;

/** ValidateUtil **/
const ValidateUtil = require('./src/ValidateUtil');
// module.exports.validateDT = ValidateUtil.validateDT;
// module.exports.validateDTT = ValidateUtil.validateDTT;
module.exports.validateDateSF = ValidateUtil.validateDateSF;
// module.exports.validateNumber = ValidateUtil.validateNumber;
// module.exports.validateText = ValidateUtil.validateText;

/** storeUtil **/
const storeUtil = require('./src/storeUtil');
module.exports.storeCDI = storeUtil.storeCDI;
module.exports.storeCDL = storeUtil.storeCDL;
module.exports.storeFL = storeUtil.storeFL;
module.exports.storeSBR = storeUtil.storeSBR;
module.exports.storeSDI = storeUtil.storeSDI;
module.exports.storeSDL = storeUtil.storeSDL;
module.exports.storeSDNIL = storeUtil.storeSDNIL;

/** storeUtil **/
const DateUtil = require('./src/DateUtil');
module.exports.addDays = DateUtil.addDays;
module.exports.configDateTH = DateUtil.configDateTH;
module.exports.formatDateAPI = DateUtil.formatDateAPI;
module.exports.getCurYearTH = DateUtil.getCurYearTH;
module.exports.getDayData = DateUtil.getDayData;
module.exports.getDayList = DateUtil.getDayList;
module.exports.getMonthData = DateUtil.getMonthData;
module.exports.getMonthList = DateUtil.getMonthList;
module.exports.getYearList = DateUtil.getYearList;

