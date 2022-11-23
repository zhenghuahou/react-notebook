import Fib from './fib'
import ClimbStairs from './climbStairs'
import Sqrt from './sqrt'
import InvertTree from './invertTree'
import QuickSort from './quicksort'
import FindKthLargest from './findKthLargest'
import ReverseList from './reverseList'
import ReverseString from './reverseString'
import MaxDepth from './maxDepth'

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
            path: "reverseString",
            element: <ReverseString />,
            title: '反转字符串'
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
        }
    ];

    config.map(item => {
        item.path = item.path.toLowerCase();
        return item
    })
    return config
}


export default genConfig();