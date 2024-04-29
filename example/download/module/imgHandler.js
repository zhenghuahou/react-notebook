// 返回图片的宽度和高度
export function getImageSize(img,width,height){
    let targetWidth;
    let targetHeight;
    if (width && height) {
      targetWidth = width;
      targetHeight = height;
    } else if (width) {
      targetWidth = width;
      targetHeight = img.height * (width / img.width);
    } else if (height) {
      targetHeight = height;
      targetWidth = img.width * (height / img.height);
    } else {
      targetWidth = img.width;
      targetHeight = img.height;
    }
    return {targetWidth,targetHeight}
}
