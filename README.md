# MindCare - 1인 가구를 위한 멘탈 케어 플랫폼

## 🌟 프로젝트 소개

MindCare는 1인 가구를 위한 맞춤형 멘탈 케어 플랫폼입니다. AI 챗봇 상담과 정신건강센터 매칭 서비스를 통해 언제 어디서나 마음 건강을 돌볼 수 있도록 도움을 제공합니다.

## 🎯 주요 기능

### 1. AI 정신상담 챗봇
- 24시간 언제든 이용 가능한 AI 상담사
- 1인 가구 특성을 이해하는 맞춤형 대화
- 완전한 익명성 보장
- OpenAI GPT 모델을 활용한 자연스러운 대화

### 2. 정신건강센터 매칭
- 위치 기반 정신건강 전문기관 추천
- 기관 유형별 필터링 (정신건강의학과, 심리상담센터 등)
- 전문 분야별 상세 정보 제공
- 실제 이용자 리뷰 및 평가

### 3. 위기 상황 대응
- 24시간 위기상담전화 (1393) 연결
- 응급상황 시 즉시 도움 받을 수 있는 시스템

## 🚀 설치 및 실행

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 의존성 설치
npm install
```

### 2. 환경변수 설정

루트 디렉토리에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Next.js Configuration  
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

⚠️ **중요**: OpenAI API 키를 발급받아 설정해야 AI 챗봇이 정상 작동합니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`에 접속하여 애플리케이션을 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI GPT-3.5-turbo
- **Deployment**: Vercel (권장)

## 📱 반응형 디자인

- 모바일, 태블릿, 데스크톱 모든 기기 지원
- 터치 친화적인 인터페이스
- 접근성을 고려한 UX/UI 설계

## 🎨 디자인 시스템

### 색상 테마
- **Primary**: 블루 계열 (#0ea5e9) - 신뢰감과 안정감
- **Sage**: 연한 그린 계열 - 자연스럽고 평온한 느낌
- **배경**: 클린한 흰색 바탕
- **중성색**: 다양한 그레이 톤으로 계층구조 표현

### 타이포그래피
- 메인 폰트: Inter
- 한국어 텍스트 최적화
- 가독성을 고려한 폰트 크기 설정

## 🔧 API 엔드포인트

### POST `/api/chat`
AI 챗봇과의 대화를 처리합니다.

**Request Body:**
```json
{
  "messages": [
    {
      "id": "string",
      "text": "string", 
      "isUser": boolean,
      "timestamp": "Date"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "response": "AI 응답 메시지"
}
```

## 🔒 보안 및 프라이버시

- API 키는 서버 사이드에서만 사용
- 사용자 개인정보 수집하지 않음
- 완전한 익명성 보장
- 대화 내용은 로컬에만 저장

## 🌐 배포

### Vercel 배포 (권장)

1. GitHub에 프로젝트 푸시
2. Vercel에서 프로젝트 import
3. 환경변수 설정 (OPENAI_API_KEY 등)
4. 자동 배포 완료

### 기타 플랫폼
- Netlify, AWS, Google Cloud 등에서도 배포 가능
- Node.js 환경이 필요한 서버리스 함수 지원 플랫폼 권장

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 응급 연락처

- **24시간 위기상담전화**: 1393
- **생명의전화**: 1588-9191
- **청소년전화**: 1388
- **응급실**: 119

---

**MindCare** - 혼자여도 괜찮아요, 마음을 돌보는 시간 💙