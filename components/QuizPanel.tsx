'use client';

import { useState } from 'react';
import { QuizQuestion } from '@/lib/quizData';

interface QuizPanelProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onCorrectAnswer: () => void;
}

export default function QuizPanel({
  question,
  questionNumber,
  totalQuestions,
  onCorrectAnswer
}: QuizPanelProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === question.correctIndex;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setTimeout(() => {
        onCorrectAnswer();
        setIsAnswered(false);
        setSelectedOption(null);
      }, 2000);
    }
  };

  const handleRetry = () => {
    setIsAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">
            問題 {questionNumber} / {totalQuestions}
          </span>
          <span className="text-xs text-amber-500 font-semibold">
            正解で20%解放
          </span>
        </div>
        <h3 className="text-lg font-bold leading-relaxed">{question.question}</h3>
      </div>

      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && setSelectedOption(index)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-lg text-left transition-all ${
              selectedOption === index
                ? isAnswered
                  ? isCorrect
                    ? 'bg-green-600 border-green-500'
                    : 'bg-red-600 border-red-500'
                  : 'bg-amber-600 border-amber-500'
                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
            } border-2 ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 font-bold">
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
          <div className="flex items-start">
            <div className="text-2xl mr-3">
              {isCorrect ? '✓' : '✗'}
            </div>
            <div>
              <div className="font-bold mb-1">
                {isCorrect ? '正解!' : '不正解'}
              </div>
              <p className="text-sm text-gray-300">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={isAnswered && !isCorrect ? handleRetry : handleSubmit}
        disabled={selectedOption === null || (isAnswered && isCorrect)}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          selectedOption === null || (isAnswered && isCorrect)
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : isAnswered && !isCorrect
            ? 'bg-amber-600 hover:bg-amber-700 text-white'
            : 'bg-amber-600 hover:bg-amber-700 text-white'
        }`}
      >
        {isAnswered && isCorrect
          ? '次の問題へ...'
          : isAnswered && !isCorrect
          ? '再挑戦'
          : '回答する'}
      </button>
    </div>
  );
}
