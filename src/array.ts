// 从数组中删除重复项
export const removeDuplicates = (arr: any[]): any[] => [...new Set(arr)]

// 洗牌数组重组 -- 使用排序和随机方法对数组进行洗牌非常容易。
export const shuffleArray = (arr: any[]): any[] =>
  arr.sort(() => 0.5 - Math.random())

// 检查数组是否为空 -- 检查数组是否为空的简单单行程序将返回 true 或 false。
export const isNotEmpty = (arr: any): boolean =>
  Array.isArray(arr) && arr.length > 0

// 从数组中随机选择一个值
export const randomItem = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)]
