'use client'

import { useState } from 'react'

type Center = {
  id: string
  name: string
  type: string
  address: string
  phone: string
  distance: string
  rating: number
  specialties: string[]
  description: string
  availability: string
}

export default function MatchingPage() {
  const [selectedType, setSelectedType] = useState('전체')
  const [searchLocation, setSearchLocation] = useState('')

  const centerTypes = ['전체', '정신건강의학과', '심리상담센터', '생활치료시설', '정신건강복지센터']

  const mockCenters: Center[] = [
    {
      id: '1',
      name: '서울대학교병원 정신건강의학과',
      type: '정신건강의학과',
      address: '서울특별시 종로구 대학로 101',
      phone: '02-2072-2972',
      distance: '1.2km',
      rating: 4.8,
      specialties: ['우울증', '불안장애', '조현병', '양극성장애'],
      description: '종합병원 내 정신건강의학과로 전문적인 진료와 입원치료가 가능합니다.',
      availability: '평일 9:00-18:00'
    },
    {
      id: '2',
      name: '마음샘 심리상담센터',
      type: '심리상담센터',
      address: '서울특별시 강남구 테헤란로 123',
      phone: '02-3456-7890',
      distance: '2.5km',
      rating: 4.6,
      specialties: ['개인상담', '가족상담', '트라우마 치료', '인지행동치료'],
      description: '개인 맞춤형 심리상담과 다양한 치료 프로그램을 제공합니다.',
      availability: '평일 10:00-20:00, 토요일 10:00-17:00'
    },
    {
      id: '3',
      name: '서울특별시 정신건강복지센터',
      type: '정신건강복지센터',
      address: '서울특별시 중구 세종대로 110',
      phone: '02-1234-5678',
      distance: '3.1km',
      rating: 4.4,
      specialties: ['위기상담', '사례관리', '정신건강증진', '자살예방'],
      description: '지역사회 정신건강 서비스를 제공하는 공공기관입니다.',
      availability: '평일 9:00-18:00'
    },
    {
      id: '4',
      name: '희망의 집 생활치료시설',
      type: '생활치료시설',
      address: '서울특별시 마포구 월드컵로 456',
      phone: '02-9876-5432',
      distance: '4.2km',
      rating: 4.2,
      specialties: ['일상생활훈련', '사회복귀', '직업재활', '주거지원'],
      description: '정신질환자의 사회복귀를 위한 체계적인 재활 프로그램을 운영합니다.',
      availability: '연중무휴 24시간'
    }
  ]

  const filteredCenters = mockCenters.filter(center => 
    selectedType === '전체' || center.type === selectedType
  )

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              정신건강센터 찾기
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              당신의 위치와 필요에 맞는 정신건강 전문기관을 찾아보세요
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-soft border border-neutral-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Search */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                위치 검색
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="주소를 입력하세요 (예: 강남구)"
                  className="input-field pr-10"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                기관 유형
              </label>
              <div className="flex flex-wrap gap-2">
                {centerTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-gradient-primary text-white'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-800">
              검색 결과 ({filteredCenters.length}개)
            </h2>
            <select className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>거리순</option>
              <option>평점순</option>
              <option>이름순</option>
            </select>
          </div>

          {filteredCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-xl shadow-soft border border-neutral-100 p-6 hover:shadow-gentle transition-all duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Center Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-1">{center.name}</h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {center.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        {renderStars(center.rating)}
                        <span className="ml-2 text-sm font-medium text-neutral-600">{center.rating}</span>
                      </div>
                      <span className="text-sm text-primary-600 font-medium">{center.distance}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-4">{center.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{center.address}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{center.phone}</span>
                    </div>
                    <div className="flex items-center text-neutral-600 md:col-span-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{center.availability}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">전문 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-sage-100 text-sage-700 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button className="btn-primary w-full">
                    예약 문의
                  </button>
                  <button className="btn-secondary w-full">
                    상세 정보
                  </button>
                  <button className="w-full px-4 py-2 text-neutral-600 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
                    길찾기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-lg font-bold text-red-800">응급상황 시</h3>
          </div>
          <p className="text-red-700 mb-4">
            자해나 자살 위험이 있거나 심각한 정신적 위기 상황에서는 즉시 전문가의 도움을 받으세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="tel:1393" className="flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              위기상담전화 1393
            </a>
            <a href="tel:119" className="flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              응급실 119
            </a>
            <button className="flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              응급실 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

