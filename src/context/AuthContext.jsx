import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const register = (userData) => {
    setUsers([...users, userData]);
    setUser(userData);
  };

  const login = (email, password) => {
    const existingUser = users.find((u) => u.email === email && u.password === password);
    if (existingUser) {
      setUser(existingUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
