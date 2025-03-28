/* eslint-disable react-hooks/rules-of-hooks */
import {
  ArrowBack,
  Build,
  NavigateNext,
  Warning as WarningIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AlertCircle, BarChart3, Bell, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../context/api";
import TimeRangeSelector from "./DataVisualizationComponent";
// import MetricCircle from "./MetricComponent";

// Custom styled components
const DashboardCard = styled(Box)(() => ({
  background: "#1a2f38",
  borderRadius: "12px",
  padding: "20px",
  color: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "100%",
}));

// const MetricCircle1 = ({
//   value,
//   label,
//   color,
//   progress,
// }: {
//   value: any;
//   label: any;
//   color: any;
//   progress: any;
// }) => {
//   const radius = 35;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="bg-white p-4 rounded w-36 flex flex-col items-center">
//       <div className="relative w-20 h-20 mb-2">
//         <svg width="80" height="80" className="transform -rotate-90">
//           <circle
//             cx="40"
//             cy="40"
//             r={radius}
//             stroke="#f5f5f5"
//             strokeWidth="6"
//             fill="none"
//           />
//           <circle
//             cx="40"
//             cy="40"
//             r={radius}
//             stroke={color}
//             strokeWidth="6"
//             fill="none"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             strokeLinecap="round"
//           />
//         </svg>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <span className="text-2xl font-medium text-gray-800">{value}</span>
//         </div>
//       </div>
//       <span className="text-sm text-gray-600">{label}</span>
//     </div>
//   );
// };

interface HealthData {
  anomaly_count: number;
  anomaly_indices: number[];
  reconstruction_errors: number[];
  threshold: number;
}

interface BridgeData {
  condition: "Good" | "Fair" | "Poor" | "Critical";
  nextMaintenance: string;
  threat: "Low" | "Medium" | "High" | "Critical";
}

interface Alert {
  type: string;
  message: string;
  severity: BridgeData["threat"]; // Using your existing threat type
  timestamp?: string;
}

const Loader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

const getDaysUntilDate = (dateString: string) => {
  const today = new Date();
  const targetDate = new Date(dateString);
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// First define the types if not already defined
type BridgeCondition = "Good" | "Fair" | "Poor" | "Critical";
type ThreatLevel = "Low" | "Medium" | "High" | "Critical";

// Modify the function to accept either type
const getStatusColor = (status: BridgeCondition | ThreatLevel) => {
  const colors = {
    // Bridge Conditions
    Good: {
      bg: "bg-green-100",
      text: "text-green-600",
      dot: "bg-green-500",
    },
    Fair: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      dot: "bg-yellow-500",
    },
    Poor: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      dot: "bg-orange-500",
    },
    Critical: {
      bg: "bg-red-100",
      text: "text-red-600",
      dot: "bg-red-500",
    },
    // Threat Levels
    Low: {
      bg: "bg-green-100",
      text: "text-green-600",
      dot: "bg-green-500",
    },
    Medium: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      dot: "bg-yellow-500",
    },
    High: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      dot: "bg-orange-500",
    },
  };
  return colors[status];
};

// Generate alerts based on bridge and health data
const generateAlerts = (
  bridgeData: BridgeData,
  healthData: HealthData
): Alert[] => {
  const alerts: Alert[] = [];

  // Add structural alert if condition is poor or critical
  if (bridgeData.condition === "Poor" || bridgeData.condition === "Critical") {
    alerts.push({
      type: "Structural Warning",
      message: `Bridge condition rated as ${bridgeData.condition}`,
      severity: bridgeData.threat,
      timestamp: new Date().toLocaleString(),
    });
  }

  // Add maintenance alert if maintenance is due soon
  const daysUntilMaintenance = getDaysUntilDate(bridgeData.nextMaintenance);
  if (daysUntilMaintenance <= 30) {
    alerts.push({
      type: "Maintenance Required",
      message: `Scheduled maintenance due in ${daysUntilMaintenance} days`,
      severity: daysUntilMaintenance <= 7 ? "High" : "Medium",
      timestamp: new Date().toLocaleString(),
    });
  }

  // Add anomaly alerts
  if (healthData.anomaly_count > 0) {
    alerts.push({
      type: "Anomaly Detection",
      message: `${healthData.anomaly_count} anomalies detected in sensor data`,
      severity: healthData.anomaly_count > 3 ? "Critical" : "High",
      timestamp: new Date().toLocaleString(),
    });
  }

  return alerts;
};

const ActiveAlertsCard = ({
  bridgeData,
  healthData,
}: {
  bridgeData: BridgeData;
  healthData: HealthData;
}) => {
  const alerts = generateAlerts(bridgeData, healthData);

  const getAlertIcon = (severity: Alert["severity"]) => {
    switch (severity) {
      case "Critical":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case "High":
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case "Medium":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "Low":
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-60 overflow-auto">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Bell className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Active Alerts
            </h2>
            {alerts.length > 0 && (
              <span className="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                {alerts.length}
              </span>
            )}
          </div>

          <div className="mt-4 space-y-3">
            {alerts.length > 0 ? (
              alerts.map((alert, index) => {
                const statusColors = getStatusColor(alert.severity);
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50"
                  >
                    {getAlertIcon(alert.severity)}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${statusColors.text}`}>
                        {alert.type}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {alert.message}
                      </p>
                      {alert.timestamp && (
                        <p className="text-xs text-gray-400 mt-1">
                          {alert.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">
                No active alerts
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BridgeHealthDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [healthData, setHealthData] = useState<HealthData>({
    anomaly_count: 0,
    anomaly_indices: [],
    reconstruction_errors: [],
    threshold: 0,
  });
  console.log(setHealthData)
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  // const [imageSrc2, setImageSrc2] = useState<string | null>(null);

  const location = useLocation();
  const selectedBridge = location.state?.bridge;

  let lat = 0;
  let lng = 0;

  console.log("The selected bridge :", selectedBridge);
  console.log("The selected lat ", lat);
  console.log("The selected long ", lng);

  // Calculate bridge data based on health metrics
  const calculateBridgeData = (healthData: HealthData): BridgeData => {
    const maxError = Math.max(...healthData.reconstruction_errors);
    console.log(maxError);
    const avgError =
      healthData.reconstruction_errors.reduce((a, b) => a + b, 0) /
      healthData.reconstruction_errors.length;

    // Determine condition based on anomaly count and error severity
    let condition: BridgeData["condition"];
    let threat: BridgeData["threat"];
    let maintenanceDays: number;

    if (
      healthData.anomaly_count === 0 &&
      avgError < healthData.threshold * 0.5
    ) {
      condition = "Good";
      threat = "Low";
      maintenanceDays = 180; // 6 months
    } else if (
      healthData.anomaly_count <= 2 &&
      avgError < healthData.threshold * 0.8
    ) {
      condition = "Fair";
      threat = "Medium";
      maintenanceDays = 90; // 3 months
    } else if (
      healthData.anomaly_count <= 5 &&
      avgError < healthData.threshold * 1.2
    ) {
      condition = "Poor";
      threat = "High";
      maintenanceDays = 30; // 1 month
    } else {
      condition = "Critical";
      threat = "Critical";
      maintenanceDays = 7; // 1 week
    }

    // Calculate next maintenance date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + maintenanceDays);
    const nextMaintenance = nextDate.toISOString().split("T")[0];

    return {
      condition,
      nextMaintenance,
      threat,
    };
  };

  const bridgeData = calculateBridgeData(healthData);

  // Get color based on condition
  const getConditionColor = (condition: BridgeData["condition"]) => {
    const colors = {
      Good: "#4caf50",
      Fair: "#ff9800",
      Poor: "#f44336",
      Critical: "#d32f2f",
    };
    return colors[condition];
  };

  // Get color based on threat
  const getThreatColor = (threat: BridgeData["threat"]) => {
    const colors = {
      Low: "#4caf50",
      Medium: "#ff9800",
      High: "#f44336",
      Critical: "#d32f2f",
    };
    return colors[threat];
  };

  const navigate = useNavigate();

  // this is to handle back
  const handleBack = () => {
    navigate("/map");
  };


  useEffect(() => {
    if (!selectedBridge) {
      console.log("No bridge selected, redirecting to /map");
      navigate("/map");
    }
  }, [selectedBridge, navigate]);

  if (!selectedBridge) {
    return null;
  } else {
    [lat, lng] = selectedBridge.location_on_map
    .split(",")
    .map((coord: string) => parseFloat(coord.trim()));
  }



  const fetchHealthData = async () => {
    try {
      setLoading(true);
      setError(null);
      // const response2 = await api.post("/ai/predict/prediction", {
      //   sid:selectedBridge.name
      // },{
      //   responseType: "blob",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const response = await api.post("/ai/predict/prediction", {
        sid:selectedBridge.name
      },{
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (response.data && response.data.predictions) {
      //   setHealthData(response.data.predictions);
      // } else {
      //   throw new Error('Invalid response format from server');
      // }
      const imageUrl = URL.createObjectURL(response.data);
      // const imageUrl2 = URL.createObjectURL(response2.data);
      setImageSrc(imageUrl);
      // setImageSrc2(imageUrl2);

    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();
    const interval = setInterval(fetchHealthData, 300000);
    return () => clearInterval(interval);
  }, []);

  // Convert reconstruction errors to bar chart data
  // const conditionData = healthData.reconstruction_errors.map(
  //   (error, index) => ({
  //     index,
  //     value: error,
  //     isAnomaly: healthData.anomaly_indices.includes(index),
  //   })
  // );

  // Calculate health index based on anomaly count
  const getHealthIndex = () => {
    if (healthData.anomaly_count === 0) return { value: 90, color: "#4caf50" };
    if (healthData.anomaly_count < 3) return { value: 75, color: "#ff9800" };
    return { value: 60, color: "#f44336" };
  };

  const healthIndex = getHealthIndex();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!imageSrc) {
    return <Loader />;
  }
  

  return (
    <Box sx={{ bgcolor: "#0a1924", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <IconButton
              onClick={handleBack}
              sx={{
                color: "white",
                mr: 2,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <ArrowBack />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                {selectedBridge.name} Health condition
              </Typography>

              <Box>
                <TimeRangeSelector />
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          {/* Main metrics cards */}
          {/* <Grid item xs={12} md={3}> */}
            {/* <DashboardCard> */}
              {/* <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6" sx={{ color: "#4caf50" }}>
                  Bridge Condition
                </Typography>
                <MetricCircle color={healthIndex.color}>
                  {healthIndex.value}
                </MetricCircle>
              </Box> */}
              {/* <ResponsiveContainer width="100%" height={200}> */}
                {/* <BarChart data={conditionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
                  <XAxis dataKey="index" stroke="#ffffff77" />
                  <YAxis stroke="#ffffff77" />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill={healthData.anomaly_count ? "#f44336" : "#4caf50"}
                  />
                </BarChart> */}
              {/* </ResponsiveContainer>
            </DashboardCard> */}
          {/* </Grid> */}

          <Grid item xs={12} md={12}>
            <DashboardCard>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6" sx={{ color: "#ff9800" }}>
                  Health condition
                </Typography>
                {/* <MetricCircle color="#ff9800">
                  {healthData.anomaly_count}
                </MetricCircle> */}
              </Box>
                {imageSrc ? <img src={imageSrc} /> : null}
              {/* <ResponsiveContainer width="100%" height={200}>

                <LineChart data={conditionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
                  <XAxis dataKey="index" stroke="#ffffff77" />
                  <YAxis stroke="#ffffff77" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ff9800"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey={() => healthData.threshold}
                    stroke="#f44336"
                    strokeDasharray="5 5"
                    name="Threshold"
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </DashboardCard>
          </Grid>
          {/* <Grid item xs={12} md={6}> */}
            {/* <DashboardCard> */}
              {/* <Box display="flex" justifyContent="space-between" mb={2}> */}
                {/* <Typography variant="h6" sx={{ color: "#ff9800" }}>
                  More detailed Health condition
                </Typography> */}
                {/* <MetricCircle color="#ff9800">
                  {healthData.anomaly_count}
                </MetricCircle> */}
              {/* </Box> */}
                {/* {imageSrc2 ? <img src={imageSrc2} /> : null} */}
              {/* <ResponsiveContainer width="100%" height={200}>

                <LineChart data={conditionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
                  <XAxis dataKey="index" stroke="#ffffff77" />
                  <YAxis stroke="#ffffff77" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ff9800"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey={() => healthData.threshold}
                    stroke="#f44336"
                    strokeDasharray="5 5"
                    name="Threshold"
                  />
                </LineChart>
              </ResponsiveContainer> */}
            {/* </DashboardCard> */}
          {/* </Grid> */}
         
          {/* <Grid item xs={12} md={4}> */}
            {/* <div className="bg-gray-50  p-3 rounded-xl h-96"> */}
              {/* Header */}
              {/* <div className="bg-white p-4 rounded mb-6 shadow-sm">
                <div className="max-w-6xl mx-auto flex items-center gap-4">
                  <img
                    src="public/bridge.jpg"
                    alt="AI-Bridge logo"
                    className="h-10"
                  />
                  <h1 className="text-xl font-bold text-gray-950">AI-Drived</h1>
                  <span className="text-gray-600 flex-grow">
                    Bridge Health Monitoring System
                  </span>
                </div>
              </div> */}

              {/* Metrics */}
              {/* <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-2">
                  <MetricCircle1
                    value={healthIndex.value}
                    label="Index"
                    color="#4caf50"
                    progress={85}
                  />
                  <MetricCircle1
                    value={healthData.anomaly_count}
                    label="Active Alerts"
                    color="#ffc107"
                    progress={65}
                  />
                  <MetricCircle1
                    value={healthData.anomaly_indices.length}
                    label="Next Alerts"
                    color="#f44336"
                    progress={45}
                  />
                </div> */}
              {/* </div>
            </div> */}
          {/* </Grid> */}

          <Grid
            container
            spacing={4}
            className="flex-nowrap overflow-x-auto p-12"
          >
            {/* Bridge Condition Index Card */}
            <Grid item xs={12} md={3} className="flex-none">
              <div className="bg-white rounded-xl shadow-lg p-6 h-60">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 ${
                      getStatusColor(bridgeData.condition).bg
                    } rounded-lg`}
                  >
                    <BarChart3
                      className={`w-6 h-6 ${
                        getStatusColor(bridgeData.condition).text
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-800">
                        Bridge Condition Index
                      </h2>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          getStatusColor(bridgeData.condition).dot
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`mt-4 text-lg font-bold ${
                        getStatusColor(bridgeData.condition).text
                      }`}
                    >
                      {bridgeData.condition}
                      {healthData.anomaly_count > 0 && (
                        <span className="ml-2 text-sm font-normal">
                          ({healthData.anomaly_count} anomalies detected)
                        </span>
                      )}
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString()}{" "}
                        {new Date().toLocaleTimeString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Next inspection in{" "}
                        {getDaysUntilDate(bridgeData.nextMaintenance)} days
                      </p>
                      {healthData.anomaly_count > 0 && (
                        <p
                          className={`text-sm ${
                            getStatusColor(bridgeData.threat).text
                          } font-medium`}
                        >
                          Threat Level: {bridgeData.threat}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            {/* Active Alerts Card */}
            <Grid item xs={12} md={3} className="flex-none">
              <ActiveAlertsCard
                bridgeData={bridgeData}
                healthData={healthData}
              />
            </Grid>

            {/* Condition Score Card */}
            <Grid item xs={12} md={3} className="flex-none">
              <div className="bg-slate-800 rounded-xl shadow-lg p-6  h-60">
                <div className="relative">
                  <svg className="w-full h-32" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-4xl font-bold text-white">
                      {healthIndex.value}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            {/* Status Card */}
            <Grid item xs={12} md={3} className="flex-none">
              <div className="bg-white rounded-xl shadow-lg p-8  h-60">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-red-100 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Bridge Condition Index
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-teal-100 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Active Maintenance Tasks
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-2 text-sm bg-amber-100 text-amber-700 rounded-lg">
                      Dismiss
                    </button>
                    <button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card style={{ backgroundColor: "#1e293b", color: "white" }}>
              <CardHeader
                title="Bridge Locations"
                titleTypographyProps={{ color: "white" }}
              />
              <CardContent>
                <Box height={300}>
                  <MapContainer
                    center={[lat, lat]}
                    zoom={2}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {selectedBridge && (
                      <Marker position={[lat, lng]}>
                        <Popup>
                          <Typography variant="h6">
                            {selectedBridge.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {selectedBridge.location ||
                              "No location description"}
                          </Typography>
                        </Popup>
                      </Marker>
                    )}
                  </MapContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <DashboardCard>
              <Typography variant="h4" sx={{ color: "white" }}>
                Bridge Condition Index System
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-2 hover:bg-teal-500/5 rounded-lg cursor-pointer">
                  <Truck
                    className="w-6 h-6"
                    style={{ color: getConditionColor(bridgeData.condition) }}
                  />
                  <div className="flex-1">
                    <span className="text-gray-300">Bridge Condition</span>
                  </div>
                  <span
                    style={{ color: getConditionColor(bridgeData.condition) }}
                  >
                    {bridgeData.condition}
                  </span>
                </div>

                <div className="flex items-center space-x-4 p-2 hover:bg-teal-500/5 rounded-lg cursor-pointer">
                  <svg
                    className="w-6 h-6"
                    style={{ color: getConditionColor(bridgeData.condition) }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <span className="text-gray-300">Next maintenance</span>
                  </div>
                  <span
                    style={{ color: getConditionColor(bridgeData.condition) }}
                  >
                    {bridgeData.nextMaintenance}
                  </span>
                </div>

                <div className="flex items-center space-x-4 p-2 hover:bg-teal-500/5 rounded-lg cursor-pointer">
                  <svg
                    className="w-6 h-6"
                    style={{ color: getThreatColor(bridgeData.threat) }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div className="flex-1">
                    <span className="text-gray-300">Threat</span>
                  </div>
                  <span style={{ color: getThreatColor(bridgeData.threat) }}>
                    {bridgeData.threat}
                  </span>
                </div>
              </div>
            </DashboardCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <DashboardCard>
              <Box display="flex" alignItems="center" gap={2}>
                <WarningIcon sx={{ color: "#ff9800" }} />
                <Typography variant="h6">Current situation</Typography>
              </Box>
              <Typography variant="h4" sx={{ mt: 2, color: "#ffffff" }}>
                {healthData.anomaly_count > 0
                  ? "Anomalies Detected"
                  : "Normal Operation"}
              </Typography>
            </DashboardCard>
          </Grid>

          {/* System status */}
          <Grid item xs={12}>
            <DashboardCard>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Bridge Monitoring Status</Typography>
                <Box>
                  <Build
                    sx={{ mr: 1, color: loading ? "#ff9800" : "#4caf50" }}
                  />
                  <NavigateNext sx={{ color: "#ffffff77" }} />
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: "#ffffff77" }}>
                Last updated: {new Date().toLocaleTimeString()}
              </Typography>
            </DashboardCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BridgeHealthDashboard;
