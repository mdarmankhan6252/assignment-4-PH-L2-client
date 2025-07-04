import Loading from "@/components/utility/Loading";
import type { IBorrowSummary } from "@/interfaces/borrowInterface";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);
  const borrowSummary: IBorrowSummary[] | undefined = data?.data;

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load data</p>;

  console.log(data);

  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-black/85 pb-6">
        📚 Borrow Summary
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border rounded">
          <thead className="bg-sky-100 text-sky-800">
            <tr className="text-left">
              <th className="p-3">SL</th>
              <th className="p-3">Title</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {borrowSummary?.map((b, index) => (
              <tr key={index} className="border-b hover:bg-sky-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{b.book.title}</td>
                <td className="p-3">{b.book.isbn}</td>
                <td className="p-3 font-medium text-sky-700">{b.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
