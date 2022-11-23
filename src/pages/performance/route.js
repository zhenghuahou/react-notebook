import Profiler from './profiler'

const genConfig = function () {
  const config = [
    {
      path: "profiler",
      title: 'react profiler',
      element: <Profiler />,
    },
  ];

  config.map(item => {
    item.path = item.path.toLowerCase();
    return item
  })
  return config
}


export default genConfig();

