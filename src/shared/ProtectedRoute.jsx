// src/shared/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useProfile } from "context/ProfileContext";
import { useAuth } from "context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { profile } = useProfile() || {};
  const { isAuthenticated } = useAuth();
  
  // Allow access if either authenticated or profile exists (for compatibility)
  return (isAuthenticated || profile) ? children : <Navigate to="/login" replace />;
}
