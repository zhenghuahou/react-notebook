const process =require('node:process')
const {chdir,cwd} = process;

const time = process.hrtime();
console.info(' time:',time);
console.log(`Starting directory: ${cwd()}`,'__dirname:',__dirname);
try {
  chdir('/tmp');
  console.log(`New directory: ${cwd()}`,'__dirname:',__dirname);
} catch (err) {
  console.error(`chdir: ${err}`);
}