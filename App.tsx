
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SharedFile, ConnectedDevice } from './types';
import Header from './components/Header';
import DeviceList from './components/DeviceList';
import FileList from './components/FileList';
import UploadButton from './components/UploadButton';
import QrCodeModal from './components/QrCodeModal';

const MOCK_DEVICES: ConnectedDevice[] = [
  { id: '1', name: 'My MacBook Pro', ip: '192.168.1.5' },
  { id: '2', name: 'Galaxy S23', ip: '192.168.1.12' },
  { id: '3', name: 'Living Room PC', ip: '192.168.1.9' },
];

const MOCK_FILES: SharedFile[] = [
    { id: 'f1', name: 'project-brief.pdf', size: '1.2 MB', type: 'document', timestamp: new Date(Date.now() - 3600000) },
    { id: 'f2', name: 'beach-vacation.jpg', size: '4.5 MB', type: 'image', timestamp: new Date(Date.now() - 7200000) },
    { id: 'f3', name: 'quarterly-report.mp4', size: '152.1 MB', type: 'video', timestamp: new Date(Date.now() - 10800000) },
    { id: 'f4', name: 'app-assets.zip', size: '24.8 MB', type: 'archive', timestamp: new Date(Date.now() - 86400000) },
];

const App: React.FC = () => {
  const [files, setFiles] = useState<SharedFile[]>(MOCK_FILES);
  const [devices, setDevices] = useState<ConnectedDevice[]>(MOCK_DEVICES);
  const [isQrModalOpen, setQrModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    const newFile: SharedFile = {
      id: `file-${Date.now()}`,
      name: uploadedFile.name,
      size: `${(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB`,
      type: getFileType(uploadedFile.name),
      timestamp: new Date(),
    };

    setFiles(prevFiles => [newFile, ...prevFiles]);
  };
  
  const getFileType = (fileName: string): SharedFile['type'] => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) return 'image';
    if (['mp4', 'mov', 'avi', 'mkv'].includes(extension)) return 'video';
    if (['mp3', 'wav', 'ogg'].includes(extension)) return 'audio';
    if (['pdf', 'doc', 'docx', 'txt', 'ppt', 'pptx', 'xls', 'xlsx'].includes(extension)) return 'document';
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(extension)) return 'archive';
    return 'other';
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  
  // Simulate a new file being added from another device
  const simulateRealtimeUpdate = useCallback(() => {
    const newRemoteFile: SharedFile = {
        id: `remote-${Date.now()}`,
        name: 'shared-from-galaxy.jpg',
        size: '3.1 MB',
        type: 'image',
        timestamp: new Date(),
    };
    setFiles(prevFiles => [newRemoteFile, ...prevFiles]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // This effect simulates another device uploading a file after 15 seconds.
    // In a real app, this would be replaced by a WebSocket listener.
    const timer = setTimeout(() => {
      simulateRealtimeUpdate();
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [simulateRealtimeUpdate]);


  return (
    <div className="min-h-screen bg-base-100 flex flex-col md:flex-row">
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
      
      <aside className="w-full md:w-64 lg:w-72 bg-base-200 p-4 flex-shrink-0 border-b md:border-b-0 md:border-r border-base-300">
        <DeviceList devices={devices} onShowQr={() => setQrModalOpen(true)} />
      </aside>

      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <FileList files={files} />
        </div>
      </main>

      <UploadButton onClick={triggerFileUpload} />
      <QrCodeModal isOpen={isQrModalOpen} onClose={() => setQrModalOpen(false)} />

      <div className="fixed bottom-2 right-2 text-xs text-base-content-secondary/50">
        Note: This is a UI prototype. File transfers are simulated.
      </div>
    </div>
  );
};

export default App;
