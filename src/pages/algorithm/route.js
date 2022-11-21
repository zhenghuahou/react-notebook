import Fib from './fib'
import ClimbStairs from './climbStairs'
import Sqrt from './sqrt'

const genConfig = function () {
    const config = [
        {
            path: "fib",
            element: <Fib />,
            title: '斐波那契数'
        },
        {
            path: "climbStairs",
            element: <ClimbStairs />,
            title: '爬楼梯'
        },
        {
          path: "sqrt",
          element: <Sqrt />,
          title: '算数平方根'
      }
      ];

    config.map(item => {
        item.path = item.path.toLowerCase();
        return item
    })
    return config
}


export default genConfig();