/**
 * @param {Function} fn `目标函数`
 * @param {Number} time `延迟执行毫秒数`
 * @param {Boolean} immediate `true - 立即执行 false - 延迟执行`
 * @description 防抖函数
 */
export declare function debounce(fn: () => void, time?: number, immediate?: boolean): () => void;
/**
 * @param {Function} fn 目标函数
 * @param {Number} time 延迟执行毫秒数
 * @param {Boolean} type 1-立即执行，2-不立即执行
 * @description 节流函数
 */
export declare function throttle(fn: () => void, time?: number, type?: 1 | 2): () => void;
