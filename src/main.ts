export const catKoreanWordList = [
    '애옹',
    '냐옹',
    '야옹',
    '냐',
    '야',
    '웅엥',
    '아오옹',
    '아',
    '오옹',
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
    '하악',
    '캬아아아악',
    '캭캭캬야야약',
    '우우우웅',
    '우우우웅',
    '마옹',
    '뫼옹',
    '뫼옹',
    '뫼아옹',
    '미야옹',
    '미양',
    '냐',
    '먀',
    '나옹',
    '골골',
    '골골골골',
    '그르르르'
]

export const catEnglishWordList = [
    'Meow',
    'Nyaa',
    'Yaa',
    'Yaaong',
    'Kaaaack',
    'Haaaaaack',
    'Nya',
    'Nyaayong',
    'Yaaayong',
    'Nyaayong',
    'Yayong',
    'Aong',
    'Mew',
    'Meow',
    'Purr',
    'Merr',
    'Hiss',
    'Trill',
    'Growl',
    'Grwo',
    'Mew',
    'Mewooong',
    'Meong',
    'Aong',
    'Nyong',
    'Nyaaaaa',
    'Nyaaaaaong',
    'Nyaaaaan',
    'Grwo',
    'Grrrr',
    'Grrrrrrrr'
]

// Generate random cat word
export function generate(num:number, language?:string) {
    let catWordList = [];
    if (language === 'Korean' || language === 'korean' || language === 'ko' || language === 'kor' || language === 'kr') {
        catWordList = catKoreanWordList;
    } else {
        catWordList = catEnglishWordList;
    }

    let catWord = '';
    for (let i = 0; i < num; i++) {
        catWord += catWordList[Math.floor(Math.random() * catWordList.length)]
        if (i < num - 1) {
            catWord += ' ';
        }
    }
    return catWord;
}