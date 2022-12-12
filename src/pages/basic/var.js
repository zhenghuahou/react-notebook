import Highlight from '../../components/highlight';
export default function AddBigNumber() {

    const code = `
        // 测试一:
        function foo(){// 函数提升
            console.log("foo");
        }
        console.info('aa[1]:',foo);
        
        var foo = 1;
        console.info('aa[2]:',foo);
        /*
        // 输出结果:
        aa[1]: ƒ foo(){// 函数提升
            console.log("foo");
        }
        aa[2]:1
        */

        // 测试二:
        co nsole.log('b[1]:',foo);
        var foo = 1;
        console.log('b[2]:',foo);
        function foo(){};

        /*
        // 输出结果:
        b[1]: ƒ foo(){}
        b[2]: 1
        */
    `

    return (
        <>
            <a href='https://github.com/mqyqingfeng/Blog/issues/5'>详细解题网址</a>
            <h3>变量提升</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


