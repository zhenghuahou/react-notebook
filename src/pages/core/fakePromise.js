export default function Fake() {
    let i = 0;
    //极简的实现
   return class Promise {
        state = 'pending';//增加状态
        value = null;//保存结果

        callbacks = [];
        id = ++i;

        constructor(fn) {
            window.test = this;
            console.info('[constructor id]:', this.id, this)
            // fn:new promise传递的callback函数
            fn(this._resolve.bind(this), this._reject.bind(this));
        }
        then(onFulfilled, onRejected) {
            // debugger
            console.info('id:', this.id, '[then] this:', this)
            return new Promise((resolve, reject) => {
                this._handle({
                    onFulfilled,
                    onRejected,
                    resolve, // 桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
                    reject,
                    callbackId: this.id
                })
            })

        }

        // finally(onDone){
        //     return this.then(onDone,onDone)
        // }

        finally(onDone) {
            if (typeof onDone !== 'function') return this.then();
            let Promise = this.constructor;
            console.info('38  Promise.resolve:', Promise.resolve)
            return this.then(
                value => Promise.resolve(onDone()).then(() => value),
                reason => Promise.resolve(onDone()).then(() => { throw reason })
            );
        }

        static all(promises) {
            return new Promise((resolve, reject) => {
                let fulfilledCount = 0
                const itemNum = promises.length
                const rets = Array.from({ length: itemNum })
                promises.forEach((promise, index) => {
                    Promise.resolve(promise).then(result => {
                        fulfilledCount++;
                        rets[index] = result;
                        if (fulfilledCount === itemNum) {
                            resolve(rets);
                        }
                    }, reason => reject(reason));
                })

            })
        }

        static race(promises) {
            return new Promise(function (resolve, reject) {
                for (let i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then(function (value) {
                        return resolve(value)
                    }, function (reason) {
                        return reject(reason)
                    })
                }
            })
        } s


        static resolve(value) {
            if (value && value instanceof Promise) {
                return value;
            } else if (value && typeof value === 'object' && typeof value.then === 'function') {
                let then = value.then;
                return new Promise(resolve => {
                    then(resolve);
                });

            } else if (value) {
                return new Promise(resolve => resolve(value));
            } else {
                return new Promise(resolve => resolve());
            }
        }

        static reject(value) {
            // if (value && typeof value === 'object' && typeof value.then === 'function') {
            //   let then = value.then;
            //   return new Promise((resolve, reject) => {
            //     then(reject);
            //   });
            // } else {
            return new Promise((resolve, reject) => reject(value));
        }

        _handle(callback) {
            if (this.state === 'pending') {
                // 把onFulfilled/onRejected 放入callbacks队列，其实也就是注册回调函数
                this.callbacks.push(callback);
                return;
            }

            const cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
            const next = this.state === 'fulfilled' ? callback.resolve : callback.reject

            //如果then中没有传递任何东西
            if (!cb) {
                next(this.value)
                return
            }

            let ret;
            try {
                ret = cb(this.value)
            } catch (e) {
                // debugger
                callback.reject(e)
                // return
            }

            console.info('id:', this.id, 'this.state:', this.state, '[_handle] ret:', ret, 'next:', next, ' this:', this)
            // ** 处理下一个 promise 的resolve/reject **
            next(ret)
        }
        _resolve(value) {
            // debugger
            if (this.state !== 'pending') return

            console.info('id:', this.id, '[______resolve_______] this:', this, '\n value:', value)
            if (value && (typeof value === 'object' || typeof value === 'function')) {
                var { then } = value;
                if (typeof then === 'function') {
                    // debugger
                    then.call(value, this._resolve.bind(this), this._reject.bind(this))
                    return

                }
            }
            this.state = 'fulfilled'
            this.value = value;
            //将 callbacks 队列中的回调一一执行
            this.callbacks.forEach(callback => this._handle(callback));
        }
        _reject(value) {
            // debugger
            if (this.state !== 'pending') return
            console.info('id:', this.id, '[_______reject_______] this:', this, '\n value:', value)
            if (value && (typeof value === 'object' || typeof value === 'function')) {
                var { then } = value;
                if (typeof then === 'function') {
                    debugger
                    then.call(value, this._reject.bind(this), this._reject.bind(this))
                    return

                }
            }
            this.state = 'rejected'
            this.value = value;
            //将 callbacks 队列中的回调一一执行
            this.callbacks.forEach(callback => this._handle(callback));
        }
    }

}

