/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { UserPlus, Edit, Trash2, MapPin, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../context/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    date_joined: string;
    profile__company: string;
    profile__address: string;
    password:string;
    companyUsername:string;
    companyPassword:string;
  }


interface Bridge {
  id: number;
  name: string;
  location: string;
}

interface DataStream {
  id: number;
  stream_id: string;
  data_type: string;
}

const UserManagementComponent: React.FC = () => {
  // State management
  const [users, setUsers] = useState<User[]>([]);
  const [bridges, setBridges] = useState<Bridge[]>([]);
  const [dataStreams, setDataStreams] = useState<DataStream[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isAssignBridgeModalOpen, setIsAssignBridgeModalOpen] = useState(false);
  const [isAssignDataStreamModalOpen, setIsAssignDataStreamModalOpen] = useState(false);
  const [selectedBridges, setSelectedBridges] = useState<number[]>([]);
  const [selectedDataStreams, setSelectedDataStreams] = useState<number[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const {user}=useAuth()
  



  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.is_staff) {
      navigate('/map');
    }
  }, [user, navigate]);

    // this is to handle back
    const handleBack = () => {
      navigate('/map'); 
    };


  // Fetch initial data
  useEffect(() => {
    fetchUsers();
    fetchBridges();
    fetchDataStreams();
  }, []);

  // API Calls
  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
        console.log(error)
      showToast('Failed to fetch users', 'error');
    }
  };
  console.log(users)

  const fetchBridges = async () => {
    try {
      const response = await api.get('/bridges/');
      setBridges(response.data);
    } catch (error) {
        console.log(error)
      showToast('Failed to fetch bridges', 'error');
    }
  };

  const fetchDataStreams = async () => {
    try {
      const response = await api.get('/data-streams/');
      setDataStreams(response.data);
    } catch (error) {
        console.log(error)
      showToast('Failed to fetch data streams', 'error');
    }
  };

  // User Management Functions

const handleCreateOrUpdateUser = async (userData: {
    password?: string;
    username: string;
    email: string;
    company: string;
    address: string;
    companyUsername:string;
    companyPassword:string;
  }) => {
    try {
      const payload = {
        password: userData.password,
        username: userData.username,
        email: userData.email,
        company: userData.company,
        address: userData.address,
        companyUsername : userData.companyUsername,
        companyPassword: userData.companyPassword

    
      };
  
      if (selectedUser) {
        // Remove password for updates
        delete payload.password;
        await api.put(`/users/${selectedUser.id}/update`, payload);
      } else {
        await api.post('/auth/signup', payload);
      }
  
      fetchUsers();
      setIsUserModalOpen(false);
      showToast(selectedUser ? 'User updated successfully' : 'User created successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to save user', 'error');
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}/delete`);
      fetchUsers();
      showToast('User deleted successfully', 'success');
    } catch (error) {
        console.log(error)
      showToast('Failed to delete user', 'error');
    }
  };

  const handleAssignBridges = async () => {
    if (!selectedUser) return;
    try {
      await api.post(`/users/${selectedUser.id}/assign`, { 
        bridge_ids: selectedBridges 
      });
      showToast('Bridges assigned successfully', 'success');
      setIsAssignBridgeModalOpen(false);
    } catch (error) {
        console.log(error)
      showToast('Failed to assign bridges', 'error');
    }
  };

  const handleAssignDataStreams = async () => {
    if (!selectedUser) return;
    try {
      await api.post(`/users/assigndatastream`, { 
        stream_ids: selectedDataStreams ,
        user_id:selectedUser.id
      });
      showToast('Data streams assigned successfully', 'success');
      setIsAssignDataStreamModalOpen(false);
    } catch (error) {
        console.log(error)
      showToast('Failed to assign data streams', 'error');
    }
  };

  // Utility Functions
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Render Methods
  const renderUserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">
          {selectedUser ? 'Edit User' : 'Create User'}
        </h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const userData = {
            username: formData.get('username') as string,
            email: formData.get('email') as string,
            company: formData.get('company') as string,
            address: formData.get('address') as string,
            companyUsername: formData.get('companyUsername') as string,
            companyPassword: formData.get('companyPassword') as string,
            ...(formData.get('password') ? { password: formData.get('password') as string } : {})
          };
          handleCreateOrUpdateUser(userData);
        }}>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            defaultValue={selectedUser?.username}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            defaultValue={selectedUser?.email}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          {!selectedUser && (
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="w-full mb-2 p-2 border rounded"
              required 
            />
          )}
          <input 
            type="text" 
            name="company" 
            placeholder="Company" 
            defaultValue={selectedUser?.profile__company}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
            <input 
            type="text" 
            name="companyUsername" 
            placeholder="CompanyUsername" 
            defaultValue={selectedUser?.companyUsername}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
            <input 
            type="text" 
            name="companyPassword" 
            placeholder="CompanyPassword" 
            defaultValue={selectedUser?.companyPassword}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            defaultValue={selectedUser?.profile__address}
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={() => setIsUserModalOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-teal-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  const renderAssignBridgeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Assign Bridges to {selectedUser?.username}</h2>
        <div className="max-h-64 overflow-y-auto">
          {bridges.map(bridge => (
            <div key={bridge.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`bridge-${bridge.id}`}
                checked={selectedBridges.includes(bridge.id)}
                onChange={() => {
                  setSelectedBridges(prev => 
                    prev.includes(bridge.id)
                    ? prev.filter(id => id !== bridge.id)
                    : [...prev, bridge.id]
                  );
                }}
                className="mr-2"
              />
              <label htmlFor={`bridge-${bridge.id}`}>{bridge.name}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button 
            onClick={() => setIsAssignBridgeModalOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handleAssignBridges}
            className="px-4 py-2 bg-teal-500 text-white rounded"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );

  const renderAssignDataStreamModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Assign Data Streams to {selectedUser?.username}</h2>
        <div className="max-h-64 overflow-y-auto">
          {dataStreams.map(stream => (
            <div key={stream.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`stream-${stream.id}`}
                checked={selectedDataStreams.includes(stream.id)}
                onChange={() => {
                  setSelectedDataStreams(prev => 
                    prev.includes(stream.id)
                    ? prev.filter(id => id !== stream.id)
                    : [...prev, stream.id]
                  );
                }}
                className="mr-2"
              />
              <label htmlFor={`stream-${stream.id}`}>{stream.stream_id}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button 
            onClick={() => setIsAssignDataStreamModalOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handleAssignDataStreams}
            className="px-4 py-2 bg-teal-500 text-white rounded"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );

  const renderToast = () => {
    if (!toast) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-4 right-4 z-50 p-4 rounded-lg ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
      >
        {toast.message}
      </motion.div>
    );
  };


  // Main Render
  return (
  
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button 
          onClick={handleBack}
          className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          <UserPlus className="mr-2" /> DASHBOARD
        </button>
        <button 
          onClick={() => {
            setSelectedUser(null);
            setIsUserModalOpen(true);
          }}
          className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          <UserPlus className="mr-2" /> Add User
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Company</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t">
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.profile__company}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button 
                    onClick={() => {
                      setSelectedUser(user);
                      setIsUserModalOpen(true);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedUser(user);
                      setIsAssignBridgeModalOpen(true);
                    }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <MapPin size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedUser(user);
                      setIsAssignDataStreamModalOpen(true);
                    }}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    <Database size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {isUserModalOpen && renderUserModal()}
      {isAssignBridgeModalOpen && renderAssignBridgeModal()}
      {isAssignDataStreamModalOpen && renderAssignDataStreamModal()}
      
      {/* Toast Notification */}
      {renderToast()}
    </div>
  );
// }else{

// }
};

export default UserManagementComponent;