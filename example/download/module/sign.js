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

    console.info('ctx:',ctx)

    this.initAttrs(ctx, attrs);
    this.canvas = canvas;
    this.ctx = ctx;
    this.writingMode = false;
  }

  initAttrs(ctx, attrs = {}) {
    Object.keys(attrs).forEach((key) => {
      ctx[key] = attrs[key];
    });
  }

  handleDown = (event) => {
    event.preventDefault();
    this.writingMode = true;
    this.ctx.beginPath();
    const [positionX, positionY] = this.getCursorPosition(event);
    this.ctx.moveTo(positionX, positionY);
  };

  handleUp = (event) => {
    event.preventDefault();
    this.writingMode = false;
  };

  handleMove = (event) => {
    event.preventDefault();
    if (!this.writingMode) return;
    const [positionX, positionY] = this.getCursorPosition(event);
    this.ctx.lineTo(positionX, positionY);
    this.ctx.stroke();
  };

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getDataURL() {
    return this.canvas.toDataURL();
  }
}

// pc端签名
class PcSign extends BaseSign {
  constructor(options) {
    super(options);
    this.init();
  }

  init() {
    this.canvas.addEventListener("pointerdown", this.handleDown);
    this.canvas.addEventListener("pointerup", this.handleUp);
    this.canvas.addEventListener("pointermove", this.handleMove);
  }

  getCursorPosition(event) {
    const clientRect = this.canvas.getBoundingClientRect();
    const positionX = event.clientX - clientRect.x;
    const positionY = event.clientY - clientRect.y;
    return [positionX, positionY];
  }
}

// 手机端签名
class MobileSign extends BaseSign {
  constructor(options) {
    super(options);
    this.init();
  }

  init() {
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
}

const Sign = _isMobile ? MobileSign : PcSign;

export default Sign;
