import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";

// Import your components
import Loginone from "./components/Login/Loginone";
import Signup from "./components/Signup/Signup";
import LoginWithEmail from "./components/Login/LoginWithEmail";
import LoginWithMobile from "./components/Login/LoginWithMobile";
import OTPVerification from "./components/Login/OTPVerification";
import OTPVerificationemail from "./components/Login/OTPVerificationemail";
import OTPsendgmail from "./components/ForgotPasswoard/OTPsendgmail";
import PassSignin from "./components/ForgotPasswoard/PassSignin";
import OAuthSuccess from "./components/OAuthSuccess"; // Import the OAuthSuccess component
import MyDashboard from "./pages/MyDashboard";
import MyAccount from "./pages/MyAccount";
import MyJournal from "./pages/MyJournal";
import AccountabilityPartner from "./pages/AccountabilityPartner";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import PasswordNew from "./components/ForgotPasswoard/PasswordNew";
import GmailVerification from "./components/ForgotPasswoard/GmailVerification";

const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Check for the token in localStorage
  return !!token; // Return true if token exists
};


const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to={isAuthenticated() ? "/mainHome" : "/login"} />
            }
          />
          <Route path="/login" element={<Loginone />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/loginwithmobile" element={<LoginWithMobile />} />
          <Route path="/loginwithemail" element={<LoginWithEmail />} />
          <Route path="/otpverification" element={<OTPVerification />} />
          <Route
            path="/otpverification-email"
            element={<OTPVerificationemail />}
          />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/otpsendgmail" element={<OTPsendgmail />} />
          <Route path="/mail-verification" element={<GmailVerification />} />
          <Route path="/passsignin" element={<PassSignin />} />
          <Route path="/set-new-password" element={<PasswordNew />} />
          {/* Add this route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/mainHome" element={<MyDashboard />} />
            <Route path="/myDashboard" element={<MyDashboard />} />
            <Route path="/myJournal" element={<MyJournal />} />
            <Route
              path="/performanceAnalytics"
              element={<PerformanceAnalytics />}
            />
            <Route
              path="/accountabilityPartner"
              element={<AccountabilityPartner />}
            />
            <Route path="/myAccount" element={<MyAccount />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
