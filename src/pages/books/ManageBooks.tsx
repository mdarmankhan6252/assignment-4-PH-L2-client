import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Loading from "@/components/utility/Loading";
import type { IBook } from "@/interfaces/bookInterfaceClient";
import {
   useDeleteBookMutation,
   useGetBooksQuery,
} from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import EditBookModal from "@/components/utility/EditBookModal";

const ManageBooks = () => {
   const { data, isLoading, isError, refetch } = useGetBooksQuery(undefined);
   const [deleteBook] = useDeleteBookMutation();

   const [open, setOpen] = useState(false);
   const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

   if (isLoading || isError) {
      return <Loading />;
   }

   const books = data?.data;

   const handleDelete = async (id: string) => {
      try {
         await deleteBook(id).unwrap();
         toast.success("Book Deleted Successfully");
         refetch();
      } catch (error: unknown) {
         console.log(error);
         toast.error("Failed to delete the data");
      }
   };

   const handleEdit = (book: IBook) => {
      setSelectedBook(book);
      setOpen(true);
   };

   return (
      <div className="px-6 md:px-10 max-w-7xl mx-auto py-10">
         <h2 className="text-3xl font-semibold text-black/85 pb-4">
            Manage All Books
         </h2>

         {/* Shared Dialog */}
         <Dialog open={open} onOpenChange={setOpen}>
            <EditBookModal book={selectedBook} refetch={refetch} />
         </Dialog>

         <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
               <thead className="bg-sky-50 border">
                  <tr className="text-left">
                     <th className="p-3">SL</th>
                     <th className="p-3">Title</th>
                     <th className="p-3">Genre</th>
                     <th className="p-3">ISBN</th>
                     <th className="p-3">Copies</th>
                     <th className="p-3">Availability</th>
                     <th className="p-3">Edit</th>
                     <th className="p-3">Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {books.map((book: IBook, i: number) => (
                     <tr key={book._id} className="bg-sky-50/30 border">
                        <td className="p-3">{i + 1}</td>
                        <td className="p-3">{book.title}</td>
                        <td className="p-3">{book.genre}</td>
                        <td className="p-3">{book.isbn}</td>
                        <td className="p-3">{book.copies}</td>
                        <td className="p-3">
                           <span
                              className={`${book.availability
                                 ? "text-green-500"
                                 : "text-red-500"
                                 } font-semibold`}
                           >
                              {book.availability ? "Available" : "Unavailable"}
                           </span>
                        </td>
                        <td className="p-3">
                           <span
                              onClick={() => handleEdit(book)}
                              className="px-3 py-1 font-semibold rounded-md bg-sky-500 text-white cursor-pointer"
                           >
                              Edit Book
                           </span>
                        </td>
                        <td className="p-3">
                           <AlertDialog>
                              <AlertDialogTrigger asChild>
                                 <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                    Delete
                                 </span>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                 <AlertDialogHeader>
                                    <AlertDialogTitle>
                                       Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                       This book will be permanently deleted. This action
                                       cannot be undone.
                                    </AlertDialogDescription>
                                 </AlertDialogHeader>
                                 <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                       onClick={() => handleDelete(book._id)}
                                       className="bg-red-500 hover:bg-red-600"
                                    >
                                       Confirm Delete
                                    </AlertDialogAction>
                                 </AlertDialogFooter>
                              </AlertDialogContent>
                           </AlertDialog>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageBooks;
