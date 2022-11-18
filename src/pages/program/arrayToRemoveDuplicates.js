import Highlight from '../../components/highlight';
export default function ArrayToRemoveDuplicates() {
  const code = `
    var array = [1, 2, 1, 1, '1'];

    function unique(array) {
       return Array.from(new Set(array));
    }
    
    console.log(unique(array)); // [1, 2, "1"]
    `
  return (
    <>
      <p>
        数组去重
      </p>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}