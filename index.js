//** Null **/
const NullUtil = require('./src/NullUtil');
exports.NullInt = NullUtil.NullInt;
exports.NullPicture = NullUtil.NullPicture;
exports.NullSelect = NullUtil.NullSelect;
exports.NullString = NullUtil.NullString;
exports.toStringSafe = NullUtil.toStringSafe;
exports.isBlank = NullUtil.isBlank;
exports.ZeroToNull = NullUtil.ZeroToNull;
exports.NullToPoint = NullUtil.NullToPoint;
exports.NullArray = NullUtil.NullArray;

//** Array **/
const ArrayUtil = require('./src/ArrayUtil');
module.exports.indexOfMax = ArrayUtil.indexOfMax;
module.exports.indexOfList = ArrayUtil.indexOfList;
module.exports.findList = ArrayUtil.findList;
module.exports.objectOfList = ArrayUtil.objectOfList;
module.exports.sortIndexOfList = ArrayUtil.sortIndexOfList;
module.exports.sortList = ArrayUtil.sortList;
module.exports.sortAndOrderList = ArrayUtil.sortAndOrderList;
module.exports.SAOList = ArrayUtil.sortAndOrderList;
module.exports.groupBy = ArrayUtil.groupBy;

/** ConvertUtil **/
const ConvertUtil = require('./src/ConvertUtil');
module.exports.convertNumber = ConvertUtil.convertNumber;
module.exports.convertString = ConvertUtil.convertString;
module.exports.convertBoolean = ConvertUtil.convertBoolean;
module.exports.convertDate = ConvertUtil.convertDate;
module.exports.convertDateInt = ConvertUtil.convertDateInt;
module.exports.convertDI = ConvertUtil.convertDateInt;
module.exports.TypeConverter = ConvertUtil.TypeConverter;

//** Object **/
const ObjectUtil = require('./src/ObjectUtil');
module.exports.getObjectKey = ObjectUtil.getObjectKey;
module.exports.getValue = ObjectUtil.getValue;
module.exports.getFirstValue = ObjectUtil.getFirstValue;
module.exports.pickByKeys = ObjectUtil.pickByKeys;
module.exports.normalizeKeys = ObjectUtil.normalizeKeys;
module.exports.joinText = ObjectUtil.joinText;
module.exports.buildName = ObjectUtil.buildName;
module.exports.buildFullName = ObjectUtil.buildFullName;
module.exports.getPath = ObjectUtil.getPath;
module.exports.setPath = ObjectUtil.setPath;
module.exports.omitByKeys = ObjectUtil.omitByKeys;
module.exports.renameKeys = ObjectUtil.renameKeys;
module.exports.mapKeys = ObjectUtil.mapKeys;

//** Safe **/
const SafeUtil = require('./src/SafeUtil');
module.exports.safeExecute = SafeUtil.safeExecute;
module.exports.safeExecuteAsync = SafeUtil.safeExecuteAsync;

//** String **/
const StringUtil = require('./src/StringUtil');
module.exports.normalizeText = StringUtil.normalizeText;
module.exports.removeWhitespace = StringUtil.removeWhitespace;
module.exports.onlyDigits = StringUtil.onlyDigits;
module.exports.maskText = StringUtil.maskText;
module.exports.padNumber = StringUtil.padNumber;
module.exports.isThaiText = StringUtil.isThaiText;
module.exports.isEnglishText = StringUtil.isEnglishText;

//** Payload **/
const PayloadUtil = require('./src/PayloadUtil');
module.exports.cleanPayload = PayloadUtil.cleanPayload;
module.exports.emptyToNull = PayloadUtil.emptyToNull;
module.exports.nullToEmpty = PayloadUtil.nullToEmpty;
module.exports.trimPayload = PayloadUtil.trimPayload;
module.exports.removeEmptyKeys = PayloadUtil.removeEmptyKeys;
module.exports.getMissingKeys = PayloadUtil.getMissingKeys;
module.exports.requiredByKeys = PayloadUtil.requiredByKeys;
module.exports.getMissingNumberKeys = PayloadUtil.getMissingNumberKeys;
module.exports.validateRequiredKeys = PayloadUtil.validateRequiredKeys;
module.exports.isRequiredValid = PayloadUtil.isRequiredValid;
module.exports.reqCheck = PayloadUtil.reqCheck;
module.exports.reqKeys = PayloadUtil.reqKeys;
module.exports.getMissingValues = PayloadUtil.getMissingValues;
module.exports.getMissingNumberValues = PayloadUtil.getMissingNumberValues;
module.exports.reqValueCheck = PayloadUtil.reqValueCheck;
module.exports.reqValues = PayloadUtil.reqValues;

//** UUID **/
const UuidUtil = require('./src/UuidUtil');
module.exports.generateUUID = UuidUtil.generateUUID;
module.exports.generateUUIDClient = UuidUtil.generateUUIDClient;
module.exports.generateUUIDNode = UuidUtil.generateUUIDNode;
module.exports.uuid = UuidUtil.uuid;

//** Locale **/
const LocaleUtil = require('./src/LocaleUtil');
module.exports.TH_DAY_NAMES = LocaleUtil.TH_DAY_NAMES;
module.exports.TH_DAY_NAMES_SHORT = LocaleUtil.TH_DAY_NAMES_SHORT;
module.exports.TH_DAY_NAMES_MIN = LocaleUtil.TH_DAY_NAMES_MIN;
module.exports.TH_MONTH_NAMES = LocaleUtil.TH_MONTH_NAMES;
module.exports.TH_MONTH_NAMES_SHORT = LocaleUtil.TH_MONTH_NAMES_SHORT;
module.exports.EN_DAY_NAMES = LocaleUtil.EN_DAY_NAMES;
module.exports.EN_DAY_NAMES_SHORT = LocaleUtil.EN_DAY_NAMES_SHORT;
module.exports.EN_MONTH_NAMES = LocaleUtil.EN_MONTH_NAMES;
module.exports.EN_MONTH_NAMES_SHORT = LocaleUtil.EN_MONTH_NAMES_SHORT;
module.exports.LOCALE_DAY_NAMES = LocaleUtil.LOCALE_DAY_NAMES;
module.exports.LOCALE_MONTH_NAMES = LocaleUtil.LOCALE_MONTH_NAMES;
module.exports.TH_CALENDAR_LOCALE = LocaleUtil.TH_CALENDAR_LOCALE;

//** Replace **/
const ReplaceUtil = require('./src/ReplaceUtil');
module.exports.replaceDataToKey = ReplaceUtil.replaceDataToKey;
module.exports.replaceNoENtoTH = ReplaceUtil.replaceNoENtoTH;
module.exports.replaceNull = ReplaceUtil.replaceNull;
module.exports.repDTK = ReplaceUtil.replaceDataToKey;
module.exports.repNET = ReplaceUtil.replaceNoENtoTH;

//** TextUtil **/
const TextUtil = require('./src/TextUtil');
module.exports.NumberFormat = TextUtil.NumberFormat;
module.exports.RandomText = TextUtil.RandomText;
module.exports.RandomNumber = TextUtil.RandomNumber;
module.exports.RT = TextUtil.RandomText;
module.exports.RN = TextUtil.RandomNumber;

//** ValidateUtil **/
const ValidateUtil = require('./src/ValidateUtil');
module.exports.validateDateSF = ValidateUtil.validateDateSF;
module.exports.validateCitizenId = ValidateUtil.validateCitizenId;
module.exports.ValidatorRegEx = ValidateUtil.ValidatorRegEx;
module.exports.Validator = ValidateUtil.Validator;

//** storeUtil **/
const storeUtil = require('./src/storeUtil');
module.exports.storeCDI = storeUtil.storeCDI;
module.exports.storeCDL = storeUtil.storeCDL;
module.exports.storeCDO = storeUtil.storeCDO;
module.exports.storeFT = storeUtil.storeFT;
module.exports.storeSBR = storeUtil.storeSBR;
module.exports.storeSDD = storeUtil.storeSDD;
module.exports.storeSDI = storeUtil.storeSDI;
module.exports.storeSDL = storeUtil.storeSDL;
module.exports.storeSDO = storeUtil.storeSDO;

//** DateUtil **/
const DateUtil = require('./src/DateUtil');
module.exports.addDays = DateUtil.addDays;
module.exports.diffInDays = DateUtil.diffInDays;
module.exports.configDateTH = DateUtil.configDateTH;
module.exports.fmd = DateUtil.formatDateAPI;
module.exports.formatDate = DateUtil.formatDateAPI;
module.exports.formatDateAPI = DateUtil.formatDateAPI;
module.exports.formatDateTime = DateUtil.formatDateTime;
module.exports.formatDateOnly = DateUtil.formatDateOnly;
module.exports.formatDateCompact = DateUtil.formatDateCompact;
module.exports.formatThaiDate = DateUtil.formatThaiDate;
module.exports.formatDateSession = DateUtil.formatDateInt;
module.exports.formatDateInt = DateUtil.formatDateInt;
module.exports.parseDateInt = DateUtil.parseDateInt;
module.exports.formatDI = DateUtil.formatDateInt;
module.exports.formatDateTH = DateUtil.formatDateTH;
module.exports.formatDateTHSession = DateUtil.formatDateTHSession;
module.exports.formatDateTHS = DateUtil.formatDateTHSession;
module.exports.getCurYearTH = DateUtil.getCurYearTH;
module.exports.getDayData = DateUtil.getDayData;
module.exports.getDayList = DateUtil.getDayList;
module.exports.getMonthData = DateUtil.getMonthData;
module.exports.getMonthList = DateUtil.getMonthList;
module.exports.getYearList = DateUtil.getYearList;

//** TreeUtil **/
const TreeUtil = require('./src/TreeUtil');
module.exports.convertLTT = TreeUtil.convertListToTree;
module.exports.convertListToTree = TreeUtil.convertListToTree;
module.exports.findTK = TreeUtil.findTreeKey;
module.exports.findTreeKey = TreeUtil.findTreeKey;
module.exports.geneTK = TreeUtil.generateTreeKey;
module.exports.genTK = TreeUtil.generateTreeKey;
module.exports.generateTreeKey = TreeUtil.generateTreeKey;
module.exports.onRenderSelectNode = TreeUtil.onRenderSelectNode;
module.exports.setKeyTree = TreeUtil.setKeyTree;
module.exports.changeKeyTree = TreeUtil.changeKeyTree;
module.exports.findTreeNode = TreeUtil.findTreeNode;

//** generate **/
const GenerateUtil = require('./src/GenerateUtil');
module.exports.ranRGB = GenerateUtil.randomRGB;
module.exports.randomRGB = GenerateUtil.randomRGB;
module.exports.ranRGBA = GenerateUtil.randomRGBA;
module.exports.randomRGBA = GenerateUtil.randomRGBA;

//** Mock Data **/
const MockData = require('./src/MockData');
module.exports.CrontabData = MockData.CrontabData;


// module.exports = require('./src/DateUtil'); /** Date **/
// module.exports = require('./src/NullUtil'); /** Null **/
// module.exports = require('./src/ReplaceUtil'); /** Replace **/
// module.exports = require('./src/storeUtil'); /** store toolkit **/
// module.exports = require('./src/TextUtil'); /** Text **/
// module.exports = require('./src/ValidateUtil'); /** Validate **/

