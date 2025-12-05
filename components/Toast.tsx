
import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import { CheckCircle, Info, XCircle } from 'lucide-react';

const ToastContainer: React.FC = () => {
  const { toasts } = useGlobal();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className={`
            pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border animate-float
            ${toast.type === 'success' ? 'bg-white border-green-200 text-green-800' : 
              toast.type === 'error' ? 'bg-white border-red-200 text-red-800' : 
              'bg-white border-blue-200 text-blue-800'}
          `}
        >
          {toast.type === 'success' && <CheckCircle size={20} className="text-green-500" />}
          {toast.type === 'error' && <XCircle size={20} className="text-red-500" />}
          {toast.type === 'info' && <Info size={20} className="text-blue-500" />}
          
          <span className="font-semibold text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
