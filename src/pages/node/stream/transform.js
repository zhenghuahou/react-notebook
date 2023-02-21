const Transform = require('stream').Transform;
// https://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/
const MAP = {
    'Barret': 'tell',
    'Lee': 'me'
};

class Translate extends Transform {
    constructor(dataSource, options) {
        super(options);
    }
    _transform(buf, enc, next) {
        const key = buf.toString();
        const data = MAP[key];
        this.push(data);
        next();
    }
}

var transform = new Translate();
transform.write('Barret');
transform.write('Lee');
transform.end();
transform.on('data', data => console.log('data:', data.toString()));

/*
    输出结果:
    data: tell
    data: me
*/
