import Operator from './operator'
import Apply from './apply&call'
import New from './new'
import Proxy from './proxy'
import ShadowDOM from './shadowDOM'
import ShadowDOMCustomElements from './shadowDOM&customElements'

const genConfig = function () {
  const config = [
    {
      path: "Operator",
      element: <Operator />,
      title: '操作运算符相关'
    }, {
      path: "Apply",
      element: <Apply />,
      title: 'apply与call'
    }, {
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
    }];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })

  return config
}


export default genConfig();