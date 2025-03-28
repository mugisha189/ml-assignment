import { useState, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Close as CloseIcon, DateRange as DateRangeIcon } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import api from '../context/api';

interface Sensor {
  id: number;
  sensor_id: string;
  type: string;
  status: string;
  bridge: number;
  span?: number;
  location_description?: string;
  installation_date: string;
  last_calibration_date: string;
  next_calibration_date: string;
}

const TimeRangeSelector = () => {
  const [timeRange, setTimeRange] = useState({ start: '', end: '' });
  const [showSensorModal, setShowSensorModal] = useState(false);
  const [showDataModal, setShowDataModal] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const params: { start_date?: string; end_date?: string } = {};
        if (timeRange.start) params.start_date = timeRange.start;
        if (timeRange.end) params.end_date = timeRange.end;

        const response = await api.get('sensors/by-date', {
          params
        });
        setSensors(response.data);
      } catch (error) {
        console.error('Error fetching sensors:', error);
      }
    };

    fetchSensors();
  }, [timeRange]);

  const handleTimeSubmit = () => {
    setShowSensorModal(true);
  };

  const handleSensorClick = (sensor: Sensor) => {
    setSelectedSensor(sensor);
    setShowDataModal(true);
  };

  const statusData = [
    { name: 'Active', value: sensors.filter(sensor => sensor.status === 'active').length },
    { name: 'Inactive', value: sensors.filter(sensor => sensor.status === 'inactive').length },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  const calibrationData = selectedSensor ? [
    { name: 'Installation Date', date: selectedSensor.installation_date },
    { name: 'Last Calibration', date: selectedSensor.last_calibration_date },
    { name: 'Next Calibration', date: selectedSensor.next_calibration_date },
  ] : [];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2, 
        bgcolor: 'background.paper', 
        p: 1, 
        borderRadius: 1 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DateRangeIcon sx={{ color: 'text.secondary' }} />
          <TextField
            type="date"
            value={timeRange.start}
            onChange={(e) => setTimeRange(prev => ({ ...prev, start: e.target.value }))}
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
          />
        </Box>
        <Typography sx={{ color: 'text.secondary' }}>to</Typography>
        <TextField
          type="date"
          value={timeRange.end}
          onChange={(e) => setTimeRange(prev => ({ ...prev, end: e.target.value }))}
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
        />
        <Button
          variant="contained"
          onClick={handleTimeSubmit}
          size="small"
          sx={{ bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' } }}
        >
          View Sensors
        </Button>
      </Box>

      <Dialog 
        open={showSensorModal} 
        onClose={() => setShowSensorModal(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Available Sensors
          <IconButton onClick={() => setShowSensorModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {sensors.length > 0 ? (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {sensors.map((sensor) => (
                <Grid item xs={12} sm={6} key={sensor.id}>
                  <Card 
                    onClick={() => handleSensorClick(sensor)}
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">{sensor.sensor_id}</Typography>
                      <Typography color="textSecondary">Type: {sensor.type}</Typography>
                      <Typography color="textSecondary">Status: {sensor.status}</Typography>
                      <Typography color="textSecondary">Location: {sensor.location_description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              No sensors available.
            </Typography>
          )}
        </DialogContent>
      </Dialog>

      <Dialog 
        open={showDataModal} 
        onClose={() => setShowDataModal(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {selectedSensor?.sensor_id} Data
          <IconButton onClick={() => setShowDataModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Calibration Dates
            </Typography>
            <BarChart width={500} height={300} data={calibrationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="date" fill="#8884d8" />
            </BarChart>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sensor Status Distribution
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TimeRangeSelector;




