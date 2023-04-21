import { initBaseStore } from "../store/types/baseStore";

/** store Check Data List */
export const storeCDL = (store) => { 
    let check = true;
    if((!store.dataList || store.dataList.length === 0) && (store.errorcode === 0 && !store.isLoadList)){
        check = false;
    }
    return check
}

//** store Check Data Info */
export const storeCDI = (store,search) => { 
    let data = undefined;
    if(store.dataInfoList && store.dataInfoList.length > 0){
        let filter = store.dataInfoList.filter((e)=>{
            // let conCheck = true;
            let conCheck = true
            for(let key in search){
                conCheck = conCheck && e[key] === search[key];
            }
            return conCheck
        })
        if(filter.length > 0){
            data = filter[0]
        }
    }

    return data
}
// /** store Call Data List and SetState or return */
// export const storeCDLNS = (store,dispatch,setDataList,page) => { 
    
//     if(!storeCDL(store)){
//         if(store.fetchList !== undefined){
//             dispatch(store.fetchList)
//         }
//         return []
//     }else{
//         if(setDataList !== undefined){
//             setDataList(store.dataList)
//         }else{
//             return []
//         }
//     }
// }

/** Set Data List in store */
export const storeSDL = (state,action) => { 
    if(action && action.payload !== undefined){
        state.dataList = action.payload.dataList;
        state.errorcode  = action.payload.errorcode;
        state.errormessage = action.payload.errormessage;
        state.search = action.payload.search
    }else{
        state.dataList = [];
        state.errorcode  = 0;
        state.errormessage = "";
    }
    state.isLoadList = true
    state.loading = false  
}

/** Set Data List in info list store */
export const storeSDNIL = (state,action) => { 
    if(action && action.payload !== undefined){
        state.dataInfoList = action.payload.dataList;
        state.errorcode  = action.payload.errorcode;
        state.errormessage = action.payload.errormessage;
    }else{
        state.dataInfoList = [];
        state.errorcode  = 0;
        state.errormessage = "";
    }
    state.isLoadData = true
    state.loading = false  
}

/** Set Data Info in store */
export const storeSDI = (state,action) => { 
    if(action && action.payload !== undefined){
        state.data = action.payload.data;
        state.errorcode  = action.payload.errorcode;
        state.errormessage = action.payload.errormessage;
    }else{
        state.data = undefined;
        state.errorcode  = 0;
        state.errormessage = "";
    }
    state.isUpdate = true
    state.loading = false  
}


/** Set Base Respon */
export const storeSBR = (search = undefined) => { 
    return {
        ...initBaseStore.response,
        search
    }
}

/** store Filter DataList */
export const storeFL = (state,action) => { 
    let list = state.dataList
    if(action.payload){
        list = state.dataList.filter((e)=>{
            let conCheck = true
            for(let key in action.payload){
                conCheck = conCheck && e[key] === action.payload[key];
            }
            return conCheck
        })
    } 
    state.filter = list
}
