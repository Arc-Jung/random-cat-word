export const catWordList = [
    '애옹',
    '냐옹',
    '야옹',
    '냐',
    '야',
    '웅엥',
    '아오옹',
    '아',
    '오',
    '옹',
    '냥',
    '와',
    '와오',
    '냐냐야야야양',
    '와웅',
    '아오오오',
    '아옹',
    '냐야야양',
    '아오오옹',
    '아옥',
    '야아옹',
    '냐아아앙',
    '냐야야야앙',
    '아오오오오옹',
    '애오옹',
    '아냐야양',
    '야야아앙',
    '냐야야야야얌',
    '아웅우웅',
    '아우웅',
    '냐우웅',
    '냐웅',
    '야아아아아아앙',
    '와웅',
    '와아아앙',
    '아아오오오옹',
    '하아아아악',
    '캬아아아악',
    '캭캭캬야야약',
    '우우우웅',
    '우우우웅'
]

// Generate random cat word
export function generate(num:number) {
    let catWord = '';
    for (let i = 0; i < num; i++) {
        catWord += catWordList[Math.floor(Math.random() * catWordList.length)] + ' ';
    }
    return catWord;
}
