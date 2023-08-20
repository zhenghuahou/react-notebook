function isMobile() {
  var match = window.matchMedia;
  if (match) {
    var mq = match("(pointer:coarse)");
    return mq.matches;
  }
  return false;
}

const _isMobile = isMobile();

class BaseSign {
  constructor(options) {
    const { canvas, ...rest } = options || {};
    if (!canvas) {
      throw Error("缺少canvas对象");
    }
    this.initCanvas(canvas, rest);
  }

  initCanvas(canvas, options) {
    window.dd = this;
    const { width = 500, height = 500, ...attrs } = options || {};
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    this.canvas = canvas;
    this.ctx = ctx;
    this.initBackgroundCanvas(options);
    this.state = {};

    this.updateAttrs(attrs);

    this.writingMode = false;
    this.draggable = false;
    this.signMode = false;
    this.input = null;

    this.dragSnapStack = []; //拖动物件之前，保存当前canvas数据
    this.currentDragIndex = -1; // 当前拖动物件的index
    this.dragShapeList = []; //可以拖动的物体，现在暂时存放可以拖动的图片对象
    this.resize();
  }

  doResize() {
    this.save();
    const width = window.innerWidth - 20;
    const height = window.innerHeight - 20;
    this.canvas.width = width;
    this.canvas.height = height;
    this.backgroundCanvas.width = width;
    this.backgroundCanvas.height = height;
    this.restoreAttrs();
    this.restore();
  }

  resize() {
    window.addEventListener(
      "resize",
      window._.debounce(() => {
        this.doResize();
      }, 100)
    );
  }

  initBackgroundCanvas(options) {
    if (this.backgroundCanvas) {
      return;
    }
    const { width = 500, height = 500 } = options || {};
    let canvas = document.createElement("canvas");
    canvas.classList.add("canvas-hide");
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    canvas.style.zIndex = -1;
    this.backgroundCanvas = canvas;
    this.backgroundCanvasCtx = ctx;
    this.canvas.parentNode.appendChild(canvas);
  }

  restoreAttrs(){
    const state = this.state;
    this.updateAttrs(state);
  }

  updateAttrs(attrs = {}) {
    const { ctx, backgroundCanvasCtx } = this;
    Object.keys(attrs).forEach((key) => {
      this.state[key]=  attrs[key];
      ctx[key] = backgroundCanvasCtx[key] = attrs[key];
    });
  }

  hideInput() {
    const { input } = this;
    if (input) {
      input.style.opacity = 0;
      input.style.pointerEvents = "none";
      input.style.zIndex = 0;
      input.value = "";
    }
  }
  // Function to dynamically add an input box
  renderInput(event) {
    const [positionX, positionY] = this.getCursorPosition(event);
    let { input } = this;
    if (!input) {
      input = document.createElement("input");
      input.type = "text";
      input.style.position = "absolute";
      this.input = input;
    }

    const extraX = positionX;
    const extraY = positionY;

    input.style.left = extraX + "px";
    input.style.top = extraY + "px";
    input.style.opacity = 1;

    // 记录光标最新位置
    input.extraX = extraX;
    input.extraY = extraY;

    input.onkeydown = this.handleEnter;

    this.canvas.parentNode.appendChild(input);

    input.focus();
  }

  // Key handler for input box
  handleEnter = (e) => {
    const { input } = this;
    const { keyCode } = e;
    if (keyCode === 13) {
      this.drawText(input.value, input.extraX, input.extraY, true);
      this.hideInput();
    }
  };

  toggleBackgroundCanvas(isShow) {
    this.backgroundCanvas.style.zIndex = isShow ? 2 : -1;
  }
  // Draw the text onto canvas
  drawText(text, x, y, enableBackground = false) {
    const ctx = enableBackground ? this.backgroundCanvasCtx : this.ctx;
    if (enableBackground) {
      this.toggleBackgroundCanvas(true);
    }
    ctx.fillText(text, x, y - 5);
    // this.toggleBackgroundCanvas(false);
  }

  handleDown = (event) => {
    if (!this.signMode) {
      return;
    }
    event.preventDefault();
    this.writingMode = true;
    this.backgroundCanvasCtx.beginPath();
    const [positionX, positionY] = this.getCursorPosition(event);
    this.backgroundCanvasCtx.moveTo(positionX, positionY);
  };

  handleUp = (event) => {
    if (!this.signMode) {
      return;
    }
    event.preventDefault();
    this.writingMode = false;
  };

  handleMove = (event) => {
    if (!this.signMode) {
      return;
    }
    event.preventDefault();
    if (!this.writingMode) return;
    const [positionX, positionY] = this.getCursorPosition(event);
    this.backgroundCanvasCtx.lineTo(positionX, positionY);
    this.backgroundCanvasCtx.stroke();
  };

  isMouseInShape(x, y, shape) {
    const { pointX, pointY, width, height } = shape;
    const shapeLeft = pointX;
    const shapeRight = pointX + width;
    const shapeTop = pointY;
    const shapeBottom = pointY + height;

    if (
      x >= shapeLeft &&
      x <= shapeRight &&
      y >= shapeTop &&
      y <= shapeBottom
    ) {
      console.info("在图片里");
      return true;
    }

    console.info("不在图片区域");
    return false;
  }

  mouseDown = (event) => {
    event.preventDefault;
    const { dragShapeList } = this;
    if (!dragShapeList?.length) {
      return console.info("没有移动物体");
    }

    const [positionX, positionY] = this.getCursorPosition(event);
    this.startPointX = positionX; //拖动的X轴开始位置
    this.startPointY = positionY; // 拖动的Y轴开始位置

    for (let i = dragShapeList.length - 1; i >= 0; i--) {
      const shape = dragShapeList[i];
      if (this.isMouseInShape(positionX, positionY, shape)) {
        this.draggable = true;
        this.currentDragIndex = i;
        return;
      }
      console.info("不在图片区域");
    }
  };

  mouseMove = (event) => {
    if (!this.draggable) return;
    event.preventDefault();
    const [positionX, positionY] = this.getCursorPosition(event);
    if (this.draggable) {
      const dx = positionX - this.startPointX;
      const dy = positionY - this.startPointY;
      const currentDragShape = this.dragShapeList[this.currentDragIndex];
      currentDragShape.pointX += dx;
      currentDragShape.pointY += dy;

      this.drawDragShape();

      this.startPointX = positionX;
      this.startPointY = positionY;
    }
  };
  mouseUp = (event) => {
    if (!this.draggable) {
      return;
    }
    event.preventDefault();
    this.draggable = false;
  };

  // 绘制拖动的物件
  drawDragShape = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const { dragShapeList } = this;
    for (let shape of dragShapeList) {
      const { pointX, pointY } = shape;
      this.ctx.drawImage(shape, pointX, pointY);
    }
  };
  mouseOut = (event) => {
    if (!this.draggable) {
      return;
    }
    event.preventDefault();
    this.draggable = false;
  };

  drawImage = (file) => {
    let img = new Image();
    const url = typeof file === "string" ? file : URL.createObjectURL(file);
    const { canvas } = this;

    img.src = url;
    img.onload = () => {
      img.pointX = canvas.width / 2 - img.width / 2;
      img.pointY = canvas.height / 2 - img.height / 2;

      this.dragShapeList.push(img);
      this.drawDragShape();

      setTimeout(() => {
        URL.revokeObjectURL(url);
      });
    };
  };

  download(blob, fileName) {
    const url = URL.createObjectURL(blob);
    let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    link.download = fileName;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    link = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backgroundCanvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawImageByCtx({ ctx, url }) {
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      img = null;
    };
    img.src = url;
  }

  save() {
    const d1 = this.canvas.toDataURL();
    const d2 = this.backgroundCanvas.toDataURL();
    this.dragSnapStack.push({ d1, d2 });
  }

  restore() {
    const data = this.dragSnapStack.pop();
    if (data) {
      const { d1, d2 } = data;
      let g1Ctx = this.canvas.getContext("2d");
      let g2Ctx = this.backgroundCanvas.getContext("2d");
      this.drawImageByCtx({ ctx: g1Ctx, url: d1 });
      this.drawImageByCtx({ ctx: g2Ctx, url: d2 });
    }
  }

  drawImages(type = "image/png") {
    const url1 = this.canvas.toDataURL(type);
    const url2 = this.backgroundCanvas.toDataURL(type);
    let g1Ctx = this.canvas.getContext("2d");
    let g2Ctx = this.backgroundCanvas.getContext("2d");
    this.drawImageByCtx({ ctx: g1Ctx, url: url1 });
    this.drawImageByCtx({ ctx: g2Ctx, url: url2 });
  }

  genDataURL(type = "image/png") {
    const g1 = this.canvas.toDataURL(type);
    const g2 = this.backgroundCanvas.toDataURL(type);
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;

    const dataList = this.signMode ? [g1, g2] : [g2, g1];
    for (let d of dataList) {
      this.drawImageByCtx({ ctx, url: d });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(canvas.toDataURL(type));
        canvas = null;
        ctx = null;
      }, 1000);
    });
  }

  getDataURL(type = "image/png") {
    return this.genDataURL(type);
  }
}

// pc端签名
class PcSign extends BaseSign {
  constructor(options) {
    super(options);
    this.init();
  }

  init() {
    // this.canvas.addEventListener("dblclick", this.dblclick);
    this.canvas.parentNode.addEventListener("dblclick", this.dblclick);
    this.backgroundCanvas.addEventListener("pointerdown", this.handleDown);
    this.backgroundCanvas.addEventListener("pointerup", this.handleUp);
    this.backgroundCanvas.addEventListener("pointermove", this.handleMove);

    // 拖动逻辑
    this.canvas.addEventListener("mousedown", this.mouseDown);
    this.canvas.addEventListener("mousemove", this.mouseMove);
    this.canvas.addEventListener("mouseup", this.mouseUp);
    this.canvas.addEventListener("mouseout", this.mouseOut);
  }

  getCursorPosition(event) {
    const clientRect = this.backgroundCanvas.getBoundingClientRect();
    const positionX = parseInt(event.clientX - clientRect.x, 10);
    const positionY = parseInt(event.clientY - clientRect.y, 10);
    return [positionX, positionY];
  }

  dblclick = (event) => {
    this.renderInput(event);
  };
}

// 手机端签名
class MobileSign extends BaseSign {
  constructor(options) {
    super(options);
    this.init();
    this.expired = null;
  }

  init() {
    this.backgroundCanvas.addEventListener("touchstart", this.doubleTouch);
    this.backgroundCanvas.addEventListener("touchstart", this.handleDown);
    this.backgroundCanvas.addEventListener("touchend", this.handleUp);
    this.backgroundCanvas.addEventListener("touchmove", this.handleMove);
  }

  getCursorPosition(event) {
    //获取canvas相对可视区域的偏移量
    const clientRect = this.backgroundCanvas.getBoundingClientRect();
    const point = event.targetTouches[0];
    const positionX = point.clientX - clientRect.x;
    const positionY = point.clientY - clientRect.y;
    return [positionX, positionY];
  }

  doubleTouch = (event) => {
    const { targetTouches, timeStamp } = event;
    if (targetTouches.length === 1) {
      if (!this.expired) {
        this.expired = timeStamp + 300;
      } else if (timeStamp <= this.expired) {
        event.preventDefault();
        this.renderInput(event);
        this.expired = null;
      } else {
        this.expired = timeStamp + 300;
      }
    }
  };
}

const Drawer = _isMobile ? MobileSign : PcSign;

export default Drawer;
