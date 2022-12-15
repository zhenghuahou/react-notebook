
import Highlight from '../../components/highlight';
export default function AddBigNumber() {

    const code = `
    var foo = {
        value: 1
    };
    
    function bar(name, age) {
        this.habit = 'shopping';
        console.log(this === foo, 'this:', this, ' name:', name, ' age：', age, arguments);
    
    }
    bar.prototype.friend = 'kevin';
    
    // var bindFoo = bar.bind(foo, 'daisy');
    // var bindFoo2 = new bindFoo('test2');
    
    Function.prototype.fakeBind = function (context, ...args) {
        var self = this;
        function fBound(...rest) {
            const ctx = this instanceof fBound ? this : context;
            return self.apply(ctx, args.concat(rest));
        }
    
        function fNOP() { }
        fNOP.prototype = this.prototype;
    
        // fBound.prototype = fNOP;//错误写法
        fBound.prototype = new fNOP();
        fBound.prototype.hou = 'just test'
        console.info(' fBound.prototype:', fBound.prototype)
        return fBound
    }
    
    var fakeBindFoo = bar.fakeBind(foo, 'bindFoo');
    var demo2 = new fakeBindFoo();
    `

    return (
        <>
            <a href='https://github.com/mqyqingfeng/Blog/issues/12'>详细解题网址</a>
            <hr />
            <h3>bind的模拟实现</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


// var foo = {
//     value: 1
// };

// function bar(name, age) {
//     this.habit = 'shopping';
//     console.log(this === foo, 'this:', this, ' name:', name, ' age：', age, arguments);

// }
// bar.prototype.friend = 'kevin';

// // var bindFoo = bar.bind(foo, 'daisy');
// // var bindFoo2 = new bindFoo('test2');

// Function.prototype.fakeBind = function (context, ...args) {
//     var self = this;
//     function fBound(...rest) {
//         const ctx = this instanceof fBound ? this : context;
//         return self.apply(ctx, args.concat(rest));
//     }

//     function fNOP() { }
//     fNOP.prototype = this.prototype;

//     // fBound.prototype = fNOP;//错误写法
//     fBound.prototype = new fNOP();
//     fBound.prototype.hou = 'just test'
//     console.info(' fBound.prototype:', fBound.prototype)
//     return fBound
// }

// var fakeBindFoo = bar.fakeBind(foo, 'bindFoo');
// var demo2 = new fakeBindFoo();

