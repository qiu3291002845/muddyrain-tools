// 生成随机十六进制 -- 生成随机十六进制颜色。
export const randomHexColor = (): string =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`

// 数字转千分位
export const numberToThousandths = (number: number): string => {
  // 转换为字符串数组
  const str = (number + '').split('.')
  const intList = str[0].split('')
  const floatStr = str[1] || ''
  let res = ''
  intList.reverse().map((item, index) => {
    if (index !== 0 && index % 3 === 0) {
      res = item + ',' + res
    } else {
      res = item + res
    }
  })
  const float = floatStr ? '.' + floatStr : ''
  return res + float
}

// 检查一个数字是偶数还是奇数
export const isEven = (num: number): boolean => num % 2 === 0

// 求数字的平均值 -- 使用 reduce 方法找到多个数字之间的平均值。
export const average = (...args: number[]): number => {
  return args.reduce((a: number, b: number) => a + b) / args.length
}
// 去除数字之外的所有字符
export const removeStr = (str: string): number => {
  return Number(str.replace(/\D/g, ''))
}
