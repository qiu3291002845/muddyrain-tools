// 清除所有 Cookie -- 您可以通过使用 document.cookie 访问 cookie 并清除它来轻松清除存储在网页上的所有 cookie。
export var clearCookies = function () {
    document.cookie
        .split(';')
        .forEach(function (cookie) {
        return (document.cookie = cookie
            .replace(/^ +/, '')
            .replace(/=.*/, "=;expires=".concat(new Date(0).toUTCString(), ";path=/")));
    });
};
