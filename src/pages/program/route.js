import ArrayToRemoveDuplicates from './arrayToRemoveDuplicates'
import ArrayFlat from './arrayFlat'

const genConfig = function () {
    const config = [
        {
            path: "arrayToRemoveDuplicates",
            element: <ArrayToRemoveDuplicates />,
            title: '数组去重'
        },
        {
          path: "arrayFlat",
          element: <ArrayFlat />,
          title: '数组扁平化'
      }];

    config.map(item => {
        item.path = item.path.toLowerCase();
        return item
    })
    return config
}


export default genConfig();