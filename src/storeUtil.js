'use strict';

const initBaseStore = {
    response : {
        dataList: [],
        data : undefined,
        errorcode : 0,
        errormessage : "",
        search : undefined
    }
}

//** store Check Data List */
module.exports.storeCDL = (store = undefined) => { 
    let check = true;
    if( !store || ((!store.dataList || store.dataList.length === 0) && (store.errorcode === 0 && !store.isLoadList))){
        check = false;
    }
    return check
}

//** store Check Data Info */
module.exports.storeCDI = (store = undefined,search) => { 
    let data = undefined;
    if(store && store.dataInfoList && store.dataInfoList.length > 0){
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

//** store Check Data Object */
module.exports.storeCDO = (store,keyFind="dataList",search) => { 
    let data = undefined;
    if(store[keyFind] && store[keyFind].length > 0){
        let filter = store[keyFind].filter((e)=>{
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

//** Set Data to Data List store*/
module.exports.storeSDL = (state,action) => { 
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

//** Set Data to Data store */
module.exports.storeSDD = (state,action) => { 
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

//** Set Data to Info List store */
module.exports.storeSDI = (state,action) => { 
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

//** Set Data to data object store */
module.exports.storeSDO = (state,action,keyObj="dataList") => { 
    if(action && action.payload !== undefined){
        state[keyObj] = action.payload.dataList;
        state.errorcode  = action.payload.errorcode;
        state.errormessage = action.payload.errormessage;
    }else{
        state[keyObj] = [];
        state.errorcode  = 0;
        state.errormessage = "";
    }
    state.loading = false  
}

/** Set Base Respon */
module.exports.storeSBR = (search = undefined) => { 
    return {
        ...initBaseStore.response,
        search
    }
}

/** store Filter DataList */
module.exports.storeFT = (state,action) => { 
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
