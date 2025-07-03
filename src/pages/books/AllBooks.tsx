import Loading from "@/components/utility/Loading";
import type { IBook } from "@/interfaces/bookInterfaceClient";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import BookCard from "@/shared/BookCard";

const AllBooks = () => {
   const { data, isLoading, isError } = useGetBooksQuery(undefined);

   if (isLoading || isError) {
      return <Loading />
   }

   const books = data?.data

   return (
      <div>
         <div className="relative bg-sky-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h1 className="text-4xl font-bold text-sky-600">Explore Our Full Book Collection</h1>
               <p className="mt-4 text-lg text-gray-600">
                  Discover thousands of titles across every genre. Find your next read now!
               </p>
            </div>
         </div>

         <div className="py-12 lg:py-16 mx-6">
            <div className="bg-sky-50 max-w-7xl mx-auto p-6 border-sky-200 border rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

               {
                  books.map((book: IBook, i: number) => <BookCard key={i} book={book} />)
               }

            </div>
         </div>


      </div>
   );
};

export default AllBooks;