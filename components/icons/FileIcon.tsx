
import React from 'react';
import { FileType } from '../types';
import { DocumentIcon } from './icons/DocumentIcon';
import { ImageIcon } from './icons/ImageIcon';
import { VideoIcon } from './icons/VideoIcon';
import { AudioIcon } from './icons/AudioIcon';
import { ArchiveIcon } from './icons/ArchiveIcon';
import { FileGenericIcon } from './icons/FileGenericIcon';

interface FileIconProps {
  type: FileType;
}

const FileIcon: React.FC<FileIconProps> = ({ type }) => {
  const iconProps = { className: "w-8 h-8 text-base-content-secondary flex-shrink-0" };
  
  const iconMap: Record<FileType, React.ReactNode> = {
    image: <ImageIcon {...iconProps} />,
    video: <VideoIcon {...iconProps} />,
    audio: <AudioIcon {...iconProps} />,
    document: <DocumentIcon {...iconProps} />,
    archive: <ArchiveIcon {...iconProps} />,
    other: <FileGenericIcon {...iconProps} />,
  };

  return (
    <div className="w-12 h-12 bg-base-300 rounded-lg flex items-center justify-center">
      {iconMap[type] || iconMap.other}
    </div>
  );
};

export default FileIcon;
