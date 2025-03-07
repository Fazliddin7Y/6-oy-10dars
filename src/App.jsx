import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Add from "./pages/Add";
import Profile from "./pages/Profile"; //

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Add />} />
            <Route path="/profile" element={<Profile />} /> {/* 🟢 Profile-ni qo‘shdik */}
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
