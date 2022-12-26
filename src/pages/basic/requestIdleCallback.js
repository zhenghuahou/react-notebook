import Highlight from '../../components/highlight';


export default function RequestIdleCallbackDemo() {

    const code = `
        const taskList = [];
        let currentTaskNumber = 0;
        let totalTaskCount = 0;
        let taskHandle = null;

        function logTaskHandler(data) {
            // console.info("Running task #"+currentTaskNumber);
            for (let i = 0; i < data.count; i += 1) {
                console.info((i + 1).toString()+". "+data.text);
            }
        }

        function runTaskQueue(deadline) {
            console.info(' deadline:', deadline, 'deadline.timeRemaining():', deadline.timeRemaining(), ' currentTaskNumber:', currentTaskNumber)
            while (
                (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
                taskList.length
            ) {
                const task = taskList.shift();
                currentTaskNumber++;
                task.handler(task.data);
            }

            console.info(' ---taskList', taskList, ' lenght:', taskList.length, ' time:', performance.now().toFixed(2))

            if (taskList.length) {
                taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
            } else {
                taskHandle = 0;
            }
        }

        function enqueueTask(taskHandler, taskData) {
            taskList.push({
                handler: taskHandler,
                data: taskData,
            });

            totalTaskCount++;

            if (!taskHandle) {
                taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
            }

        }

        for (let i = 0; i < 40000; i++) {
            const taskData = {
                count:i,
                text: "This text is from task number "+(i + 1)+" of 100000",
            };
            // console.info(' taskData:', taskData)
            enqueueTask(logTaskHandler, taskData);
        }
    `

    return (
        <>
            <a href='https://github.com/mqyqingfeng/Blog/issues/12'>详细解题网址</a>
            <hr />
            <h3>requestIdleCallback demo</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


// const taskList = [];
// let currentTaskNumber = 0;
// let totalTaskCount = 0;
// let taskHandle = null;

// function logTaskHandler(data) {
//     // console.info(`Running task #${currentTaskNumber}`);
//     for (let i = 0; i < data.count; i += 1) {
//         console.info(`${(i + 1).toString()}. ${data.text}`);
//     }
// }

// function runTaskQueue(deadline) {
//     console.info(' deadline:', deadline, 'deadline.timeRemaining():', deadline.timeRemaining(), ' currentTaskNumber:', currentTaskNumber)
//     while (
//         (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
//         taskList.length
//     ) {
//         const task = taskList.shift();
//         currentTaskNumber++;
//         task.handler(task.data);
//     }

//     console.info(' --- lenght:', taskList.length, ' time:', performance.now().toFixed(2))

//     if (taskList.length) {
//         taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
//     } else {
//         taskHandle = 0;
//     }
// }

// function enqueueTask(taskHandler, taskData) {
//     taskList.push({
//         handler: taskHandler,
//         data: taskData,
//     });

//     totalTaskCount++;

//     if (!taskHandle) {
//         taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
//     }

// }

// // demo1
// for (let i = 0; i < 200; i++) {
//     const taskData = {
//         count:i,
//         text: `This text is from task number ${i + 1} of 200`,
//     };
//     // console.info(' taskData:', taskData)
//     enqueueTask(logTaskHandler, taskData);
// }

// demo2
// for (var i = 0; i < 5; i++) {
//     const taskData = {
//         i, //taskData中i的值是从0,1,2,3,4
//         text: `This text is from task number ${i + 1} of 5`,
//     };
//     setTimeout(() => {
//         console.info(' setTimeout i::::', i) //每次输出的都是5
//     },0)
//     // console.info(' taskData:', taskData)
//     enqueueTask(logTaskHandler, taskData);
// }
