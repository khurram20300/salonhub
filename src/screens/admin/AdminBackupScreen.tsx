import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { ScreenId } from '../../types';

interface AdminBackupScreenProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const AdminBackupScreen: React.FC<AdminBackupScreenProps> = ({
  currentScreen,
  onNavigate
}) => {
  const [isBackingUp, setIsBackingUp] = useState(false);

  const handleCreateSnapshot = () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
      alert('Snapshot creation complete! Saved to Cloud Storage (3.5 GB)');
    }, 1500);
  };

  return (
    <AdminLayout currentScreen={currentScreen} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#4e4637]/30 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#f0bf5c] font-semibold">
              Disaster Recovery & Redundancy
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-[#e5e2e1] mt-1">
              Backup & Recovery Console
            </h2>
            <p className="text-sm text-[#d2c5b1]/70">
              Automated database snapshots, point-in-time recovery, and cloud replication.
            </p>
          </div>

          <button
            onClick={handleCreateSnapshot}
            disabled={isBackingUp}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7b5900] to-[#f0bf5c] text-[#131313] text-xs font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
            <span>{isBackingUp ? 'Creating Snapshot...' : 'Create Instant Snapshot'}</span>
          </button>
        </div>

        {/* Database Engine Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">
              Database Uptime
            </span>
            <p className="text-3xl font-serif-title font-bold text-emerald-400">99.98%</p>
            <span className="text-xs text-[#d2c5b1]/60">Latency: 14ms (Optimal)</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">
              Last Backup Snapshot
            </span>
            <p className="text-3xl font-serif-title font-bold text-[#f0bf5c]">4 Hours Ago</p>
            <span className="text-xs text-emerald-400">Automated Nightly Job</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-2">
            <span className="text-xs text-[#d2c5b1]/60 uppercase tracking-wider font-semibold">
              Cloud Storage Allocation
            </span>
            <p className="text-3xl font-serif-title font-bold text-[#e5e2e1]">42.8 GB / 100 GB</p>
            <span className="text-xs text-[#f0bf5c]">Multi-region Encryption</span>
          </div>
        </div>

        {/* Recovery Points Table */}
        <div className="p-8 rounded-3xl bg-[#1b1b1c] border border-[#4e4637]/40 shadow-xl space-y-6">
          <h3 className="font-serif-title font-bold text-xl text-[#e5e2e1]">
            Point-In-Time Restore Checkpoints
          </h3>

          <div className="space-y-3">
            {[
              { id: 'SNAP-20261024', time: 'Today, 04:00 AM', size: '3.4 GB', type: 'Automated Snapshot' },
              { id: 'SNAP-20261023', time: 'Yesterday, 04:00 AM', size: '3.3 GB', type: 'Automated Snapshot' },
              { id: 'SNAP-20261022', time: 'Oct 22, 04:00 AM', size: '3.3 GB', type: 'Automated Snapshot' }
            ].map((snap, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#202020] border border-[#4e4637]/30 flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-mono font-bold text-[#f0bf5c]">{snap.id}</p>
                  <p className="text-[#d2c5b1]/70 mt-0.5">{snap.time} • {snap.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[#e5e2e1] font-bold">{snap.size}</span>
                  <button
                    onClick={() => alert(`Restoring from checkpoint ${snap.id}`)}
                    className="px-3 py-1.5 rounded-xl bg-[#2a2a2a] text-[#f0bf5c] hover:bg-[#353535] font-bold"
                  >
                    Restore Point
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
