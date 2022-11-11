import Operator from './operator'
import Apply from './apply&call'
import New from './new'


const genConfig = function () {
    const config = [
        {
            path: "Operator",
            element: <Operator />,
            title: '操作费相关运算'
        }, {
            path: "Apply",
            element: <Apply />,
            title: 'apply与call'
        }, {
            path: "New",
            element: <New />,
            title: 'new操作符'
        }];

    config.map(item => {
        item.path = item.path.toLowerCase();
    })

    console.info(' config:', config);
    return config
}


export default genConfig();