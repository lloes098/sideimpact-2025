'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! 저는 MindCare AI 상담사입니다. 오늘 기분은 어떠세요? 혼자 계시는 시간이 많으신 1인 가구분들의 마음을 이해하고 함께 이야기 나누고 싶어요. 편안하게 말씀해 주세요. 😊',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    const currentMessages = [...messages, userMessage]
    setMessages(currentMessages)
    setInputValue('')
    setIsTyping(true)

    try {
      // 실제 AI API 호출
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: currentMessages
        }),
      })

      const data = await response.json()

      if (data.success && data.response) {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
      } else {
        // 에러 처리
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.error || '죄송합니다. 응답을 생성하는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Chat API Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  // 이 함수는 더 이상 사용되지 않지만 백업용으로 유지
  const getAIResponse = (userInput: string): string => {
    const responses = [
      '죄송합니다. 현재 AI 서비스에 일시적인 문제가 있습니다. 잠시 후 다시 시도해주세요.',
    ]
    return responses[0]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-800">AI 상담사</h1>
              <p className="text-neutral-600">24시간 언제든 대화할 수 있어요</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-soft border border-neutral-100 flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-primary text-white'
                      : 'bg-neutral-100 text-neutral-800'
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-white/70' : 'text-neutral-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('ko-KR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 text-neutral-800 px-4 py-3 rounded-2xl max-w-[80%]">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-neutral-100">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="마음을 편하게 말씀해 주세요..."
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={2}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-sage-50 border border-sage-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-sage-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-sage-700">
              <p className="font-medium mb-1">안내사항</p>
              <p>
                이 AI 상담은 참고용이며 전문적인 의료 상담을 대체할 수 없습니다. 
                심각한 정신적 위기 상황에서는 전문가의 도움을 받으시거나 응급실에 방문해 주세요.
              </p>
              <p className="mt-2">
                <strong>24시간 위기상담전화: 1393</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
