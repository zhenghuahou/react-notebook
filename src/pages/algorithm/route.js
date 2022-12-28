import Fib from './fib'
import ClimbStairs from './climbStairs'
import Sqrt from './sqrt'
import InvertTree from './invertTree'
import QuickSort from './quicksort'
import FindKthLargest from './findKthLargest'
import SumOfkNumber from './sumOfkNumber'
import ReverseList from './reverseList'
import ReverseString from './reverseString'
import MaxDepth from './maxDepth'
import HasCycle from './hasCycle'
import GetSmallestString from './getSmallestString'
import ShortestToChar from './shortestToChar'

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
    },
    {
      path: "reverseList",
      element: <ReverseList />,
      title: '反转链表'
    },
    {
      path: "hasCycle",
      element: <HasCycle />,
      title: '链表有环'
    },
    {
      path: "reverseString",
      element: <ReverseString />,
      title: '反转字符串'
    },
    {
      path: "ShortestToChar",
      element: <ShortestToChar />,
      title: '字符的最短距离'
    },
    {
      path: "maxDepth",
      element: <MaxDepth />,
      title: '二叉树的最大深度'
    },
    {
      path: "findKthLargest",
      element: <FindKthLargest />,
      title: '数组中的第K个最大元素'
    },
    {
      path: "sumOfkNumber",
      element: <SumOfkNumber />,
      title: '寻找和为定值的多个数'
    },
    {
      path: "getSmallestString",
      element: <GetSmallestString />,
      title: '贪心：具有给定数值的最小字符串'
    }
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();