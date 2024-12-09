import { OrderTable } from "../components";

// Columns definition for the table

const Orders = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Orders
      </h2>
      {/* Pass columns and data to the OrderTable component */}
      <OrderTable />
    </div>
  );
};

export default Orders;
