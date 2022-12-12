import Highlight from '../../components/highlight';
export default function AddBigNumber() {

    const code = `
    // num1,num2必须以字符串形式传递，否则大数的时候会丢失精度
    // 例如: 
    // let a2= 1243575099254740991
    // console.log(a2) 
    // 输出结果为:1243575099254741000
    
    function add(num1Str = '', num2Str = '') {
        let maxLen = Math.max(num1Str.length, num2Str.length);
        // 用0去补齐长度,对齐2个数字
        num1Str = num1Str.padStart(maxLen, 0)
        num2Str = num2Str.padStart(maxLen, 0)
        let sum = '';
        let carry = 0;
        for (let i = maxLen - 1; i >= 0; i--) {
            let temp = +num1Str[i] + (+num2Str[i]) + carry;
            carry = Math.floor(temp / 10);
            // sum:字符串拼接
            sum = temp % 10 + sum;
        }
    
        if (carry === 1) {
            sum = '1' + sum;
        }
    
        return sum;
    }
    
    add(9007199254740991, 1234567899999999991) // 结算出来的结果是错的:'1243575099254740991'。相加的2个数字需要以字符串形式传递
    add('9007199254740991', '1234567899999999991') //'1243575099254740982'`

    return (
        <>
            <a href='https://leetcode.cn/problems/climbing-stairs/solutions/286022/pa-lou-ti-by-leetcode-solution/'>详细解题网址</a>
            <hr />
            <h3>解题思路:动态规划(滚动数组)，或者转化为斐波那契数列</h3>
            <Highlight className="code">
                {code}
            </Highlight>
        </>
    )
}


// num1,num2必须以字符串形式传递，否则大数的时候会丢失精度
// 例如: 
// let a2= 1243575099254740991
// console.log(a2) 
// 输出结果为:1243575099254741000

function add(num1Str = '', num2Str = '') {
    if (typeof num1Str !== 'string') {
        num1Str  = `${num1Str || ''}`
    }
    if (typeof num2Str !== 'string') {
        num2Str  = `${num2Str || ''}`
    }
    let maxLen = Math.max(num1Str.length, num2Str.length);
    // 用0去补齐长度,对齐2个数字
    num1Str = num1Str.padStart(maxLen, 0)
    num2Str = num2Str.padStart(maxLen, 0)
    let sum = '';
    let carry = 0;
    for (let i = maxLen - 1; i >= 0; i--) {
        let temp = +num1Str[i] + (+num2Str[i]) + carry;
        carry = Math.floor(temp / 10);
        // sum:字符串拼接
        sum = temp % 10 + sum;
        console.info('temp:', temp, 'carry:', carry, ' sum:', sum)
    }

    if (carry === 1) {
        sum = '1' + sum;
    }

    return sum;
}

// add(9007199254740991, 1234567899999999991) // 结算出来的结果是错的:'1243575099254740991'。相加的2个数字需要以字符串形式传递

// add('9007199254740991', '1234567899999999991') //'1243575099254740982'