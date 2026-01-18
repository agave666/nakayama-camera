'use client';

import Link from 'next/link';
import Image from 'next/image';

interface StageCardProps {
  id: number;
  title: string;
  photoPath: string;
  correctAnswers: number;
  isCompleted: boolean;
}

export default function StageCard({
  id,
  title,
  photoPath,
  correctAnswers,
  isCompleted
}: StageCardProps) {
  const progress = (correctAnswers / 5) * 100;
  const isVideo = photoPath.endsWith('.mp4');

  return (
    <Link href={`/stage/${id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-amber-600 transition-all cursor-pointer group">
        <div className="relative aspect-[3/4] overflow-hidden">
          {isVideo ? (
            <video
              src={photoPath}
              className={`w-full h-full object-cover ${
                !isCompleted ? 'blur-3xl scale-110' : ''
              } group-hover:scale-105 transition-transform duration-300`}
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={photoPath}
              alt={title}
              fill
              className={`object-cover ${
                !isCompleted ? 'blur-3xl scale-110' : ''
              } group-hover:scale-105 transition-transform duration-300`}
            />
          )}
          
          {!isCompleted && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🔒</div>
                <div className="text-xl font-bold">{correctAnswers}/5</div>
              </div>
            </div>
          )}
          
          {isCompleted && (
            <div className="absolute top-4 right-4 bg-amber-600 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>進捗: {correctAnswers}/5</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
