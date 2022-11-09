var JSZip = require("jszip");

exports.openArrayBuffer = openArrayBuffer;
exports.splitPath = splitPath;
exports.joinPath = joinPath;
exports.readAsArrayBuffer = readAsArrayBuffer;

function openArrayBuffer(arrayBuffer) {
    return JSZip.loadAsync(arrayBuffer).then(function (zipFile) {
        console.info('loadAsync  zipFile:',zipFile);
        window.e = zipFile;
        function exists(name) {
            return zipFile.file(name) !== null;
        }

        function read(name, encoding) {
            // zip.file("hello.txt").async("string"); // a promise of "Hello World\n"

            return zipFile.file(name).async("string").then(function (array) {
                // console.info(' 20 array:',array);
                // var buffer = uint8ArrayToBuffer(array);
                // if (encoding) {
                //     return buffer.toString(encoding);
                // } else {
                //     return buffer;
                // }
            });
        }

        function write(name, contents) {
            zipFile.file(name, contents);
        }

        function toBuffer() {
            return zipFile.generateAsync({ type: "nodebuffer" });
        }

        return {
            exists: exists,
            read: read,
            write: write,
            toBuffer: toBuffer
        };
    });
}

function uint8ArrayToBuffer(array) {
    if (Buffer.from && Buffer.from !== Uint8Array.from) {
        return Buffer.from(array);
    } else {
        return new Buffer(array);
    }
}

function splitPath(path) {
    var lastIndex = path.lastIndexOf("/");
    if (lastIndex === -1) {
        return { dirname: "", basename: path };
    } else {
        return {
            dirname: path.substring(0, lastIndex),
            basename: path.substring(lastIndex + 1)
        };
    }
}

function joinPath() {
    var nonEmptyPaths = Array.prototype.filter.call(arguments, function (path) {
        return path;
    });

    var relevantPaths = [];

    nonEmptyPaths.forEach(function (path) {
        if (/^\//.test(path)) {
            relevantPaths = [path];
        } else {
            relevantPaths.push(path);
        }
    });

    return relevantPaths.join("/");
}

function readAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function load() {
            resolve(reader.result);
        };
        reader.onerror = (err) => {
            reject(err);
        };
        reader.readAsArrayBuffer(file);
    });
}