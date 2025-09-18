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

// 시뮬레이션 모드용 응답 생성 함수
function getSimulatedResponse(userInput: string): string {
  const input = userInput.toLowerCase()
  
  // 감정 키워드 감지
  if (input.includes('외롭') || input.includes('혼자') || input.includes('쓸쓸')) {
    const responses = [
      '혼자 있는 시간이 많아서 외로움을 느끼시는군요. 그런 마음이 드는 것은 자연스러운 일이에요. 1인 가구로 생활하면서 이런 감정을 경험하는 분들이 정말 많아요. 평소에 어떤 활동을 하실 때 마음이 조금이라도 편해지시나요?',
      '외로움을 느끼고 계시는군요. 혼자 있다고 해서 정말 혼자인 건 아니에요. 지금 이렇게 마음을 나누고 있잖아요. 작은 것부터 시작해보는 건 어떨까요? 좋아하는 음악을 듣거나, 산책을 하거나, 온라인 커뮤니티에 참여해보시는 것도 도움이 될 수 있어요.',
      '1인 가구로 생활하면서 외로움을 느끼는 것은 당연한 감정이에요. 자신을 탓하지 마세요. 혹시 가족이나 친구들과 연락을 취할 수 있는 방법이 있을까요? 아니면 새로운 사람들과 만날 수 있는 취미활동이나 모임에 관심이 있으신가요?'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  if (input.includes('우울') || input.includes('슬프') || input.includes('기분이 안')) {
    const responses = [
      '마음이 많이 우울하시군요. 그런 기분이 드는 것은 충분히 이해할 수 있어요. 혼자 모든 것을 감당하려고 하면 더 힘들어질 수 있어요. 언제부터 이런 기분이 드셨나요? 특별한 이유가 있으셨을까요?',
      '슬픈 마음을 표현해주셔서 고마워요. 감정을 숨기지 않고 말씀해주시는 것만으로도 용기 있는 일이에요. 우울한 기분이 계속 지속되고 있나요? 일상생활에서 조금이라도 기분이 나아지는 순간들이 있나요?',
      '기분이 안 좋으시는군요. 1인 가구로 생활하면서 이런 감정들이 더 크게 느껴질 수 있어요. 혼자서 모든 걸 해결하려고 하지 마세요. 작은 변화부터 시작해보면 어떨까요? 규칙적인 수면이나 가벼운 운동도 도움이 될 수 있어요.'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  if (input.includes('스트레스') || input.includes('힘들') || input.includes('지쳐')) {
    const responses = [
      '많은 스트레스를 받고 계시는 것 같네요. 1인 가구로 생활하면서 모든 것을 혼자 처리해야 하는 부담감이 클 텐데요. 어떤 부분에서 가장 스트레스를 받고 계신가요? 구체적으로 말씀해주시면 함께 해결방법을 찾아볼 수 있을 것 같아요.',
      '정말 힘든 시간을 보내고 계시는군요. 혼자서 모든 걸 감당하려고 하니 지치는 것은 당연해요. 완벽하게 하려고 하지 마시고, 때로는 도움을 요청하는 것도 필요해요. 평소에 스트레스를 풀 수 있는 방법이 있으신가요?',
      '지쳐있으신 마음이 느껴져요. 충분히 힘드셨을 거예요. 지금까지 정말 잘 버텨오신 거예요. 잠시 숨을 고르는 시간을 가져보시는 건 어떨까요? 좋아하는 것들을 다시 생각해보시고, 작은 것이라도 자신에게 선물하는 시간을 만들어보세요.'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  if (input.includes('불안') || input.includes('걱정') || input.includes('무서')) {
    const responses = [
      '불안한 마음이 드시는군요. 1인 가구로 생활하면서 미래에 대한 걱정이나 혼자 있는 것에 대한 불안감을 느끼는 것은 자연스러운 일이에요. 어떤 부분이 가장 불안하게 느껴지시나요?',
      '걱정이 많으신 것 같아요. 혼자서 모든 것을 책임져야 한다는 부담감 때문에 더 불안해질 수 있어요. 지금 당장 해결할 수 있는 것과 없는 것을 나누어서 생각해보시는 건 어떨까요?',
      '무서운 마음이 드시는군요. 그런 감정을 느끼는 것은 잘못된 게 아니에요. 불안할 때 도움이 되는 호흡법이나 이완기법을 시도해보신 적이 있나요? 아니면 신뢰할 수 있는 사람과 이야기를 나눌 수 있을까요?'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  if (input.includes('안녕') || input.includes('처음') || input.includes('시작')) {
    return '안녕하세요! 만나서 반가워요. 오늘 기분은 어떠세요? 1인 가구로 생활하시면서 어떤 마음이 드시는지 편안하게 말씀해 주세요. 어떤 이야기든 들을 준비가 되어있어요. 😊'
  }
  
  if (input.includes('도움') || input.includes('조언') || input.includes('어떻게')) {
    return '도움이 필요하시군요. 구체적으로 어떤 부분에서 도움이 필요하신지 말씀해 주시면, 1인 가구 상황에 맞는 현실적인 조언을 드릴 수 있을 것 같아요. 작은 것부터 차근차근 해결해 나가보아요.'
  }
  
  // 자살/자해 관련 키워드 감지
  if (input.includes('죽고싶') || input.includes('자살') || input.includes('끝내고싶') || input.includes('살기싫')) {
    return '지금 정말 힘든 상황이신 것 같아요. 이런 생각이 드시는 것이 얼마나 고통스러우실지 이해합니다. 하지만 혼자 견디지 마시고 즉시 전문가의 도움을 받으셨으면 해요. 24시간 위기상담전화 1393으로 연락하시거나, 응급상황이시면 119로 연락해 주세요. 지금 안전한 곳에 계신가요?'
  }
  
  // 기본 응답들
  const generalResponses = [
    '그런 마음이 드시는군요. 좀 더 자세히 말씀해 주실 수 있을까요? 어떤 상황에서 그런 생각이나 감정이 드시는지 궁금해요.',
    '혼자 있는 시간이 많으면 이런저런 생각들이 많이 들 수 있어요. 지금 가장 마음에 걸리는 것이 무엇인가요?',
    '1인 가구로 생활하면서 느끼시는 감정들을 이해해요. 평소에 마음이 힘들 때 어떻게 극복하려고 노력하시나요?',
    '충분히 공감이 돼요. 혼자서 모든 것을 처리하다 보면 때로는 벅찰 수 있어요. 지금 이 순간 가장 필요한 것이 무엇일까요?',
    '마음을 나누어 주셔서 고마워요. 이런 이야기를 하는 것 자체가 용기 있는 일이에요. 어떤 작은 변화라도 시도해볼 생각이 있으신가요?'
  ]
  
  return generalResponses[Math.floor(Math.random() * generalResponses.length)]
}

export async function POST(request: NextRequest) {
  try {
    // API 키 확인 - 없으면 시뮬레이션 모드로 동작
    if (!process.env.OPENAI_API_KEY) {
      console.log('OpenAI API key not found, using simulation mode')
      
      const { messages } = await request.json()
      const lastMessage = messages[messages.length - 1]?.text || ''
      
      // 시뮬레이션된 AI 응답
      const simulatedResponse = getSimulatedResponse(lastMessage)
      
      // 실제 API 호출처럼 약간의 지연 추가
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
      
      return NextResponse.json({
        response: simulatedResponse,
        success: true,
        mode: 'simulation'
      })
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

