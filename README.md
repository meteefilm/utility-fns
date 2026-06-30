# utility-fns

Shared JavaScript utility functions for company Node, Next.js, and React projects.

```bash
npm install utility-fns
```

## Version 2

`utility-fns@2.0.0` keeps the old CommonJS entrypoint and common function names, while adding helpers for object mapping, form validation, payload cleanup, UUID generation, strings, dates, and locale data.

```js
const {
  NullString,
  formatDate,
  getFirstValue,
  buildName,
  reqKeys,
  reqValues,
  generateUUID,
} = require("utility-fns");
```

## Main Groups

- Null/default helpers
- Convert/type helpers
- Date helpers
- Object/data helpers
- Payload/form helpers
- String helpers
- Array/list helpers
- Tree helpers
- Validate helpers
- UUID helpers
- Locale constants

## Object Helpers

Use `getFirstValue` when payload keys can differ by casing or naming convention.

```js
const userId = getFirstValue(payload, ["userId", "user_id", "username", "login"]);
```

Use `buildName` to compose any label from selected keys.

```js
const companyName = buildName(company, ["companyTitle", "companyName"]);
const personName = buildName(user, [["name", "Name"], ["surName", "SurName"]]);
```

Use `buildFullName` for the common person-name pattern. It supports `titleName`, `title`, or `prefix` before the name.

```js
const fullName = buildFullName({
  titleName: "Title",
  Name: "First",
  SurName: "Last",
});
```

Nested object helpers:

```js
const value = getPath(data, "user.profile.id");
const nextData = setPath(data, "user.profile.id", "U001");
const renamed = renameKeys(data, { user_id: "userId" });
const omitted = omitByKeys(data, ["password"]);
```

## Form Validation

Use `reqKeys` for short key-based required validation.

```js
const onValidate = (_data) => {
  const valid = reqKeys(_data, ["roleId", "status"], ["seq"], true);
  setSubmitted(!valid);
  return valid;
};
```

Signature:

```js
reqKeys(data, keys, intKeys, allowZero);
```

Use `reqCheck` when you need details.

```js
const result = reqCheck(data, ["roleId", "status"], ["seq"]);

console.log(result.valid);
console.log(result.submitted);
console.log(result.missingAll);
```

Use `reqValues` when you already have values instead of keys.

```js
const valid = reqValues([data.roleId, data.status], [data.seq], true);
```

Full validation helpers are also available:

```js
const result = validateRequiredKeys(data, {
  keys: ["roleId", "status"],
  intKeys: ["seq"],
  allowZero: true,
});
```

## Payload Helpers

```js
const cleaned = cleanPayload(formData, {
  trim: true,
  removeEmpty: true,
});

const trimmed = trimPayload(formData);
const nullPayload = emptyToNull(formData);
const emptyPayload = nullToEmpty(formData);
const missing = getMissingKeys(formData, ["roleId", "status"]);
```

## String Helpers

```js
normalizeText("  A   B  "); // "A B"
onlyDigits("A-123-B"); // "123"
maskText("1234567890", { visibleStart: 2, visibleEnd: 2 }); // "12******90"
padNumber(7, 3); // "007"
isEnglishText("John Doe"); // true
```

## UUID Helpers

Use `generateUUID` for general code. It chooses a suitable implementation for the current runtime.

```js
const id = generateUUID();
```

Runtime-specific helpers are also available:

```js
const clientId = generateUUIDClient();
const nodeId = generateUUIDNode();
const aliasId = uuid();
```

## Date Helpers

The old names still work:

```js
formatDate({ date: new Date() });
formatDateInt({ date: new Date() });
formatDateTH({ date: new Date() });
```

New aliases are easier to read:

```js
formatDateTime(new Date());
formatDateOnly(new Date());
formatDateCompact(new Date(), true);
formatThaiDate(new Date(), true);
parseDateInt("20240102");
```

## Convert Helpers

```js
convertNumber("123"); // 123
convertString(null, "N/A"); // "N/A"
convertBoolean("Y"); // true

TypeConverter.number("123");
TypeConverter.string(null);
TypeConverter.boolean("0");
TypeConverter.array(null);
```

## Null Helpers

Existing helpers are kept for compatibility:

```js
NullString(null); // ""
NullInt(null); // 0
NullArray(null); // []
NullToPoint(null); // "-"
```

For new code that needs to preserve `0`, prefer:

```js
toStringSafe(0); // "0"
isBlank(" "); // true
```

## Array/List Helpers

```js
sortIndexOfList({ arr: list });
sortAndOrderList({ arr: list, key: "index" });
groupBy(users, "department");
findList({ arr: options, code: "A", key: "value", name: "label" });
```

## Tree Helpers

```js
const tree = convertListToTree(list, "level", "parentId", "id");
const key = findTreeKey(tree, "menu001", "id", "key");
const node = findTreeNode(tree, "1-1");
```

## Locale Constants

```js
TH_MONTH_NAMES;
TH_MONTH_NAMES_SHORT;
EN_MONTH_NAMES;
EN_DAY_NAMES;
TH_CALENDAR_LOCALE;
```

## Migration Notes

See `MIGRATION_V2.md` for upgrade notes and compatibility details.
