
export type FileType = 'image' | 'video' | 'audio' | 'document' | 'archive' | 'other';

export interface SharedFile {
  id: string;
  name: string;
  size: string;
  type: FileType;
  timestamp: Date;
}

export interface ConnectedDevice {
  id: string;
  name: string;
  ip: string;
}
