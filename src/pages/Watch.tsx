import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Settings } from 'lucide-react';

const Watch: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate video progress
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress(prev => Math.min(prev + 0.1, 100));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative h-screen bg-black">
      {/* Video placeholder */}
      <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
        <div className="text-white/50 text-lg">Video Player</div>
      </div>

      {/* Controls overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 p-4">
          <button 
            onClick={handleBack}
            className="text-white hover:bg-white/10 rounded-full p-2 transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Center play/pause button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:bg-white/10 rounded-full p-4 transition"
          >
            {isPlaying ? (
              <Pause className="w-12 h-12" />
            ) : (
              <Play className="w-12 h-12" />
            )}
          </button>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          {/* Progress bar */}
          <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-red-600 h-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/10 rounded-full p-2 transition"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/10 rounded-full p-2 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <span className="text-white text-sm">
                {Math.floor(progress / 100 * 120)}:00 / 2:00:00
              </span>
            </div>
            <button className="text-white hover:bg-white/10 rounded-full p-2 transition">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;