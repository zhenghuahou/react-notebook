import Fib from './fib'

const genConfig = function () {
    const config = [
        {
            path: "fib",
            element: <Fib />,
            title: '斐波那契数'
        }];

    config.map(item => {
        item.path = item.path.toLowerCase();
        return item
    })
    return config
}


export default genConfig();