![cat.jpeg](image%2Fcat.jpeg)

# random-cat-word

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FArc-Jung%2Frandom-cat-word&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits-GitHub&edge_flat=false)](https://hits.seeyoufarm.com)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Frandom-cat-word&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits-NPM&edge_flat=false)](https://hits.seeyoufarm.com)

### 2024-03-20 Arc-Jung
## Description 🐈🐈🐈

- Randomly generates cat words. / 랜덤한 고양이 단어를 생성한다옹!
- Now, only English and Korean are supported. / 지금은 영어와 한국어만 지원한다냥!
- If you want to add cat words in other languages, please create a Pull Request or issue! I'm asking for help from cats around the world! Let's fill the world with cat sounds! / 다른 언어의 고양이 단어를 추가하고 싶으면 풀 리퀘스트 또는 이슈를 생성해달라냥! 전세계 고양이들에게 도움을 요청한다냥! 닝겐 세상을 고양이 소리로 도배시키자냥!

## Installation 🐈🐈🐈

- If you use NPM
```shell
npm install random-cat-word
```

- If you use Yarn
```shell
yarn add random-cat-word
```

## Usage 🐈🐈🐈

```typescript
import {generate} from "random-cat-word/dist/cjs/main";

console.log(generate(10)) // default language is 'english'
console.log(generate(1)) // default language is 'english'

console.log(generate(10, 'english')) // or generate(10, 'en')
console.log(generate(10, 'korean')) // or generate(10, 'ko')
```

```shell
Kaaaack Yaaong Grwo Merr Yaaayong Yaaayong Nyaaaaa Nya Grwo Nyaayong
Meow

Aong Trill Mewooong Yaaayong Nyaayong Nyaa Nyong Meow Nyaayong Nyong
야옹 옹 야 아옥 애오옹 먀 냐야야야야얌 야야아앙 냐야야야앙 아오오오
```

## Publish 🐈🐈🐈
```shell
npm login
npm publish
```