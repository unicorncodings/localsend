
import React from 'react';
import { SharedFile } from '../types';
import FileIcon from './FileIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface FileListProps {
  files: SharedFile[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  if (files.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-medium text-base-content-secondary">No files shared yet</h2>
        <p className="mt-2 text-sm text-base-content-secondary/70">Use the upload button to share your first file.</p>
      </div>
    );
  }

  const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };


  return (
    <div className="space-y-3">
      {files.map(file => (
        <div key={file.id} className="bg-base-200 p-4 rounded-lg flex items-center gap-4 transition-all hover:bg-base-300/50 hover:shadow-md">
          <FileIcon type={file.type} />
          <div className="flex-1">
            <p className="font-medium text-base-content break-all">{file.name}</p>
            <div className="flex items-center gap-2 text-xs text-base-content-secondary mt-1">
                <span>{file.size}</span>
                <span className="text-base-300">•</span>
                <span>{timeAgo(file.timestamp)}</span>
            </div>
          </div>
          <button 
            className="p-2 rounded-full bg-base-300 hover:bg-brand-secondary text-base-content-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label={`Download ${file.name}`}
            onClick={() => alert(`Simulating download for: ${file.name}`)}
          >
            <DownloadIcon className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
