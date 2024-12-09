import { useTable } from "react-table";

const columns = [
  {
    Header: "Order ID",
    accessor: "id",
  },
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Project",
    accessor: "project",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Status",
    accessor: "status",
    // eslint-disable-next-line react/prop-types
    Cell: ({ value }) => {
      // Custom rendering for the "status" column
      const statusColors = {
        "In Progress": "text-blue-500",
        Complete: "text-green-500",
        Pending: "text-yellow-500",
        Approved: "text-green-600",
        Rejected: "text-red-500",
      };
      return (
        <span className={`${statusColors[value]} font-semibold`}>{value}</span>
      );
    },
  },
];

const data = [
  {
    orderId: "CM9801",
    user: "Natalie Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    orderId: "CM9802",
    user: "Kate Morrison",
    project: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    orderId: "CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    orderId: "CM9804",
    user: "Andi Lane",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "2 hours ago",
    status: "Approved",
  },
  {
    orderId: "CM9805",
    user: "Orlando Diggs",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "3 hours ago",
    status: "Rejected",
  },
  {
    orderId: "CM9806",
    user: "Koray Okumus",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "4 hours ago",
    status: "In Progress",
  },
  {
    orderId: "CM9807",
    user: "Natalie Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "5 hours ago",
    status: "Complete",
  },
  {
    orderId: "CM9808",
    user: "Drew Cano",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "6 hours ago",
    status: "Pending",
  },
];

const OrderTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Order List
      </h3>
      <table
        {...getTableProps()}
        className="w-full text-left border-collapse dark:text-gray-200"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.accessor}
                  {...column.getHeaderProps()}
                  className="border-b p-2 font-semibold"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                className="border-b dark:border-gray-700"
              >
                {row.cells.map((cell) => (
                  <td key={cell.id} {...cell.getCellProps()} className="p-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
