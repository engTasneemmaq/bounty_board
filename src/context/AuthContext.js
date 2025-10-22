import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    // Check localStorage first (for "keep me logged in")
    let storedUser = localStorage.getItem("user");
    let storageType = "local";
    
    // If not in localStorage, check sessionStorage
    if (!storedUser) {
      storedUser = sessionStorage.getItem("user");
      storageType = "session";
    }
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        if (storageType === "local") {
          localStorage.removeItem("user");
        } else {
          sessionStorage.removeItem("user");
        }
      }
    }
    setIsLoading(false);
  }, []);

  // Sign In function
  const signIn = (email, password, keepLoggedIn = false) => {
    // Check if user has incomplete setup
    const tempUser = sessionStorage.getItem("tempUser");
    if (tempUser) {
      try {
        const tempUserData = JSON.parse(tempUser);
        if (tempUserData.email === email && !tempUserData.accountSetupComplete) {
          return { 
            success: false, 
            needsSetup: true,
            error: "Please complete your account setup first" 
          };
        }
      } catch (error) {
        console.error("Error checking temp user:", error);
      }
    }

    // TODO: Replace with actual API call
    // For now, simulate successful login with account setup complete
    const userData = {
      id: Date.now(),
      email: email,
      firstName: email.split("@")[0],
      lastName: "User",
      avatar: `https://ui-avatars.com/api/?name=${email}&background=0A65CC&color=fff`,
      createdAt: new Date().toISOString(),
      accountSetupComplete: true, // Existing users have completed setup
    };

    setUser(userData);
    
    // Store user in localStorage if keepLoggedIn is true, otherwise use sessionStorage
    if (keepLoggedIn) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", "mock-token-" + userData.id);
      // Clear sessionStorage to avoid conflicts
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("token", "mock-token-" + userData.id);
      // Clear localStorage to avoid conflicts
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }

    return { success: true, user: userData };
  };

  // Sign Up function
  const signUp = (userData) => {
    // TODO: Replace with actual API call
    // For now, simulate successful registration
    const newUser = {
      id: Date.now(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatar: `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}&background=0A65CC&color=fff`,
      createdAt: new Date().toISOString(),
      accountSetupComplete: false, // Track if account setup is complete
    };

    // Store user temporarily (not logged in yet)
    sessionStorage.setItem("tempUser", JSON.stringify(newUser));

    return { success: true, user: newUser, needsSetup: true };
  };

  // Complete account setup and log in
  const completeAccountSetup = (setupData) => {
    const tempUser = sessionStorage.getItem("tempUser");
    if (!tempUser) return { success: false, error: "No user found" };

    const userData = JSON.parse(tempUser);
    const completeUser = {
      ...userData,
      ...setupData,
      accountSetupComplete: true,
    };

    setUser(completeUser);
    
    // Store user in localStorage (now logged in)
    localStorage.setItem("user", JSON.stringify(completeUser));
    localStorage.setItem("token", "mock-token-" + completeUser.id);
    
    // Clear temporary storage
    sessionStorage.removeItem("tempUser");

    return { success: true, user: completeUser };
  };

  // Sign Out function
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  // Update user profile
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    
    // Update in storage
    const storedInLocal = localStorage.getItem("user");
    if (storedInLocal) {
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } else {
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
    }

    return { success: true, user: updatedUser };
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    updateUser,
    completeAccountSetup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

