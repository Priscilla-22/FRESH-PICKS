
const Featured = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Carrots</h3>
              <p className="text-gray-600 mb-4">Ksh 19.99</p>
              <img src="/path/to/product1.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Bananas</h3>
              <p className="text-gray-600 mb-4">Ks h114.99</p>
              <img src="/path/to/product2.jpg" alt="Product 2" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Apples</h3>
              <p className="text-gray-600 mb-4">Ksh 59.99</p>
              <img src="/path/to/product3.jpg" alt="Product 3" className="w-full h-40 object-cover mb-4"/>
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
