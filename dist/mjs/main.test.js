import { generate } from "random-cat-word/dist/cjs/main";
test('generateTest', () => {
    const word = generate(1);
    expect(word.length).not.toBe(0);
    console.log(word);
    const wordList = generate(10);
    expect(wordList.length).not.toBe(0);
    console.log(wordList);
});
