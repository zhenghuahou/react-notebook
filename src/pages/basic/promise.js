import Highlight from '../../components/highlight';
import Fake from '../core/fakePromise';

export default function New() {
  const code = ` 
    ${Fake()} 
  `
  return <>
    <a href='https://zhuanlan.zhihu.com/p/102018323'>详细解题网址1</a><br/>
    <a href='https://juejin.cn/post/6844904063570542599#heading-10'>详细解题网址2</a>
    <Highlight className="code">
      {code}
    </Highlight>
  </>
}

// let i = 0;
// //极简的实现
// class Promise {
//     state = 'pending';//增加状态
//     value = null;//保存结果

//     callbacks = [];
//     id = ++i;

//     constructor(fn) {
//         window.test = this;
//         console.info('[constructor id]:', this.id, this)
//         // fn:new promise传递的callback函数
//         fn(this._resolve.bind(this), this._reject.bind(this));
//     }
//     then(onFulfilled, onRejected) {
//         // debugger
//         console.info('id:', this.id, '[then] this:', this)
//         return new Promise((resolve, reject) => {
//             this._handle({
//                 onFulfilled,
//                 onRejected,
//                 resolve, // 桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
//                 reject,
//                 callbackId: this.id
//             })
//         })

//     }

//     // finally(onDone){
//     //     return this.then(onDone,onDone)
//     // }

//     finally(onDone) {
//         if (typeof onDone !== 'function') return this.then();
//         let Promise = this.constructor;
//         console.info('38  Promise.resolve:', Promise.resolve)
//         return this.then(
//             value => Promise.resolve(onDone()).then(() => value),
//             reason => Promise.resolve(onDone()).then(() => { throw reason })
//         );
//     }

//     static all(promises) {
//         return new Promise((resolve, reject) => {
//             let fulfilledCount = 0
//             const itemNum = promises.length
//             const rets = Array.from({ length: itemNum })
//             promises.forEach((promise, index) => {
//                 Promise.resolve(promise).then(result => {
//                     fulfilledCount++;
//                     rets[index] = result;
//                     if (fulfilledCount === itemNum) {
//                         resolve(rets);
//                     }
//                 }, reason => reject(reason));
//             })

//         })
//     }

//     static race(promises) {
//         return new Promise(function (resolve, reject) {
//             for (let i = 0; i < promises.length; i++) {
//                 Promise.resolve(promises[i]).then(function (value) {
//                     return resolve(value)
//                 }, function (reason) {
//                     return reject(reason)
//                 })
//             }
//         })
//     }s


//     static resolve(value) {
//         if (value && value instanceof Promise) {
//             return value;
//         } else if (value && typeof value === 'object' && typeof value.then === 'function') {
//             let then = value.then;
//             return new Promise(resolve => {
//                 then(resolve);
//             });

//         } else if (value) {
//             return new Promise(resolve => resolve(value));
//         } else {
//             return new Promise(resolve => resolve());
//         }
//     }

//     static reject(value) {
//         // if (value && typeof value === 'object' && typeof value.then === 'function') {
//         //   let then = value.then;
//         //   return new Promise((resolve, reject) => {
//         //     then(reject);
//         //   });
//         // } else {
//         return new Promise((resolve, reject) => reject(value));
//     }

//     _handle(callback) {
//         if (this.state === 'pending') {
//             // 把onFulfilled/onRejected 放入callbacks队列，其实也就是注册回调函数
//             this.callbacks.push(callback);
//             return;
//         }

//         const cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
//         const next = this.state === 'fulfilled' ? callback.resolve : callback.reject

//         //如果then中没有传递任何东西
//         if (!cb) {
//             next(this.value)
//             return
//         }

//         let ret;
//         try {
//             ret = cb(this.value)
//         } catch (e) {
//             // debugger
//             callback.reject(e)
//             // return
//         }

//         console.info('id:', this.id, 'this.state:', this.state, '[_handle] ret:', ret, 'next:', next, ' this:', this)
//         // ** 处理下一个 promise 的resolve/reject **
//         next(ret)
//     }
//     _resolve(value) {
//         // debugger
//         if (this.state !== 'pending') return

//         console.info('id:', this.id, '[______resolve_______] this:', this, '\n value:', value)
//         if (value && (typeof value === 'object' || typeof value === 'function')) {
//             var { then } = value;
//             if (typeof then === 'function') {
//                 // debugger
//                 then.call(value, this._resolve.bind(this), this._reject.bind(this))
//                 return

//             }
//         }
//         this.state = 'fulfilled'
//         this.value = value;
//         //将 callbacks 队列中的回调一一执行
//         this.callbacks.forEach(callback => this._handle(callback));
//     }
//     _reject(value) {
//         // debugger
//         if (this.state !== 'pending') return
//         console.info('id:', this.id, '[_______reject_______] this:', this, '\n value:', value)
//         if (value && (typeof value === 'object' || typeof value === 'function')) {
//             var { then } = value;
//             if (typeof then === 'function') {
//                 debugger
//                 then.call(value, this._reject.bind(this), this._reject.bind(this))
//                 return

//             }
//         }
//         this.state = 'rejected'
//         this.value = value;
//         //将 callbacks 队列中的回调一一执行
//         this.callbacks.forEach(callback => this._handle(callback));
//     }
// }


/**
 * 模拟异步请求
 * @param {*} url  请求的URL
 * @param {*} s  指定该请求的耗时，即多久之后请求会返回。单位秒
 * @param {*} callback 请求返回后的回调函数
 */
// const mockAjax = (url, s, callback) => {
//     setTimeout(() => {
//         callback(url + '异步请求耗时' + s + '秒');
//     }, 1000 * s)
// }

// window.p1 = new Promise(resolve => {
//     mockAjax('getUserId', 1, function (result) {
//         resolve(result);
//     })
// })
// // window.pUserName = new Promise(resolve => {
// //     mockAjax('getUserName', 2, function (result) {
// //         resolve(result);
// //     })
// // })

// window.p3 = window.p1.then(id => {
//     console.log(id)
//     return aa
// })
// window.p4 = window.p3.then(name => {
//     console.log(name)
//     return 22
// }).finally((a) => {
//     console.info('a:::::', a)
// })

let thenable = {
    then: function (onFulfilled, onRejected) {
        console.info(' onFulfilled', onFulfilled)
        onRejected(42);
    }
};


// window.p6 = Promise.reject(thenable);
// // window.p7 = window.p6.then(null,a=>{console.info('a:::',a)});
// window.p7 = Promise.reject(Promise.resolve(1))



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1'), 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p2'), 5000)
// })

// window.aa = Promise.all([p1, p2]).then(null, rets => {
//     console.log('rets:', rets) // ['p1','p2']
// })

// console.info(' start---->',+new Date);
// window.bb = Promise.all([p1, p2]).then((resp)=>{
//     console.info(' resolved:',resp,+new Date)
// }, rets => {
//     console.log('rets:', rets,+new Date) // ['p1','p2']
// })

//Promise应用
// window.p1 = new Promise(resolve => {
//     // console.log('p1 start', +new Date, resolve);
//     setTimeout(() => {
//         console.log('p1 done', +new Date);
//         resolve('5秒');
//     }, 5000);
// })


// function test(id) {
//     return new Promise(((resolve) => {
//         setTimeout(() => {
//             resolve({ test: 2 })
//         }, 1000)
//     }))
// }


// window.p2 = window.p1.then((tip1) => {
//     console.log('p2 tip1:', tip1, +new Date);
//     return test()
// }).then(name => {
//     console.log('name:', name);
// })
// window.p3 = window.p1.then(tip2 => {
//     console.log('p3 tip2:', tip2, +new Date);
// });

// setTimeout(() => {
//     window.p1.then(tip => {
//         console.log('then3', tip); //没有执行 ？？
//     })
// });