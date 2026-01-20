---
title: "포트폴리오 사이트 CSS 그리드 이슈 해결"
date: 2026-01-19
category: 개발일지
tags: [portfolio, CSS, 트러블슈팅]
---

# 포트폴리오 사이트 CSS 그리드 이슈 해결

오늘은 포트폴리오 사이트를 개발하면서 겪었던 CSS 그리드 레이아웃 이슈를 해결한 과정을 공유하려고 합니다.

## 문제 상황

프로젝트 카드들을 반응형 그리드로 배치하려고 했는데, 모바일 화면에서 카드가 제대로 표시되지 않는 문제가 발생했습니다.

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```

위와 같이 작성했더니 모바일에서 카드가 너무 작아지는 문제가 있었습니다.

## 해결 방법

`auto-fill`과 `minmax`를 사용하여 자동으로 반응형 그리드를 구현했습니다.

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

이렇게 하면 각 카드가 최소 300px을 유지하면서, 화면 크기에 따라 자동으로 열의 개수가 조정됩니다.

## 배운 점

- CSS Grid의 `auto-fill`과 `minmax` 함수의 활용법
- 미디어 쿼리 없이도 반응형 레이아웃 구현 가능
- 실제 디바이스 테스트의 중요성

## 참고 자료

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Grid Without Media Queries](https://css-tricks.com/responsive-grid-without-media-queries/)
