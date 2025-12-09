import React, { useState } from 'react';
import { RelationshipType } from '../types';
import { generateWeddingWish } from '../services/geminiService';

const AiWishHelper: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [relationship, setRelationship] = useState<RelationshipType>(RelationshipType.FRIEND);
  const [generatedWish, setGeneratedWish] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!senderName.trim()) {
      alert("Bạn vui lòng nhập tên nha!");
      return;
    }
    setLoading(true);
    setGeneratedWish('');
    setCopied(false);
    
    try {
      const wish = await generateWeddingWish(relationship, senderName);
      setGeneratedWish(wish);
    } catch (error) {
      console.error(error);
      setGeneratedWish("Có lỗi xảy ra, bạn thử lại sau nhé!");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedWish) {
      navigator.clipboard.writeText(generatedWish);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-wedding-100 to-white">
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 shadow-xl border border-white/50">
        <div className="text-center mb-8">
          <span className="bg-wedding-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">AI Powered</span>
          <h2 className="text-3xl md:text-4xl font-script text-wedding-600 mb-2">Gửi Lời Chúc (AI)</h2>
          <p className="text-gray-600 text-sm">
            Bạn bí từ? Đừng lo, hãy để trợ lý AI giúp bạn soạn một lời chúc thật "xịn" cho Nam & Linh nhé!
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Tên của bạn</label>
            <input 
              type="text" 
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Nhập tên của bạn..." 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-wedding-400 focus:ring-2 focus:ring-wedding-200 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Quan hệ với cô dâu/chú rể</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.values(RelationshipType).map((rel) => (
                <button
                  key={rel}
                  onClick={() => setRelationship(rel)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${
                    relationship === rel 
                      ? 'bg-wedding-500 text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-wedding-50 border border-gray-100'
                  }`}
                >
                  {rel}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transform transition-all hover:scale-[1.02] ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-wedding-400 to-wedding-600 hover:from-wedding-500 hover:to-wedding-700'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Đang viết lời chúc...
              </span>
            ) : "✨ Tạo Lời Chúc Ngay ✨"}
          </button>

          {generatedWish && (
            <div className="mt-6 animate-fade-in-up">
              <div className="bg-wedding-50 p-6 rounded-xl border border-wedding-200 relative">
                <p className="font-serif text-lg text-gray-700 italic text-center leading-relaxed">
                  "{generatedWish}"
                </p>
                <div className="mt-4 flex justify-center">
                  <button 
                    onClick={handleCopy}
                    className="text-xs font-semibold uppercase text-wedding-600 hover:text-wedding-800 flex items-center gap-1"
                  >
                    {copied ? (
                      <span className="text-green-600">✓ Đã sao chép</span>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Sao chép lời chúc
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiWishHelper;