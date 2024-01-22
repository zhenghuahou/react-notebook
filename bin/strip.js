const fs = require('fs');

var content = `<script type="module" crossorigin src="https://www.baidu.com/test/assets/index-4zFxkQfT.js"></script>
<link rel="stylesheet" crossorigin href="https://www.baidu.com/test/assets/index-JG3Nq2kf.css">
<script type="module">
import.meta.url;
import("_").catch(()=>1);
(async function*(){})().next();
if(location.protocol!="file:"){
    window.__vite_is_modern_browser=true
}
</script>
<script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
<script data-type="h5" src="http://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script data-type="padst" src="https://wl.jd.com/wl.js"></script>


<script data-type="padst" src="https://h5static.m.jd.com/act/jd-jssdk/latest/jd-jssdk.min.js"></script>
`;

// var reg1 = /<script type="module"[^>]*>(?:[^>]*)<\/script>/g
// *?非贪婪匹配,?是必须的
var reg0 = /<script type="module"[^>]*?>(.|\n)*?<\/script>/g;
var reg1 = /<script type="module"[^>]*?>(.|\n)*?<\/script>(?:\n|\s)*/g;
var reg2 = /<script nomodule>.*<\/script>(?:\n|\s)*/g;
var reg3 =
  /(<script)( nomodule crossorigin)([^>]*(?:src|data-src)=['"](?:.*)['"]>)(?:[^>]*)(<\/script>)/g;

var reg4 =
  /(<script)( data-type=['"](.*?)['"])([^>]*?>(?:.|\r\n)*?<\/script>)((?:\r\n|\s)*)/g;


const pipe0 = content.replace(reg4, function (match, p1, p2, p3, p4, p5) {
//   const isReserve = p3.toLowerCase().trim() === 'h5';
  return p1 + p4 + p5.replace(/((\r\n|\s)*)/g,function(match,$1,$2,$3){
    // console.info('  match',match,' $1:',$1,' $2:',$2,' $3:',$3)
    return  $2 || ''
  });
});

console.info(" pipe0.match:",pipe0.match(reg1));
const pipe1 = pipe0.replace(reg1, "");
console.info(" pipe1:", pipe1);

const pipe2 = pipe1.replace(reg2, "");
// console.info(' pipe2:',pipe2)

const pipe3 = pipe2.replace(reg3, function (match, p1, p2, p3, p4) {
  console.info(" arg:", arguments);
  return p1 + p3.replace("data-src", "src") + p4;
});

fs.writeFileSync('index.html',pipe3)
// console.info(' pipe3:',pipe3);