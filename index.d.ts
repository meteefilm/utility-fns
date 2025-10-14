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
export declare function formatDateTH(option: FormatOptions): string;
export declare function formatDateSession(option: FormatOptions): string;
export declare function formatDateInt(option: FormatOptions): string;
export declare function formatDI(option: FormatOptions): string;
export declare function formatDateTHSession(option: FormatOptions): string;
export declare function formatDateTHS(option: FormatOptions): string;
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
export declare function NullToPoint(value: any): string;
export declare function ZeroToNull(value: any): string;

//** Replace **/
export declare function replaceDataToKey(dataObj: object, keyObj: object): object;
export declare function replaceNoENtoTH(value: string): string;
export declare function replaceNull(dataObj: object): object;
export declare function repDTK(dataObj: object, keyObj: object): object;
export declare function repNET(value: string): string;

//** Convert **/
export declare function convertNumber(data: number | string | boolean, defaultValue?: number): object;
export declare function convertString(data: number | string, defaultValue?: string): string;
export declare function convertDate(data: string): object;
export declare function convertDateInt(value: string | number, format?: "auto" | "th" | "en"): Date | string | "";
export declare function convertDI(value: string | number, format?: "auto" | "th" | "en"): Date | string | "";
export declare const TypeConverter: {
    readonly number: (val: any, defaultValue?: number) => number;
    readonly string: (val: any, defaultValue?: string) => string;
    readonly array: <T>(val: any, defaultValue?: Array<T>) => Array<T>;
    readonly currency: (val: any, fractionDigits?: number, defaultValue?: number) => number;
    readonly formatNumber: (val: any, fractionDigits?: number, defaultValue?: number) => string;
    readonly date: (val: any) => Date | null;
};

//** Store */
export declare function storeCDI(store: any, search: object): object;
export declare function storeCDL(store: any): boolean;
export declare function storeCDO(store: any, keyFind: string, search: object): object;
export declare function storeFT(state: any, action: any): void;
export declare function storeSBR(search?: object): object;
export declare function storeSDD(state: any, action: any): void;
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
export declare function genTK(list: object, val: any, condition?: string, key?: string): any;
export declare function generateTreeKey(list: object, val: any, condition?: string, key?: string): any;
export declare function onRenderSelectNode(obj: object, node: object, tree: object): object;
export declare function setKeyTree(keyData: object, key: string, type?: number): string;
export declare function changeKeyTree(list: object, oldKey: string, newKey: string): object;
export declare function findTreeNode(nodes: object, e: string): object;

//** MockData **/
export declare const CrontabData: CrontabDataType;
