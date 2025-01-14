import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Dashboard = () => {
  const [search, setsearch] = useState<string>("");
  const [products, setproducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data))
      .catch((error) => console.error("error", error));
  });
  const filterData = products.filter((el: Product) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="container mx-auto p-6">
        <div className=" mb-10 flex justify-between">
          <p className="text-4xl font-semibold">Welcome to e-store</p>
          <input
            type="text"
            className="px-5 py-3 rounded-[23px] outline-none border-[2px] focus:outline-none focus:border-blue-400 "
            placeholder="Search..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        <div>
          {products.length === 0 ? (
            <div> no product found </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filterData.map((product) => (
                <div
                  className=" border shadow-md p-7 rounded-md"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" object-contain h-48 mb-2 bg-slate-100"
                  />
                  <p className="text-[12px] font-semibold">
                    {product.category}
                  </p>
                  <p className="text-blue-500 font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-[14px] font-normal mb-4">
                    {product.title}
                  </p>
                  <button className=" w-full px-4 py-3 rounded-md bg-blue-500 text-white items-center justify-center flex">
                    Buy
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
