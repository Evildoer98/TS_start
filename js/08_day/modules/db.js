"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = exports.getData = void 0;
var dbUrl = 'xxxxxxxx';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的连接');
    return [
        {
            title: 'Evildoer'
        },
        {
            title: 'Evildoer98'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据成功');
}
// 只能使用一次
exports.default = save;
