export declare namespace Utility {
    function sleep(milliseconds: number): Promise<void>;
    function getUUID(): string;
    function buildRandomAlphanumericString(length: number): string;
    function isDefined(value: any): boolean;
    function arrayUnique<Type>(items: Type[]): Type[];
    function removeTrailingSlash(content: string): string;
    function isEmpty(value: string | string[]): boolean;
}
