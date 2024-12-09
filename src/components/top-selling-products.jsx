const TopSellingProducts = () => {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <div className="bg-white w-[662px] h-[332px] dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-4">
        Top Selling Products
      </h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold">Price</th>
            <th className="p-2 font-semibold">Quantity</th>
            <th className="p-2 font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b dark:border-gray-700">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.quantity}</td>
              <td className="p-2">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
