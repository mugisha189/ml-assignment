import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createPortal } from 'react-dom';
import api from '../context/api';
import { Trash2, LogOut, X } from 'lucide-react';



interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAccountDeletion = async () => {
    try {
      await api.delete(`/users/${user?.id}/delete`);
      logout();
      navigate('/login');
    } catch (error) {
      console.error('Account deletion failed', error);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h1 className="text-xl font-semibold mb-6">Settings</h1>
        
        <div className="space-y-4">
          {user && (
            <div className="bg-gray-50 rounded p-4">
              <h2 className="text-lg font-medium mb-2">Account Info</h2>
              <p className="text-sm text-gray-600">Username: {user.username}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </button>
            
            <button 
              onClick={() => setIsDeleteModalOpen(true)}
              className="flex items-center justify-center w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete Account
            </button>
          </div>
        </div>

        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 10000 }}>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsDeleteModalOpen(false)} />
            <div className="bg-white rounded-lg p-6 w-80 relative">
              <h2 className="text-lg font-semibold text-red-600 mb-4">Delete Account</h2>
              <p className="text-sm text-gray-600 mb-4">This action cannot be undone. Are you sure?</p>
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAccountDeletion}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SettingsModal;