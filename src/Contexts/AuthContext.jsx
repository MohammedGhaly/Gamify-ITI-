import { createContext, useContext, useState } from "react";

const initialState = {
  name: "",
  email: "",
  role: "",
};
const AuthContext = createContext(null);

function AuthenticationProvider({ children }) {
  const [{ name, email, role }, setUser] = useState(initialState);
  function resetUser() {
    setUser(initialState);
  }
  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        role,
        setUser,
        resetUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error("useAuth must be used within the AuthProvider");
  return context;
}

export { AuthenticationProvider, useAuth };
