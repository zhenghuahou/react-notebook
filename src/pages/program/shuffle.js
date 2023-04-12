/* eslint-disable no-prototype-builtins */
/*
 * @Author: zhenghuahou 2430370966@qq.com
 * @Date: 2023-04-12 15:55:55
 * @LastEditors: zhenghuahou 2430370966@qq.com
 * @LastEditTime: 2023-04-12 18:20:11
 * @FilePath: /fe-notebook/src/pages/program/deepcopy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Highlight from "../../components/highlight";
export default function ArrayFlat() {
  const code = `
    function shuffle(arr) {
      let j = arr.length;
      while(j>0){
        let randomIndex = Math.floor(Math.random()*j);
        j--;
        [arr[j],arr[randomIndex]] = [ arr[randomIndex],arr[j]];
      }
    
      return arr;
    }
  `;

  return (
    <>
      <a href="https://bost.ocks.org/mike/shuffle/compare.html"></a>
      <Highlight className="code">{code}</Highlight>
    </>
  );
}

// function shuffle(arr) {
//   let j = arr.length;
//   while(j>0){
//     let randomIndex = Math.floor(Math.random()*j);
//     j--;
//     [arr[j],arr[randomIndex]] = [ arr[randomIndex],arr[j]];
//   }

//   return arr;
// }
//  shuffle([1,2,3,4,5,6])