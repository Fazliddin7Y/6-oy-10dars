import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        {user && <Link className="mr-4 hover:underline" to="/add">Add</Link>}
      </div>
      <div>
        {!user ? (
          <>
            <Link className="mr-4 hover:underline" to="/login">Login</Link>
            <Link className="hover:underline" to="/register">Register</Link>
          </>
        ) : (
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
