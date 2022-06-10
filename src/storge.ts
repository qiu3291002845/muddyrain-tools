// 清除所有 Cookie -- 您可以通过使用 document.cookie 访问 cookie 并清除它来轻松清除存储在网页上的所有 cookie。
export const clearCookies = (): void => {
  document.cookie
    .split(';')
    .forEach(
      cookie =>
        (document.cookie = cookie
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    )
}
