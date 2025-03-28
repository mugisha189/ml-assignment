/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Typography, Paper, AppBar, Toolbar, IconButton, Snackbar, Alert
} from '@mui/material';
import {
  Map as MapIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import api from '../context/api';
import { useAuth } from '../context/AuthContext';
import SettingsModal from './SettingComponent';

interface Bridge {
  id: number;
  name: string;
  location_on_map: string;
  location?: string;
  status: string;
  structure_type: string;
  construction_date?: string;
  structure_length?: number;
  description?: string;
}

const drawerWidth = 240;

const isValidCoordinate = (lat: number, lng: number): boolean => {
  return !isNaN(lat) && !isNaN(lng) &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180;
};

const MapController: React.FC<{ center: LatLngTuple }> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (isValidCoordinate(center[0], center[1])) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const MapInterface: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bridges, setBridges] = useState<Bridge[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [center, setCenter] = useState<LatLngTuple>([40.7128, -74.0060]); // Default center (New York)
  const [initialLoad, setInitialLoad] = useState(true);
  const [zoom, setZoom] = useState(10); // Default zoom level
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleBridgesRedirect = () => {
    navigate('/bridges');
  };

  const handleRedirectUser = () => {
    navigate('/users');
  };

  const fetchBridges = async () => {
    try {
      const response = await api.get('/bridges');
      console.log('Raw API Response:', response.data);

      const validBridges = response.data.filter((bridge: Bridge) => {
        if (!bridge.location_on_map) return false;

        const coordinates = bridge.location_on_map.split(',');
        if (coordinates.length !== 2) return false;

        const [lat, lng] = coordinates.map(coord => parseFloat(coord.trim()));
        return isValidCoordinate(lat, lng);
      });

      console.log('Valid Bridges:', validBridges);
      setBridges(validBridges);

      if (validBridges.length > 0) {
        const total = validBridges.reduce((acc: { lat: number; lng: number }, bridge: Bridge) => {
          const [lat, lng] = bridge.location_on_map.split(',').map(coord => parseFloat(coord.trim()));
          return {
            lat: acc.lat + lat,
            lng: acc.lng + lng
          };
        }, { lat: 0, lng: 0 });

        const avgLat = total.lat / validBridges.length;
        const avgLng = total.lng / validBridges.length;

        if (isValidCoordinate(avgLat, avgLng)) {
          setCenter([avgLat, avgLng]);
          setZoom(3);
        }
      } else {
        showToast('No bridges with valid locations found', 'error');
        setCenter([40.7128, -74.0060]); // Default center (New York)
        setZoom(10); // Default zoom level
      }
    } catch (error) {
      console.error('Error fetching bridges:', error);
      showToast('Failed to fetch bridges', 'error');
    } finally {
      setInitialLoad(false);
    }
  };

  useEffect(() => {
    fetchBridges();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>

        {/* Bridge Locations */}
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemIcon><MapIcon /></ListItemIcon>
            <ListItemText primary="Bridge Locations" />
          </ListItemButton>
        </ListItem>

        {/* Bridges */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleBridgesRedirect}>
            <ListItemIcon><MapIcon /></ListItemIcon>
            <ListItemText primary="Bridges" />
          </ListItemButton>
        </ListItem>

        {/* Users (only for staff) */}
        {user && user.is_staff && (
          <ListItem disablePadding>
            <ListItemButton onClick={handleRedirectUser}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        )}

        {/* Settings */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setIsSettingsOpen(true)}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  if (initialLoad) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading map...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {toast && (
        <Snackbar
          open={!!toast}
          autoHideDuration={3000}
          onClose={() => setToast(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={() => setToast(null)} severity={toast.type} sx={{ width: '100%' }}>
            {toast.message}
          </Alert>
        </Snackbar>
      )}

      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Bridge Management System
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Main open={drawerOpen}>
        <Toolbar />
        <Paper elevation={3} sx={{ height: 'calc(100vh - 88px)', p: 2 }}>
          <Box sx={{ height: '100%', width: '100%' }}>
            <MapContainer
              center={center}
              zoom={zoom}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <MapController center={center} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {bridges.map((bridge) => {
                const [lat, lng] = bridge.location_on_map.split(',').map(coord => parseFloat(coord.trim()));
                if (!isValidCoordinate(lat, lng)) return null;

                return (
                  <Marker
                    key={bridge.id}
                    position={[lat, lng]}
                    eventHandlers={{
                      click: () => navigate('/dashboard', { state: { bridge } }),
                    }}
                  >
                    <Popup>
                      <Box sx={{ p: 1 }}>
                        <Typography variant="h6">{bridge.name}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {bridge.location || 'No location description'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Status: {bridge.status}<br />
                          Type: {bridge.structure_type}<br />
                          Lat: {lat.toFixed(4)}<br />
                          Lng: {lng.toFixed(4)}
                        </Typography>
                      </Box>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </Box>
        </Paper>
      </Main>

      {/* Settings Modal */}
      {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
    </Box>
  );
};

export default MapInterface;