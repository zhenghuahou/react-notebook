import Websocket from './websocket'

const genConfig = function () {
  const config = [
    {
      path: "websocket",
      element: <Websocket />,
      title: 'websocket相关'
    }
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();