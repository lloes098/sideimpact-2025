import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-sage overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
              혼자여도 괜찮아요
              <br />
              <span className="text-primary-600">마음을 돌보는 시간</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              1인 가구를 위한 맞춤형 멘탈 케어 플랫폼
              <br />
              AI 상담부터 전문 센터 매칭까지, 당신의 마음 건강을 함께 지켜갑니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chatbot" className="btn-primary text-lg px-8 py-4">
                AI 상담 시작하기
              </Link>
              <Link href="/matching" className="btn-secondary text-lg px-8 py-4">
                센터 찾아보기
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-sage-200/30 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              당신만을 위한 특별한 케어
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              1인 가구의 특성을 이해하고, 개인의 상황에 맞는 맞춤형 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* AI 챗봇 */}
            <div className="order-2 md:order-1">
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800">AI 정신 상담</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  24시간 언제든 이용 가능한 AI 상담사와 대화하세요. 
                  익명으로 안전하게 마음의 짐을 덜어낼 수 있습니다.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24시간 즉시 상담 가능
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    완전 익명 보장
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    1인 가구 맞춤 상담
                  </li>
                </ul>
                <Link href="/chatbot" className="btn-primary w-full">
                  AI 상담 시작하기
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-gradient-sage rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-gentle">
                      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-neutral-700 text-lg font-medium">
                      "안녕하세요! 오늘 기분은 어떠세요?"
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sage-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            {/* 센터 매칭 이미지 */}
            <div className="order-1">
              <div className="relative">
                <div className="bg-primary-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-gentle">
                      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-neutral-700 text-lg font-medium">
                      "내 주변 센터 찾기"
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-sage-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* 센터 매칭 */}
            <div className="order-2">
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800">정신센터 매칭</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  당신의 위치와 상황에 맞는 정신건강 센터를 찾아드립니다. 
                  전문가와의 대면 상담으로 더 깊이 있는 치료를 받아보세요.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    위치 기반 센터 추천
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    전문 분야별 검색
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    리뷰 및 평가 제공
                  </li>
                </ul>
                <Link href="/matching" className="btn-primary w-full">
                  센터 찾아보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              혼자가 아니에요
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              많은 1인 가구들이 MindCare와 함께 마음 건강을 돌보고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-lg text-neutral-600">AI 상담 이용자</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-lg text-neutral-600">제휴 정신건강센터</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-lg text-neutral-600">언제든 이용 가능</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            오늘부터 시작해보세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            마음 건강도 몸 건강만큼 중요합니다. 지금 바로 첫 걸음을 내딛어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chatbot" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:shadow-gentle hover:scale-105">
              무료 AI 상담 받기
            </Link>
            <Link href="/matching" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-primary-600">
              내 주변 센터 찾기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
