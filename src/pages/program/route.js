import ArrayToRemoveDuplicates from './arrayToRemoveDuplicates'
import ArrayFlat from './arrayFlat'
import Curry from './curry'
import NumFormat from './numFormat'

const genConfig = function () {
    const config = [
        {
            path: "arrayToRemoveDuplicates",
            element: <ArrayToRemoveDuplicates />,
            title: '数组去重'
        },
        {
            path: "arrayFlat",
            element: <ArrayFlat />,
            title: '数组扁平化'
        }, {
            path: "curry",
            element: <Curry />,
            title: '柯里化(curry)函数实现'
        },
        {
            path: "numFormat",
            element: <NumFormat />,
            title: '千位分隔符实现'
        }
    ];

    config.map(item => {
        item.path = item.path.toLowerCase();
        return item
    })
    return config
}


export default genConfig();