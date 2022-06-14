// 复制到剪贴板 -- 使用 navigator.clipboard.writeText 轻松将任何文本复制到剪贴板。
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
}
// 获取选定的文本 -- 使用内置的 getSelectionproperty 获取用户选择的文本。
export const getSelectedText = () => window.getSelection()?.toString()
getSelectedText()

// 检测暗模式 -- 使用以下代码检查用户的设备是否处于暗模式。
export const isDarkMode = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// 生成uuid -- 通过 blob 地址生成
export const uuid = (): string => {
  return URL.createObjectURL(new Blob(['']))
    .split('/')
    .pop() as string
}

/**
 * @param {Function} fn `目标函数`
 * @param {Number} time `延迟执行毫秒数`
 * @param {Boolean} immediate `true - 立即执行 false - 延迟执行`
 * @description 防抖函数
 */
export function debounce(
  fn: () => void,
  time: number = 350,
  immediate: boolean = true
) {
  let timer: NodeJS.Timeout
  return function () {
    const that = this
    const args = arguments
    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, time)
      if (callNow) {
        fn.apply(that, args)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply
      }, time)
    }
  }
}

/**
 * @param {Function} fn 目标函数
 * @param {Number} time 延迟执行毫秒数
 * @param {Boolean} type 1-立即执行，2-不立即执行
 * @description 节流函数
 */

export function throttle(fn: () => void, time: number = 350, type: 1 | 2 = 1) {
  let previous = 0
  let timeout: NodeJS.Timeout
  return function () {
    let that = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()

      if (now - previous > time) {
        fn.apply(that, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          fn.apply(that, args)
        }, time)
      }
    }
  }
}
