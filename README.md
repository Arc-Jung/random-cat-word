# random-cat-word

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FArc-Jung%2Frandom-cat-word&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

### 2024-03-20 Arc-Jung

## Description

- Randomly generates cat sounds.
- 랜덤한 고양이 소리를 생성합니다.

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

console.log(generate(10))
console.log(generate(10, 'english'))
console.log(generate(10, 'korean'))
```

```shell
Kaaaack Yaaong Grwo Merr Yaaayong Yaaayong Nyaaaaa Nya Grwo Nyaayong
Aong Trill Mewooong Yaaayong Nyaayong Nyaa Nyong Meow Nyaayong Nyong
야아옹 오 와웅 우우우웅 캭캭캬야야약 냐웅 아우웅 오 웅엥 야야아앙
```