"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHelper = void 0;
const fs = require("fs");
const os = require("os");
const Path = require("path");
const path_1 = require("path");
const PlatformTools_1 = require("typeorm/platform/PlatformTools");
var FileHelper;
(function (FileHelper) {
    function getRoot() {
        return Path.join(__dirname, '../../..');
    }
    FileHelper.getRoot = getRoot;
    function findFileContent(path) {
        return fs.readFileSync(path, 'utf-8');
    }
    FileHelper.findFileContent = findFileContent;
    function writeFolder(path) {
        fs.mkdirSync(path, { recursive: true });
    }
    FileHelper.writeFolder = writeFolder;
    function writeFile(path, content) {
        const pathFolder = path.split('/').slice(0, -1).join('/');
        writeFolder(pathFolder);
        return fs.writeFileSync(path, content);
    }
    FileHelper.writeFile = writeFile;
    function joinPaths(...paths) {
        return (0, path_1.join)(...paths);
    }
    FileHelper.joinPaths = joinPaths;
    function createReadStream(path) {
        return fs.createReadStream(path);
    }
    FileHelper.createReadStream = createReadStream;
    function buildTemporaryPath(path) {
        const pathTemporary = Path.join(os.tmpdir(), 'marblism-tmp', path);
        return pathTemporary;
    }
    FileHelper.buildTemporaryPath = buildTemporaryPath;
    function fromArrayBufferToReadable(arrayBuffer) {
        let buffer = Buffer.from(arrayBuffer);
        const readableStream = new PlatformTools_1.Readable({
            read() {
                this.push(buffer);
                this.push(null);
            },
        });
        return readableStream;
    }
    FileHelper.fromArrayBufferToReadable = fromArrayBufferToReadable;
    async function createReadStreamFromArrayBuffer(arrayBuffer, filename) {
        const path = buildTemporaryPath(filename);
        const pathFolder = path.split('/').slice(0, -1).join('/');
        deleteFolder(pathFolder);
        writeFolder(pathFolder);
        fs.writeFileSync(path, Buffer.from(arrayBuffer));
        return fs.createReadStream(path);
    }
    FileHelper.createReadStreamFromArrayBuffer = createReadStreamFromArrayBuffer;
    async function deleteFile(path) {
        fs.unlinkSync(path);
    }
    FileHelper.deleteFile = deleteFile;
    function deleteFolder(path) {
        try {
            fs.rmdirSync(path, { recursive: true });
        }
        catch (error) {
        }
    }
    FileHelper.deleteFolder = deleteFolder;
})(FileHelper || (exports.FileHelper = FileHelper = {}));
//# sourceMappingURL=file.helper.js.map