
import React from 'react';
import { ConnectedDevice } from '../types';
import { SmartphoneIcon } from './icons/SmartphoneIcon';
import { LaptopIcon } from './icons/LaptopIcon';
import { QrCodeIcon } from './icons/QrCodeIcon';

interface DeviceListProps {
  devices: ConnectedDevice[];
  onShowQr: () => void;
}

const DeviceList: React.FC<DeviceListProps> = ({ devices, onShowQr }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-base-content">LocalShare</h2>
      <div className="mb-6">
        <button 
          onClick={onShowQr}
          className="w-full flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-secondary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          <QrCodeIcon className="w-5 h-5" />
          Connect a Device
        </button>
      </div>
      
      <h3 className="text-sm font-semibold text-base-content-secondary uppercase tracking-wider mb-3">Connected Devices</h3>
      <ul className="space-y-3 flex-1 overflow-y-auto">
        {devices.map(device => (
          <li key={device.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-base-300/50 transition-colors">
            {device.name.toLowerCase().includes('pc') || device.name.toLowerCase().includes('macbook') ? 
                <LaptopIcon className="w-6 h-6 text-base-content-secondary" /> :
                <SmartphoneIcon className="w-6 h-6 text-base-content-secondary" />
            }
            <div>
              <p className="font-medium text-sm text-base-content">{device.name}</p>
              <p className="text-xs text-base-content-secondary">{device.ip}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center text-xs text-base-content-secondary">
          Your IP: 192.168.1.5
      </div>
    </div>
  );
};

export default DeviceList;
