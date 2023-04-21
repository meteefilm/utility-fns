import { NullString } from "./NullUtil";

/**
 * Find the maximum value of a key in an array of objects
 * @param arr - The array to search.
 * @param key - The key to use for the comparison.
 * @returns The index of the max value.
 */
export const indexOfMax = (arr,key='seq') => {
 
    if (arr.length === 0) {
        return 0;
    }else if (arr.length === 1) {
        return arr[0][key]
    }

    var max = arr[0];   

    for (var i = 1; i < arr.length; i++) {
        if (arr[i][key] > max[key]) {
            // maxIndex = max[key];
            max = arr[i];
        }
    }
    return max[key];
}

/**
 * Given an array of objects, return the name of the object with the matching code
 * @param [arr] - the array to search
 * @param [code] - The code of the list to be found.
 * @returns The name of the list item that matches the code.
 */
export const indexOfMsList = (arr = [],code = '',key = 'code',name = 'name') => {
    let data = '-'
    if(Array.isArray(arr) && arr.length > 0){
        let index = arr.findIndex((item)=>item[key] === code )
        if(index > -1){
            data = NullString(arr[index][name]);
        }
    }
    return data
}

/**
 * It takes an array of objects, a code, and a key, and returns the object in the array that has the
 * code as the value of the key
 * @param [arr] - the array you want to search
 * @param [code] - The code you want to find in the array
 * @param [key=code] - the key of the object you want to find
 */
export const ObjectOfMsList = (arr = [],code = '',key = 'code') => {
    let data = undefined
    if(Array.isArray(arr) && arr.length > 0){
        let index = arr.findIndex((item)=>item[key] === code )
        if(index > -1){
            data = arr[index]
        }
    }
    return data
}

/**
 * It takes an array of objects and returns a new array of objects with an index property added to each
 * object.
 * @param arr - the array you want to sort
 * @param [key=index] - the key to sort by
 * @returns An array of objects with the key of index and the value of the index + 1
 */
export const sortIndexOfList = (arr,key='index') => {
    if(arr && arr.length > 0){
        return arr.map((item,index)=>{
            return {
                ...item,
                [key] : index+1
            }
        })
    }
    return arr
 
    
}


