import { test } from "./test.js";

test();
const canvas = document.getElementById("canvas");
const d = canvas.width;
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
// ctx.fillStyle = "yellow";
// ctx.fillStyle = "#fff";
ctx.fillStyle = "#000";
console.info("  ctx.setFillStyle: ", ctx.setFillStyle);

ctx.fill();

// alert(22);

function blobCallback(iconName) {
  return (b) => {
    console.info(" b.text():", b.text());
    console.info(" b:", b, typeof b, Object.prototype.toString.call(b));
    const a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = `${iconName}.ico`;
    const _href = window.URL.createObjectURL(b);
    window._href = _href;
    console.info(" _href:", _href);
    a.href = _href;
  };
}

const data = blobCallback("passThisString");
console.info(" data:", data);
canvas.toBlob(
  data,
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32"
);

var abc = 1;
