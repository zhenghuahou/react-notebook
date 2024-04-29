// 第一种下载方式
function click(node) {
  node.dispatchEvent(new MouseEvent("click"));
}

function download(url, name, opts) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function () {
    console.info(" xhr.response:", xhr.response);
    window.bb = xhr.response;
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function () {
    console.warn(`下载图片${name}失败`);
  };
  xhr.send();
}

export function saveAs(blob, name, opts) {
  const URL = window.URL || window.webkitURL;
  let a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
  name = name || blob.name || "download";
  a.download = name;
  a.rel = "noopener"; // tabnabbing

  if (typeof blob === "string") {
    // Support regular links
    a.href = blob;
    console.info("if blob:", blob);
    download(blob, name, opts);
  } else {
    console.info("else blob:", blob);
    // Support blobs
    const url = URL.createObjectURL(blob);
    console.info(" a.href:", url,typeof url);
    a.href = url;

    // 4e4==>40000
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 4e4); // 40s
    // setTimeout(function () {
      click(a);
    // }, 0);
  }
}
