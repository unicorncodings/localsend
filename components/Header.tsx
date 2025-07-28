
import React from 'react';
import { WifiIcon } from './icons/WifiIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-base-200/50 backdrop-blur-sm border-b border-base-300 p-4 sm:p-6 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-base-content">Shared Files</h1>
        <p className="text-sm text-base-content-secondary mt-1">Files available on your local network</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-full text-sm">
        <WifiIcon className="w-4 h-4" />
        <span>Local Network</span>
      </div>
    </header>
  );
};

export default Header;
