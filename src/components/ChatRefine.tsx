import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, ChevronDown, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatRefineProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const quickRefinements = [
  '不要放辣椒',
  '换成素食版本',
  '减少油量',
  '加点肉',
  '更简单的做法',
  '用空气炸锅做',
];

export function ChatRefine({ messages, onSendMessage, isLoading }: ChatRefineProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleQuickRefinement = (text: string) => {
    onSendMessage(text);
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-spice-500 to-spice-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">继续调整食谱</span>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-wood-100 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-wood-100 bg-gradient-to-r from-cream-50 to-spice-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spice-400 to-spice-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-wood-800">调整食谱</h3>
            <p className="text-xs text-wood-500">告诉我你的偏好</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="p-2 text-wood-400 hover:text-wood-600 hover:bg-wood-100 rounded-lg transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[300px]">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-spice-50 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-spice-400" />
            </div>
            <p className="text-wood-500 text-sm">
              告诉我你还想怎么调整食谱？<br/>
              比如换食材、改口味、调整做法等
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-spice-500 text-white rounded-br-md'
                    : 'bg-wood-100 text-wood-800 rounded-bl-md'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-wood-100 text-wood-800 px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-wood-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-wood-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-wood-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Refinements */}
      <div className="px-4 py-2 border-t border-wood-50">
        <div className="flex flex-wrap gap-2">
          {quickRefinements.map((text) => (
            <button
              key={text}
              onClick={() => handleQuickRefinement(text)}
              disabled={isLoading}
              className="px-3 py-1 bg-cream-100 hover:bg-spice-100 text-wood-600 hover:text-spice-700 rounded-full text-xs font-medium transition-colors disabled:opacity-50"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-wood-100 bg-cream-50">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的要求..."
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 bg-white border border-wood-200 rounded-xl focus:outline-none focus:border-spice-300 focus:ring-2 focus:ring-spice-100 text-wood-800 placeholder-wood-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2.5 bg-spice-500 hover:bg-spice-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

