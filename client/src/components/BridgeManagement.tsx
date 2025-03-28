/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { UserPlus, Edit, Trash2, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../context/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BridgeFormWithMap from './BridgeFormWithMap';


interface Bridge {
  id: number;
  name: string;
  location: string;
  structure_type: string;
  status: string;
  construction_date: string;
  structure_length: number;
  latitude: string;
  longitude: string;
}

interface Span {
  id: number;
  bridge: number;
  span_id: string;
  length: number;
}

interface Sensor {
  id: number;
  bridge: number;
  span: number;
  sensor_id: string;
  type: string;
  status: string;
  installation_date: string;
  location_description?: string;
  manufacturer?: string;
  model_number?: string;
  last_calibration_date?: string;
  next_calibration_date?: string;
}

interface DataStream {
  id: number;
  sensors:number[];
  stream_id: string;
  data_type: string;
  last_update: string;
}

const BridgeManagementComponent: React.FC = () => {
  const [bridges, setBridges] = useState<Bridge[]>([]);
  const [spans, setSpans] = useState<Span[]>([]);
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const [selectedBridge, setSelectedBridge] = useState<Bridge | null>(null);
  const [selectedSpan, setSelectedSpan] = useState<Span | null>(null);
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);
  const [isBridgeModalOpen, setIsBridgeModalOpen] = useState(false);
  const [isSpanModalOpen, setIsSpanModalOpen] = useState(false);
  const [isSensorModalOpen, setIsSensorModalOpen] = useState(false);
  const [isDataStreamModalOpen, setIsDataStreamModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [dataStreams, setDataStreams] = useState<DataStream[]>([]);
  const [activeTab, setActiveTab] = useState<'bridges' | 'spans' | 'sensors' | 'datastreams'>('bridges');
  const [assignmentType, setAssignmentType] = useState<'create' | 'assign'>('create');
const [existingDatastreams, setExistingDatastreams] = useState<DataStream[]>([]);

  const { user } = useAuth();
  const navigate = useNavigate();



  const handleBack = () => {
    navigate('/map');
  };

  useEffect(() => {
    fetchBridges();
    fetchSpans();
    fetchSensors();
    fetchDataStreams();
  }, []);

  const fetchBridges = async () => {
    try {
      const response = await api.get('/bridges');
      setBridges(response.data);
    } catch (error) {
      console.log(error);
      showToast('Failed to fetch bridges', 'error');
    }
  };

  const fetchSpans = async () => {
    try {
      const response = await api.get('/spans');
      setSpans(response.data);
    } catch (error) {
      console.log(error);
      showToast('Failed to fetch spans', 'error');
    }
  };

  const fetchSensors = async () => {
    try {
      const response = await api.get('/sensors');
      setSensors(response.data);
    } catch (error) {
      console.log(error);
      showToast('Failed to fetch sensors', 'error');
    }
  };
  const fetchDataStreams = async () => {
    try {
      const response = await api.get('/datastreams');
      setDataStreams(response.data);   
        setExistingDatastreams(response.data);

    } catch (error) {
      console.log(error);
      showToast('Failed to fetch datastreams', 'error');
    }
  };


  const handleCreateOrUpdateBridge = async (bridgeData: {
    id?: number;
    name?: string;
    location?: string;
    construction_date?: string;
    length_per_span?: number | null;
    location_on_map?: string;
    latitude?: number | string;
    longitude?: number | string;
  }) => {
    try {
      bridgeData.location_on_map = `${bridgeData.latitude},${bridgeData.longitude}`
      if (selectedBridge) {
        await api.put(`/bridges/${selectedBridge.id}/update`, bridgeData);
      } else {
        await api.post('/bridges/create', bridgeData);
      }
  
      fetchBridges();
      setIsBridgeModalOpen(false);
      showToast(selectedBridge ? 'Bridge updated successfully' : 'Bridge created successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to save bridge', 'error');
    }
  };

  const handleCreateSpan = async (spanData: {
    bridge: number;
    span_id: string;
    length: number;
  }) => {
    try {
      await api.post('/spans/create', spanData);
      fetchSpans();
      setIsSpanModalOpen(false);
      showToast('Span created successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to create span', 'error');
    }
  };

  const handleCreateSensor = async (sensorData: {
    bridge: number;
    span: number;
    sensor_id: string;
    type: string;
    status: string;
    installation_date: string;
    location_description?: string;
    manufacturer?: string;
    model_number?: string;
    last_calibration_date?: string;
    next_calibration_date?: string;
  }) => {
    
    try {
        const formattedData = {
            ...sensorData,
            installation_date: sensorData.installation_date 
              ? new Date(sensorData.installation_date).toISOString().split('T')[0] 
              : undefined,
            last_calibration_date: sensorData.last_calibration_date 
              ? new Date(sensorData.last_calibration_date).toISOString().split('T')[0] 
              : undefined,
            next_calibration_date: sensorData.next_calibration_date 
              ? new Date(sensorData.next_calibration_date).toISOString().split('T')[0] 
              : undefined,
          };
      await api.post('/sensors/create', formattedData);
      fetchSensors();
      setIsSensorModalOpen(false);
      showToast('Sensor created successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to create sensor', 'error');
    }
  };

  const handleDeleteBridge = async (bridgeId: number) => {
    try {
      await api.delete(`/bridges/${bridgeId}/delete`);
      fetchBridges();
      showToast('Bridge deleted successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to delete bridge', 'error');
    }
  };

  const handleDeleteSpan = async (spanId: number) => {
    try {
      await api.delete(`/spans/${spanId}/delete`);
      fetchSpans();
      showToast('Span deleted successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to delete span', 'error');
    }
  };

  const handleDeleteSensor = async (sensorId: number) => {
    try {
      await api.delete(`/sensors/${sensorId}/delete`);
      fetchSensors();
      showToast('Sensor deleted successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to delete sensor', 'error');
    }
  };

  const handleCreateDataStream = async (data: {
    sensor: number;
    stream_id: string;
    data_type: string;
}) => {
    try {
        // Modify the data to include sensors array
        const modifiedData = {
            stream_id: data.stream_id,
            data_type: data.data_type,
            sensors: [data.sensor] 
        };
        console.log("modified data :",modifiedData)

        const response = await api.post('datastreams/create', modifiedData);
        console.log(response.data)
        fetchDataStreams();
        setIsDataStreamModalOpen(false);
        showToast('Datastream created successfully', 'success');
    } catch (err) {
        const error = err as { 
            response?: { 
                data?: { 
                    detail?: string 
                } 
            } 
        };
    
        const errorMessage = error.response?.data?.detail || 'Failed to create datastream';
        console.log('Error details:', error.response?.data);
        showToast(errorMessage, 'error');
    }
};

  const handleDeleteDataStream = async (dataStreamId: number) => {
    try {
      await api.delete(`/datastreams/${dataStreamId}/delete`);
      fetchDataStreams();
      showToast('Datastream deleted successfully', 'success');
    } catch (error) {
      console.log(error);
      showToast('Failed to delete datastream', 'error');
    }
  };

  const handleAssignSensor = async (sensorId: number, datastreamId: number) => {
    try {
      await api.put('sensors/assign', { sensor_id: sensorId, datastream_id: datastreamId });
      fetchDataStreams();
      setIsDataStreamModalOpen(false);
      showToast('Sensor assigned successfully', 'success');
    } catch (err) {
      const error = err as { response?: { data?: { detail?: string } } };
      const errorMessage = error.response?.data?.detail || 'Failed to assign sensor';
      showToast(errorMessage, 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const renderBridgeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <BridgeFormWithMap
        selectedBridge={selectedBridge}
        onSubmit={handleCreateOrUpdateBridge}
        onCancel={() => setIsBridgeModalOpen(false)}
      />
    </div>
  );

  const renderSpanModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Create Span</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const spanData = {
            bridge: selectedBridge!.id,
            span_id: formData.get('span_id') as string,
            length: parseFloat(formData.get('length') as string)
          };
          handleCreateSpan(spanData);
        }}>
          <input 
            type="text" 
            name="span_id" 
            placeholder="Span ID (e.g. west_span)" 
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <input 
            type="number" 
            name="length" 
            placeholder="Span Length (meters)" 
            className="w-full mb-2 p-2 border rounded"
            required 
            step="0.1"
          />
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={() => setIsSpanModalOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-teal-500 text-white rounded"
            >
              Create Span
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderSensorModal = () => (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Create Sensor</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const sensorData = {
            bridge: selectedSpan!.bridge,
            span: selectedSpan!.id,
            sensor_id: formData.get('sensor_id') as string,
            type: formData.get('type') as string,
            status: formData.get('status') as string,
            installation_date: formData.get('installation_date') as string,
            manufacturer: formData.get('manufacturer') as string,
            model_number: formData.get('model_number') as string,
            last_calibration_date: formData.get('last_calibration_date') as string,
            next_calibration_date: formData.get('next_calibration_date') as string,
          };
          handleCreateSensor(sensorData);
        }}>
          <input 
            type="text" 
            name="sensor_id" 
            placeholder="Sensor ID" 
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <select 
            name="type" 
            className="w-full mb-2 p-2 border rounded"
            required
          >
            <option value="">Select Sensor Type</option>
            <option value="accelerometer">Accelerometer</option>
            <option value="strain_gauge">Strain Gauge</option>
            <option value="temperature">Temperature Sensor</option>
            <option value="displacement">Displacement Sensor</option>
            <option value="tilt">Tilt Sensor</option>
            <option value="load_cell">Load Cell</option>
          </select>
          <select 
            name="status" 
            className="w-full mb-2 p-2 border rounded"
            required
          >
            <option value="">Select Sensor Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="maintenance">Under Maintenance</option>
            <option value="faulty">Faulty</option>
          </select>
          <label>Installation date</label>
          <input 
            type="date" 
            name="installation_date" 
            placeholder="Installation Date" 
            className="w-full mb-2 p-2 border rounded"
            required 
          />
          <input 
            type="text" 
            name="manufacturer" 
            placeholder="Manufacturer" 
            className="w-full mb-2 p-2 border rounded"
          />

        <input 
            type="text" 
            name="model_number" 
            placeholder="Model Number" 
            className="w-full mb-2 p-2 border rounded"
          />
          <div className="grid grid-cols-2 gap-2">
            <label>Last calibration date </label>
            <input 
              type="date" 
              name="last_calibration_date" 
              placeholder="Last Calibration Date" 
              className="w-full mb-2 p-2 border rounded"
            />
            <label>Next calibration date </label>
            <input 
              type="date" 
              name="next_calibration_date" 
              placeholder="Next Calibration Date" 
              className="w-full mb-2 p-2 border rounded"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={() => setIsSensorModalOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-teal-500 text-white rounded"
            >
              Create Sensor
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderDataStreamModal = (sensor: Sensor) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Manage Datastream</h2>
        
        {/* Option Selection */}
        <div className="mb-4">
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setAssignmentType('create')}
              className={`px-4 py-2 rounded ${
                assignmentType === 'create' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200'
              }`}
            >
              Create New
            </button>
            <button
              type="button"
              onClick={() => setAssignmentType('assign')}
              className={`px-4 py-2 rounded ${
                assignmentType === 'assign' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200'
              }`}
            >
              Assign Existing
            </button>
          </div>
        </div>
  
        {assignmentType === 'create' ? (
          // Create New Datastream Form
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
              sensor: sensor.id,
              stream_id: formData.get('stream_id') as string,
              data_type: formData.get('data_type') as string,
            };
            handleCreateDataStream(data);
          }}>
            <input 
              type="text" 
              name="stream_id" 
              placeholder="Stream ID" 
              className="w-full mb-2 p-2 border rounded"
              required 
            />
            <select 
              name="data_type" 
              className="w-full mb-2 p-2 border rounded"
              required
            >
              <option value="">Select Data Type</option>
              <option value="acceleration">Acceleration</option>
              <option value="strain">Strain</option>
              <option value="temperature">Temperature</option>
              <option value="displacement">Displacement</option>
              <option value="tilt">Tilt</option>
              <option value="load">Load</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button 
                type="button" 
                onClick={() => setIsDataStreamModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-teal-500 text-white rounded"
              >
                Create Datastream
              </button>
            </div>
          </form>
        ) : (
          // Assign to Existing Datastream Form
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const datastreamId = Number(formData.get('datastream_id'));
            handleAssignSensor(sensor.id, datastreamId);
          }}>
            <select 
              name="datastream_id" 
              className="w-full mb-2 p-2 border rounded"
              required
            >
              <option value="">Select Datastream</option>
              {existingDatastreams.map((datastream) => (
                <option key={datastream.id} value={datastream.id}>
                  {datastream.stream_id} ({datastream.data_type})
                </option>
              ))}
            </select>
            <div className="flex justify-end space-x-2">
              <button 
                type="button" 
                onClick={() => setIsDataStreamModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-teal-500 text-white rounded"
              >
                Assign Sensor
              </button>
            </div>
          </form>
        )}
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bridges':
        return (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Location</th>
                  <th className="px-6 py-3 text-left">Structure Type</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  {user?.is_staff && (
              <th className="px-6 py-3 text-left">Actions</th>
)}
                </tr>
              </thead>
              <tbody>
                {bridges.map(bridge => (
                  <tr key={bridge.id} className="border-t">
                    <td className="px-6 py-4">{bridge.name}</td>
                    <td className="px-6 py-4">{bridge.location}</td>
                    <td className="px-6 py-4">{bridge.structure_type}</td>
                    <td className="px-6 py-4">{bridge.status}</td>
                    {user?.is_staff && (
                    <td className="px-6 py-4 flex space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedBridge(bridge);
                          setIsBridgeModalOpen(true);
                        }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDeleteBridge(bridge.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedBridge(bridge);
                          setActiveTab('spans');
                        }}
                        className="text-green-500 hover:text-green-700"
                      >
                        <Plus size={18} />
                      </button>
                    </td>
    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'spans':
        return (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">Bridge</th>
                  <th className="px-6 py-3 text-left">Span ID</th>
                  <th className="px-6 py-3 text-left">Length (m)</th>
                  {user?.is_staff && (
                  <th className="px-6 py-3 text-left">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {spans
                  .filter(span => !selectedBridge || span.bridge === selectedBridge.id)
                  .map(span => (
                  <tr key={span.id} className="border-t">
                    <td className="px-6 py-4">
                      {bridges.find(b => b.id === span.bridge)?.name || 'Unknown'}
                    </td>
                    <td className="px-6 py-4">{span.span_id}</td>
                    <td className="px-6 py-4">{span.length}</td>
                    {user?.is_staff && (
                    <td className="px-6 py-4 flex space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedSpan(span);
                          setIsSensorModalOpen(true);
                        }}
                        className="text-green-500 hover:text-green-700"
                      >
                        <Plus size={18} />
                      </button>
                      <button 
                        onClick={() => handleDeleteSpan(span.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'sensors':
        return (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">Bridge</th>
                  <th className="px-6 py-3 text-left">Span</th>
                  <th className="px-6 py-3 text-left">Sensor ID</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  {user?.is_staff && (
                  <th className="px-6 py-3 text-left">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {sensors
                  .filter(sensor => 
                    (!selectedBridge || sensor.bridge === selectedBridge.id) &&
                    (!selectedSpan || sensor.span === selectedSpan.id)
                  )
                  .map(sensor => (
                  <tr key={sensor.id} className="border-t">
                    <td className="px-6 py-4">
                      {bridges.find(b => b.id === sensor.bridge)?.name || 'Unknown'}
                    </td>
                    <td className="px-6 py-4">
                      {spans.find(s => s.id === sensor.span)?.span_id || 'Unknown'}
                    </td>
                    <td className="px-6 py-4">{sensor.sensor_id}</td>
                    <td className="px-6 py-4">{sensor.type}</td>
                    <td className="px-6 py-4">{sensor.status}</td>
                    {user?.is_staff && (
                    <td className="px-6 py-4">
                                                          <button 
                        onClick={() => {
                          setSelectedSensor(sensor)
                          setIsDataStreamModalOpen(true);
                        }}
                        className="text-green-500 hover:text-green-700"
                      >
                        <Plus size={18} />
                      </button>
                      <button 
                        onClick={() => handleDeleteSensor(sensor.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

        case 'datastreams':
          return (
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Stream ID</th>
                    <th className="px-6 py-3 text-left">Data Type</th>
                    <th className="px-6 py-3 text-left">Sensors</th>
                    <th className="px-6 py-3 text-left">Bridge</th>
                    <th className="px-6 py-3 text-left">Span</th>
                    {user?.is_staff && (
                      <th className="px-6 py-3 text-left">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {dataStreams.map(dataStream => {
                    // Get all sensors for this datastream
                    const streamSensors = sensors.filter(s => dataStream.sensors.includes(s.id));
                    
                    // Get unique bridges and spans for the sensors
                    const bridgesForSensors = streamSensors.map(s => bridges.find(b => b.id === s.bridge)).filter(Boolean);
                    const spansForSensors = streamSensors.map(s => spans.find(sp => sp.id === s.span)).filter(Boolean);
        
                    return (
                      <tr key={dataStream.id} className="border-t">
                        <td className="px-6 py-4">{dataStream.stream_id}</td>
                        <td className="px-6 py-4">{dataStream.data_type}</td>
                        <td className="px-6 py-4">
                          {streamSensors.length > 0 ? (
                            streamSensors.map(sensor => sensor.sensor_id).join(', ')
                          ) : (
                            'Unknown'
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {bridgesForSensors.length > 0 ? (
                            bridgesForSensors.map(bridge => bridge?.name).join(', ')
                          ) : (
                            'Unknown'
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {spansForSensors.length > 0 ? (
                            spansForSensors.map(span => span?.span_id).join(', ')
                          ) : (
                            'Unknown'
                          )}
                        </td>
                        {user?.is_staff && (
                          <td className="px-6 py-4 flex space-x-2">
                            <button 
                              onClick={() => handleDeleteDataStream(dataStream.id)}
                              className="text-red-500 hover:text-red-700"
                              title="Delete Datastream"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bridge Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={handleBack}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            DASHBOARD
          </button>
          {activeTab === 'bridges' && user?.is_staff && (
            <button 
              onClick={() => {
                setSelectedBridge(null);
                setIsBridgeModalOpen(true);
              }}
              className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
              <UserPlus className="mr-2" /> Add Bridge
            </button>
          )}
          {activeTab === 'spans' && user?.is_staff && selectedBridge && (
            <button 
              onClick={() => {
                setIsSpanModalOpen(true);
              }}
              className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
              <Plus className="mr-2" /> Add Span
            </button>
          )}
                {activeTab === 'sensors' && user?.is_staff && selectedSensor && (
            <button 
              onClick={() => {
                setIsDataStreamModalOpen(true);
              }}
              className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
              <Plus className="mr-2" /> Add DataStream
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 border-b border-gray-200">
        <nav className="-mb-px flex">
          {['bridges', 'spans', 'sensors', 'datastreams'].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as 'bridges' | 'spans' | 'sensors' | 'datastreams');
                setSelectedBridge(null);
                setSelectedSpan(null);
              }}
              className={`px-4 py-2 border-b-2 ${
                activeTab === tab 
                  ? 'border-teal-500 text-teal-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {renderTabContent()}

      {/* Modals */}
      {isBridgeModalOpen && renderBridgeModal()}
      {isSpanModalOpen && renderSpanModal()}
      {isSensorModalOpen && renderSensorModal()}
      {isDataStreamModalOpen && selectedSensor && renderDataStreamModal(selectedSensor)}
      
      {/* Toast Notification */}
      {renderToast()}
    </div>
  );
};

export default BridgeManagementComponent;