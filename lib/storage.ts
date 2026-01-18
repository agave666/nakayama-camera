export interface StageProgress {
  stageId: number;
  correctAnswers: number;
  isCompleted: boolean;
}

const STORAGE_KEY = 'photoUnlockProgress';

export function getProgress(): StageProgress[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    // Initialize with 5 stages
    return Array.from({ length: 5 }, (_, i) => ({
      stageId: i + 1,
      correctAnswers: 0,
      isCompleted: false
    }));
  }
  
  return JSON.parse(stored);
}

export function saveProgress(progress: StageProgress[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateStageProgress(stageId: number, correctAnswers: number): void {
  const progress = getProgress();
  const stageIndex = progress.findIndex(p => p.stageId === stageId);
  
  if (stageIndex !== -1) {
    progress[stageIndex].correctAnswers = correctAnswers;
    progress[stageIndex].isCompleted = correctAnswers >= 5;
    saveProgress(progress);
  }
}

export function getStageProgress(stageId: number): StageProgress | null {
  const progress = getProgress();
  return progress.find(p => p.stageId === stageId) || null;
}

export function hasAgreed(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('ageAgreed') === 'true';
}

export function setAgreed(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('ageAgreed', 'true');
}
