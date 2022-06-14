/**
 * 获取 URL 参数
 * @param {String} str `接收一个字符串`
 * @returns {Object} `返回一个键值队对象`
 * 用法: getQueryParams('name')
 */
export declare const getQueryParams: (str: string) => {};
/**
 * 从 URL 获取查询参数(字符串)
 * @param { string } URL `接收一个字符串`
 * @returns {String} `返回url中的query字段`
 * 用法: getUrlParameters('https://www.baidu.com?a=1&b=2')
 */
export declare const getUrlParameters: (URL: string) => string;
/**
 * 获取 URL 参数
 * @param {String | Array} names `接收一个或一组键名，返回一个值或一组键值队`
 * @returns {String | Object} `传递字符串返回字符串值，传递字符串数组返回对应键值队`
 * 用法: getUrlParams('name' | ['name', 'age'])
 */
export declare function getUrlParams(names: string | string[], url?: string): string | object;
