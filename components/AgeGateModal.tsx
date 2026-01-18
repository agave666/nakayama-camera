'use client';

import { useState } from 'react';

interface AgeGateModalProps {
  onAgree: () => void;
}

export default function AgeGateModal({ onAgree }: AgeGateModalProps) {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-8 border-2 border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">年齢確認</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          このWebアプリは18歳以上の方を対象としています。
          表示される素材の権利は適切に処理されており、
          全てのコンテンツは正規に許可を得たものです。
        </p>
        
        <label className="flex items-center mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-5 h-5 mr-3 accent-amber-500"
          />
          <span className="text-sm text-gray-300">
            私は18歳以上で、上記の内容を理解しました
          </span>
        </label>

        <button
          onClick={handleAgree}
          disabled={!agreed}
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            agreed
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          同意して入場
        </button>
      </div>
    </div>
  );
}
