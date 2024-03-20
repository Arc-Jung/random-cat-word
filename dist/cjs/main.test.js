"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
test('generateTest', () => {
    const word = (0, main_1.generate)(1);
    expect(word.length).not.toBe(0);
    console.log(word);
    const wordList = (0, main_1.generate)(10);
    expect(wordList.length).not.toBe(0);
    console.log(wordList);
    console.log((0, main_1.generate)(100));
});
