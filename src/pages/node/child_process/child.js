process.on("message", (str) => {
  console.log("[child.js] Message from parent:", str);
  //   process.send("子进程向父进程发送消息");

  //   console.log("child.js", str);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);
