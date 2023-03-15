function compose(middleware) {
  return function (context) {
    let index = -1;
    let rst;
    function dispatch(i, ctx) {
      // console.info("i:", i, "index:", index, " ctx:", ctx);
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i <= middleware.length - 1) {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } else if (i > middleware.length - 1) {
        // console.info("fn:", fn);
        rst = ctx;
        return Promise.resolve(ctx);
      }
    }

    const m0 = dispatch(0, context);
    console.info(" m0:", m0);
    return Promise.resolve(rst);
  };
}

/* 以下为测试代码 */

function num(ctx, next) {
  console.info(">>>开始计算10件");
  next(ctx * 10);
  // next(ctx * 4);
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

const pipe = compose([num, discount, calculate]);
// console.info(" pipe:", pipe);
const r = pipe(150);
console.info("r:", r);
