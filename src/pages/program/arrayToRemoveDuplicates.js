import Highlight from '../../components/highlight';
export default function ArrayToRemoveDuplicates() {
  const code = `
    var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];


    function unique(array) {
       return Array.from(new Set(array));
    }
    
    console.log(unique(array)); // [1, '1', null, undefined, new String('1'), new String('1'), /a/, /a/, NaN];
    `
  const code2 = `
    var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];
    ;

    function unique(array) {
      return [...new Set(array)];
    }
    
    console.log(unique(array)); // [1, '1', null, undefined, new String('1'), new String('1'), /a/, /a/, NaN];
    `
  const code3 = `
  var array =	[/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined,{val:1},{val:2}]

  function unique(array) {
      var res = array.filter(function(item, index, array){
          return array.indexOf(item) === index;
      })
      return res;
  }
  
  console.log(unique(array)); // [/a/, /a/, "1", 1, String, null, undefined,{val:1},{val:2}]
    `
  const code4 = `
  var aa = {val:125}
  var array =	[/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined,{val:1},{val:2},aa,aa]
  function unique (arr) {
      const seen = new Map()
      console.info('seen:',seen);
      return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
  }
  console.log(unique(array)); // [/a/, /a/, "1", 1, String, NaN, null, undefined,{val:1},{val:2},{val:125}]
  `
  return (
    <>
      <p>
        数组去重(ES6 set方法)
      </p>
      <Highlight className="code">
        {code}
      </Highlight>
      <p>
        简化版本
      </p>
      <Highlight className="code">
        {code2}
      </Highlight>
      <p>
        数组去重(filter方法)(NaN会被忽略掉)
      </p>
      <Highlight className="code">
        {code3}
      </Highlight>
      <p>
        数组去重(map方法+filter方法)((NaN不会被忽略掉))
      </p>
      <Highlight className="code">
        {code4}
      </Highlight>
    </>
  )
}