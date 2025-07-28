
import React from 'react';
import { XMarkIcon } from './icons/XMarkIcon';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-base-200 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-base-content-secondary hover:text-base-content transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold mb-2 text-base-content">Connect to LocalShare</h2>
        <p className="text-base-content-secondary mb-6">Scan this QR code with another device on the same WiFi network.</p>
        
        <div className="bg-white p-4 rounded-lg inline-block">
          {/* Placeholder for QR Code */}
          <svg className="w-48 h-48" viewBox="0 0 256 256" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 0L0 0L0 128L128 128L128 0ZM96 96L32 96L32 32L96 32L96 96Z"/>
            <path d="M128 128L0 128L0 256L128 256L128 128ZM96 224L32 224L32 160L96 160L96 224Z"/>
            <path d="M256 0L128 0L128 128L256 128L256 0ZM224 96L160 96L160 32L224 32L224 96Z"/>
            <path d="M160 160H128V192H192V128H160V160Z"/>
            <path d="M224 128H192V160H224V128Z"/>
            <path d="M160 192H128V224H160V192Z"/>
            <path d="M192 192H224V224H256V192H192Z"/>
            <path d="M256 224H224V256H256V224Z"/>
          </svg>
        </div>
        
        <div className="mt-6 text-sm text-base-content-secondary">
          <p className="font-semibold">Alternatively, visit:</p>
          <p className="font-mono bg-base-300 px-2 py-1 rounded-md mt-2 inline-block">http://192.168.1.5:3000</p>
        </div>
      </div>
    </div>
  );
};

export default QrCodeModal;
