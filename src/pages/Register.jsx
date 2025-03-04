import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register({ username, email, password });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Ro‘yxatdan o‘tish</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input className="w-full p-2 border rounded" type="text" placeholder="Ism" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input className="w-full p-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full p-2 border rounded" type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Ro‘yxatdan o‘tish</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
