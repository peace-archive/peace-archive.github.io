# 평화자료실 카드뉴스 웹사이트

## 배포 URL

- 웹사이트: https://hongsfive.github.io/peace-cardnews/
- GitHub 저장소: https://github.com/hongsfive/peace-cardnews

## 파일 구조

```text
웹사이트/
├── index.html
├── styles.css
├── script.js
├── README.md
├── cardnews-images.zip
└── images/
    ├── card01.jpg
    ├── card02.jpg
    ├── card03.jpg
    ├── card04.jpg
    ├── card05.jpg
    ├── card06.jpg
    ├── card07.jpg
    └── card08.jpg
```

## 내용

코코딩이 업로드한 원본 카드뉴스 이미지 8장을 중심으로 만든 GitHub Pages용 정적 웹사이트입니다.

- 주제: 한국 핵잠수함 도입 문제
- 카드 수: 8장
- 이미지 크기: 1280×1280
- 카드뉴스 출처 표기: 대전/보령 평화와통일을여는사람들

## 기능

- 모바일/데스크톱 반응형 카드뉴스 뷰어
- 좌우 버튼 이동
- 모바일 스와이프 이동
- 키보드 이동: ← / → / Home / End
- 카드 번호와 점 인디케이터
- 평통사 회원가입 링크
- 공유 버튼
  - 텔레그램 공유
  - 카톡/문자 공유: 모바일 기본 공유 시트
  - 공유문구 복사
- 이미지 저장
  - 전체 카드뉴스 ZIP 다운로드
- SNS 공유용 Open Graph 이미지 설정

## 주요 링크

- 평통사 회원가입: https://www.spark946.org/about/join
- 평통사 홈페이지: https://www.spark946.org
- 핵추진잠수함 도입의 문제점 자세히 알아보기: https://www.spark946.org/notice/comment?tpf=board/view&board_code=6&code=28303

## 방문자 통계 확인

두 가지를 함께 사용한다.

1. 관리자용 비공개 통계: Cloudflare Web Analytics
   - 장점: 무료, 쿠키 없음, 공개 배지 없음, 페이지뷰/방문자/유입 경로 확인 가능
   - 상태: 연결 완료
   - 확인 위치: Cloudflare 대시보드 → Analytics & Logs → Web Analytics → 해당 사이트

2. 카드뉴스별 공개 단순 카운터: hits.sh
   - 목적: 각 카드뉴스 페이지별 대략적인 공개 조회수 표시
   - 현재 핵잠수함 카드뉴스 카운터:
     `https://hits.sh/hongsfive.github.io/peace-cardnews.svg?view=today-total&style=flat-square&label=오늘/전체&color=0d3671&labelColor=647084&extraCount=130`
   - 표시 위치: 페이지 하단 푸터
   - 표시 의미: `오늘 조회수 / 전체 조회수`
   - 보정값: 기존 공유 기간을 고려해 전체 조회수에 `130`을 더해 표시

주의:

- Cloudflare Web Analytics는 관리자용 통계로 사용한다.
- hits.sh 공개 카운터는 가벼운 공개 조회수 표시이며, 봇/미리보기/반복 새로고침이 포함될 수 있다.
- 분석 도구를 붙인 이후 방문부터 집계된다. 과거 방문은 소급 집계되지 않는다.
- GitHub 저장소 기본 Traffic은 보조 지표일 뿐, GitHub Pages 웹 방문자 통계로는 부정확하다.

## hongsfive URL 노출 관련

현재 GitHub Pages 구조상 주소에 GitHub 계정명 `hongsfive`가 들어갑니다.

해결 방법:

- 단기: 현재 URL 그대로 사용하거나 단축 URL 사용
- 중기: 중립 GitHub 계정/조직으로 저장소 이전
- 장기: 커스텀 도메인 연결
  - 예: `cardnews.spark946.org`
  - 평통사 도메인 DNS 설정 권한이 필요합니다.

## 배포 방식

- GitHub Pages
- Branch: `main`
- Path: `/`
