import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { 
  Booking, 
  Schedule, 
  BusManagement, 
  CustomerManagement, 
  Report, 
  Settings, 
  HelpSupport 
} from "./pages";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="booking" element={<Booking />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="bus-management" element={<BusManagement />} />
          <Route path="customer-management" element={<CustomerManagement />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help-support" element={<HelpSupport />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
