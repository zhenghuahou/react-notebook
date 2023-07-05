
class C {
    @testable('asdfa','uuu')
    // @testable
    toString() {
      return 'C';
    }
    static aa =1;
    test(){
      console.info('test');
    }
  
    abc = ()=>{
      console.info('abc');
    }
  }
  
  function testable(target) {
    console.info('第一层 testable :',arguments,' target:',target,' this:',this);
    // target.isTestable = true;
    return function (clsobj,name,descriptor){
      /*arguments:
         0
        : 
        {constructor: ƒ, toString: ƒ}
        1
        : 
        "toString"
        2
        : 
        {writable: true, enumerable: false, configurable: true, value: ƒ}
      */
     window.clsobj = clsobj;
     setTimeout(()=>{
      console.info('第二层 testable :',arguments,' target:',target,'window.d:',window.d,'clsobj:',clsobj,
      'clsobj === C:',clsobj === window.d.constructor,' this:',this);
     },100)
    }
  }
  
  // = d;
  // console.info(' d:',window.d);
  
  /*
  装饰器第一个参数是类的原型对象，上例是Person.prototype，装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，
  所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）；
  第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象。
  */
  function replaceMethod(target, name, descriptor) {
    setTimeout(()=>{
      console.info('【replaceMethod 001】 this:',this,'arg:',arguments,' target====Person.prototype:',target===Person.prototype);
    })
    return function () {
      console.info('【replaceMethod 002】 this:',this,'arg:',arguments);
      return `How are you, ${this.name}?`;
    }
  }
  
  class Person {
    constructor(name) {
      this.name = name;
    }
    @replaceMethod
    hello() {
      return `Hi ${this.name}!`;
    }
  }
  
  const robin = new Person('Robin');
  
  
  // function log()
  
  // // Decorator function
  // {
  // return function decorator()
  // 	{
  // 	// "arrow" function
  // 	return (...args) =>
  // 		{
  // 	console.log(`Parameters : args`);
  // 	return console.info(' eeeee');
  // 	};
  // }
  // }
  
  // // Decorators
  // @log
  // class gfg
  // {
  // constructor(name, category) {}
  // }
  
  // const e = new gfg('geek', 'code');
  
  // // Arguments for Demo: args
  // console.log('e:',e);
  
  
  class Math {
    @log
    add(a, b) {
      return a + b;
    }
  }
  
  function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    console.info(' oldValue:',oldValue,' arg:',arguments);
    descriptor.value = function() {
      console.log(`Calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
    };
  
    return ()=>{
      console.info(' log ###');
    };
  }
  
  const math = new Math();
  