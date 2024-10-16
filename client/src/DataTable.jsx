const DataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full">
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="w-1/3 px-6 py-3 text-sm font-semibold text-gray-900">
                {item.Variable}
              </td>
              <td className="px-6 py-3 text-sm text-gray-600">{item.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
