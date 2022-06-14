// 复制到剪贴板 -- 使用 navigator.clipboard.writeText 轻松将任何文本复制到剪贴板。
export var copyToClipboard = function (text) {
    navigator.clipboard.writeText(text);
};
// 获取选定的文本 -- 使用内置的 getSelectionproperty 获取用户选择的文本。
export var getSelectedText = function () { var _a; return (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString(); };
getSelectedText();
// 检测暗模式 -- 使用以下代码检查用户的设备是否处于暗模式。
export var isDarkMode = function () {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};
// 生成uuid -- 通过 blob 地址生成
export var uuid = function () {
    return URL.createObjectURL(new Blob(['']))
        .split('/')
        .pop();
};
/**
 * @param {Function} fn `目标函数`
 * @param {Number} time `延迟执行毫秒数`
 * @param {Boolean} immediate `true - 立即执行 false - 延迟执行`
 * @description 防抖函数
 */
export function debounce(fn, time, immediate) {
    if (time === void 0) { time = 350; }
    if (immediate === void 0) { immediate = true; }
    var timer;
    return function () {
        var that = this;
        var args = arguments;
        if (timer)
            clearTimeout(timer);
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, time);
            if (callNow) {
                fn.apply(that, args);
            }
        }
        else {
            timer = setTimeout(function () {
                fn.apply;
            }, time);
        }
    };
}
/**
 * @param {Function} fn 目标函数
 * @param {Number} time 延迟执行毫秒数
 * @param {Boolean} type 1-立即执行，2-不立即执行
 * @description 节流函数
 */
export function throttle(fn, time, type) {
    if (time === void 0) { time = 350; }
    if (type === void 0) { type = 1; }
    var previous = 0;
    var timeout;
    return function () {
        var that = this;
        var args = arguments;
        if (type === 1) {
            var now = Date.now();
            if (now - previous > time) {
                fn.apply(that, args);
                previous = now;
            }
        }
        else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(function () {
                    timeout = null;
                    fn.apply(that, args);
                }, time);
            }
        }
    };
}
