
## Utility-fns 📝  
This package is helper functions
```
npm install utility-fns
```

## Main List Function 🚀  
- **Null** 
- **Replace** 
- **Text**
- **Tree**
- **Validate Input**
- **Store**
- **Generate**

## Example 
**Date Function**
```js
import {addDays,getCurYearTHgetCurYearTH} from 'utility-fns';

let date = new Date() //2023-08-03 10:00:00

console.log(addDays(date,1));  //  return '2023-08-04 10:00:00'
console.log(getCurYearTH());     //  return 2566
```

```js

import {getYearList} from 'utility-fns';

console.log(getYearList());     //  return '2556-2576' //current year +- 10
console.log(getYearList(2560,2570));     //  return '2560-2570'
console.log(getYearList(2020,2030));     //  return '2563-2573'

// return format
[
  { value : 2560, label : 2560, revalue : 2017 },
  { value : 2561, label : 2561, revalue : 2018 },
  ...
  { value : 2570, label : 2570, revalue : 2027 },
]

console.log(getYearList(2020,2030,'en'));     //  return '2020-2030'
// return format
[
  { value : 2020, label : 2020, revalue : 2563 },
  { value : 2021, label : 2021, revalue : 2564 },
  ...
  { value : 2030, label : 2023, revalue : 2573 },
]

```

```js
import {configDateTH} from 'utility-fns';

console.log(configDateTH())
return {
    firstDayOfWeek: 1,
    numthai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    dayNames: [ "อาทิตย์", "จันทร์", "อังคาร", "พุทธ", "พฤหัสบดี", "ศุกร์", "เสาร์", ],
    dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    monthNames: [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม" ],
    monthNamesShort: [ "ม.ค.", "ก.พ.", "มี.ค", "เม.ย", "พ.ค", "มิ.ย", "ก.ค.", "ส.ค","ก.ย.", "ต.ค.", "พ.ย.","ธ.ค." ],
    today: "วันนี้",
    clear: "ล้าง",
    dateFormat: "dd/mm/yyyy",
    weekHeader: "Sm",
  }

```

```js
import {getMonthData,getMonthList} from 'utility-fns';

console.log(getMonthList());
return [
  { index : 0, id : 1 , value : "1" , code : "01", label : "มกราคม" , short : "ม.ค." , full : "01 - มกราคม" ,fullShort : "01 - ม.ค."    }
  { index : 1, id : 2 , value : "2" , code : "02", label : "กุมภาพันธ์" , short : "ก.พ." , full : "02 - กุมภาพันธ์" ,fullShort : "02 - ก.พ."  }
  ...
  { index : 11, id : 12 , value : "12" , code : "12", label : "ธันวาคม" , short : "ธ.ค." , full : "12 - ธันวาคม" ,fullShort : "12 - ธ.ค."   }
]

console.log(getMonthList("EN"));
return [
  { index : 0, id : 1 , value : "1" , code : "01", label : "January" , short : "Jan", full : "01 - January" ,fullShort : "01 -  Jan"   }
  { index : 1, id : 2 , value : "2" , code : "02", label : "February" , short : "Feb", full : "02 - February" ,fullShort : "02 - Feb"   }
  ...
  { index : 11, id : 12 , value : "12" , code : "12", label : "December" , short : "Dec", full : "12 - December" ,fullShort : "12 - Dec" }
]

//default check values return label
console.log(getMonthData("6")); // return  "มกราคม"
console.log(getMonthData(6,"id","full")); // return  "01 - มกราคม""
console.log(getMonthData(6,"id","label","EN")); // return  "June"

```

```js
import {formatDateTH} from 'utility-fns';

FormatOptions {
    date : string | Date;
    type ?: boolean | string | number;
}

console.log(formatDateTH({ date : new Date() })) //return 03/08/2566 07:30:10
console.log(formatDate({ date : new Date(), type : false })) //return 03/08/2566
console.log(formatDate({ date : "2023-01-25" })) //return 25/01/2566 07:30:10

```

```js
import {formatDate} from 'utility-fns';

FormatOptions {
    date : string | Date;
    type ?: boolean | string | number;
    regEx ?: boolean; 
    regStr ?: string;
    format ?: number;
}

console.log(formatDate({ date : new Date() })) //return 2023-08-03 07:30:10
console.log(formatDate({ date : new Date(), type : false })) //return 2023-08-03
console.log(formatDate({ date : new Date(), format :1 })) //return 03-08-2023 07:30:10
console.log(formatDate({ date : new Date(), format :1 , regStr : "/" })) //return 03/08/2023 07:30:10
console.log(formatDate({ date : new Date() , regEx : false })) //return 20230803 073010

```

| **operate** 	|  **action**  	| **formate**            	| **result**          	| **detail**                                     	|
|:-----------:	|:------------:	|------------------------	|---------------------	|------------------------------------------------	|
|   **type**  	| 0,false      	| yyyy-mm-dd             	| 2023-08-03          	| only date                                      	|
|             	| 1,true       	| yyyy-mm-dd HH24:MI:SS  	| 2023-08-03 07:30:10 	| date and time                                  	|
|             	| 2,"FROM","F" 	| yyyy-mm-dd 23:59:59    	| 2023-08-03 23:59:59 	| date and fix time 23:59:59                     	|
|             	| 3,"TO","T"   	| yyyy-mm-dd 00:00:00    	| 2023-08-03 00:00:00 	| date and fix time 00:00:00                     	|
|  **format** 	| 0            	| yyyy-mm-dd HH24:MI:SS  	| 2023-08-03 07:30:10 	| **_default_**                                  	|
|             	| 1            	| dd-mm-yyyy HH24:MI:SS  	| 03-08-2023 07:30:10 	| swap year and day                              	|
|  **regEx**  	| false        	| yyyymmdd HH24MISS      	| 20230803 073010     	| repalce  **-** and **:**                       	|
|             	| true         	| yyyy-mm-dd HH24:MI:SS  	| 2023-08-03 07:30:10 	| **_default_**                                  	|
|  **regStr** 	| -            	|                        	|                     	| **_default_**                                  	|
|             	| / or etc     	| yyyy/mm/dd HH24:MI:SS  	| 2023/08/03 07:30:10 	| replace only date and **regEx** value is true. 	|


**Null Function**
```js
import {NullString,NullInt,ZeroToNull,NullToPoint,NullArray} from 'utility-fns';
//null undefined
console.log(NullString(null));  //  return ''
console.log(NullInt(null));     //  return 0
console.log(NullArray(null));     //  return []
console.log(ZeroToNull(0));     //  return ''
console.log(NullToPoint(null)); //  return '-'
```

**Text Function**
```js
import {RandomText,NumberFormat} from 'utility-fns';

console.log(RandomText()); //Ar12xderfv
console.log(RandomText(5)); //B7sM

console.log(NumberFormat(1234)); //1,234.00
console.log(NumberFormat(1234,false)); //1234

```

**Generate Function**
```js
import {randomRGB,randomRGBA} from 'utility-fns';

console.log(randomRGB()); // rgba(3, 189, 234)
console.log(randomRGBA()); // rgba(3, 189, 234, 0.2)

```

**Replace Function**
```js
import {replaceNull,replaceNoENtoTH,repNET,replaceDataToKey,repDTK} from 'utility-fns';

const key  = { name : "" , surname : "test", age : 0 , check : true, list : [], obj : {} }
let data = { name : "test", surname : null, age : null  }

console.log(replaceNoENtoTH(123)); //๑๒๓
console.log(repNET(123)); //๑๒๓

console.log(replaceNull(data)); //{ name : "", surname :"", age : "" }
console.log(replaceDataToKey(data,key)); //{  name : "test" , surname : "test", age : 0 , check : true }
console.log(repDTK(data,key)); //{  name : "test" , surname : "test", age : 0 , check : true, list : [], obj : {} }

```

**Tree Function**
```js
import {convertListToTree,findTreeKey,changeKeyTree} from 'utility-fns';

let list = [
    { id : 'science', label : 'science' , ctlId : '', level : 1 },
    { id : 'it', label : 'it' , ctlId : '', level : 1 },
    { id : 'physics', label : 'Physics' , ctlId : 'science', level : 2 },
    { id : 'chemistry', label : 'Chemistry' , ctlId : 'science', level : 2 },
    { id : 'biology', label : 'Biology' , ctlId : 'science', level : 2 },
    { id : 'programming', label : 'Programming' , ctlId : 'it', level : 2 },
    { id : 'database', label : 'Database' , ctlId : 'it', level : 2 },
    { id : 'mysql', label : 'MySql' , ctlId : 'database', level : 3 },
    { id : 'oracle', label : 'Oracle' , ctlId : 'database', level : 3 },
];

list = convertListToTree(list,"level" ,"ctlId", "id")
console.log(list); 

console.log("findeTreeKey ",findeTreeKey(list,'database','id')) //2-2
console.log("findeTreeKey ", findeTreeKey(list,'2-2-1','key','id')) //MySql

result convert : [
    {
        "id": "science",
        "label": "science",
        "ctlId": "",
        "level": 1,
        "children": [...]
,
        "key": "1",
        "data": {...}
    },
    {
        "id": "it",
        "label": "it",
        "ctlId": "",
        "level": 1,
        "children": [
            {
                "id": "programming",
                "label": "Programming",
                "ctlId": "it",
                "level": 2,
                "key": "2-1",
                "data": {
                    "id": "programming",
                    "label": "Programming",
                    "ctlId": "it",
                    "level": 2
                }
            },
            {
                "id": "database",
                "label": "Database",
                "ctlId": "it",
                "level": 2,
                "children": [
                    {
                        "id": "mysql",
                        "label": "MySql",
                        "ctlId": "database",
                        "level": 3,
                        "data": {
                            "id": "mysql",
                            "label": "MySql",
                            "ctlId": "database",
                            "level": 3
                        },
                        "key": "2-2-1"
                    },
                    {
                        "id": "oracle",
                        "label": "Oracle",
                        "ctlId": "database",
                        "level": 3,
                        "data": {
                            "id": "oracle",
                            "label": "Oracle",
                            "ctlId": "database",
                            "level": 3
                        },
                        "key": "2-2-2"
                    }
                ],
                "key": "2-2",
                "data": {
                    "id": "database",
                    "label": "Database",
                    "ctlId": "it",
                    "level": 2,
                    "children": [
                        {
                            "id": "mysql",
                            "label": "MySql",
                            "ctlId": "database",
                            "level": 3
                        },
                        {
                            "id": "oracle",
                            "label": "Oracle",
                            "ctlId": "database",
                            "level": 3
                        }
                    ]
                }
            }
        ],
        "key": "2",
        "data": {
            "id": "it",
            "label": "it",
            "ctlId": "",
            "level": 1,
            "children": [
                {
                    "id": "programming",
                    "label": "Programming",
                    "ctlId": "it",
                    "level": 2
                },
                {
                    "id": "database",
                    "label": "Database",
                    "ctlId": "it",
                    "level": 2,
                    "children": [
                        {
                            "id": "mysql",
                            "label": "MySql",
                            "ctlId": "database",
                            "level": 3
                        },
                        {
                            "id": "oracle",
                            "label": "Oracle",
                            "ctlId": "database",
                            "level": 3
                        }
                    ]
                }
            ]
        }
    }
]

```