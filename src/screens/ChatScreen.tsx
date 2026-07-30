import React, { useState } from 'react';
import { ScreenId, ChatMessage } from '../types';
import { mockChatMessages, mockBarbers } from '../data/mockData';

interface ChatScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: inputText.trim(),
      time: 'Just now',
      isRead: true
    };

    setMessages([...messages, newMsg]);
    setInputText('');

    // Simulate response after 1 second
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'stylist',
        text: 'That sounds like a fantastic plan! I will prepare the hot towel aromatherapy session for your arrival.',
        time: 'Just now'
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] flex flex-col justify-between pb-20">
      {/* Top Header */}
      <div className="glass-nav border-b border-[#f0e4d2] px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="relative w-10 h-10 rounded-full border border-[#7b5900]">
            <img
              src={mockBarbers[0].avatar}
              alt={mockBarbers[0].name}
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div>
            <h3 className="font-serif-title font-bold text-sm text-[#1f1b14]">
              {mockBarbers[0].name}
            </h3>
            <span className="text-[10px] text-[#7b5900] font-semibold block">
              Master Artisan • Active Now
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Starting HD Video Call with Julian Hunt...')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] text-[#7b5900] flex items-center justify-center hover:bg-[#ebdccb]"
          >
            <span className="material-symbols-outlined text-[18px]">videocam</span>
          </button>
          <button
            onClick={() => alert('Calling Julian Hunt...')}
            className="w-9 h-9 rounded-full bg-[#f6ece1] text-[#7b5900] flex items-center justify-center hover:bg-[#ebdccb]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="text-center">
          <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-[#f6ece1] text-[#877868]">
            Today • Concierge Style Consultation
          </span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-3xl text-xs space-y-2 shadow-xs ${
                  isUser
                    ? 'bg-[#7b5900] text-white rounded-br-none'
                    : 'bg-white text-[#1f1b14] border border-[#f0e4d2] rounded-bl-none'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                {msg.image && (
                  <div className="rounded-2xl overflow-hidden border border-white/20 mt-2">
                    <img src={msg.image} alt="Inspiration" className="w-full h-36 object-cover" />
                  </div>
                )}
                <div
                  className={`text-[9px] flex items-center justify-end gap-1 ${
                    isUser ? 'text-white/80' : 'text-[#877868]'
                  }`}
                >
                  <span>{msg.time}</span>
                  {isUser && <span className="material-symbols-outlined text-[12px]">done_all</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Toolbar */}
      <form
        onSubmit={handleSend}
        className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-3 glass-nav border-t border-[#f0e4d2] flex items-center gap-2"
      >
        <button
          type="button"
          onClick={() => alert('Attachment picker opened!')}
          className="w-10 h-10 rounded-2xl bg-[#f6ece1] text-[#7b5900] flex items-center justify-center hover:bg-[#ebdccb]"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask Julian about haircut styles or consultation..."
          className="flex-1 px-4 py-2.5 rounded-2xl bg-white border border-[#f0e4d2] text-xs text-[#1f1b14] focus:outline-none focus:border-[#7b5900]"
        />

        <button
          type="submit"
          className="w-10 h-10 rounded-2xl bg-[#7b5900] text-white flex items-center justify-center shadow-md hover:bg-[#634700] active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </form>
    </div>
  );
};
