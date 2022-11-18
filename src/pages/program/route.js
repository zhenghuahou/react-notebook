import ArrayToRemoveDuplicates from './arrayToRemoveDuplicates'

const genConfig = function () {
    const config = [
        {
            path: "arrayToRemoveDuplicates",
            element: <ArrayToRemoveDuplicates />,
            title: '数组去重'
        }];

    config.map(item => {
        item.path = item.path.toLowerCase();
    })
    return config
}


export default genConfig();