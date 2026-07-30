import React, { useState } from 'react';
import { ScreenId, FeedPost } from '../types';
import { mockFeedPosts } from '../data/mockData';

interface SocialFeedScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SocialFeedScreen: React.FC<SocialFeedScreenProps> = ({ onNavigate }) => {
  const [posts, setPosts] = useState<FeedPost[]>(mockFeedPosts);

  const toggleLike = (id: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          const isLiked = !post.isLiked;
          return {
            ...post,
            isLiked,
            likesCount: isLiked ? post.likesCount + 1 : post.likesCount - 1
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#fff8f2] pb-24 space-y-6 p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7b5900]">
            TREND ALERT & EDITORIAL
          </span>
          <h1 className="font-serif-title text-2xl font-bold text-[#1f1b14]">Style Inspiration</h1>
        </div>
        <button
          onClick={() => onNavigate('chat')}
          className="w-9 h-9 rounded-full bg-[#f6ece1] flex items-center justify-center text-[#1f1b14]"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
        </button>
      </div>

      {/* Featured Trend Banner */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
        {[
          { title: 'Honey Balayage', tag: '#Trend2024', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt-24IHfKGEbOPSdfE6U79Xd-CsmGh363XipFba988oC64keVizfjwsnOryDYer4xbZAVnVljgIvBsSrX50AyTGLEt-NpNaOK-i25yalVPQm4kAHaodtMRWjV-tYJpRtly17egdGSTdlnfIoQ17NJu-F54K9g8JqARsZm78Er-aulh0qu8bEJhke8JC7kRRU2TkFD6Brs28fXjqicZYuqaAN-Enhwts7Mei_ZhUqzvPlmjrxLCzop9Tg' },
          { title: 'Executive Fade', tag: '#BarberCraft', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCFyYr-4AXclxfqYCGwMSG8tmaI1EHcBYj-rTnjPr-5CsqLEZkokVTDUg2Oj3Mz2T_ziYfBJmSwaJlJctKqRSP3Qt2gJEJqZEFZ7tViJFVJyqvDHsOYTqxbC1fhTBmpGmjqSlRAOlt2q5xW6ax_JSL_DVhaBDfe_gGdsPL5KoxQEuxFsvGPa7304GZ_YVNwK5VyrE_CwmzAbrM6VYN56sU0Hod5cFiS5X4yt42P8JPqq1_RcB4bL6q2XKzhmg1j6i8tIDV8ml8irxW' }
        ].map((trend, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 h-32 rounded-3xl overflow-hidden relative border border-[#f0e4d2] shadow-sm"
          >
            <img src={trend.img} alt={trend.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-white">
              <span className="text-[9px] font-bold text-[#ffdea4] uppercase tracking-wider">
                {trend.tag}
              </span>
              <h3 className="font-serif-title font-bold text-base leading-tight">
                {trend.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl border border-[#f0e4d2] overflow-hidden shadow-xs space-y-3"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-[#7b5900]"
                />
                <div>
                  <h4 className="font-bold text-xs text-[#1f1b14]">{post.authorName}</h4>
                  <span className="text-[10px] text-[#7b5900] font-semibold">{post.authorTitle}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#f6ece1] text-[#7b5900]">
                {post.badgeText}
              </span>
            </div>

            <div className="relative h-72 w-full">
              <img src={post.image} alt="Post" className="w-full h-full object-cover" />
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-transform active:scale-125 ${
                      post.isLiked ? 'text-red-500' : 'text-[#1f1b14]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[20px] ${post.isLiked ? 'fill-1' : ''}`}>
                      favorite
                    </span>
                    <span>{post.likesCount}</span>
                  </button>

                  <button
                    onClick={() => alert('Comments opened!')}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#1f1b14]"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                    <span>{post.commentsCount}</span>
                  </button>
                </div>

                <button
                  onClick={() => onNavigate('schedule')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#7b5900] text-white font-semibold text-xs shadow-sm"
                >
                  Book Look
                </button>
              </div>

              <p className="text-xs text-[#52493d] leading-relaxed">{post.caption}</p>

              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t, i) => (
                  <span key={i} className="text-[10px] text-[#7b5900] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
