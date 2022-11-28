import Highlight from '../../components/highlight';
export default function FindKthLargest() {

  const code = `
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];// Always pick the last element as a pivot
    let i = low - 1; // index of smaller element
    for (let j = low; j < high; j++) {
      // console.info('>>>>>> i:,', i, 'j:', j, 'arr[j]:', arr[j], ' arr:', arr)
      if (arr[j] < pivot) {
        i++;
        swap(arr, i,j);
      }
    }
  
    swap(arr, i + 1, high)
    return i + 1;
  }
  
  function quickSort(arr, low, high) {
    if (low >= high) {
      return arr;
    }
  
    let pIndex = partition(arr, low, high);
  
    quickSort(arr,low,pIndex-1)
    quickSort(arr,pIndex+1,high)
  }
  
  var findKthLargest = function(nums, k) {
    const len = nums.length;
    const arr = quickSort(nums,0,len-1);
    return nums[len-k]
  };
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/kth-largest-element-in-an-array/solutions/307351/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcode-/'>详细解题网址</a>
      <hr />
      <h3>解题思路:快速排序</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



