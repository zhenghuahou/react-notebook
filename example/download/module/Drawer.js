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
    const { width = 500, height = 500, ...attrs } = options || {};
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    this.canvas = canvas;
    this.ctx = ctx;
    this.updateAttrs(attrs);

    this.writingMode = false;
    this.draggable = false;
    this.signMode = false;
    this.input = null;

    this.dragSnapStack = []; //拖动物件之前，保存当前canvas数据
    this.currentDragIndex = -1; // 当前拖动物件的index
    this.dragShapeList = []; //可以拖动的物体，现在暂时存放可以拖动的图片对象

    window.zz = this;
  }

  updateAttrs(attrs = {}) {
    const { ctx } = this;
    Object.keys(attrs).forEach((key) => {
      ctx[key] = attrs[key];
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
    console.info("[renderInput] positionX, positionY:", positionX, positionY);
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

  // Draw the text onto canvas
  drawText(text, x, y) {
    this.ctx.fillText(text, x, y + 10);
  }
  // Key handler for input box
  handleEnter = (e) => {
    const { input } = this;
    const { keyCode } = e;
    if (keyCode === 13) {
      this.drawText(input.value, input.extraX, input.extraY);
      this.hideInput();
    }
  };

  handleDown = (event) => {
    if (!this.signMode) {
      return;
    }
    event.preventDefault();
    this.writingMode = true;
    this.ctx.beginPath();
    const [positionX, positionY] = this.getCursorPosition(event);
    this.ctx.moveTo(positionX, positionY);
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
    this.ctx.lineTo(positionX, positionY);
    this.ctx.stroke();
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
      console.info(" 在图片里yes ");
      return true;
    }

    console.info(" 不在图片里no ");
    return false;
  }

  mouseDown = (event) => {
    event.preventDefault;
    console.info("===> event:", event);
    const { dragShapeList } = this;
    if (!dragShapeList?.length) {
      return console.info("没有移动物体");
    }
    let index = 0;
    const [positionX, positionY] = this.getCursorPosition(event);
    this.startPointX = positionX; //拖动的X轴开始位置
    this.startPointY = positionY; // 拖动的Y轴开始位置
    for (let shape of dragShapeList) {
      if (this.isMouseInShape(positionX, positionY, shape)) {
        this.draggable = true;
        this.currentDragIndex = index;
        return;
      }
      index = index + 1;
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
      // console.info(' positionX: positionY:',positionX, positionY,' this.startPointX:',this.startPointX,this.startPointY,'dx:',dx,dy);
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

  save() {
    this.dragSnapStack.push(this.canvas.toDataURL());
  }

  restore() {
    const img = new Image();
    const src = this.dragSnapStack[this.dragSnapStack.length - 1];
    img.src = src;
    console.info(" src:", src);
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0);
    };
  }
  // 绘制拖动的物件
  drawDragShape = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.restore();

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
    const url = URL.createObjectURL(file);
    const { canvas } = this;

    img.src = url;
    img.onload = () => {
      img.pointX = canvas.width / 2 - img.width / 2;
      img.pointY = canvas.height / 2 - img.height / 2;

      this.dragShapeList.push(img);
      // 保存出入图片之前的canvas数据
      // this.save();
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
    this.setCanvasBg();
  }

  getDataURL(type = "image/png") {
    return this.canvas.toDataURL(type);
  }
}

// pc端签名
class PcSign extends BaseSign {
  constructor(options) {
    super(options);
    this.init();
  }

  init() {
    this.canvas.addEventListener("dblclick", this.dblclick);
    this.canvas.addEventListener("pointerdown", this.handleDown);
    this.canvas.addEventListener("pointerup", this.handleUp);
    this.canvas.addEventListener("pointermove", this.handleMove);

    // 拖动逻辑
    this.canvas.addEventListener("mousedown", this.mouseDown);
    this.canvas.addEventListener("mousemove", this.mouseMove);
    this.canvas.addEventListener("mouseup", this.mouseUp);
    this.canvas.addEventListener("mouseout", this.mouseOut);
  }

  getCursorPosition(event) {
    const clientRect = this.canvas.getBoundingClientRect();
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
    this.canvas.addEventListener("touchstart", this.doubleTouch);
    this.canvas.addEventListener("touchstart", this.handleDown);
    this.canvas.addEventListener("touchend", this.handleUp);
    this.canvas.addEventListener("touchmove", this.handleMove);
  }

  getCursorPosition(event) {
    //获取canvas相对可视区域的偏移量
    const clientRect = this.canvas.getBoundingClientRect();
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
