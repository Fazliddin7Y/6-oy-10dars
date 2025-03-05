import { useData } from "../context/DataContext";

const Home = () => {
  const { data } = useData();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Barcha Ma'lumotlar</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">Hali ma’lumot qo‘shilmagan.</p>
        )}
      </div>
    </div>
  );
};

export default Home;