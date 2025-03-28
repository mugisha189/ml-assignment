import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Faqs from './pages/Faqs';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import StructuralHealthMonitoring from './pages/solutions/StructuralHealthMonitoring';
import AutomatedReportingAlerts from './pages/services/AutomatedReportingAlerts';
import ConsultingOptimization from './pages/services/ConsultingOptimization';
import IoTForConnectivity from './pages/services/IoTForConnectivity';
import PredictiveMaintenanceAnalytics from './pages/services/PredictiveMaintenanceAnalytics';
import RealTimeMonitoring from './pages/services/RealTimeMonitoring';
import RiskSecurityAssessment from './pages/services/RiskSecurityAssessment';
import DataDrivenMaintenanceInsights from './pages/solutions/DataDrivenMaintenanceInsights';
import RealTimeCapacityTracking from './pages/solutions/RealTimeCapacityTracking';
import Information from './components/Information';
import DamageDetectionModelling from './pages/solutions/DamageDetectionModelling';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BridgeHealthDashboard from './components/BridgeHealthDashboard';
import MapInterface from './components/MapComponent';
import UserManagementComponent from './components/UserManagementSystem';
import BridgeManagementComponent from './components/BridgeManagement';

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14ff64d9]"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Public Route Component (redirects to dashboard if already logged in)
interface PublicRouteProps {
  children: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14ff64d9]"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes that should redirect to dashboard if logged in */}
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        <Route path='/signup' element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }/>

        

        {/* Protected dashboard route */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <BridgeHealthDashboard />
          </ProtectedRoute>
        } />
        <Route path='/map' element={
          <ProtectedRoute>
            <MapInterface/>
          </ProtectedRoute>
        }/>

        <Route path='/users' element={
          <ProtectedRoute>
          <UserManagementComponent/>
          </ProtectedRoute>
        }/>

      <Route path='/bridges' element={
          <ProtectedRoute>
          <BridgeManagementComponent/>
          </ProtectedRoute>
        }/>



        


        

        {/* Public routes with header/footer */}
        <Route element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path='/about' element={<Information/>}/>
          
          {/* Solutions */}
          <Route path="/solutions/structural-health-monitoring" element={<StructuralHealthMonitoring />} />
          <Route path="/solutions/data-driven-maintenance-insights" element={<DataDrivenMaintenanceInsights />} />
          <Route path="/solutions/real-time-capacity-tracking" element={<RealTimeCapacityTracking />} />
          <Route path="/solutions/damage-detection-modeling" element={<DamageDetectionModelling />} />
          
          {/* Services */}
          <Route path="/services/real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="/services/predictive-maintenance-analytics" element={<PredictiveMaintenanceAnalytics />} />
          <Route path="/services/risk-security-assessment" element={<RiskSecurityAssessment />} />
          <Route path="/services/iot-for-connectivity" element={<IoTForConnectivity />} />
          <Route path="/services/automated-reporting-alerts" element={<AutomatedReportingAlerts />} />
          <Route path="/services/consulting-optimization" element={<ConsultingOptimization />} />
        </Route>

        {/* Catch all route for 404 */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-gray-600 mb-4">Page not found</p>
            <a href="/" className="text-[#14ff64d9] hover:text-[#14ff64d9]">
              Go back home
            </a>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
