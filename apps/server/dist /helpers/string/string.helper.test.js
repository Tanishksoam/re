"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_helper_1 = require("./string.helper");
describe('toCamelCase', () => {
    test('When a string is already in camel case, then it stays in camel case', () => {
        const result = string_helper_1.StringHelper.toCamelCase('hello_world');
        const expected = 'helloWorld';
        expect(result).toEqual(expected);
    });
    test('When a string is given, then it is converted to camel case', () => {
        const result = string_helper_1.StringHelper.toCamelCase('hello_world');
        const expected = 'helloWorld';
        expect(result).toEqual(expected);
    });
    test('When a string with underscore is given, then it is converted to camel case', () => {
        const result = string_helper_1.StringHelper.toCamelCase('__hello_world__');
        const expected = '__helloWorld__';
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=string.helper.test.js.map