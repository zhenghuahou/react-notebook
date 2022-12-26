import Highlight from '../../components/highlight';

export default function EventLoop() {

    const code = `
    console.log(1);

    setTimeout(() => console.log(2));

    Promise.resolve().then(() => console.log(3)).then(() => console.log('add 1')).then(()=>console.log('add 1*'));

    Promise.resolve().then(() => setTimeout(() => console.log(4)));

    Promise.resolve().then(() => console.log(5)).then(() => console.log('add 2'));

    Promise.resolve().then(() => console.log('then test'));
    setTimeout(() => console.log(6));

    console.log(7)

    // 1 7 3 5 'then test'  'add 1' 'add 2' 'add 1*' 2  6 4
    `

    return (
        <>
            <a href='https://zh.javascript.info/event-loop'>详细解题网址</a><br />
            <a href='https://time.geekbang.org/column/article/135624'>宏任务和微任务</a>
            <br />
            <p>
                macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
            </p>
            <p>
                microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver
            </p>
            <p>
            如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到微任务队列中，V8 引擎一直循环执行微任务队列中的任务，
            直到队列为空才算执行结束。也就是说在执行微任务过程中产生的新的微任务并不会推迟到下个宏任务中执行，而是在当前的宏任务中继续执行。
            </p>
            <hr />
            <h3>event loop demo</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3)).then(() => console.log('add 1')).then(()=>console.log('add 1*'));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5)).then(() => console.log('add 2'));

// Promise.resolve().then(() => console.log('then test'));
// setTimeout(() => console.log(6));

// console.log(7)

// 1 7 3 5 'then test' 'add 1' 'add 2' 'add 1*' 2 6 4





// function executor(resolve, reject) {
//     let rand = Math.random();
//     console.log(1)
//     console.log(rand)
//     if (rand > 0.5)
//         resolve()
//     else
//         reject()
// }
// var p0 = new Promise(executor);

// var p1 = p0.then((value) => {
//     console.log("succeed-1")
//     return new Promise(executor)
// })


// var p3 = p1.then((value) => {
//     console.log("succeed-2")
//     return new Promise(executor)
// })

// var p4 = p3.then((value) => {
//     console.log("succeed-3")
//     return new Promise(executor)
// })


// p4.catch((error) => {
//     console.log("error")
// })
// console.log(2)
 
//1  rand  2 succeed-1  succeed-2  succeed-3