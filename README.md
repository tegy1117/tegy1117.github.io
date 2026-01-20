# 개발자 포트폴리오 사이트

GitHub Pages와 Jekyll을 활용한 개인 포트폴리오 웹사이트입니다.

## 🌟 주요 기능

- **다크모드 테마**: GitHub 스타일의 세련된 다크모드 디자인 (라이트모드 전환 없음)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- **다국어 지원**: 한국어/영어 버전 제공 (메인, 프로젝트, 자격증 페이지)
- **프로젝트 관리**: 진행도 추적, D-day 계산, 히스토리 기록
- **블로그 기능**: 개발일지, 리뷰, 일상 등 카테고리별 분류
- **태그 시스템**: 프로젝트와 블로그 글 자동 연결
- **검색 & 필터**: 전체 콘텐츠 검색 및 태그 필터링
- **활동 달력**: GitHub 잔디 스타일 히트맵으로 활동 시각화

## 🚀 빠른 시작

### 사전 요구사항

- Ruby 2.5 이상
- Bundler

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/tegy1117/tegy1117.github.io.git
cd tegy1117.github.io

# 의존성 설치
bundle install

# 로컬 서버 실행
bundle exec jekyll serve

# 브라우저에서 http://localhost:4000 접속
```

### GitHub Pages 배포

1. GitHub 저장소 설정 → Pages 설정
2. Source를 "Deploy from a branch" 선택
3. Branch를 `main` (또는 원하는 브랜치) 선택
4. 자동으로 배포됨

## 📁 디렉토리 구조

```
tegy1117.github.io/
├── _config.yml           # Jekyll 설정
├── _data/                # 데이터 파일
│   ├── projects.yml      # 프로젝트 정보
│   ├── certificates.yml  # 자격증 정보
│   └── navigation.yml    # 네비게이션 메뉴
├── _layouts/             # 페이지 레이아웃
├── _includes/            # 재사용 가능한 컴포넌트
├── _projects/            # 프로젝트 상세 설명 (Markdown)
├── _posts/               # 블로그 포스트
├── assets/               # CSS, JS, 이미지
├── index.md              # 메인 페이지 (한국어)
├── en/                   # 영어 버전 페이지
│   └── index.md
├── projects/             # 프로젝트 목록 페이지
├── certificates/         # 자격증 페이지
├── blog/                 # 블로그 목록 페이지
└── calendar/             # 활동 달력 페이지
```

## ✏️ 콘텐츠 추가하기

### 1. 프로젝트 추가

`_data/projects.yml` 파일에 새 프로젝트 추가:

```yaml
- id: my-project
  name: 내 프로젝트
  name_en: My Project
  featured: false
  status: ongoing  # ongoing | completed | paused
  category: 개발
  tags: [웹, React, TypeScript]
  start_date: 2026-01-20
  deadline: 2026-03-31  # 선택사항
  progress: 30
  progress_history:
    - date: 2026-01-20
      value: 30
  description: my-project.md
  description_en: my-project_en.md
  thumbnail: /assets/img/my-project-thumb.png
  links:
    - label: GitHub
      url: https://github.com/username/my-project
```

프로젝트 상세 설명 파일 생성:
- `_projects/my-project.md` (한국어)
- `_projects/my-project_en.md` (영어)

```markdown
---
project_id: my-project
lang: ko
---

## 프로젝트 개요
프로젝트 설명...
```

### 2. 블로그 포스트 추가

`_posts/` 폴더에 `YYYY-MM-DD-title.md` 형식으로 파일 생성:

```markdown
---
title: "포스트 제목"
date: 2026-01-20
category: 개발일지  # 취미 | 개발일지 | 리뷰 | 일상
tags: [my-project, React, 트러블슈팅]
---

포스트 내용...
```

### 3. 자격증 추가

`_data/certificates.yml` 파일에 추가:

```yaml
- id: my-cert
  name: 자격증명
  name_en: Certificate Name
  status: studying  # acquired | studying
  category: 카테고리
  acquired_date: 2026-01-20  # 취득 시 날짜 (studying이면 null)
  tags: [태그1, 태그2]
  related_post: post-slug  # 관련 블로그 글 (선택사항)
```

## 🎨 커스터마이징

### 사이트 정보 수정

`_config.yml`에서 기본 정보 수정:

```yaml
title: "개발자 포트폴리오"
title_en: "Developer Portfolio"
description: "사이트 설명"
email: your.email@example.com
github_username: your-username
```

### 색상 테마 변경

`assets/css/main.scss` 파일의 색상 변수 수정:

```scss
$bg-primary: #0d1117;      // 배경색
$text-primary: #c9d1d9;    // 텍스트 색상
$accent-primary: #58a6ff;  // 액센트 색상
```

### 네비게이션 메뉴 수정

`_data/navigation.yml` 파일 수정:

```yaml
main:
  - title: 홈
    title_en: Home
    url: /
    url_en: /en/
```

## 🔧 고급 기능

### 진행도 업데이트

프로젝트 진행도를 업데이트하려면 `_data/projects.yml`에서:

1. `progress` 값 변경
2. `progress_history`에 새 항목 추가

```yaml
progress: 45
progress_history:
  - date: 2026-01-20
    value: 30
  - date: 2026-01-27
    value: 45
```

### 태그 연결

블로그 포스트의 `tags`에 프로젝트 `id`를 추가하면 자동으로 연결됩니다:

```markdown
---
tags: [my-project, React]
---
```

## 📱 반응형 디자인

- 데스크톱: 1200px 최대 너비
- 태블릿: 768px 이하에서 레이아웃 조정
- 모바일: 자동 그리드 레이아웃

## 🌐 다국어 지원

- 메인, 프로젝트, 자격증 페이지: 한국어 + 영어
- 블로그, 달력: 한국어만
- URL 구조: `/` (한국어), `/en/` (영어)

## 📝 라이선스

MIT License

## 🤝 기여하기

이슈나 PR은 언제나 환영합니다!

## 📧 연락처

- Email: contact@example.com
- GitHub: [@tegy1117](https://github.com/tegy1117)