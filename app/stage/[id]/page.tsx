'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TileRevealImage from '@/components/TileRevealImage';
import QuizPanel from '@/components/QuizPanel';
import { stagesData } from '@/lib/quizData';
import { getStageProgress, updateStageProgress } from '@/lib/storage';

export default function StagePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const stageId = parseInt(params.id);
  const stage = stagesData.find(s => s.id === stageId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const progress = getStageProgress(stageId);
    if (progress) {
      setCorrectAnswers(progress.correctAnswers);
      setCurrentQuestion(Math.min(progress.correctAnswers, 4));
      setIsCompleted(progress.isCompleted);
    }
  }, [stageId]);

  if (!stage) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ステージが見つかりません</h1>
          <Link href="/" className="text-amber-500 hover:text-amber-400">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  const handleCorrectAnswer = () => {
    const newCorrectAnswers = correctAnswers + 1;
    setCorrectAnswers(newCorrectAnswers);
    updateStageProgress(stageId, newCorrectAnswers);

    if (newCorrectAnswers >= 5) {
      setIsCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const revealedTiles = correctAnswers * 20; // 20 tiles per correct answer

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            ホームに戻る
          </Link>
          <div className="text-amber-500 font-bold">
            {correctAnswers} / 5 正解
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{stage.title}</h1>

        {isCompleted ? (
          <div className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <TileRevealImage photoPath={stage.photoPath} revealedTiles={100} />
            </div>
            
            <div className="bg-gradient-to-r from-amber-900/50 to-amber-800/50 rounded-lg p-8 max-w-2xl mx-auto border-2 border-amber-600">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🎉</div>
                <h2 className="text-2xl font-bold">ステージクリア!</h2>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold mb-3 text-amber-400">撮影メモ</h3>
                <p className="text-gray-300 leading-relaxed">{stage.shootingMemo}</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  一覧に戻る
                </Link>
                {stageId < 5 && (
                  <Link
                    href={`/stage/${stageId + 1}`}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold text-center transition-colors"
                  >
                    次のステージへ
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TileRevealImage photoPath={stage.photoPath} revealedTiles={revealedTiles} />
              
              <div className="mt-4 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">解放率</span>
                  <span className="text-lg font-bold text-amber-500">
                    {(correctAnswers / 5 * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-amber-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(correctAnswers / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div>
              <QuizPanel
                question={stage.questions[currentQuestion]}
                questionNumber={currentQuestion + 1}
                totalQuestions={5}
                onCorrectAnswer={handleCorrectAnswer}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
