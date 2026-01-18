'use client';

import { useState, useEffect } from 'react';
import AgeGateModal from '@/components/AgeGateModal';
import StageCard from '@/components/StageCard';
import { stagesData } from '@/lib/quizData';
import { hasAgreed, setAgreed, getProgress } from '@/lib/storage';

export default function Home() {
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [progress, setProgress] = useState<any[]>([]);

  useEffect(() => {
    setShowAgeGate(!hasAgreed());
    setProgress(getProgress());
  }, []);

  const handleAgree = () => {
    setAgreed();
    setShowAgeGate(false);
  };

  if (showAgeGate) {
    return <AgeGateModal onAgree={handleAgree} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Photo Unlock Puzzle
          </h1>
          <p className="text-gray-400 text-lg">
            撮影テクニックのクイズに答えて、写真を解放しよう
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stagesData.map((stage) => {
            const stageProgress = progress.find(p => p.stageId === stage.id) || {
              correctAnswers: 0,
              isCompleted: false
            };
            
            return (
              <StageCard
                key={stage.id}
                id={stage.id}
                title={stage.title}
                photoPath={stage.photoPath}
                correctAnswers={stageProgress.correctAnswers}
                isCompleted={stageProgress.isCompleted}
              />
            );
          })}
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2026 Nakayama Masafumi Photography</p>
        </footer>
      </div>
    </div>
  );
}
