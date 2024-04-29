async function run() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      frameRate: { ideal: 15 },
      width: { min: 1024, ideal: 1280, max: 1920 },
      height: { min: 776, ideal: 720, max: 1080 },
    },
  });
  var d = stream?.getVideoTracks?.();
  const el = document.getElementById("video-el");
  console.info(" d-->:", d, " el:", el);
  el.controls = true;
  el.srcObject = stream;
  el.play().catch((e) => {
    console.info(" e:", e);
  });

  console.info(" el:", el);
  window.dt = d;
  window.el = el;
  console.info(" stream:", stream);

  const canvas = document.getElementById("canvas");
  canvas.width = 640;
  canvas.height = 480;
  const ctx = canvas.getContext("2d");

  var img = new Image(100, 100);
  img.src = "/download/assets/bg.jpeg";
  document.body.appendChild(img);

  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    window.abc = canvas.toDataURL("image/jpeg", 1);
    console.info(" window.abc", window.abc);
  };

  function getCanvasImg() {
    ctx.drawImage(el, 200, 200, 100, 100);
    console.info("getCanvasImg ", canvas);
    let img = canvas.toDataURL("image/jpeg", 1);
    console.info(" getCanvasImg img:", img);
  }

  //   setTimeout(() => {
  getCanvasImg();
  //   }, 3000);
  window.getCanvasImg = getCanvasImg;
}

console.info(" time1:", performance.now().toFixed(2));
const r = await new Promise((resolve) => {
  setTimeout(resolve, 2000, "resolve test");
});

run();

console.info(" time2:r", r, performance.now().toFixed(2));
