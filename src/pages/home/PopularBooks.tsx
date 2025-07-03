import Loading from "@/components/utility/Loading";
import type { IBook } from "@/interfaces/bookInterfaceClient";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import BookCard from "@/shared/BookCard";

const PopularBooks = () => {


   const { data, isLoading, isError } = useGetBooksQuery(undefined);

   if (isLoading || isError) {
      return <Loading />
   }

   console.log(data.data)

   const books = data?.data.slice(0, 6)




   return (
      <div className="py-20">

         <div className="text-center space-y-2 pb-10">
            <h2 className="text-2xl lg:text-3xl">Popular Books</h2>
            <p className="text-gray-900/85">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, perspiciatis!</p>
         </div>


         <div className="bg-sky-50 max-w-7xl mx-auto p-6 border-sky-200 border rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {
               books.map((book: IBook, i: number) => <BookCard key={i} book={book} />)
            }

         </div>

      </div>
   );
};

export default PopularBooks;