const { fork } = require("child_process");
const processMaster = fork("child.js");
processMaster.send("hello");

processMaster.on("message", (msg) => {
  console.log("[master.js] Message from child:", msg);
});
