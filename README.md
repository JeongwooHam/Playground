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

<img src="https://marfeel.anticipa.io/public/uploads/marfeel/image/wysiwyg/21_10_2020_09_28_34_Screenshot_2020_10_21_at_09.28.21.png" alt="CLS 점수"/>

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

## 👷 Chromatic과 Github Actions를 활용한 CI/CD

<img src="https://www.chromatic.com/docs/_astro/workflow-publish.8OxWBJDQ_1ycnpj.webp"/>

### 🚨 Chromatic 이전의 문제점

- 코드만 보고 컴포넌트의 형태를 상상하기 어렵다.
- PR을 작성할 때 세부 컴포넌트를 모두 상세하게 작성하기 어렵다.
- 컴포넌트의 UI와 테스트를 직접 실행하기 번거롭다.

### 🧐 Chromatic이란?

- Chromatic이란 스토리북에서 만든 무료 배포 서비스로, 스토리북을 간단하게 배포할 수 있게 해준다.
- 컴포넌트 미리 보기, 빌드 과정 등이 스토리북에 최적화되어 보여진다.
- `verify changes`를 통해 컴포넌트의 변경 사항을 확인할 수 있다.
- Chromatic 페이지에서 또는 PR 자체에서 컴포넌트에 대한 리뷰가 가능하다.

> Chromatic 설치하기

```shell
npm install --save-dev chromatic
```

> Chromatic에 스토리북 배포하기

```shell
npx chromatic --project-token <your-project-token>
```

### 🔀 Github Actions를 활용한 CI/CD

- 이 과정이 없다면 컴포넌트의 UI와 테스트를 위해서는 코드를 Pull 받고 스토리북을 로컬에서 실행하여 확인해야 한다.

> Chromatic 토큰 설정하기

<img src="https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/02b4d698-172f-4b3e-8cb2-ac9e4c17fbf6" width="50%"/>

- 토큰은 Chromatic의 Manage 탭 > Configure 탭 > `Setup Chromatic with this project token`에서 확인할 수 있다.

<img src="https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/d57bd9a9-b7a3-41a5-907b-a6097fdae2e5" width="50%"/>

> Github Actions workflow 파일 생성하기

- `.github/workflows/chromatic.yml`에 아래와 같이 작성해주었다.
- 폴더명만 동일하다면 파일명은 임의로 설정 가능하다.

```yml
# .github/workflows/chromatic.yml

name: "Chromatic"

# push 이벤트 발생 시
on: push

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Install dependencies
        # 사용하는 package manager에 맞춰서 설정하기
        run: npm ci

      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          # Github Secret에 넣은 key 값과 동일해야 한다.
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

- 정상적으로 작동하는 것을 확인할 수 있다.

<img src="https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/5d85b386-beb6-49ca-8ba1-540f69443189" width="40%"/>
<img src="https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/a1cfbe37-e35f-4d37-8a38-681209e7f904" width=40%"/>

## 🌐 스토리북을 활용한 접근성 테스트

### 🧐 웹 접근성이란?

- 디지털 분야에서 유니버설 디자인(나이나 능력에 상관 없이 제품을 사용할 수 있다.)의 메시지를 내포하는 개념
- 웹사이트, 도구, 기술을 장애를 가진 사용자들도 사용할 수 있도록 만드는 것
  - 여기서의 장애는 신체적, 인지적 장애 뿐만 아니라 웹에 접근하는 데 영향을 주는 일시적인 장애 상태, 환경적 제약을 포함한다.

> **The power of the Web is in its universality**

- 웹 접근성을 준수하는 것은 웹의 기본 정신을 지키는 것이며, 장애인차별금지법과 지능 정보화 기본법에 의한 법정 의무사항이기도 하다.
- 웹 접근성을 준수할 경우 색약, 청각장애, 운동장애 등 신체적 불편함을 가진 사람들도 웹사이트를 사용할 수 있다.
- 팔이 부러지거나 안경을 잃어버려 일시적 불편함을 겪거나 밝은 햇빛이나 소리를 듣기 힘든 상황에 처하는 등 환경적 제약을 받는 사람, 인지적/신체적 능력의 저하를 겪는 노인 등 장애를 갖지 않는 사람에게도 도움을 줄 수 있다.

### 👓[Test Runner](https://storybook.js.org/docs/writing-tests/test-runner)를 활용한 웹 접근성 테스트

> a11y addon 설치하기

```shell
npm install @storybook/addon-a11y --save-dev
```

> `.storybook/main.ts`에 addon 추가하기

```ts
addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
```

> Test Runner를 활용하여 웹 접근성 테스트 실행하기

- playwright를 설치해준다.

```shell
npx playwright install
```

- test runner addon을 설치해준다.

```shell
npm install @storybook/test-runner --save-dev
```

- `package.json`에 아래와 같이 `scripts`를 추가한다.

```json
{
  "scripts": {
    "test-storybook": "test-storybook"
  }
}
```

- test-runner에 웹 접근성 테스트를 설정해준다.

```shell
npm install axe-playwright --save-dev
```

```ts
import type { TestRunnerConfig } from "@storybook/test-runner";
import { injectAxe, checkA11y } from "axe-playwright";

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
```

- 제대로 적용된 것을 확인할 수 있다.

![image](https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/e8b9e34d-2119-4277-8081-8750d5c7b32d)

> Github Actions로 접근성 테스트 자동화하기

- 아래와 같이 workflow를 추가해준다.

```yml
storybook-accessibility-test:
  timeout-minutes: 60
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version-file: ".nvmrc"
    - name: Install dependencies
      run: yarn
    - name: Install Playwright
      run: npx playwright install --with-deps
    - name: Build Storybook
      run: yarn build-storybook --quiet
    - name: Serve Storybook and run tests
      run: |
        npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
          "npx http-server storybook-static --port 6006 --silent" \
          "npx wait-on tcp:127.0.0.1:6006 && yarn test-storybook"
```

- `"npx wait-on tcp:127.0.0.1:6006 && yarn test-storybook"` 부분에서 IP 주소인 `127.0.0.1`을 명시해주지 않으면 CI 과정에서 Storybook Server 부분이 제대로 구동되지 않고 무한하게 로딩되는 timeout 오류가 발생하므로 주의하자!

## 👥 스토리북을 사용한 [사용자 상호작용 테스트](https://storybook.js.org/docs/writing-tests/interaction-testing)

- 페이지와 같이 더 복잡한 UI를 구축하면 컴포넌트가 데이터를 가져오고 상태를 관리하는 등 UI 렌더링 이상의 역할을 맡게 된다.
- Jest를 사용하여 유닛 테스트를 진행할 수도 있지만, 스토리북을 사용해서도 컴포넌트 단위의 테스트가 가능하다.
- API 호출 로직을 Cypress 등을 활용한 e2e 테스트에서 진행한다면, 컴포넌트에 대한 테스트는 스토리북을 사용하여 진행하는 것도 편리해 보인다.

> Interaction Test 관련 addon 추가하기

```shell
npm install @storybook/test @storybook/addon-interactions --save-dev
```

> `.storybook/main.ts`에 addon 설정 추가하기

```ts
addons: [
    // Other Storybook addons
    '@storybook/addon-interactions',
  ],
```

- [다음 파일](https://github.com/JeongwooHam/Playground-Storybook/blob/master/src/stories/LoginForm.stories.ts)과 같이 테스트 로직을 작성해보면 아래와 같이 테스트가 정상적으로 적용되는 것을 확인할 수 있다.

![image](https://github.com/JeongwooHam/Playground-Storybook/assets/123251211/0dd693b3-88a4-4d5e-be1e-e0df6115ea75)
