# 소개 
공공 데이터 포털에서 미세먼지 Restful API를 받아서 미세먼지 정보를 지도와 랭킹형태로 알려주는 웹앱입니다. 

# 배포용 링크
https://finedustwatcher.netlify.app/

# 컴포넌트 구조도
![Component Structure Diagram_1](https://github.com/YoHaiYo/react-finedust-app-rebuild/assets/124754510/e65ed07d-57e6-4f08-9e6e-0967a8a128f4)
![Component Structure Diagram_2](https://github.com/YoHaiYo/react-finedust-app-rebuild/assets/124754510/25098113-8c21-4c77-beae-db615aef26d8)

**피그마로 보기**
https://www.figma.com/file/rF9sTVbtEz1jCzYoI0nN0y/FineDust-Watcher?type=design&node-id=0-1&mode=design

# 프로젝트 특징
1. 공공데이터 포털의 미세먼지 RESTful API를 사용.

2. 서버없이 LocalStorage를 사용하여 즐겨찾기 기능 구현.

3. svg로 전국 미세먼지 데이터를 지도형태로 구현.

4. 컴포넌트 재사용과 효율적인 컴포넌트 구조.

5. 데이터 랜더링 최적화와 데이터경로 최적화.

6. module.scss로 스타일을 연결하여 css 충돌없이 작업.

# 이슈 발생과 해결과정
**이슈 1 :** 기존에는 미세먼지 데이터를 검색하려면 전국모든지역의 미세먼지 데이터를 호출하고 그 데이터를 JS메서드로 처리해서 사용했습니다. 
그러나 매번 모든 지역의 데이터를 가져오니 랜더링 속도가 느렸습니다.

**해결 1 :** AllDataGet.js로 한번만 전체 데이터가져와서 MainContents.js로 호출하고 props로 하위 컴포넌트로 전달하는 방식으로 수정헀습니다.
처음 방법에 비해 월등히 빠른 랜더링 속도를 경험할 수 있었습니다.

**이슈 2 :** 기존 즐겨찾기는 즐겨찾기를 누른 시점의 데이터만 저장되어 현재시점의 데이터로 업데이트가 되지 않았습니다.

**해결 2 :** 서버를 사용하지 않고 LocalStorage에 저장하는 이 앱의 특성을 이용하여 측정소명만 LocalStorage에 저장한 뒤 즐겨찾기 모음에는
측정소명을 바탕으로 시도명, 미세먼지값, 현재시각들을 재호출하는 방식으로 해결했습니다.

**이슈 3 :** 미세먼지 지도 svg 컴포넌트에 현재시각 데이터를 변수로 가져올때 랜더링 오류가 발생했습니다.

**해결 3 :** 함수를 거쳐 받아오는 데이터와 변수에 직접호출되는 데이터의 시간차이 때문에 발생하는 오류임을 확인하였으며, 현재시각 데이터를 
함수형 호출로 바꿔 문제를 해결하였습니다.

**이슈 4 :** 미세먼지 랭킹이 끊겨나오는 오류가 발생했습니다.

**해결 4 :** 코드 자체는 이상이 발견되지 않아 미세먼지 값 데이터를 찬찬히 살펴봤습니다. 문제는 측정소의 통신오류로 미세먼지값이 null, '-'으로 
표기되어서 데이터 타입이 달라 sorting오류가 발생 한 것 이었습니다. 해당 값들을 배제하도록 코드를 수정하여 문제를 해결했습니다.

# 주요 package
"axios": "^1.6.3",

"bootstrap": "^5.3.2",

"react-bootstrap": "^2.9.2",

"react-router-dom": "^6.21.1",

"sass": "^1.69.5",

# 이전 미세먼지앱 레포지토리
현재 미세먼지 앱을 만들기 이전 초창기 버전 코드입니다.
현재 코드와 비교용으로 올려둡니다.
https://github.com/YoHaiYo/react-finedust-app
