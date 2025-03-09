import React, { useEffect, useState } from "react";
import axios from "axios";

const BrandLogos = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/api/brand")
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Bizning Brendlar</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div key={brand.id} className="p-4 border rounded-lg shadow-md text-center">
            <img src={brand.logo} alt={brand.name} className="w-full h-24 object-contain mx-auto" />
            <p className="mt-2 text-lg font-semibold">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
