// src/pages/AccountSetupGuard.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Guard component to protect Account Setup page
 * Only allows access if user has tempUser in sessionStorage (came from sign up)
 */
export default function AccountSetupGuard({ children }) {
  const [hasAccess, setHasAccess] = useState(null);

  useEffect(() => {
    const tempUser = sessionStorage.getItem("tempUser");
    
    if (tempUser) {
      try {
        const userData = JSON.parse(tempUser);
        // Check if user has incomplete setup
        if (userData && !userData.accountSetupComplete) {
          setHasAccess(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing tempUser:", error);
      }
    }
    
    // No access - user didn't come from sign up
    setHasAccess(false);
  }, []);

  // Loading state
  if (hasAccess === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-[#F1F2F4] animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // No access - redirect to sign up
  if (!hasAccess) {
    return <Navigate to="/register" replace />;
  }

  // Has access - show account setup
  return children;
}


