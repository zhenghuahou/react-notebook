import Highlight from '../../components/highlight';
export default function AddBigNumber() {

    const code = `
    var t1 = function () { return 10; }(); // t1:10
    var t2 = true && function () {/*code*/ }(); // t2:undefined
    var t3 = (0, function () { }()); // t3:undefined
    var t4 = new function () { /* code */ }; // t4:{}
    
    window.addEventListener('load', function () {
        console.log('3 seconds passed');
    
        // 写法一:
        //它的运行原理可能并不像你想的那样，因为i的值从来没有被锁定。相反的，每个链接，当被点击时(循环已经被很好的执行完毕)，因此会弹出所有元素的总数，因为这是i此时的真实值。
        // var elems = document.getElementsByTagName('a');
        // console.info(' 0--->', elems)
        // for (var i = 0; i < elems.length; i++) {
        //     elems[i].addEventListener('click', function (e) {
        //         e.preventDefault();// 阻止了页面跳转
        //         console.info('I am link #' + i)
        //     }, false);
        // }
    
    
        // 写法二:
        // 而像下面这样改写，便可以了，因为在IIFE里，i值被锁定在了lockedInIndex里。
        // 在循环结束执行时，尽管i值的数值是所有元素的总和，但每一次函数表达式被调用时，
        // IIFE 里的lockedInIndex值都是i传给它的值,所以当链接被点击时，正确的值被弹出。
        // var elems = document.getElementsByTagName('a');
        // for (var i = 0; i < elems.length; i++) {
        //     (function (lockedInIndex) {
        //         elems[i].addEventListener('click', function (e) {
        //             // e.preventDefault();
        //             console.info('I am link #' + lockedInIndex);
        //         }, false)
        //     })(i);
        // }
    
        // 写法三:
        //你同样可以像下面这样使用IIFE，仅仅只用括号包括点击处理函数，并不包含整个addEventListener。
        //无论用哪种方式，这两个例子都可以用IIFE将值锁定，不过我发现前面一个例子更可读
        var elems = document.getElementsByTagName('a');
    
        for (var i = 0; i < elems.length; i++) {
            elems[i].addEventListener('click', (function (lockedInIndex) {
                return function (e) {
                    e.preventDefault();
                    console.info('I am link #' + lockedInIndex);
                };
            })(i), false);
        }
    
    });
    `

    return (
        <>
            <a href='https://segmentfault.com/a/1190000003985390'>详细解题网址</a>
            <h3>立即执行函数表达式（IIFE）</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


var t1 = function () { return 10; }(); // t1:10
var t2 = true && function () {/*code*/ }(); // t2:undefined
var t3 = (0, function () { }()); // t3:undefined
var t4 = new function () { /* code */ }; // t4:{}

window.addEventListener('load', function () {
    // 写法一:
    //它的运行原理可能并不像你想的那样，因为`i`的值从来没有被锁定。相反的，每个链接，当被点击时(循环已经被很好的执行完毕)，因此会弹出所有元素的总数，因为这是`i`此时的真实值。
    // var elems = document.getElementsByTagName('a');
    // console.info(' 0--->', elems)
    // for (var i = 0; i < elems.length; i++) {
    //     elems[i].addEventListener('click', function (e) {
    //         e.preventDefault();// 阻止了页面跳转
    //         console.info('I am link #' + i)
    //     }, false);
    // }


    // 写法二:
    // 而像下面这样改写，便可以了，因为在IIFE里，`i`值被锁定在了`lockedInIndex`里。
    // 在循环结束执行时，尽管`i`值的数值是所有元素的总和，但每一次函数表达式被调用时，
    // IIFE 里的 `lockedInIndex` 值都是`i`传给它的值,所以当链接被点击时，正确的值被弹出。
    // var elems = document.getElementsByTagName('a');
    // for (var i = 0; i < elems.length; i++) {
    //     (function (lockedInIndex) {
    //         elems[i].addEventListener('click', function (e) {
    //             // e.preventDefault();
    //             console.info('I am link #' + lockedInIndex);
    //         }, false)
    //     })(i);
    // }

    // 写法三:
    //你同样可以像下面这样使用IIFE，仅仅只用括号包括点击处理函数，并不包含整个`addEventListener`。
    //无论用哪种方式，这两个例子都可以用IIFE将值锁定，不过我发现前面一个例子更可读
    var elems = document.getElementsByTagName('a');

    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', (function (lockedInIndex) {
            return function (e) {
                // e.preventDefault();
                console.info('I am link #' + lockedInIndex);
            };
        })(i), false);
    }
});