export interface ArrayUtils {
    arr : object;
    code : string;
    key ?: string;
    name ?: string; 
}

export interface FormatOptions {
    date : string | Date;
    type ?: boolean | string | number ;
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
export declare function fmd(option : FormatOptions): string;
export declare function formatDate(option : FormatOptions): string;
export declare function formatDateAPI(option : FormatOptions): string;
export declare function formatDateTH(option : FormatOptions): string;
export declare function formatDateSession(option : FormatOptions): string;
export declare function getCurYearTH(): string | number;
export declare function getDayData(value : string, key ?: string, name?: string , LOCAL ?: string): object;
export declare function getDayList(LOCAL ?: string): object;
export declare function getMonthData(value : string, key ?: string, name?: string , LOCAL ?: string): object;
export declare function getMonthList(LOCAL ?: string): object;
export declare function getYearList(start ?: number, end ?: number, LOCAL ?: string): object;

//** Null **/
export declare function NullArray(value : any): object;
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
export declare function repDTK(dataObj : object,keyObj : object): object;
export declare function repNET(value : string): string;

//** Convert **/
export declare function convertNumber(data : number | string | boolean ): object;
export declare function convertString(data : number | string ): string;
export declare function convertDate(data : string ): object;

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

//** generate **/
export declare function ranRGB(): string;
export declare function randomRGB(): string;
export declare function ranRGBA(): string;
export declare function randomRGBA(): string;

//** validate **/
export declare function validateDateSF(obj : object ,startId : string, endId : string, report ?: boolean): string;
export declare function validateCitizenId(id :string | number): boolean;

//** treeData **/
export declare function convertLTT(list : object , keyLev : string ,keyCtl : string, keyCur : string ): object;
export declare function convertListToTree(list : object , keyLev : string ,keyCtl : string, keyCur : string ): object;
export declare function findTK(list : object ,val : any, id ?: string, key?: string  ): object;
export declare function findTreeKey(list : object ,val : any, id ?: string, key?: string  ): object;
export declare function genTK(list : object ,val : any  ,condition ?: string  ,key ?: string   ): any;
export declare function generateTreeKey(list : object ,val : any  ,condition ?: string  ,key ?: string   ): any;
export declare function onRenderSelectNode(obj : object , node : object,tree : object): object;
export declare function setKeyTree(keyData: object ,key : string,type ?: number ): string;
export declare function changeKeyTree(list: object,oldKey: string,newKey: string ): object;











