// 生成随机十六进制 -- 生成随机十六进制颜色。
export var randomHexColor = function () {
    return "#".concat(Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0'));
};
// 数字转千分位
export var numberToThousandths = function (number) {
    // 转换为字符串数组
    var str = (number + '').split('.');
    var intList = str[0].split('');
    var floatStr = str[1] || '';
    var res = '';
    intList.reverse().map(function (item, index) {
        if (index !== 0 && index % 3 === 0) {
            res = item + ',' + res;
        }
        else {
            res = item + res;
        }
    });
    var float = floatStr ? '.' + floatStr : '';
    return res + float;
};
// 检查一个数字是偶数还是奇数
export var isEven = function (num) { return num % 2 === 0; };
// 求数字的平均值 -- 使用 reduce 方法找到多个数字之间的平均值。
export var average = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a + b; }) / args.length;
};
// 去除数字之外的所有字符
export var removeStr = function (str) {
    return Number(str.replace(/\D/g, ''));
};
