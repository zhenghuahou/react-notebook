function num(ctx, next) {
  console.info(">>>开始计算10件");
  next(ctx * 10);
  //   next(ctx * 4);
  console.info("<<<10件计算结束");
  return "num";
}

function discount(ctx, next) {
  console.info(">>>打折开始", next, " ctx:", ctx);
  next(ctx * 0.8);
  console.info("<<<打折结束");
}

function calculate(ctx, next) {
  console.info(">>>计算邮费开始", next, " ctx:", ctx);
  next(ctx + 12);
  console.info("<<<计算邮费结束");
}

function compose(middleware) {
  return function (context, next) {
    let index = -1;
    let i = 0;
    let rst;
    function dispatch(i, ctx) {
      if (i <= index) return new Error("next() called multiple times");
      index = i;
      let fn = middleware[i];
      if (i <= middleware.length - 1) {
        return fn(ctx, dispatch.bind(null, i + 1));
      } else if (i > middleware.length - 1) {
        // console.info("fn:", fn);
        rst = ctx;
        return ctx;
      }
    }

    const m0 = dispatch(0, context);
    console.info(" m0:", m0);
    return rst;
  };
}

const pipe = compose([num, discount, calculate]);
// console.info(" pipe:", pipe);
const r = pipe(150);
console.info("r:", r);
