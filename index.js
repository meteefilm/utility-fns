//** Null **/
const NullUtil = require('./src/NullUtil');
exports.NullInt = NullUtil.NullInt;
exports.NullPicture = NullUtil.NullPicture;
exports.NullSelect = NullUtil.NullSelect;
exports.NullString = NullUtil.NullString;
exports.ZeroToNull = NullUtil.ZeroToNull;
exports.NullToPoint = NullUtil.NullToPoint;
exports.NullArray = NullUtil.NullArray;

//** Array **/
const ArrayUtil = require('./src/ArrayUtil');
module.exports.indexOfMax = ArrayUtil.indexOfMax;
module.exports.indexOfList = ArrayUtil.indexOfList;
module.exports.objectOfList = ArrayUtil.objectOfList;
module.exports.sortIndexOfList = ArrayUtil.sortIndexOfList;
module.exports.dnsList = ArrayUtil.dnsList;

/** ConvertUtil **/
const ConvertUtil = require('./src/ConvertUtil');
module.exports.convertNumber = ConvertUtil.convertNumber;
module.exports.convertString = ConvertUtil.convertString;
module.exports.convertDate = ConvertUtil.convertDate;

//** Replace **/
const ReplaceUtil = require('./src/ReplaceUtil');
module.exports.replaceDataToKey = ReplaceUtil.replaceDataToKey;
module.exports.replaceNoENtoTH = ReplaceUtil.replaceNoENtoTH;
module.exports.replaceNull = ReplaceUtil.replaceNull;
module.exports.repDTK = ReplaceUtil.replaceDataToKey;
module.exports.repNET = ReplaceUtil.replaceNoENtoTH;

//** Replace **/
const TextUtil = require('./src/TextUtil');
module.exports.NumberFormat = TextUtil.NumberFormat;
module.exports.RandomText = TextUtil.RandomText;

//** ValidateUtil **/
const ValidateUtil = require('./src/ValidateUtil');
module.exports.validateDateSF = ValidateUtil.validateDateSF;
module.exports.validateCitizenId = ValidateUtil.validateCitizenId;

//** storeUtil **/
const storeUtil = require('./src/storeUtil');
module.exports.storeCDI = storeUtil.storeCDI;
module.exports.storeCDL = storeUtil.storeCDL;
module.exports.storeCDO = storeUtil.storeCDO;
module.exports.storeFT = storeUtil.storeFT;
module.exports.storeSBR = storeUtil.storeSBR;
module.exports.storeSDD = storeUtil.storeSDD;
module.exports.storeSDL = storeUtil.storeSDL;
module.exports.storeSDO = storeUtil.storeSDO;

//** storeUtil **/
const DateUtil = require('./src/DateUtil');
module.exports.addDays = DateUtil.addDays;
module.exports.configDateTH = DateUtil.configDateTH;
module.exports.fmd = DateUtil.formatDateAPI;
module.exports.formatDate = DateUtil.formatDateAPI;
module.exports.formatDateAPI = DateUtil.formatDateAPI;
module.exports.formatDateSession = DateUtil.formatDateSession;
module.exports.formatDateTH = DateUtil.formatDateTH;
module.exports.getCurYearTH = DateUtil.getCurYearTH;
module.exports.getDayData = DateUtil.getDayData;
module.exports.getDayList = DateUtil.getDayList;
module.exports.getMonthData = DateUtil.getMonthData;
module.exports.getMonthList = DateUtil.getMonthList;
module.exports.getYearList = DateUtil.getYearList;

//** ConvertUtil **/
const TreeUtil = require('./src/TreeUtil');
module.exports.convertLTT = TreeUtil.convertListToTree;
module.exports.convertListToTree = TreeUtil.convertListToTree;
module.exports.findTK = TreeUtil.findTreeKey;
module.exports.findTreeKey = TreeUtil.findTreeKey;
module.exports.geneTK = TreeUtil.generateTreeKey;
module.exports.generateTreeKey = TreeUtil.generateTreeKey;
module.exports.onRenderSelectNode = TreeUtil.onRenderSelectNode;
module.exports.setKeyTree = TreeUtil.setKeyTree;
module.exports.changeKeyTree = TreeUtil.changeKeyTree;

//** generate **/
const GenerateUtil = require('./src/GenerateUtil');
module.exports.ranRGB = GenerateUtil.randomRGB;
module.exports.randomRGB = GenerateUtil.randomRGB;
module.exports.ranRGBA = GenerateUtil.randomRGBA;
module.exports.randomRGBA = GenerateUtil.randomRGBA;

// module.exports = require('./src/DateUtil'); /** Date **/
// module.exports = require('./src/NullUtil'); /** Null **/
// module.exports = require('./src/ReplaceUtil'); /** Replace **/
// module.exports = require('./src/storeUtil'); /** store toolkit **/
// module.exports = require('./src/TextUtil'); /** Text **/
// module.exports = require('./src/ValidateUtil'); /** Validate **/

