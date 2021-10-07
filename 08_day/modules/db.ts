var dbUrl = 'xxxxxxxx'

export function getData():any[] {
    console.log('获取数据库的连接');
    return [
        {
            title: 'Evildoer'
        },
        {
            title: 'Evildoer98'
        }
    ]
}

function save() {
    console.log('保存数据成功');
}

export {dbUrl}

// 只能使用一次
export default save 