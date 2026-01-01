
# Project NEST: The Drowned World - Deployment Guide

이 프로젝트는 별도의 빌드 과정 없이 GitHub Pages 또는 Vercel에 즉시 배포할 수 있도록 최적화되어 있습니다.

## 🚀 배포 방법 (GitHub Pages 기준)

1.  **새 리포지토리 생성**: GitHub에서 새로운 리포지토리를 만듭니다.
2.  **파일 업로드**: 현재 폴더에 있는 모든 파일(`index.html`, `index.tsx`, `App.tsx`, `components/`, `services/` 등)을 업로드합니다.
3.  **Settings 진입**: GitHub 리포지토리의 **Settings > Pages** 탭으로 이동합니다.
4.  **배포 설정**: `Build and deployment` 섹션에서 `Branch`를 `main` (혹은 `master`)으로 설정하고 `/root` 폴더를 선택한 뒤 **Save**를 누릅니다.
5.  **완료**: 잠시 후 상단에 생성된 URL(예: `https://사용자이름.github.io/리포지토리이름`)로 접속하면 전 세계 어디서든 페이지를 볼 수 있습니다.

## 💡 주의사항
- **API Key**: `process.env.API_KEY`는 배포 환경에서 설정되어야 합니다. GitHub Pages의 경우 환경 변수를 지원하지 않으므로, 테스트 용도라면 `services/geminiService.ts` 파일에서 직접 키를 입력하거나, 서버리스 함수를 통해 연결하는 것이 좋습니다.
- **이미지**: 고화질 외부 이미지를 사용하므로 로딩 시 약간의 시간이 소요될 수 있습니다.

## 🎨 기술 스택
- **React**: UI 프레임워크
- **Tailwind CSS**: 스타일링
- **Framer Motion**: 인터랙티브 애니메이션
- **Gemini API**: AI 기반 세계관 탐험 기능
- **ESM.sh**: 브라우저 직접 모듈 로딩
