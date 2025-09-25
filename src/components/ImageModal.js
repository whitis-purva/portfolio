import { useEffect } from 'react';

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, allImages = [], currentIndex = 0, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && allImages.length > 1) {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight' && allImages.length > 1) {
        onNavigate('next');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, allImages.length, onNavigate]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(57, 52, 47, 0.9)' }}
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] p-8 overflow-y-auto">
        <button
          onClick={onClose}
          className="sticky top-0 z-10 p-2 rounded-md text-text-primary transition-all duration-200 float-right"
          style={{ backgroundColor: 'rgba(251, 250, 248, 0.85)' }}
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center">
          {imageSrc.endsWith('.mov') || imageSrc.endsWith('.mp4') || imageSrc.endsWith('.webm') ? (
            <video
              src={`${imageSrc}?t=${Date.now()}`}
              controls
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
        
        {/* Navigation arrows - only show if there are multiple images */}
        {allImages.length > 1 && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('prev');
              }}
              className="p-2 rounded-md text-text-primary transition-all duration-200"
              style={{ backgroundColor: 'rgba(251, 250, 248, 0.85)' }}
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="px-3 py-2 text-sm text-white rounded-md" style={{ backgroundColor: '#39342F' }}>
              {currentIndex + 1} of {allImages.length}
            </span>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('next');
              }}
              className="p-2 rounded-md text-text-primary transition-all duration-200"
              style={{ backgroundColor: 'rgba(251, 250, 248, 0.85)' }}
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
