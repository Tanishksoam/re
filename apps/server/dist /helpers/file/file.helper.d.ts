/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as fs from 'fs';
import { Readable } from 'typeorm/platform/PlatformTools';
export declare namespace FileHelper {
    function getRoot(): string;
    function findFileContent(path: string): string;
    function writeFolder(path: string): void;
    function writeFile(path: string, content: string | Buffer): void;
    function joinPaths(...paths: string[]): string;
    function createReadStream(path: string): fs.ReadStream;
    function buildTemporaryPath(path: string): string;
    function fromArrayBufferToReadable(arrayBuffer: ArrayBuffer): Readable;
    function createReadStreamFromArrayBuffer(arrayBuffer: ArrayBuffer, filename: string): Promise<fs.ReadStream>;
    function deleteFile(path: string): Promise<void>;
    function deleteFolder(path: string): void;
}
