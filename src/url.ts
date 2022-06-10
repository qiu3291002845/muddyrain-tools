/**
 * 获取 URL 参数
 * @param {String} str `接收一个字符串`
 * @returns {Object} `返回一个键值队对象`
 * 用法: getQueryParams('name')
 */
export const getQueryParams = (str: string): {} => {
  if (str) {
    const query: any = {}
    str.split('&').forEach(item => {
      const key = item.split('=')[0]
      const value = item.split('=')[1]
      query[key as string] = value
    })
    return query
  } else {
    return Error('The parameter of querystring is undefined')
  }
}

/**
 * 从 URL 获取查询参数(字符串)
 * @param { string } URL `接收一个字符串`
 * @returns {String} `返回url中的query字段`
 * 用法: getUrlParameters('https://www.baidu.com?a=1&b=2')
 */
export const getUrlParameters = (URL: string): string => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split('?')[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
  return JSON.stringify(URL)
}

/**
 * 获取 URL 参数
 * @param {String | Array} names `接收一个或一组键名，返回一个值或一组键值队`
 * @returns {String | Object} `传递字符串返回字符串值，传递字符串数组返回对应键值队`
 * 用法: getUrlParams('name' | ['name', 'age'])
 */
export const getUrlParams = (
  names: string | string[],
  url?: string
): string | object => {
  if (!names) throw 'names 字段未定义'
  const type = Object.prototype.toString.call(names)
  const search =
    url ||
    window.location.search.substring(1) ||
    window.location.hash.split('?')[1] ||
    ''
  const searchArray = search.split('&')
  // 字符串
  if (type === '[object String]') {
    for (const index in searchArray) {
      const pair = searchArray[index].split('=')
      if (pair[0] === names) return pair[1]
    }
    return undefined
  }
  // 数组
  if (type === '[object Array]') {
    if (!names.length) throw 'names 数组段为空'
    const params: any = {}
    ;(names as []).forEach((key: string) => {
      for (const index in searchArray) {
        const pair = searchArray[index].split('=')
        if (pair[0] === key) {
          params[key] = pair[1]
        }
      }
    })
    return params
  }
  throw 'names 参数不合法'
}
