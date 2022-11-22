import Fib from './fib'
import ClimbStairs from './climbStairs'
import Sqrt from './sqrt'
import InvertTree from './invertTree'
import QuickSort from './quicksort'

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
    },
    {
      path: "invertTree",
      element: <InvertTree />,
      title: '翻转二叉树'
    },
    {
      path: "quickSort",
      element: <QuickSort />,
      title: '快速排序'
    }
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();