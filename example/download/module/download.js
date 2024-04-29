import { getImageSize } from "./imgHandler.js";
import { base64Data } from "./base64.js";
// console.info('base64Data:',base64Data)
export const downLoadImgByUrl = (url, width, height) => {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  let img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    const { targetWidth, targetHeight } = getImageSize(img, width, height);
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    var saveA = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    const dataURL = canvas.toDataURL("image/jpeg", 0.9);
    // console.info("%c dataURL:", "color:red;", dataURL);
    saveA.href = dataURL;
    saveA.download = "下载图片名称" + new Date().getTime();
    saveA.click();
    saveA = null;
  };

  img.src = url;
};

function getBlob(url, downloadName, width, height) {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      const { targetWidth, targetHeight } = getImageSize(img, width, height);
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      canvas.toBlob((b) => {
        console.info(" blob:", b);
        resolve(b);
      }, "image/jpeg");
    };
    img.src = url + "?v=" + Date.now();
    img.onerror = function (e) {
      reject(e);
    };
    window.acx = canvas;
  });
}

function download(blob, fileName) {
  const url = URL.createObjectURL(blob);
  let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
  link.download = fileName;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
  console.info(" url:", url);
  link = null;
}

//  base64 或 url 下载图片，不通过img标签形式
export const downloadByBlob = async (url, downloadName, width, height) => {
  const blob = await getBlob(url, downloadName, width, height);
  window.blob2 = blob;
  console.info("[downloadByBlob] blob:", blob);
  download(blob, "本地下载");
};

// 下载文本可以用这种方法
export function downloadTxt(fileName, data) {
  let blob;
  if (typeof data === "string" || data instanceof Blob) {
    blob = new Blob([data]);
    console.info(" blob:", blob);
  } else {
    throw new TypeError(
      `The type of argument "data" must be "string" or "blob", but got "${typeof data}"`
    );
  }
  download(blob, fileName);
}
