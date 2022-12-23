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

// 1 7 3 5 'then test'  'add 1' 'add 2' 'add 1*' 2  6 4