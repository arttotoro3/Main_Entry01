
# Project NEST: The Drowned World - Deployment Guide

이 프로젝트는 API 키 없이도 누구나 접속하여 세계관을 탐험할 수 있도록 설계된 **지능형 하이브리드 버전**입니다.

## 🚀 배포 방법 (GitHub Pages 기준)

1.  **새 리포지토리 생성**: GitHub에서 새로운 리포지토리를 만듭니다.
2.  **파일 업로드**: 현재 폴더에 있는 모든 파일(`index.html`, `index.tsx`, `App.tsx` 등)을 업로드합니다.
3.  **Settings 진입**: GitHub 리포지토리의 **Settings > Pages** 탭으로 이동합니다.
4.  **배포 설정**: `Build and deployment` 섹션에서 `Branch`를 `main`으로 설정하고 `/root` 폴더를 선택한 뒤 **Save**를 누릅니다.
5.  **완료**: 생성된 URL을 통해 누구나 접속 가능합니다.

## 💡 주요 특징 (API-Free Mode)
- **Archive Mode**: API 키가 설정되지 않은 환경에서도 "Nexus Intelligence"가 로컬 데이터베이스를 기반으로 응답합니다.
- **Smart Lore**: '산소', '세계관', '넥서스' 등 특정 키워드에 대해 지능적인 답변을 제공합니다.
- **Live Sync Ready**: 환경 변수에 Gemini API 키를 추가하면 즉시 실시간 생성형 AI 모드로 전환됩니다.

## 🎨 기술 스택
- **React 19**: 최신 UI 라이브러리
- **Tailwind CSS**: 유틸리티 우선 스타일링
- **Framer Motion**: 부드러운 애니메이션
- **Google Gemini API**: (선택적) 실시간 지능형 상호작용
- **ESM.sh**: 브라우저 네이티브 모듈 로딩
