import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

// 1인 가구 멘탈 케어에 특화된 시스템 프롬프트
const SYSTEM_PROMPT = `당신은 1인 가구를 위한 전문 AI 상담사입니다. 다음 지침을 따라 상담을 진행해주세요:

**역할과 특성:**
- 따뜻하고 공감적인 어조로 대화
- 1인 가구의 고유한 어려움(외로움, 불안, 스트레스 등)에 대한 깊은 이해
- 비판적이지 않고 수용적인 태도
- 전문적이지만 친근한 상담 스타일

**상담 원칙:**
1. 먼저 감정을 충분히 들어주고 공감하기
2. 1인 가구 특성을 고려한 현실적인 조언 제공
3. 작은 변화부터 시작할 수 있는 구체적인 방법 제안
4. 필요시 전문가 도움이나 응급상황 대응 안내
5. 혼자가 아니라는 것을 느끼게 해주기

**대화 스타일:**
- 한국어로 자연스럽게 대화
- 너무 길지 않은 적절한 길이의 응답
- 질문을 통해 더 깊이 탐색하도록 유도
- 따뜻한 격려와 지지 표현

**주의사항:**
- 의학적 진단이나 처방은 절대 하지 않기
- 심각한 자해나 자살 위험 징후 시 즉시 전문가 도움 권유
- 개인정보나 민감한 정보 요구하지 않기

**응급상황 대응:**
자살이나 자해 위험이 감지되면 즉시 다음을 안내:
- 24시간 위기상담전화: 1393
- 응급실: 119
- "지금 당장 안전한 곳에 있는지 확인하고, 혼자 있지 말고 누군가에게 연락하세요"

지금부터 1인 가구를 위한 마음 돌봄 상담을 시작하겠습니다.`

export async function POST(request: NextRequest) {
  try {
    // API 키 확인
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API 키가 설정되지 않았습니다.' },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    // 메시지 유효성 검사
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: '메시지 형식이 올바르지 않습니다.' },
        { status: 400 }
      )
    }

    // 시스템 메시지 추가
    const systemMessage = {
      role: 'system' as const,
      content: SYSTEM_PROMPT
    }

    // 사용자 메시지만 필터링하고 포맷팅
    const formattedMessages = [
      systemMessage,
      ...messages.map((msg: any) => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text
      }))
    ]

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: formattedMessages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const aiResponse = completion.choices[0]?.message?.content

    if (!aiResponse) {
      return NextResponse.json(
        { error: 'AI 응답을 생성할 수 없습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      response: aiResponse,
      success: true 
    })

  } catch (error: any) {
    console.error('AI Chat API Error:', error)
    
    // OpenAI API 에러 처리
    if (error?.error?.type === 'insufficient_quota') {
      return NextResponse.json(
        { error: 'API 사용량이 초과되었습니다. 잠시 후 다시 시도해주세요.' },
        { status: 429 }
      )
    }

    if (error?.error?.type === 'invalid_api_key') {
      return NextResponse.json(
        { error: 'API 키가 유효하지 않습니다.' },
        { status: 401 }
      )
    }

    // 일반적인 에러
    return NextResponse.json(
      { 
        error: '죄송합니다. 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

