# 👩‍🏫PROJECT 소개

---

![Untitled](https://user-images.githubusercontent.com/82145837/138014796-9a28a144-a6dc-4766-b383-c1895d7ecda5.png)

![Untitled](https://user-images.githubusercontent.com/82145837/138014743-a88491ec-cada-490a-bbf6-11df00042898.png)

![Untitled](https://user-images.githubusercontent.com/82145837/138014799-3627625b-632e-411d-b406-8d1f74d13e77.png)

🗓️ **작업기간** : 2020.08 - 2020.09

📒 **주요업무**

- 기획 및 디자인
- HTML, CSS3, Javascript 퍼블리싱 진행

🌱 **사용스킬**

`HTML5` `css3` `jquery` `JavaScript`

🌏 **사이트 주소**

https://leeyuseongportfolio.netlify.app/

# 😎어떻게 제작하고 어떤 점이 힘들었나요?

## 🎨 디자인 과정

## 🖥️ 코딩에서 생긴 문제과 해결과정

### 1. 메인 페이지 백그라운드 이미지가 고장남

![Honeycam_2021-09-10_15-48-16](https://user-images.githubusercontent.com/82145837/138015038-7b4f191f-9d84-4aef-bf5a-a7aeaa2fcaa5.gif)

```jsx
.statusPage {
  display: none;
  background: url(../img/bg.png);
  animation: movingBg 180s infinite linear;
}
@keyframes movingBg {
  from {
    background-position: 10000%;
  }
  to {
    background-position: -10000%;
  }
```

😫 **문제상황**

1. 개발자 모드 ⇒ 걸어가는 속도 느림
2. 창모드 ⇒ 반대로 움직임 속도 빠름
3. 전체화면 ⇒ 안 움직임

   ~~(난리남)~~

🤯 **문제점 찾기**

1. 전체 페이지 width값이 100% → 100vw로 바꿔볼까? (해결안됨)
2. position을 + → - 로 가는게 문제인가? (하나는 해결)
   - 여기서 개발자 모드와 전체모드+창모드 가 방향이 다른 이유를 알아냄
   - 개발자 모드에서 크기를 **1980x1080**으로 고정해뒀는데 생각해보니까 내 컴퓨터 해상도는 **1920**
   - 내 화면보다 큰 값을 보여주니까 뭔가 문제가 생긴 모양
   - **결론** : 애니메이션 값은 - → + 로 가는게 맞다
3. 화면의 크기에 따라 속도가 다른걸 보니까 화면 크기의 문제인가?

   ![Untitled 24](https://user-images.githubusercontent.com/82145837/138015129-394fa915-ce52-4981-b80b-0b354fbaa9a7.png)

   이해완료

🥳 **해결**

1. 이미지를 background-image가 아닌 <img> 태그 안에 넣어서 transformX 속성을 넣은 키프레임을 부여

   → **실패**

   이미지가 움직일 때 흰 여백이 생김

2. 흰 여백이 생기지 않기 위해 이미지 파일을 여러 개 붙여넣기

   → **실현하기 어려움**

   이미 짜둔 html 구조를 크게 바꿔야함 + 한다면 시간이 지날 때 마다 새로운 <img>가 생성되는 자바스크립트 함수를 만들어야 할 것 같은데 이때 구현할 자신이 없었음

3. 이미지를 gif로 만들어서 backgroud-image에 넣었다.

   → **성공**

   대신 이미지가 커서 불러오는 데 시간이 걸리지만 해결
