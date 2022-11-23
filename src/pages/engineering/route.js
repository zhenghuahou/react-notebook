import Webpack from './webpack'

const genConfig = function () {
  const config = [
    {
      path: "webpack",
      title: 'webpack细节以及原理',
      element: <Webpack />,
    },
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();

