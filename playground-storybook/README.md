<img src="https://github.com/JeongwooHam/Playground/assets/123251211/0a8fdd71-5b7d-4613-8f33-b5cc6ed569b3"/>

## ✨ 스토리북과 디자인 시스템

### 💄 디자인 시스템이란?

- **_제품의 디자인에 대한 규칙_**
  - 서비스 UI에 일관성을 부여한다.
  - 코드 및 디자인의 유지보수가 유리해진다.
  - 기획자, 디자이너, 개발자 간 커뮤니케이션 비용을 절약할 수 있다.
- 제품의 디자인과 개발을 안내하는 광범위한 지침, 표준, 실천 사항을 모아둔 것

### 📖 스토리북이란?

- UI 컴포넌트를 독립적으로 개발하고 문서화할 수 있는 환경을 제공하는 도구
- UI 컴포넌트에 `story`를 부여하여 렌더링을 테스트한다.
  - `story`: UI 컴포넌트의 상태 (예: `disabled`, `enabled`)
- 디자인 시스템을 구축하고 유지하는 데 있어 중요한 역할을 한다.
  - 개발한 컴포넌트가 디자인 가이드에 맞는지 확인할 수 있다.
  - 컴포넌트의 레이아웃, 색상, 타이포그래피 등 다양한 디자인 요소를 일관성 있게 관리할 수 있다.
  - 디자인 토큰, 컴포넌트, 패턴 등을 문서화하여 팀 내 공유 및 재사용을 편리하게 한다.

### 🤔 스토리북과 디자인 시스템, 왜 필요할까?

- 작은 컴포넌트들을 쌓아서 큰 컴포넌트를 만들었을 때 UI가 어떻게 보일지를 확인할 수 있다.
- 팀원들 간의 커뮤니케이션을 강화하며 디자인과 코드를 일관성 있게 유지하도록 도와준다.
- 사용자가 내가 만든 컴포넌트를 내가 의도한 대로 잘 사용할 수 있는지를 미리 보고 적용할 수 있다.
- 회사에서 새로운 프로젝트를 런칭하더라도 미리 만들어둔 디자인 시스템을 기반으로 일관된 UI 시스템 통해 Brand Identity를 가져갈 수 있다.

## 🤖 프로젝트 기본 설정

- 우선 vite로 프로젝트를 `init`합니다.

```shell
npm create vite@latest
```

### 📖 스토리북 환경 설정하기

1. 스토리북을 `init` 한다.

```shell
npx storybook@latest init
```

2. vite와 관련된 추가 설정을 진행한다.

```shell
npm install @storybook/builder-vite --save-dev
```

3. 스토리북 폴더의 `main.ts` 파일에 `core` 설정을 추가한다.

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  // ...
  core: {
    builder: "@storybook/builder-vite",
  },
};
```

### 🌀 Tailwind Css 환경 설정하기

1. Tailwind를 설치한다.

```shell
npm install -D tainwindcss postcss autoprefixer
npx tailwind init -p
```

2. `tailwind.config.js`에서 리액트 코드 스타일이 반영되도록 설정해준다.

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
```

3. tailwind를 import 해준다.

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. 디자인 시스템의 기본 설정을 반영한다.

```js
// tailwind.config.js
export default {
  // ...
  theme: {
    colors: {
      // ...
    },
  },
};
```

- `tailwind.config.js`에 설정한 것보다 인라인으로 직접 설정해주는 것이 우선되므로 스타일이 고정될 우려는 하지 않아도 된다.

## 🧨 컴포넌트 개발 시 CLS(Cumulative Layout Shift) 고려하기

### 🧐 CLS란?

- 방문자에게 콘텐츠가 얼마나 불안정하게 느껴지는지를 측정하는 사용자 경험 측정 항목
  - 페이지에서 갑자기 레이아웃의 변경이 발생하는 것은 사용자의 주의를 산만하게 할 수 있다.
  - 잘못된 클릭을 유도할 경우 피해를 초래하거나 불만족스러운 UX를 제공하게 된다.
- CLS 측정을 통해 사용자에게 발생하는 레이아웃 이동 빈도를 파악하여 문제를 해결할 수 있다.

> CLS 점수

<img src="https://wit.nts-corp.com/wp-content/uploads/2020/12/02.png" alt="CLS 점수"/>

- 일정 기간 동안 레이아웃 이동이 없는 상태에서 발생하는 예상하지 않은 레이아웃 이동에 대한 누적된 점수
- 뷰포트에서 이동한 콘텐츠의 양과 영향을 받은 요소가 이동한 거리를 고려하여 산정된다.
- 좋은 사용자 환경 제공을 위해서는 사이트의 CLS 점수가 `0.1` 미만이어야 한다.

### ✨ 해결 방법

- errorMessage를 `absolute`로 고정해준다.
- 이때, 재사용성을 위해 errorMessage 자체에 `position`을 부여하지 않으려 `div` 태그를 겉에 추가할 경우 불필요한 태그가 하나 더 추가된다.
  - 이는 tree의 모든 node를 훑는 React의 Reconciliation 과정에 소요되는 시간을 더 길어지게 하므로 렌더링 시간이 오래 걸릴 수 있다.
- CSS의 자식 속성을 사용하자!

  ```css
  /*일반 CSS 스타일*/
  .relative {
    > p {
      position: absolute;
    }
  }

  /*tailwindCSS 스타일*/
  @layer components {
    .relative > p {
      @apply absolute;
    }
  }

  /*특정 컴포넌트에만 적용되길 원하는 경우*/
  @layer components {
    .text-field > p {
      @apply absolute;
    }
  }
  ```
