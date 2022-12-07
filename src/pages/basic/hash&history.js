/* eslint-disable no-restricted-globals */

window.addEventListener('hashchange', function () {
  //监听hash变化，点击浏览器的前进后退会触发
  console.info('[hashchange]  arg:', arguments)
})

window.addEventListener('popstate', function (e) {
  //e.state 相当于 history.state
  console.log('[popstate] state: ' + JSON.stringify(e.state));
  console.info('[popstate] e.state === history.state', e.state === history.state) // e.state === history.state true
  console.log('[popstate] history.state:', history.state, ' history:', history);
});


export default function New() {

  return <>
    <h3>
      hash模式
    </h3>
    <p>
      1. hash指的是地址中#号以及后面的字符，也称为散列值。hash也称作锚点，本身是用来做页面跳转定位的。如http://localhost/index.html#abc，这里的#abc就是hash；

    </p>
    <p>
      2. 散列值是不会随请求发送到服务器端的，所以改变hash，不会重新加载页面；
    </p>
    <p>
      3. 监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置hash值；
    </p>
    <p>
      4. location.hash值的变化会直接反应到浏览器地址栏；
    </p>
  </>
}

