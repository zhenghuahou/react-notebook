import Highlight from '../../components/highlight';
export default function QuickSort() {

  const code = `
  //交互数组的2项
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, low, high) {
    let pivot = arr[high];// Always pick the last element as a pivot
    let i = low - 1; // index of smaller element
    for (let j = low; j < high; j++) {
      console.info('>>>>>> i:,', i, 'j:', j, 'arr[j]:', arr[j], ' arr:', arr)
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

  let arr = [10, 80, 30, 90, 40, 50, 70];
  let n = arr.length;

  quickSort(arr, 0, n - 1);
  console.info(' arr:', arr);
  `

  return (
    <>
      <a href='https://www.kuaishou.com/short-video/3xytg4s3xviab3u?utm_source=video&utm_medium=video&utm_campaign=video'>视频讲解</a><br/>
      <a href='https://www.geeksforgeeks.org/quick-sort/'>详细解题网址1</a>
      <br/>
      <a href='https://www.runoob.com/w3cnote/quick-sort-2.html'>详细解题网址2</a>
      <hr />
      <img alt='' src='https://www.runoob.com/wp-content/uploads/2019/03/quickSort.gif'></img>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



