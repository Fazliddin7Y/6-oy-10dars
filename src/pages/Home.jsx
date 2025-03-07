import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import axios from "axios";
import { notification } from "antd";

const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/api/Brand/BrandController_getAllBrands")
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        notification.error({ message: "Ma'lumotlarni yuklashda xatolik!" });
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Site Logo (User qo‘shadi) */}
          <img src="./imgs/ashyo-logo.png" alt="Ashyo Logo" className="h-10" />
          <nav className="hidden md:flex gap-6 text-gray-700">
            <Link to="/" className="hover:text-blue-600">Asosiy</Link>
            <Link to="/products" className="hover:text-blue-600">Mahsulotlar</Link>
            <Link to="/contact" className="hover:text-blue-600">Kontakt</Link>
          </nav>
        </div>
        {/* Search bar */}
        <div className="flex items-center border rounded-lg px-2 bg-gray-50">
          <Search className="text-gray-500" />
          <Input placeholder="Qidiruv..." className="border-none focus:ring-0" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <ShoppingCart className="text-gray-700" />
          </Link>
          <Link to="/profile">
            <User className="text-gray-700" />
          </Link>
        </div>
      </header>
      {/* Hero section */}
      <section className="p-8 text-center bg-white shadow-md mt-4">
        <h1 className="text-3xl font-bold text-gray-800">Siz kutgan Xiaomi 12 Mi Laite</h1>
        <p className="text-gray-600 mt-2">Yangi avlod texnologiyasi bilan tanishing!</p>
        <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Batafsil
        </Button>
      </section>
      {/* Product showcase (Rasm user qo‘shadi) */}
      <div className="flex justify-center mt-6">
        <img src="./imgs/phone.png" alt="Product" className="h-80" />
      </div>
      {/* Brandlar */}
      <section className="mt-8 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Brendlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {brands.map((brand) => (
            <div key={brand.id} className="p-4 border rounded-lg shadow-sm text-center">
              <img src={brand.imageUrl} alt={brand.name} className="h-16 mx-auto" />
              <p className="mt-2 text-gray-700">{brand.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
