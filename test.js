console.info(' process.env:',process)
// console.info(' process.env.NODE_ENV:',process.env.NODE_ENV)



async function test(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(1000)
        })
    });
}