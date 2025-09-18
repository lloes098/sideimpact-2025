export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              MindCare 소개
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              1인 가구의 마음 건강을 위한 디지털 헬스케어 플랫폼
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                우리의 목표
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                현대 사회에서 증가하는 1인 가구들의 정신건강 문제에 주목하여, 
                접근성이 높고 신뢰할 수 있는 멘탈 케어 서비스를 제공합니다.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                AI 기술과 전문가 네트워크를 통해 언제 어디서나 필요한 도움을 받을 수 있는 
                포용적이고 효과적인 정신건강 생태계를 구축하고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-neutral-600">익명성 보장</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-neutral-600">상시 이용 가능</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-sage rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-gentle">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800">마음을 돌보는 기술</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              주요 서비스
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              다양한 방식으로 당신의 마음 건강을 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800">AI 정신상담</h3>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24시간 언제든 대화 가능한 AI 상담사
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1인 가구 특성을 이해하는 맞춤형 상담
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  완전한 익명성으로 부담 없는 상담
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  감정 분석 및 맞춤형 솔루션 제공
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800">정신센터 매칭</h3>
              </div>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  위치 기반 최적의 정신건강 센터 추천
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  전문 분야별 상세 정보 제공
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  실제 이용자 리뷰 및 평가
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  온라인 예약 및 상담 연결 지원
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              전문가 팀
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              정신건강 전문가들과 함께 안전하고 신뢰할 수 있는 서비스를 만들어갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">정신건강의학과 전문의</h3>
              <p className="text-neutral-600">
                AI 상담 알고리즘 설계 및 의학적 검증을 담당합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">임상심리사</h3>
              <p className="text-neutral-600">
                심리학적 이론을 바탕으로 한 상담 프로토콜을 개발합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">AI 개발팀</h3>
              <p className="text-neutral-600">
                자연어 처리 및 머신러닝 기술로 AI 상담사를 구현합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              우리의 가치
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">프라이버시 우선</h3>
              <p className="text-neutral-600">
                개인정보 보호와 익명성을 최우선으로 하여 안전한 상담 환경을 제공합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">접근성</h3>
              <p className="text-neutral-600">
                언제 어디서나 쉽게 이용할 수 있는 서비스로 정신건강 케어의 문턱을 낮춥니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">공감과 이해</h3>
              <p className="text-neutral-600">
                1인 가구의 특수한 상황을 이해하고 진정성 있는 도움을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            함께 만들어가는 마음 건강
          </h2>
          <p className="text-xl mb-8 opacity-90">
            궁금한 점이나 제안사항이 있으시면 언제든 연락해 주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:shadow-gentle hover:scale-105">
              문의하기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-primary-600">
              파트너십 제안
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

