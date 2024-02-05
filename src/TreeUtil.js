'use strict';

const NullUtil = require('./NullUtil')

/**
 * It takes a flat list of objects and converts it into a tree structure.
 * @param list - the list of objects you want to convert to a tree
 * @param [keyLev] - The level of the item in the tree.
 * @param [keyCtl] - The key that contains the parent id
 * @param [keyCur] - The key that identifies the current item.
 */
module.exports.convertListToTree = (list, keyLev="" ,keyCtl="", keyCur = "") => { 

    if(list !== undefined && list.length > 0 && NullUtil.NullString(keyLev) !== ""){

        let newList =[];
        let minLev = Math.min.apply(Math, list.map((item)=>item[keyLev]));
        let maxLev = Math.max.apply(Math, list.map((item)=>item[keyLev]));

        for(let min = minLev; min <= maxLev ;min++){
            let filterObj = list.filter((item)=>item[keyLev]===min)
            newList.push(filterObj)
        }
        for(let max = maxLev; max > minLev ;max--){
            let object = newList[max - minLev-1]
            newList[max - minLev].forEach((main)=>{
                let findIndex = object.findIndex((item)=>item[keyCur]=== main[keyCtl])
                if(findIndex > -1){
                    let objectSub = object[findIndex]
                    let children = objectSub.children?objectSub.children:[];
                    children.push(main)
                    object[findIndex] = {
                        ...objectSub,
                        children
                    }
                }else{
                    newList[max - minLev-1].push(main)
                }
            })
            newList[max - minLev-1] = object
        }
        if(newList.length > 0){
            list = this.generateTreeKey(newList[0])
        }
    }
    return list;

}

/**
 * It takes a list of objects, and adds a key property to each object in the list, and to each object
 * in each object's children list, and so on.
 * 
 * The key property is a string that is a concatenation of the index of the object in the list, and the
 * index of the object in each of its children lists.
 * 
 * @param list - the list of data
 * @param [key] - the key of the parent node
 */
module.exports.generateTreeKey = (list,key="") => { 

    if(list && list.length > 0){
        list =  list.map((main,index)=>{
            if(main.children && main.children.length > 0){
                let newChildren = main.children.map((item,indexSub)=>{
                    let keySub = key !== ""?(key+"-"+(index+1)+"-"+(indexSub+1)):((index+1)+"-"+(indexSub+1))
                    return {
                        ...item,
                        key : keySub,
                        data : item,
                        children : this.generateTreeKey(item.children,keySub)
                    }
                })
                return {
                    ...main,
                    key : key !== ""?(key+"-"+(index+1)):(""+(index+1)),
                    data : main,
                    children : newChildren
                }
            }else{
                return {
                    ...main,
                    data : main,
                    key : key !== ""?(key+"-"+(index+1)):(""+(index+1))
                }
            }
        })

    }
    return list
}

/**
 * It takes a list of objects, a value to search for, a condition to search for, and a key to return. 
 * 
 * It returns the value of the key that matches the condition. 
 * 
 * If the condition is not found, it returns null. 
 * 
 * If the condition is found, it returns the value of the key. 
 * 
 * If the condition is found, and the key is "object", it returns the object.
 * @param list - the array of objects
 * @param val - the value you are looking for
 * @param [condition=code] - the key to search for
 * @param [key=key] - the key you want to find
 */
module.exports.findTreeKey = (list,val,condition = "id",key="key") => { 
    var i;
    var result = null;
    if(list && list.length > 0){
        for(i=0; result === null && i < list.length; i++){
            if(list[i][condition]=== val){
                return key === "object"?list[i]:list[i][key]
            }else if(list[i].children !== undefined){
                result = this.findTreeKey(list[i].children, val,condition,key);
            }
        }
    }
    return result;
}

module.exports.setKeyTree = (keyData,key,type=1) => { 
    if(keyData && key ){
        return {
            ...keyData,
            [key] : {
                "checked": type===2?false:true,
                "partialChecked": type===2?true:false
            }
        }
    }
    return keyData
}

module.exports.onRenderSelectNode = (obj, node,tree) => { 
    if(obj.level > 1){
        let objTree = this.findTreeKey(tree,obj.parentKey, "key","object");
        if(objTree && objTree.children){
            let checkNode = objTree.children.every((e)=>{
                // console.log('node[e.key] !== undefined ',node[e.key] !== undefined);
                return node[e.key] !== undefined && node[e.key].checked === true
            })

            let parentKey = obj.parentKey.substring(0,obj.parentKey.lastIndexOf("-"))
            let level = obj.parentKey.split("-").length
            let newObj = {
                "key":obj.parentKe,
                parentKey,
                level
            }

            node = {
                ...node,
                [obj.parentKey]: {
                    checked: checkNode,
                    partialChecked: !checkNode,
                },
            }; 

            return this.onRenderSelectNode(newObj,node,tree)
        }
    }
    return node 
}

module.exports.changeKeyTree = (list,oldKey,newKey) => {
    list = list.map((e) => {
        if(e.children && NullUtil.NullArray(e.children).length > 0){
            let children = this.changeKeyTree(e.children,oldKey,newKey)
            let childrenName = oldKey === "children"?newKey:"children"
            e ={
                ...e,
                [newKey] : e[oldKey],
                [childrenName] : children
            }
            delete e[oldKey]
        }
        return e
    })
    return list
}