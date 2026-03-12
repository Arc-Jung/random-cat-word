import { generate, catKoreanWordList, catEnglishWordList } from './main';

describe('generate - 단어 수', () => {
    test('num=1 이면 단어 1개 반환', () => {
        const result = generate(1);
        expect(result.split(' ')).toHaveLength(1);
    });

    test('num=5 이면 단어 5개 반환 (공백으로 구분)', () => {
        const result = generate(5);
        expect(result.split(' ')).toHaveLength(5);
    });

    test('num=0 이면 빈 문자열 반환', () => {
        const result = generate(0);
        expect(result).toBe('');
    });

    test('num=100 이면 단어 100개 반환', () => {
        const result = generate(100);
        expect(result.split(' ')).toHaveLength(100);
    });
});

describe('generate - 언어 옵션', () => {
    const koreanAliases = ['Korean', 'korean', 'ko', 'kor', 'kr'];

    koreanAliases.forEach(lang => {
        test(`language="${lang}" 이면 한국어 리스트에서 반환`, () => {
            const word = generate(1, lang);
            expect(catKoreanWordList).toContain(word);
        });
    });

    const englishCases = [undefined, 'english', 'English', 'en', ''];

    englishCases.forEach(lang => {
        test(`language=${JSON.stringify(lang)} 이면 영어 리스트에서 반환`, () => {
            const word = generate(1, lang);
            expect(catEnglishWordList).toContain(word);
        });
    });
});

describe('generate - 반환값 형식', () => {
    test('앞뒤 공백 없음', () => {
        const result = generate(3);
        expect(result).toBe(result.trim());
    });

    test('단어 사이 공백은 정확히 1개', () => {
        const result = generate(5);
        expect(result).not.toMatch(/  /);
    });

    test('빈 단어 없음 (연속 공백 없음)', () => {
        const result = generate(10);
        const words = result.split(' ');
        words.forEach(word => expect(word.length).toBeGreaterThan(0));
    });
});

describe('generate - 랜덤성', () => {
    test('같은 호출을 여러 번 해도 항상 같은 값이 아님 (확률적)', () => {
        const results = new Set(Array.from({ length: 30 }, () => generate(1)));
        expect(results.size).toBeGreaterThan(1);
    });
});

describe('catEnglishWordList / catKoreanWordList export', () => {
    test('영어 리스트는 배열이고 비어있지 않음', () => {
        expect(Array.isArray(catEnglishWordList)).toBe(true);
        expect(catEnglishWordList.length).toBeGreaterThan(0);
    });

    test('한국어 리스트는 배열이고 비어있지 않음', () => {
        expect(Array.isArray(catKoreanWordList)).toBe(true);
        expect(catKoreanWordList.length).toBeGreaterThan(0);
    });

    test('영어 리스트의 모든 항목은 문자열', () => {
        catEnglishWordList.forEach(word => expect(typeof word).toBe('string'));
    });

    test('한국어 리스트의 모든 항목은 문자열', () => {
        catKoreanWordList.forEach(word => expect(typeof word).toBe('string'));
    });
});
