var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 从数组中删除重复项
export var removeDuplicates = function (arr) { return __spreadArray([], __read(new Set(arr)), false); };
// 洗牌数组重组 -- 使用排序和随机方法对数组进行洗牌非常容易。
export var shuffleArray = function (arr) {
    return arr.sort(function () { return 0.5 - Math.random(); });
};
// 检查数组是否为空 -- 检查数组是否为空的简单单行程序将返回 true 或 false。
export var isNotEmpty = function (arr) {
    return Array.isArray(arr) && arr.length > 0;
};
// 从数组中随机选择一个值
export var randomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
