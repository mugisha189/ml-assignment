import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import api from '../context/api';
// Fix for default marker icon in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Bridge {
  id?: number;
  name?: string;
  location?: string;
  construction_date?: string;
  length_per_span?: number | null;
  location_on_map?: string;
  latitude?: number | string;
  longitude?: number | string;
}

interface LocationPickerProps {
  position: [number, number] | null;
  onLocationSelect: (position: [number, number]) => void;
}

interface BridgeFormProps {
  selectedBridge?: Bridge | null;
  onSubmit: (bridgeData: Bridge) => Promise<void> | void;
  onCancel: () => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ position, onLocationSelect }) => {
  useMapEvents({
    click: (e) => {
      onLocationSelect([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position ? <Marker position={position} /> : null;
};

const BridgeFormWithMap: React.FC<BridgeFormProps> = ({ selectedBridge, onSubmit, onCancel }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [formData, setFormData] = useState<Bridge>({
    name: '',
    location: '',
    construction_date: '',
    length_per_span: null,
    location_on_map: '',
    latitude: '',
    longitude: '',
  });
  const [bridgeNames, setBridgeNames] = useState<string[]>([]); // State to store bridge names

  // Fetch bridge names from the API
  useEffect(() => {
    const fetchBridgeNames = async () => {
      try {
        const response = await api.get('/bridges/from_rensys', {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Check if the response status is 'success' and data exists
        if (response.data && response.data.status === 'success') {
          setBridgeNames(response.data.data); 
        } else {
          console.error('Unexpected API response:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch bridge names:', error);
      }
    };
  
    fetchBridgeNames();
  }, []);

  useEffect(() => {
    if (selectedBridge) {
      let latitude = '';
      let longitude = '';
      
      if (selectedBridge.location_on_map) {
        const [lat, lng] = selectedBridge.location_on_map.split(',').map(parseFloat);
        latitude = lat.toString();
        longitude = lng.toString();
        setPosition([lat, lng]);
      }

      setFormData({
        ...selectedBridge,
        latitude,
        longitude,
      });
    }
  }, [selectedBridge]);

  const handleLocationSelect = (newPosition: [number, number]) => {
    setPosition(newPosition);
    setFormData(prev => ({
      ...prev,
      latitude: newPosition[0],
      longitude: newPosition[1],
      location_on_map: `${newPosition[0]},${newPosition[1]}`
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalData: Bridge = {
      ...formData,
      location_on_map: `${formData.latitude},${formData.longitude}`,
      length_per_span: formData.length_per_span ? parseFloat(formData.length_per_span as unknown as string) : null
    };
    onSubmit(finalData);
  };

  const handleInputChange = (field: keyof Bridge) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-lg p-6 w-[800px] max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl mb-4">
        {selectedBridge ? 'Edit Bridge' : 'Create Bridge'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            {/* Bridge Name Dropdown */}
            <select
              value={formData.name ?? ''}
              onChange={handleInputChange('name')}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>Select a bridge</option>
              {bridgeNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            
            <input 
              type="text" 
              placeholder="Location Description" 
              value={formData.location ?? ''}
              onChange={handleInputChange('location')}
              className="w-full p-2 border rounded"
              required 
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Construction date</label>
              <input 
                type="date" 
                value={formData.construction_date ?? ''}
                onChange={handleInputChange('construction_date')}
                className="w-full p-2 border rounded"
                required 
              />
            </div>
            
            <input 
              type="number" 
              placeholder="Length per Span (meters)" 
              value={formData.length_per_span ?? ''}
              onChange={handleInputChange('length_per_span')}
              className="w-full p-2 border rounded"
              step="0.1"
            />

            <div className="grid grid-cols-2 gap-2">
              <input 
                type="number" 
                placeholder="Latitude" 
                value={formData.latitude ?? ''}
                onChange={(e) => {
                  const lat = parseFloat(e.target.value);
                  handleInputChange('latitude')(e);
                  if (position) {
                    setPosition([lat, position[1]]);
                  } else {
                    setPosition([lat, 0]);
                  }
                }}
                className="w-full p-2 border rounded"
                step="any"
                required 
              />
              <input 
                type="number" 
                placeholder="Longitude" 
                value={formData.longitude ?? ''}
                onChange={(e) => {
                  const lng = parseFloat(e.target.value);
                  handleInputChange('longitude')(e);
                  if (position) {
                    setPosition([position[0], lng]);
                  } else {
                    setPosition([0, lng]);
                  }
                }}
                className="w-full p-2 border rounded"
                step="any"
                required 
              />
            </div>
          </div>
          
          <div className="h-[400px] relative">
            <div className="absolute inset-0 border rounded overflow-hidden">
              <MapContainer 
                center={position || [40.7128, -74.0060]} 
                zoom={3} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationPicker position={position} onLocationSelect={handleLocationSelect} />
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button 
            type="button" 
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BridgeFormWithMap;