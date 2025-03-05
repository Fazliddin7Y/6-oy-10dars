import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        
        {/* Faqat login qilingan bo‘lsa, "Add" menyusini ko‘rsatamiz */}
        {user && <Link to="/add" className="hover:text-gray-300">Add</Link>}
        
        {/* Agar user login qilgan bo‘lsa, "Logout" tugmasi chiqadi */}
        {user ? (
          <button onClick={logout} className="hover:text-red-500">Logout</button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
