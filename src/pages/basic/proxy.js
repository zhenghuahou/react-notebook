import Code from '../../components/code';

var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.info(`proxy getting ${propKey}!`, arguments);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.info(`proxy setting ${propKey}!`, arguments);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.name = 'test'
window.proxyObj = obj;

export default function ProxyDemo() {
  return (
    <>
      <p className='tc'>
        Proxy/Reflect demo 细节输出可以查看控制台
      </p>
      <Code>
        <span className="code">
          <i className="input">obj.count = 1</i>
          <i className="output"></i>
        </span>
      </Code>
    </>
  )
  }