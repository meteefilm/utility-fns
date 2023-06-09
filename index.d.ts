export interface ArrayUtils {
    arr : object;
    key : string;
    code ?: string;
    name ?: string; 
}

export interface FormatOptions {
    date : string | Date;
    type ?: string | number;
    regEx ?: boolean; 
    regStr ?: string;
    format ?: number;
}

//** Array **/
export declare function indexOfMax(obj : ArrayUtils): string | number;
export declare function indexOfList(obj : ArrayUtils): any;
export declare function objectOfList(obj : ArrayUtils): object;
export declare function sortIndexOfList(obj : ArrayUtils): object;
export declare function dnsList(select : number | [] , dataList : []): object;

//** Date */
export declare function addDays(date : Date, days : number): string | number;
export declare function configDateTH(): object;
export declare function formatDateAPI(option : FormatOptions): string;
export declare function getCurYearTH(): string | number;
export declare function getDayData(value : string, key ?: string, LOCAL ?: string): object;
export declare function getDayList(LOCAL ?: string): object;
export declare function getMonthData(value : string, key ?: string, LOCAL ?: string): object;
export declare function getMonthList(LOCAL ?: string): object;
export declare function getYearList(start ?: number, end ?: number, LOCAL ?: string): object;

//** Null **/
export declare function NullInt(value : any): number;
export declare function NullPicture(value : any): string;
export declare function NullSelect(value : any): string;
export declare function NullString(value : any): string;
export declare function NullToPoint(value : any): string;
export declare function ZeroToNull(value : any): string;

//** Replace **/
export declare function replaceDataToKey(dataObj : object,keyObj : object): object;
export declare function replaceNoENtoTH(value : string): string;
export declare function replaceNull(dataObj : object): object;

//** Store */
export declare function storeCDI(store : any, search : object): object;
export declare function storeCDL(store : any): boolean;
export declare function storeCDO(store : any, keyFind : string, search : object): object;
export declare function storeFT(state : any, action : any): void;
export declare function storeSBR(search ?: object ): object;
export declare function storeSDD(state : any, action : any): void;
export declare function storeSDL(state : any, action : any): void;
export declare function storeSDO(state : any, action : any , keyObj : string ): void;

//** Text **/
export declare function NumberFormat(value : number,float ?: boolean ): string;
export declare function RandomText(length : number): string;

//** validate **/
// export declare function validateDateSF(obj : object ,startId : string, endId : string, report ?: boolean): string;










