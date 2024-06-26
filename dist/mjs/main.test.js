import { generate } from "./main";
test('generateTest', () => {
    const word = generate(1);
    expect(word.length).not.toBe(0);
    console.log(word);
    const wordList = generate(10);
    expect(wordList.length).not.toBe(0);
    console.log(wordList);
    const wordKorean = generate(1, 'korean');
    expect(wordKorean.length).not.toBe(0);
    console.log(wordKorean);
    const wordKoreanList = generate(10, 'korean');
    expect(wordKoreanList.length).not.toBe(0);
    console.log(wordKoreanList);
    const wordEnglish = generate(1, 'english');
    expect(wordEnglish.length).not.toBe(0);
    console.log(wordEnglish);
    const wordEnglishList = generate(10, 'english');
    expect(wordEnglishList.length).not.toBe(0);
    console.log(wordEnglishList);
});
