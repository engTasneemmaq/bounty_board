import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "context/ProfileContext";
import { useAuth } from "context/AuthContext";
import { LogOut } from "lucide-react";

export default function Logout() {
  const navigate = useNavigate();
  const { setProfile } = useProfile() || {};
  const { signOut } = useAuth();

  useEffect(() => {
    try {
      // Clear auth/session data using Auth context
      signOut();
      if (setProfile) setProfile(null);
    } finally {
      // Navigate to login with a small delay for UX
      const id = setTimeout(() => navigate("/login", { replace: true }), 300);
      return () => clearTimeout(id);
    }
  }, [navigate, setProfile, signOut]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl animate-bounce">
          <LogOut className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="text-center space-y-2 animate-fade-in">
        <h2 className="text-2xl font-bold text-gradient">Signing you out</h2>
        <p className="text-base text-gray-600">You will be redirected to the login page.</p>
      </div>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-600 animate-bounce" style={{animationDelay: '0s'}} />
        <div className="w-3 h-3 rounded-full bg-purple-600 animate-bounce" style={{animationDelay: '0.2s'}} />
        <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce" style={{animationDelay: '0.4s'}} />
      </div>
    </div>
  );
}


