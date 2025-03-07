import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://api.ashyo.fullstackdev.uz/api/user/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })    
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        notification.error({ message: "Profil ma'lumotlarini yuklashda xatolik!" });
      });
  }, []);

  if (!user) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Profil Sahifasi</h1>
      <p><strong>Ism:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      {/* Banner rasm */}
      <div className="mt-4">
        <img src="/images/phone.png" alt="Telefon rasmi" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Profile;
