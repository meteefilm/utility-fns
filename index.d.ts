export interface ArrayUtils {
    arr: any;
    code?: string | number;
    key?: string;
    name?: string;
}

export interface SortArrayUtils {
    arr: any;
    key?: string;
    sort?: number;
}

export interface FormatOptions {
    date: string | Date;
    type?: boolean | string | number;
    regEx?: boolean;
    regStr?: string;
    format?: number;
}

export interface CrontabItem {
    value: string;
    label: string;
}

export interface CrontabDataType {
    minute: CrontabItem[];
    hour: CrontabItem[];
    day: CrontabItem[];
    month: CrontabItem[];
    weekday: CrontabItem[];
}

export type KeyTransformMode = "camel" | "snake" | "lower" | "upper" | ((key: string) => string);

export interface GetFirstValueOptions {
    defaultValue?: any;
    ignoreCase?: boolean;
    trim?: boolean;
    skipEmptyString?: boolean;
    stringify?: boolean;
}

export interface PickByKeysOptions {
    ignoreCase?: boolean;
    includeMissing?: boolean;
    defaultValue?: any;
}

export interface NormalizeTextOptions {
    upper?: boolean;
    lower?: boolean;
    trim?: boolean;
    collapseWhitespace?: boolean;
}

export interface MaskTextOptions {
    visibleStart?: number;
    visibleEnd?: number;
    mask?: string;
}

export interface CleanPayloadOptions {
    trim?: boolean;
    emptyAsNull?: boolean;
    nullAsEmpty?: boolean;
    removeEmpty?: boolean;
}

export interface ValidateRequiredKeysOptions {
    keys?: string[];
    intKeys?: string[];
    numberKeys?: string[];
    allowZero?: boolean;
}

export interface ValidateRequiredKeysResult {
    valid: boolean;
    submitted: boolean;
    missingKeys: string[];
    missingIntKeys: string[];
    missingNumberKeys: string[];
    missingAll: string[];
}

export interface ValidateRequiredValuesResult {
    valid: boolean;
    submitted: boolean;
    missingValueIndexes: number[];
    missingIntValueIndexes: number[];
    missingNumberValueIndexes: number[];
    missingAllIndexes: number[];
}

//** Array **/
export declare function indexOfMax(obj: ArrayUtils): string | number;
export declare function indexOfList(obj: ArrayUtils): any;
export declare function findList(obj: ArrayUtils): any | string;
export declare function objectOfList(obj: ArrayUtils): object;
export declare function sortIndexOfList(obj: ArrayUtils): any;
export declare function sortList(obj: SortArrayUtils): any | [] | object;
export declare function sortAndOrderList(obj: SortArrayUtils): any | [] | object;
export declare function SAOList(obj: SortArrayUtils): any | [] | object;
export declare const groupBy: <T extends Record<string, any>>(items: Array<T>, keySelector: Function | string) => Record<string, T[]>;

//** Date */
export declare function addDays(date: Date, days: number): string | number;
export declare const diffInDays: (date1: Date, date2: Date) => number;
export declare function configDateTH(): object;
export declare function fmd(option: FormatOptions): string;
export declare function formatDate(option: FormatOptions): string;
export declare function formatDateAPI(option: FormatOptions): string;
export declare function formatDateTime(date: string | Date, options?: Partial<FormatOptions>): string;
export declare function formatDateOnly(date: string | Date, options?: Partial<FormatOptions>): string;
export declare function formatDateCompact(date: string | Date, withTime?: boolean): string;
export declare function formatThaiDate(date: string | Date, withTime?: boolean): string;
export declare function formatDateTH(option: FormatOptions): string;
export declare function formatDateSession(option: FormatOptions): string;
export declare function formatDateInt(option: FormatOptions): string;
export declare function formatDI(option: FormatOptions): string;
export declare function formatDateTHSession(option: FormatOptions): string;
export declare function formatDateTHS(option: FormatOptions): string;
export declare function parseDateInt(value: string | number, format?: "auto" | "th" | "en"): Date | string | "";
export declare function getCurYearTH(): string | number;
export declare function getDayData(value: string, key?: string, name?: string, LOCAL?: string): object;
export declare function getDayList(LOCAL?: string): object;
export declare function getMonthData(value: string, key?: string, name?: string, LOCAL?: string): object;
export declare function getMonthList(LOCAL?: string): object;
export declare function getYearList(start?: number, end?: number, LOCAL?: string): object;

//** Null **/
export declare function NullArray(value: any): any;
export declare function NullInt(value: any): number;
export declare function NullPicture(value: any): string;
export declare function NullSelect(value: any): string;
export declare function NullString(value: any): string;
export declare function toStringSafe(value: any, defaultValue?: string): string;
export declare function isBlank(value: any): boolean;
export declare function NullToPoint(value: any): string;
export declare function ZeroToNull(value: any): string;

//** Replace **/
export declare function replaceDataToKey(dataObj: object, keyObj: object): object;
export declare function replaceNoENtoTH(value: string): string;
export declare function replaceNull(dataObj: object): object;
export declare function repDTK(dataObj: object, keyObj: object): object;
export declare function repNET(value: string): string;

//** Convert **/
export declare function convertNumber(data: number | string | boolean, defaultValue?: number): number;
export declare function convertString(data: number | string, defaultValue?: string): string;
export declare function convertBoolean(data: any, defaultValue?: boolean): boolean;
export declare function convertDate(data: string): Date | "";
export declare function convertDateInt(value: string | number, format?: "auto" | "th" | "en"): Date | string | "";
export declare function convertDI(value: string | number, format?: "auto" | "th" | "en"): Date | string | "";
export declare const TypeConverter: {
    readonly number: (val: any, defaultValue?: number) => number;
    readonly string: (val: any, defaultValue?: string) => string;
    readonly boolean: (val: any, defaultValue?: boolean) => boolean;
    readonly array: <T>(val: any, defaultValue?: Array<T>) => Array<T>;
    readonly currency: (val: any, fractionDigits?: number, defaultValue?: number) => number;
    readonly formatNumber: (val: any, fractionDigits?: number, defaultValue?: number) => string;
    readonly date: (val: any) => Date | "";
};

//** Object **/
export declare function getObjectKey(data: Record<string, any>, key: string, options?: { ignoreCase?: boolean }): string | undefined;
export declare function getValue<T = any>(data: Record<string, any>, key: string, defaultValue?: T, options?: { ignoreCase?: boolean }): T;
export declare function getPath<T = any>(data: any, path: string | string[], defaultValue?: T): T;
export declare function setPath<T = any>(data: any, path: string | string[], value: T): any;
export declare function getFirstValue(data: Record<string, any>, keys: string[], options?: GetFirstValueOptions): any;
export declare function pickByKeys(data: Record<string, any>, keys: string[], options?: PickByKeysOptions): Record<string, any>;
export declare function omitByKeys(data: Record<string, any>, keys: string[], options?: { ignoreCase?: boolean }): Record<string, any>;
export declare function renameKeys(data: Record<string, any>, keyMap: Record<string, string>, options?: { ignoreCase?: boolean; keepUnmapped?: boolean }): Record<string, any>;
export declare function mapKeys(data: Record<string, any>, mapper: (key: string, value: any) => string): Record<string, any>;
export declare function normalizeKeys(data: Record<string, any>, mode?: KeyTransformMode): Record<string, any>;
export declare function joinText(values: any[], separator?: string, options?: { trim?: boolean }): string;
export declare function buildName(data: Record<string, any>, keys: Array<string | string[]>, separator?: string, options?: GetFirstValueOptions): string;
export declare function buildFullName(data: Record<string, any>, keyGroups?: string[][], separator?: string): string;

//** Safe **/
export declare function safeExecute<T>(fns: (() => T) | T, defaultValue?: T | null): T | null;
export declare function safeExecuteAsync<T>(fns: (() => Promise<T>) | T, defaultValue?: T | null): Promise<T | null>;

//** String **/
export declare function normalizeText(value: any, options?: NormalizeTextOptions): string;
export declare function removeWhitespace(value: any): string;
export declare function onlyDigits(value: any): string;
export declare function maskText(value: any, options?: MaskTextOptions): string;
export declare function padNumber(value: any, length?: number, padString?: string): string;
export declare function isThaiText(value: any): boolean;
export declare function isEnglishText(value: any): boolean;

//** Payload **/
export declare function cleanPayload<T = any>(data: T, options?: CleanPayloadOptions): T;
export declare function emptyToNull<T = any>(data: T): T;
export declare function nullToEmpty<T = any>(data: T): T;
export declare function trimPayload<T = any>(data: T): T;
export declare function removeEmptyKeys<T = any>(data: T): T;
export declare function getMissingKeys(data: any, keys: string[]): string[];
export declare function requiredByKeys(data: any, keys: string[]): boolean;
export declare function getMissingNumberKeys(data: any, keys: string[], options?: { allowZero?: boolean }): string[];
export declare function validateRequiredKeys(data: any, options?: ValidateRequiredKeysOptions): ValidateRequiredKeysResult;
export declare function isRequiredValid(data: any, options?: ValidateRequiredKeysOptions): boolean;
export declare function reqCheck(data: any, keys?: string[], intKeys?: string[], allowZero?: boolean): ValidateRequiredKeysResult;
export declare function reqKeys(data: any, keys?: string[], intKeys?: string[], allowZero?: boolean): boolean;
export declare function getMissingValues(values?: any[]): number[];
export declare function getMissingNumberValues(values?: any[], allowZero?: boolean): number[];
export declare function reqValueCheck(values?: any[], intValues?: any[], allowZero?: boolean): ValidateRequiredValuesResult;
export declare function reqValues(values?: any[], intValues?: any[], allowZero?: boolean): boolean;

//** UUID **/
export declare function generateUUID(): string;
export declare function generateUUIDClient(): string;
export declare function generateUUIDNode(): string;
export declare function uuid(): string;

//** Locale **/
export declare const TH_DAY_NAMES: string[];
export declare const TH_DAY_NAMES_SHORT: string[];
export declare const TH_DAY_NAMES_MIN: string[];
export declare const TH_MONTH_NAMES: string[];
export declare const TH_MONTH_NAMES_SHORT: string[];
export declare const EN_DAY_NAMES: string[];
export declare const EN_DAY_NAMES_SHORT: string[];
export declare const EN_MONTH_NAMES: string[];
export declare const EN_MONTH_NAMES_SHORT: string[];
export declare const LOCALE_DAY_NAMES: Record<string, string[]>;
export declare const LOCALE_MONTH_NAMES: Record<string, string[]>;
export declare const TH_CALENDAR_LOCALE: Record<string, any>;

//** Store */
export declare function storeCDI(store: any, search: object): object;
export declare function storeCDL(store: any): boolean;
export declare function storeCDO(store: any, keyFind: string, search: object): object;
export declare function storeFT(state: any, action: any): void;
export declare function storeSBR(search?: object): object;
export declare function storeSDD(state: any, action: any): void;
export declare function storeSDI(state: any, action: any): void;
export declare function storeSDL(state: any, action: any): void;
export declare function storeSDO(state: any, action: any, keyObj: string): void;

//** Text **/
export declare function NumberFormat(value: number, float?: boolean): string;
export declare function RandomText(length: number): string;
export declare function RandomNumber(max: number): string;

//** generate **/
export declare function ranRGB(): string;
export declare function randomRGB(): string;
export declare function ranRGBA(): string;
export declare function randomRGBA(): string;

//** validate **/
export declare function validateDateSF(obj: object, startId: string, endId: string, report?: boolean): string;
export declare function validateCitizenId(id: string | number): boolean;
export declare const ValidatorRegEx: {
    readonly thaiID: RegExp;
    readonly containerIDTrimmed: RegExp;
    readonly containerID: RegExp;
    readonly email: RegExp;
    readonly thaiChar: RegExp;
    readonly thaiName: RegExp;
    readonly thaiFullName: RegExp;
    readonly thaiTitleName: RegExp;
    readonly thaiFullNameWithTitle: RegExp;
    readonly engName: RegExp;
    readonly engFullName: RegExp;
    readonly engTitleName: RegExp;
    readonly engFullNameWithTitle: RegExp;
    readonly phoneNoTH: RegExp;
    readonly passwordMinLength6: RegExp;
    readonly passwordMinLength8: RegExp;
    readonly passwordMinLength16: RegExp;
};
export declare const Validator: {
    readonly isNullish: (value: any) => value is null | undefined;
    readonly isFalsy: (value: any) => value is false | 0 | "" | null | undefined;
    readonly isDate: (value: any) => value is Date;
    readonly isString: (value: any) => value is string;
    readonly isNumber: (value: any) => value is number;
    readonly isBoolean: (value: any) => value is boolean;
    readonly isArray: <T>(value: any) => value is Array<T>;
    readonly isObject: <T>(value: any) => value is Record<string, T>;
    readonly isEmpty: (value: any) => value is "";
    readonly isCitizenId: (value: any) => boolean;
    readonly isContainerID: (value: any) => boolean;
};

//** treeData **/
export declare function convertLTT(list: object, keyLev: string, keyCtl: string, keyCur: string): object;
export declare function convertListToTree(list: object, keyLev: string, keyCtl: string, keyCur: string): object;
export declare function findTK(list: object, val: any, id?: string, key?: string): object;
export declare function findTreeKey(list: object, val: any, id?: string, key?: string): object;
export declare function genTK(list: object, key?: string): any;
export declare function geneTK(list: object, key?: string): any;
export declare function generateTreeKey(list: object, key?: string): any;
export declare function onRenderSelectNode(obj: object, node: object, tree: object): object;
export declare function setKeyTree(keyData: object, key: string, type?: number): string;
export declare function changeKeyTree(list: object, oldKey: string, newKey: string): object;
export declare function findTreeNode(nodes: object, e: string): object;

//** MockData **/
export declare const CrontabData: CrontabDataType;
