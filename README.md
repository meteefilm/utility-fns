
## Utility-fns 📝  
This package is helper functions
```
npm install utility-fns
```

## Main List Function 🚀  
- **Null** 
- **Array**
- **Replace** 
- **Text**
- **Validate Input**
- **Store**

## Example 
**Null Function**
```js
import {NullString} from 'utility-fns';

console.log(NullString(null)); //  return ''

```

**ArrayList Function**
```js
import {indexOfMax,indexOfMsList,ObjectOfMsList,sortIndexOfList} from 'utility-fns';

const list = [
    { seq :1, id : '15', name : 'AAAAA' },
    { seq :2, id : '10', name : 'BBBBB' }
]

console.log(indexOfMax(list,"seq")); //  return 2
console.log(indexOfMsList(list,'AAAAA'','name','id')); //  return 15
console.log(ObjectOfMsList(list,'BBBBB','name')); //  return { seq :2, id : '10', name : 'BBBBB' }

```
