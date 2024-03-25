![logo.jpeg](image%2Flogo.jpeg)

# random-cat-word

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FArc-Jung%2Frandom-cat-word&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits-GitHub&edge_flat=false)](https://hits.seeyoufarm.com)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Frandom-cat-word&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits-NPM&edge_flat=false)](https://hits.seeyoufarm.com)

### 2024-03-20 Arc-Jung
## Description

- Randomly generates cat sounds. / 랜덤한 고양이 소리를 생성합니다.
- If you would like to add cat words in other languages, please submit Pull Request. / 다른 언어의 고양이 단어를 추가하고 싶으면 풀 리퀘스트 해주세요.
- Now, only English and Korean are supported. / 지금은 영어와 한국어만 지원합니다.

## Installation

- If you use NPM
```shell
npm install random-cat-word
```

- If you use Yarn
```shell
yarn add random-cat-word
```

## Usage

```typescript
import {generate} from "random-cat-word/dist/cjs/main";

console.log(generate(10)) // default language is 'english'
console.log(generate(10, 'english')) // or 'en'
console.log(generate(10, 'korean')) // or 'ko'
```

```shell
Kaaaack Yaaong Grwo Merr Yaaayong Yaaayong Nyaaaaa Nya Grwo Nyaayong
Aong Trill Mewooong Yaaayong Nyaayong Nyaa Nyong Meow Nyaayong Nyong
야옹 옹 야 아옥 애오옹 먀 냐야야야야얌 야야아앙 냐야야야앙 아오오오
```