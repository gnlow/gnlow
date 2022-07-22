<p align=center>
  <img width=100% src="https://raw.githubusercontent.com/gnlow/gnlow/master/identity/gnlow/banner_220707.svg"/>
  <img height=30px src="https://sensa-co.s3-eu-west-1.amazonaws.com/emojis/Heart.svg"/><br>
  <img height=30px src="https://skillicons.dev/icons?i=deno,ts,svelte"/>
</p>

### 무작위 난수를 이용한 보안 시스템 제작 [앱인벤터]
- 2017
- 사전 기반으로 외우기 쉬운 무작위 암수(패스프레이즈)를 생성해주는 시스템.
- `flutefriend01`같은 비밀번호를 생성해준다.
### 블록코딩 플랫폼 오픈소스를 이용한 API 불러오기 구현 <img height=20px src="https://skillicons.dev/icons?i=js"/>
- 2018
- 엔트리를 포크해서 외부 API에 접근하는 블럭을 추가했다.
  - 아마 엔트리에 새로운 블럭 추가하는 방법 연구한건 내가 최초일 것이다.
  - 시간이 지나고 다른 유저들도 여러가지 확장 블럭을 개발했다.
- 내가 이걸 만들고 얼마 있지 않아 엔트리에 날씨 기능이 추가된걸로 봐서, 이미 그전부터 만들고 있었던듯?
### Jevi <img height=20px src="https://skillicons.dev/icons?i=js,nodejs,heroku"/>
- 2018-11-24
- 엔트리에서 실시간 변수를 이용할 수 있게 하는 스크립트다.
  - Heroku에 Jevi 서버를 올려놓고, 클라이언트가 개발자 도구로 Jevi 스크립트를 다운받아 실행하는 방식이다.
  - 맙소사, node_modules와 인증서 파일을 그대로 repo에 넣어놨다!
- 엔트리에서는 약 1년 후인 2020년 3월에 공식적으로 실시간 변수가 추가됐다.
### Ent2ml <img height=20px src="https://skillicons.dev/icons?i=js,html,css,jquery"/>
- 2019-01-09 ~ 2019-01-20
- 엔트리 유저별 좋아요/조회수를 정리해 보여주는 웹사이트
  - 처음으로 만들어본 그럴듯한 웹사이트. UI 구성에 Semantic UI와 jQuery를 사용했다. (아련)
  - 서버가 따로 없고 클라이언트에서 바로 엔트리 API에 요청을 날리는 무식한 방법을 썼었다...
- 내가 만든 JS 프로젝트 중에 가장 많은 사랑을 받았던 프로젝트다.
### Pwentk (미완) <img height=20px src="https://skillicons.dev/icons?i=js"/>
- 2019-02-24 ~ 2019-05-21
- 엔트리를 대체하는 블록코딩 플랫폼을 만들겠다는 당찬 포부로 시작한 프로젝트.
- 하지만 어림도 없지... Babel이나 Webpack같은 (당시의) 최신 기술, 그리고 캔버스 라이브러리를 써봤다는 것에 의의를 두자.
- 내가 처음으로 만든 JS 라이브러리.
### Jevi-Injector <img height=20px src="https://skillicons.dev/icons?i=js,html"/>
- 2019-02-25
- Jevi 기능을 개발자 도구 없이 사용할 수 있게 해주는 확장 프로그램
### SMTC <img height=20px src="https://skillicons.dev/icons?i=js,html,css,vue"/>
- 2019-06-02 ~ 2019-08-15
- 유저 주최 엔트리 대회인 "쇼미더코딩"의 웹사이트.
### minjune.js <img height=20px src="https://skillicons.dev/icons?i=js"/>
- 2019-07-09 ~ 2019-08-25
- 이름, 나이 등 캐릭터 정보를 무작위로 생성해주는 라이브러리.
  - 흔한 이름을 더 많이 나오게 하기 위해 이름을 그 비율만큼 반복해서 배열에 넣어놓는 정신나간 방법을 썼다.
### Dalkak (미완) <img height=20px src="https://skillicons.dev/icons?i=ts"/>
- 2019-08-06 ~ 2020-03-28
- dalkak-heroku, ent2dalk, kachi, dalkom, dalkify 등
- 블록코딩 플랫폼 2트.
- 내 모든 프로젝트를 통틀어 가장 개발 기간이 길었던 프로젝트다. 그만큼 애정도 많았지만... 결국 능력의 한계를 느끼고 접었다.
  - 이걸 만들때는 막 TypeScript를 배웠을 때 즈음이라, 한창 "정적 타입"의 매력에 빠져있을 때였다.
  - 하지만 그게 복잡한 오브젝트에 완벽한 타입을 부여하려고 시간을 쓰는 등 오히려 독이 되었던 것 같다.
  - 그리고 지금은 해결된 그 당시 TS의 문제점들(추론이 제대로 안된다거나...)때문에 GitHub Issue나 sof 검색하는데에도 시간을 많이 썼다.
  - 쩝... 아쉽지만 재밌었어ㅠ!
- 로고가 꽤ㄹ주거지별로 알맞은 학교 정보를 생성하기 위해 proj4 등 지리 관련 라이브러리도 써봤다.
#### nickname-analyzer
- Randkid의 하위 프로젝트로, 랜덤 닉네임을 생성하기 위해 인터넷 사이트(역시나, 엔트리) 유저들의 닉네임 유형을 분석했다.
- 결과적으로, 길이는 8자가 가장 많은 종모양 분포를 띄고, 유형별로는 `문자 + 숫자 4글자`, `문자만`, `문자 + 숫자 2글자` 순으로 많았다.
  - 이 주제 좀 더 파서 논문써도 괜찮을 것 같은데??
#### Olmang <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 역시 Randkid의 하위 프로젝트로, 무작위 데이터를 미리 생성하는게 아니고, 시드만 생성해놓고 필요한 정보를 그때 그때 계산하는 프로그램이다.
- 굉장히 흥미롭기 때문에, 더 연구해볼 필요가 있겠다.
### 한눈에 국회 (미완) <img height=20px src="https://skillicons.dev/icons?i=ts,deno,html,css,svelte,vercel"/>
- 2020-08-15 ~ 2020-09-14
- jijache, localCouncil
- 지방의회 의원 정보를 정리해주는 웹서비스.
  - 다양한 기능을 추가할 계획이었으냐 의원 목록과 정당별 의석수를 보여주는 것 까지만 구현됨.
  - 비록 미완성이지만, Deno, Vercel, Svelte 등 새로운 기술을 배울 수 있었다.
- 이건 나중에 시간나면 완성시키고 싶다.
### c4 <img height=20px src="https://skillicons.dev/icons?i=js"/>
- 2020-08-19
- 브라우저에서 세자리 콤마로 된 숫자를 모두 네자리 콤마로 바꿔주는 UserScript.
  - 나는 지금 쓰고있는 세자리 콤마는 없느니만 못하다고 생각한다.
### Ent2ml 리뉴얼 <img height=20px src="https://skillicons.dev/icons?i=ts,deno,html,css,svelte,vercel,actions,xd"/>
- 2020-09-01 ~ 2020~11-08
- deno-playentry
- jQuery를 쓰고, 클라이언트에서 엔트리 서버로 API 요청을 보내는 등 여러모로 문제가 많았던 기존 Ent2ml을 리뉴얼했다.
  - jQuery는 Svelte로 대체!
  - 데이터는 GitHub Actions로 하루에 한번만 긁어와서 엔트리 서버에 주는 부하를 최소화하려 했다.
  - UI는 원래 Semantic UI걸 그대로 썼지만, 이번에는 직접 디자인해서 CSS로 만들었다!
  - 조회수 변화량이나 작품별 좋아요 등 새로운 기능도 추가했다.
- 사실 막판에 여러가지 기능을 추가한건 디미고 원서에 넣으려고 만든거다.
  - 하지만 어림도 없지.. 바로 광탈.
  - 그래도 이것땜에 오랜만에 진짜 열심히 프로그래밍 해봤다.
### deno-playentry <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2020-10-22 ~ 2020-12-30
- lazywrap
- 엔트리 API Wrapper
  - 간단한 API Wrapper인데, 이후 3개월 만에 엔트리 API가 GraphQL로 바뀌어서 쓸모없어졌다.ㅜ
  - lazywrap이라는 재밌는 데코레이터를 만들었다.
#### lazywrap <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2020-12-28 ~ 2020-12-29
- 아직 안 불러온 Class Property만 로드하게 해주는 Decorator다.
- 처음으로 써본 Decorator. 근데 TypeScript에서 Decorator Type 지원을 제대로 안해줘서 슬프다.ㅜ
### Hoching <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2020-11-26 ~ 2020-11-29
- 가족 호칭 계산 라이브러리
  - 놀랍게도 호칭 계산 라이브러리가 없는 걸 보고 만들었다. (내가 못찾은 걸수도 있지만..)
  - 한국어와 영어를 지원한다.
    - 영어는 그냥 `brother`인데 한국어는 `형`, `오빠`, `남동생`을 구별해야 하고, 한국어는 그냥 `조카`인데 영어는 `nephew`, `niece`를 구별하는 등 미묘한 차이가 있다.
- 이후에 reddit에서 봤는데, 언어별로 가족 호칭 구조가 다양하더라. 더 다양한 언어의 호칭을 구현하는 라이브러리를 연구할 필요가 있겠다.
### kr.bns.json <img height=20px src="https://skillicons.dev/icons?i=js"/>
- 2020-12-15 ~ 2020-12-17
- Brand New Subway라는 게임의 한국 (수도권) 전철 모드.
  - 이것도 내가 못찾은 건지 모르겠는데, 한국 전철 노선 데이터를 통합해서 온전한 상태로 제공해주는 곳이 없었다!!
  - 그래서 여러 사이트 데이터를 모으고 오류를 수정하는 등 고생을 좀 했다..
  - 그리고 공공기관 데이터보다 일반인들이 제공하는 데이터가 더 최신이더라.. 짜증;
### Yamlow <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2021-01-16
- GitHub Actions에서 영감을 받아 만든 YAML기반 프로그래밍 언어 제작 툴
  - 근데 나도 이게 뭔지 까먹었다.
### sven (미완) <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2021-01-23 ~ 2021-02-03
- Deno에서 Svelte를 쉽게 쓸 수 있게 해주는 템플릿 로더.
  - 하지만 이미 Snel이라는 도구가 있었다는 걸 알게되고 접었다.
### corsi <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2021-03-26
- 로컬 개발환경에서 CORS를 우회하기 위한 심플한 프록시 서버다.
### Jabo <img height=20px src="https://skillicons.dev/icons?i=ts,deno,antlr4"/>
- 2021-05-24 ~ 2022-02-28
- antlr4ts-deno
- 나만의 프로그래밍 언어!
  - 이건 정말 예전, 프로그래밍 언어를 배우기 시작했을 때쯤부터 꿈꿔왔던 프로젝트다.
  - Ent2ml 리뉴얼 이후로 진짜 열심히 만든 프로젝트.
  - 쉽지는 않았지만, 그만큼 재밌고, 완성하자는 열망이 컸기 때문에 9개월동안이나 붙잡고 있을 수 있었다.
  - 이제보니 Dalkak보다 오래 붙잡고 있었네... 역시 오래 붙잡으면 망한다.
  - 사실 언어를 구현하는 것보다 디자인하는 것에서 어려움을 느꼈다.
  - 파서 제너레이터인 Antlr4를 잘 쓸 수 있게 되었다.
### boj <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2022-02-15 ~
- 그냥 백준 풀기.
  - Jabo 프로젝트를 하면서 알고리즘 실력이 부족함을 느꼈나보다..
  - 근데 이게 생각보다 어렵다. 실버도 겨우 땄다.. 이런거 잘하는 사람들 보면 너무 신기하다.
### Dksemfh <img height=20px src="https://skillicons.dev/icons?i=lua"/>
- 2022-06-17 ~ 2022-06-18
- 한국어 -> 안드로어 번역기, 근데 이제 Lua를 곁들인
  - 안드로어라고 써놨지만 사실 간단한 한영타 변환이다.
  - 근데 문제는 Lua 5.1이 유니코드 지원을 똑바로 안한다는 것이다...
    - 미디어위키 모듈로 쓸 용도였기 때문에 어쩔 수 없이 5.1을 사용해야 했다. 망할 파편화ㅜ
  - 그래서 정규식으로 세글자씩 끊어서 변환해야 했다. (한글 한 글자가 length 3으로 인식됨)
### deno-mw <img height=20px src="https://skillicons.dev/icons?i=ts,deno"/>
- 2022-07-03 ~ 2022-07-15
- MediaWiki API Wrapper
