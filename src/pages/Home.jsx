import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import axios from "axios";
import { notification } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // 🔹 Brendlarni olish (Fake API)
    axios
      .get("https://fakestoreapi.com/products/categories") // Brendlar sifatida kategoriyalarni ishlatamiz
      .then((response) => {
        if (response.data) {
          setBrands(response.data.map((name, index) => ({ id: index, name }))); // Array obyektga o‘girildi
        } else {
          throw new Error("Brendlar ma'lumoti kelmadi");
        }
      })
      .catch(() => notification.error({ message: "Brendlarni yuklashda xatolik!" }));

    // 🔹 Mahsulotlarni olish (Fake Store API)
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.data) {
          setCards(response.data);
        } else {
          throw new Error("Mahsulotlar ma'lumoti kelmadi");
        }
      })
      .catch(() => notification.error({ message: "Mahsulotlarni yuklashda xatolik!" }));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Slayderda 3 ta chiqishi uchun
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* Header */}
      <section className="p-8 text-center bg-white shadow-md mt-4">
        <h1 className="text-3xl font-bold text-gray-800">Siz kutgan Xiaomi 12 Mi Laite</h1>
        <p className="text-gray-600 mt-2">Yangi avlod texnologiyasi bilan tanishing!</p>
        <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Batafsil
        </Button>
      </section>

      {/* Hero rasm */}
      <div className="flex justify-center mt-6">
        <img src="./imgs/phone.png" alt="Product" className="h-80" />
      </div>

      {/* Brendlar */}
      <section className="mt-8 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Brendlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <div key={brand.id} className="p-4 border rounded-lg shadow-sm text-center">
                <p className="text-gray-700">{brand.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Brendlar mavjud emas</p>
          )}
        </div>
      </section>

      {/* Cards - Slider */}
      <section className="mt-8 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Mahsulotlar</h2>
        {cards.length > 0 ? (
          <Slider {...sliderSettings} className="mt-4">
            {cards.map((card) => (
              <div key={card.id} className="p-4">
                <div className="border shadow-md p-4 rounded-lg text-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
                  <p className="text-gray-600">${card.price}</p>
                  {/* Batafsil sahifaga yo'naltirish */}
                  <Link to={`/card/${card.id}`}>
                    <Button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Batafsil
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500 text-center mt-4">Mahsulotlar mavjud emas</p>
        )}
      </section>
    </div>
  );
};

export default Home;
