export declare const isDateValid: (s: string) => boolean;
export declare const dayOfYear: (date: Date) => number;
export declare const dayDif: (date1: Date, date2: Date) => number;
export declare const timeFromDate: (date: Date) => string;
/**
 *
 * @param  { Date } date `日期类型 new Date()`
 * @param  { String } format `格式类型字符串`
 * `两位数复数的为补零 单位数为不补零 大写H为24小时制度,小写为12小时制度`
 * `[YYYY,yyyy](年) [MM,M](月) [WW,W,ww,w](星期) [DD,D,dd,d](日) [HH,H,hh,h](小时) [mm,m](分钟) [ss,s](秒)`
 * @returns { String } `格式化后的字符串`
 */
export declare const dateFormat: (date: Date, format?: string) => string;
