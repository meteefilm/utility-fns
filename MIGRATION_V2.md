# utility-fns v2 Migration Notes

## Summary

Version 2 keeps the existing CommonJS entrypoint and the commonly used API names, while adding safer helpers for data mapping, object access, runtime conversion, locale data, and guarded execution.

## Recommended Migration Order

1. Upgrade projects that already use `utility-fns` and run their current build.
2. Keep existing imports such as `NullString`, `NullArray`, `formatDate`, `repDTK`, `TypeConverter`, and `sortIndexOfList`.
3. Replace repeated local helpers with the new shared helpers when touching those files.
4. Prefer the new explicit helpers for new code:
   - `getFirstValue`
   - `getValue`
   - `pickByKeys`
   - `joinText`
   - `buildName`
   - `buildFullName`
   - `getPath`
   - `setPath`
   - `normalizeText`
   - `cleanPayload`
   - `validateRequiredKeys`
   - `generateUUID`
   - `safeExecute`
   - `safeExecuteAsync`
   - `toStringSafe`
   - `isBlank`

## Notable Changes

- Package version is now `2.0.0`.
- License metadata is aligned to MIT.
- The accidental self dependency (`utility-fns: file:`) was removed.
- `TypeConverter.boolean` and `convertBoolean` were added.
- `validateCitizenId` now safely accepts number or string input.
- `Validator.isDate` now rejects invalid `Date` objects.
- `findTreeNode` now recurses correctly.
- Date formatting no longer depends on `String.prototype.replaceAll`, improving compatibility with older Node versions.
- Thai locale constants are exported and `getMonthList`/`getDayList` use readable Thai values.

## Object Access Helpers

Use `getFirstValue` when API payload keys can differ by casing or naming convention.

```js
const userId = getFirstValue(payload, ["userId", "user_id", "username", "login"]);
```

Use `buildFullName` for common name fields with mixed casing.

```js
const fullName = buildFullName(user);
```

Use `buildName` when you want to compose any label from selected keys.

```js
const companyName = buildName(company, ["companyTitle", "companyName"]);
const personName = buildName(user, [["name", "Name"], ["surName", "SurName"]]);
```

Use `generateUUID` for general code. Use `generateUUIDClient` when the code must only use browser crypto APIs, and `generateUUIDNode` when the code runs in Node.

```js
const id = generateUUID();
```

Use `validateRequiredKeys` for common form validation.

```js
const result = validateRequiredKeys(data, {
  keys: ["roleId", "status"],
  intKeys: ["seq"],
});

setSubmitted(result.submitted);
return result.valid;
```

For shorter form code, use `reqKeys`.

```js
const valid = reqKeys(data, ["roleId", "status"], ["seq"], true);
setSubmitted(!valid);
return valid;
```

Use `reqValues` when you already have values instead of keys.

```js
const valid = reqValues([data.roleId, data.status], [data.seq], true);
```

## Compatibility Notes

`NullString` keeps its old behavior for compatibility. It treats falsy values such as `0` as an empty string. For new code that needs to preserve `0`, prefer `toStringSafe`.
