'use client';

import { useMemo } from 'react';
import Image from 'next/image';

interface TileRevealImageProps {
  photoPath: string;
  revealedTiles: number;
}

export default function TileRevealImage({ photoPath, revealedTiles }: TileRevealImageProps) {
  const isVideo = photoPath.endsWith('.mp4');
  
  // Generate tile positions (10x10 grid = 100 tiles)
  const tiles = useMemo(() => {
    const tileArray = [];
    for (let i = 0; i < 100; i++) {
      tileArray.push(i);
    }
    // Shuffle to reveal tiles randomly
    return tileArray.sort(() => Math.random() - 0.5);
  }, []);

  const revealedIndices = useMemo(() => {
    return new Set(tiles.slice(0, revealedTiles));
  }, [tiles, revealedTiles]);

  return (
    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
      {isVideo ? (
        <video
          src={photoPath}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={photoPath}
          alt="Photo"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Tile overlay grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`border border-gray-900/20 transition-all duration-500 ${
              revealedIndices.has(index) ? 'bg-transparent' : 'bg-black'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
