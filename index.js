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
module.exports.messagesWarning = TextUtil.messagesWarning;


