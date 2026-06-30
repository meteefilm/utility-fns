"use strict";

const assert = require("assert");
const utils = require("../index");

const validCitizenId = "1101700203450";
assert.strictEqual(utils.validateCitizenId(validCitizenId), true);
assert.strictEqual(utils.validateCitizenId("1101700203451"), false);
assert.strictEqual(utils.Validator.isDate(new Date("invalid")), false);

assert.strictEqual(utils.convertBoolean("Y"), true);
assert.strictEqual(utils.convertBoolean("0"), false);
assert.strictEqual(utils.convertBoolean("", true), true);
assert.strictEqual(utils.findList({ arr: [{ value: "A", label: "Alpha" }], code: "A" }), "Alpha");

const payload = {
    User_ID: "  user-001 ",
    customer_id: null,
    login: "fallback",
};
assert.strictEqual(utils.getFirstValue(payload, ["userId", "user_id", "login"]), "user-001");
assert.strictEqual(utils.getFirstValue(payload, ["customerId", "login"]), "fallback");
assert.strictEqual(utils.getFirstValue(payload, ["missing"], { defaultValue: "N/A" }), "N/A");
assert.strictEqual(utils.getValue(payload, "USER_ID"), "  user-001 ");

assert.deepStrictEqual(utils.pickByKeys(payload, ["user_id", "missing"], { includeMissing: true, defaultValue: "" }), {
    user_id: "  user-001 ",
    missing: "",
});

assert.deepStrictEqual(utils.normalizeKeys({ user_id: "1", UserName: "A" }), {
    userId: "1",
    UserName: "A",
});
assert.strictEqual(utils.getPath({ a: { b: { c: 10 } } }, "a.b.c"), 10);
assert.deepStrictEqual(utils.setPath({}, "a.b.c", 10), { a: { b: { c: 10 } } });
assert.deepStrictEqual(utils.omitByKeys({ User_ID: "1", name: "A" }, ["user_id"]), { name: "A" });
assert.deepStrictEqual(utils.renameKeys({ User_ID: "1", name: "A" }, { user_id: "userId" }), { name: "A", userId: "1" });

assert.strictEqual(utils.joinText([" Title ", "", "First", null, "Last"]), "Title First Last");
assert.strictEqual(utils.buildName({ companyTitle: "Company", companyName: "Example Co., Ltd." }, ["companyTitle", "companyName"]), "Company Example Co., Ltd.");
assert.strictEqual(utils.buildName({ Name: "First", SurName: "Last" }, [["name", "Name"], ["surName", "SurName"]]), "First Last");
assert.strictEqual(utils.buildFullName({ titleName: "Title", Name: "First", SurName: "Last" }), "Title First Last");

assert.strictEqual(utils.safeExecute(() => JSON.parse("{"), "bad"), "bad");
assert.strictEqual(utils.safeExecute(() => 10, 0), 10);

assert.strictEqual(utils.normalizeText("  A   B  "), "A B");
assert.strictEqual(utils.removeWhitespace("A B\tC"), "ABC");
assert.strictEqual(utils.onlyDigits("A-123-B"), "123");
assert.strictEqual(utils.maskText("1234567890", { visibleStart: 2, visibleEnd: 2 }), "12******90");
assert.strictEqual(utils.padNumber(7, 3), "007");
assert.strictEqual(utils.isEnglishText("John Doe"), true);

assert.deepStrictEqual(utils.trimPayload({ name: " A ", child: { code: " B " } }), { name: "A", child: { code: "B" } });
assert.deepStrictEqual(utils.emptyToNull({ name: "" }), { name: null });
assert.deepStrictEqual(utils.nullToEmpty({ name: null }), { name: "" });
assert.deepStrictEqual(utils.removeEmptyKeys({ a: "", b: 0, c: null, d: "ok" }), { b: 0, d: "ok" });
assert.deepStrictEqual(utils.cleanPayload({ a: " ", b: " ok " }, { trim: true, removeEmpty: true }), { b: "ok" });
assert.strictEqual(utils.requiredByKeys({ user: { id: "1" } }, ["user.id"]), true);
assert.deepStrictEqual(utils.getMissingKeys({ user: { id: "" } }, ["user.id"]), ["user.id"]);
assert.deepStrictEqual(
    utils.validateRequiredKeys({ roleId: "", status: "A", seq: 0 }, { keys: ["roleId", "status"], intKeys: ["seq"] }),
    {
        valid: false,
        submitted: true,
        missingKeys: ["roleId"],
        missingIntKeys: ["seq"],
        missingNumberKeys: ["seq"],
        missingAll: ["roleId", "seq"],
    }
);
assert.strictEqual(utils.isRequiredValid({ roleId: "1", status: "A", seq: 0 }, { keys: ["roleId", "status"], intKeys: ["seq"], allowZero: true }), true);
assert.strictEqual(utils.reqKeys({ roleId: "1", status: "A", seq: 1 }, ["roleId", "status"], ["seq"]), true);
assert.strictEqual(utils.reqKeys({ roleId: "1", status: "A", seq: 0 }, ["roleId", "status"], ["seq"], true), true);
assert.strictEqual(utils.reqValues(["1", "A"], [1]), true);
assert.strictEqual(utils.reqValues(["1", ""], [1]), false);
assert.deepStrictEqual(utils.reqValueCheck(["1", ""], [0]), {
    valid: false,
    submitted: true,
    missingValueIndexes: [1],
    missingIntValueIndexes: [0],
    missingNumberValueIndexes: [0],
    missingAllIndexes: [1, 0],
});

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
assert.match(utils.generateUUID(), uuidPattern);
assert.match(utils.generateUUIDNode(), uuidPattern);
assert.match(utils.generateUUIDClient(), uuidPattern);

const tree = utils.generateTreeKey([{ id: "root", children: [{ id: "child" }] }]);
assert.strictEqual(utils.findTreeNode(tree, "1-1").id, "child");

const formatted = utils.formatDate({ date: new Date("2024-01-02T03:04:05"), type: "RTS" });
assert.match(formatted, /^\d{8}\d{6}$/);
assert.match(utils.formatDateTime(new Date("2024-01-02T03:04:05")), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
assert.match(utils.formatDateOnly(new Date("2024-01-02T03:04:05")), /^\d{4}-\d{2}-\d{2}$/);
assert.match(utils.formatDateCompact(new Date("2024-01-02T03:04:05"), true), /^\d{14}$/);
assert.ok(utils.parseDateInt("20240102") instanceof Date);

assert.strictEqual(utils.EN_MONTH_NAMES[0], "January");
assert.strictEqual(utils.getMonthData("1", "value", "label", "EN"), "January");

console.log("utility-fns smoke tests passed");
