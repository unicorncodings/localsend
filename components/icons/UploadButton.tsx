
import React from 'react';
import { UploadIcon } from './icons/UploadIcon';

interface UploadButtonProps {
  onClick: () => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-secondary"
      aria-label="Upload a file"
    >
      <UploadIcon className="w-6 h-6" />
    </button>
  );
};

export default UploadButton;
