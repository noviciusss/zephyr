'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface SharedPhotosProps {
  photos: string[];
  initialDisplayCount?: number;
  isDarkMode: boolean;
}

const SharedPhotos: React.FC<SharedPhotosProps> = ({
  photos,
  initialDisplayCount = 6,
  isDarkMode,
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setDisplayCount(isExpanded ? initialDisplayCount : photos.length);
  };

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(selectedPhoto === photo ? null : photo);
  };

  return (
    <div
      className={`border rounded-xl shadow-md p-2 relative ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Shared Images
        </h4>
        {photos.length > initialDisplayCount && (
          <motion.button
            onClick={toggleExpand}
            className="text-orange-500 text-sm flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                See Less <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                See All <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </motion.button>
        )}
      </div>
      <motion.div className="grid grid-cols-3 gap-2" layout>
        <AnimatePresence>
          {photos.slice(0, displayCount).map((photo, index) => (
            <motion.div
              key={photo}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`aspect-square rounded overflow-hidden cursor-pointer relative ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              onClick={() => handlePhotoClick(photo)}
              whileHover={{ scale: 1.5, zIndex: 10 }}
            >
              <Image
                src={photo}
                alt={`Shared content ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              {selectedPhoto === photo && (
                <motion.div
                  className="absolute inset-0 border-4 border-orange-500 rounded pointer-events-none"
                  initial={false}
                  animate={{ borderColor: 'rgb(249 115 22)' }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SharedPhotos;
