import Var from './var'
import Operator from './operator'
import IIFE from './IIFE'
import Apply from './apply&call'
import New from './new'
import ObjectCreate from './objectCreate'
import Proxy from './proxy'
import ShadowDOM from './shadowDOM'
import ShadowDOMCustomElements from './shadowDOM&customElements'
import HashAndHistory from './hash&history'
import Instanceof from './instanceof'
import AddBigNumber from './addBigNumber'

const genConfig = function () {
  const config = [
    {
      path: "Var",
      element: <Var />,
      title: '变量提升'
    },
    {
      path: "Operator",
      element: <Operator />,
      title: '操作运算符相关'
    }, 
    {
      path: "IIFE",
      element: <IIFE />,
      title: '立即执行函数表达式'
    },
    {
      path: "AddBigNumber",
      element: <AddBigNumber />,
      title: '大数相加'
    }, {
      path: "Apply",
      element: <Apply />,
      title: 'apply与call'
    },
    {
      path: "Object.create",
      element: <ObjectCreate />,
      title: 'Object.create'
    },
    {
      path: "New",
      element: <New />,
      title: 'new操作符'
    }, {
      path: "Proxy",
      element: <Proxy />,
      title: 'proxy / Reflect 相关'
    },
    {
      path: "ShadowDOM",
      element: <ShadowDOM />,
      title: 'shadow DOM 相关'
    },
    {
      path: "shadowDOMCustomElements",
      element: <ShadowDOMCustomElements />,
      title: 'shadow DOM & custom elements'
    }, {
      path: "HashAndHistory",
      element: <HashAndHistory />,
      title: '前端路由的两种模式：hash模式和 history模式'
    }, {
      path: "instanceof",
      element: <Instanceof />,
      title: 'instanceof原理'
    }];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })

  return config
}


export default genConfig();