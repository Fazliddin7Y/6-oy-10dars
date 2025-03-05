import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addData } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // ✅ Login qilmagan bo‘lsa, login sahifasiga yo‘naltirish
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addData({ title, content });
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Yangi Ma'lumot Qo‘shish</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 border rounded" type="text" placeholder="Sarlavha" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea className="w-full p-2 border rounded" placeholder="Mazmun" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">Qo‘shish</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
