// 检查日期是否有效 -- 使用以下代码段检查给定日期是否有效。 YYYY-MM-DD
export var isDateValid = function (s) {
    var reg = /^\d{4}-(?:0\d|1[0-2])-(?:[0-2]\d|3[01])( (?:[01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/;
    var str = s;
    if (str == '')
        return true;
    if (reg.test(str)) {
        return true;
    }
    return false;
};
// 查找一年中的哪一天 -- 查找给定日期的哪一天。
export var dayOfYear = function (date) {
    var r = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date.valueOf() - Number(r)) / 1000 / 60 / 60 / 24);
};
// 求两天之间的天数 -- 查找 2 天之间的天数
export var dayDif = function (date1, date2) {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
};
// 日期记录时间 -- 小时:分钟:秒
export var timeFromDate = function (date) {
    return date.toTimeString().slice(0, 8);
};
/**
 *
 * @param  { Date } date `日期类型 new Date()`
 * @param  { String } format `格式类型字符串`
 * `两位数复数的为补零 单位数为不补零 大写H为24小时制度,小写为12小时制度`
 * `[YYYY,yyyy](年) [MM,M](月) [WW,W,ww,w](星期) [DD,D,dd,d](日) [HH,H,hh,h](小时) [mm,m](分钟) [ss,s](秒)`
 * @returns { String } `格式化后的字符串`
 */
export var dateFormat = function (date, format) {
    if (format === void 0) { format = 'YYYY-MM-dd HH:mm:ss'; }
    // 补零操作
    var paddingZero = function (d) { return (d < 10 ? '0' + d : d); };
    // 12制度
    var institutions_12 = function (d) { return (d > 12 ? 12 - d : d); };
    var config = {
        YYYY: date.getFullYear(),
        yyyy: date.getFullYear(),
        MM: paddingZero(date.getMonth() + 1),
        M: date.getMonth() + 1,
        WW: '0' + date.getDay(),
        ww: '0' + date.getDay(),
        W: date.getDay(),
        w: date.getDay(),
        DD: paddingZero(date.getDate()),
        dd: paddingZero(date.getDate()),
        D: date.getDate(),
        d: date.getDate(),
        HH: paddingZero(date.getHours()),
        H: date.getHours(),
        hh: paddingZero(institutions_12(date.getHours())),
        h: institutions_12(date.getHours()),
        mm: paddingZero(date.getMinutes()),
        m: date.getMinutes(),
        ss: paddingZero(date.getSeconds()),
        s: date.getSeconds(),
    };
    var key;
    for (key in config) {
        format = format.replace(key, String(config[key]));
    }
    return format;
};
