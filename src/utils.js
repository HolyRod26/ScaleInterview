"use strict";
exports.__esModule = true;
exports.sortArray = exports.getChars = void 0;
function getChars(word) {
    return Array.from(word);
}
exports.getChars = getChars;
function sortArray(array, side, getValue) {
    if (side === void 0) { side = "desc"; }
    if (getValue === void 0) { getValue = function (value) { return value; }; }
    return array.sort(function (a, b) {
        return side === "desc" ? getValue(b) - getValue(a) : getValue(a) - getValue(b);
    });
}
exports.sortArray = sortArray;
//# sourceMappingURL=utils.js.map