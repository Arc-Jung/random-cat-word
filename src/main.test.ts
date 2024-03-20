import {generate} from "./main";

test('generateTest', () => {
    const word = generate(1);
    expect(word.length).not.toBe(0);
    console.log(word);

    const wordList = generate(10);
    expect(wordList.length).not.toBe(0);
    console.log(wordList);

    console.log(generate(100));
});