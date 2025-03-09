import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Search, ShoppingCart, User } from "lucide-react";
import Input from "../components/ui/input";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="./imgs/ashyo-logo.png" alt="Ashyo Logo" className="h-10" />
      </div>

      {/* Navbar menyusi */}
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Mahsulotlar</Link>
        <Link to="/contact" className="hover:text-gray-300">Kontakt</Link>

        {/**/}
        {user && <Link to="/add" className="hover:text-gray-300">Add</Link>}
      </div>

      {/* Search bar */}
      <div className="flex items-center border rounded-lg px-2 bg-gray-700">
        <Search className="text-gray-400" />
        <Input placeholder="Qidiruv..." className="border-none focus:ring-0 bg-transparent text-white px-2" />
      </div>

      {/* Profil va savat */}
      <div className="flex items-center gap-4">
        <Link to="/cart">
          <ShoppingCart className="text-white hover:text-gray-300" />
        </Link>
        <Link to="/profile">
          <User className="text-white hover:text-gray-300" />
        </Link>

        {/* */}
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
