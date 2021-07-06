"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONUtility = void 0;
const lodash_1 = require("lodash");
class JSONUtility {
    static stringify(value) {
        if (lodash_1.isEmpty(value)) {
            return '{}';
        }
        return JSON.stringify(value, JSONUtility.getCircularReplacer());
    }
    static parse(value) {
        return JSON.parse(value || '{}');
    }
    static isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
exports.JSONUtility = JSONUtility;
JSONUtility.getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
//# sourceMappingURL=index.js.map