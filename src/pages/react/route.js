import SetState18 from './setState-18'
import UseLayoutEffect from './useLayoutEffect'
import SetState from './setState'
import BeforeYouMemo from './beforeYouMemo'
import Memo from './memo'
import Demanhook from './demanhook'

const genConfig = function () {
  const config = [
   {
      path: "useLayoutEffect",
      title:'useLayoutEffect',
      element: <UseLayoutEffect />,
    },
    {
      path: "setState-18",
      title: 'setState with react v18',
      element: <SetState18 />,
    },
    {
      path: "setState",
      title: 'setState是同步还是异步',
      element: <SetState />,
    },
    {
      path: "beforeyoumemo",
      title: '状态下放，缩小状态影响范围状态下放',
      element: <BeforeYouMemo />,
    },
    {
      path: "memo",
      title: 'memo+useCallback',
      element: <Memo />,
    },
    {
      path: "demanhook",
      title: '按需加载hook',
      element: <Demanhook />,
    }
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();