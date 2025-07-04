import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IBook } from "@/interfaces/bookInterfaceClient";
import { useCreateBorrowMutation, useGetBooksQuery, useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import { Badge, NonBinary, User } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router";


const BookCard = ({ book }: { book: IBook }) => {

   const { _id, title, author, availability, copies, genre, isbn } = book;
   const [date, setDate] = React.useState<Date | undefined>(new Date())
   const [quantity, setQuantity] = useState<number>(1);
   const navigate = useNavigate();
   const { refetch } = useGetBooksQuery(undefined);
   const { refetch: borrowRefetch } = useGetBorrowSummaryQuery(undefined);
   const [createBorrow] = useCreateBorrowMutation();

   const dummyImage = 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?_gl=1*1lgdopn*_ga*MTYxMDEwMDQzMS4xNzUwOTY3ODg5*_ga_8JE65Q40S6*czE3NTEzOTQ4ODkkbzMkZzEkdDE3NTEzOTQ5MjYkajIzJGwwJGgw'


   const handleBorrowBook = async (id: string) => {
      const borrowData = {
         book: id,
         quantity,
         dueDate: date,
      };

      try {
         await createBorrow(borrowData).unwrap();
         toast.success('Book borrowed successfully');
         navigate('/borrow-summary')
         refetch()
         borrowRefetch()
      } catch (error) {
         const err = error as { data?: { message?: string } };
         toast.error(err.data?.message || 'Something went wrong');
      }
   };



   return (
      <div className='border rounded-lg p-4 relative border-sky-200'>
         <img src={dummyImage} alt="image" className='rounded-lg w-full' />
         <div className='space-y-3 py-3'>
            <h3 className='font-semibold text-lg '>{title}</h3>
            <p className="flex items-center gap-x-2"><span ><User size={16} className="text-sky-500" /></span> {author}</p>

            <p className="flex items-center gap-x-2"><span ><NonBinary size={16} className="text-pink-500" /></span>Genre: {genre}</p>

            <p className="flex items-center gap-x-2"><span ><Badge size={16} className="text-yellow-500" /></span> ISBN: {isbn}</p>

            <p className="flex items-center gap-x-2"><span ><Badge size={16} className="text-green-500" /></span> Qnt: {copies}</p>
         </div>
         <div className="flex items-center justify-end">

            <Dialog>
               <form>
                  <DialogTrigger asChild>
                     <Button className="bg-sky-500 hover:bg-sky-600 cursor-pointer text-white hover:text-white" variant="outline">Borrow book</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[300px]">
                     <AlertDialogHeader>
                        <DialogTitle>Borrow Books</DialogTitle>
                        <DialogDescription>
                           You can borrow books. For that, fill the quantity and due date.
                        </DialogDescription>
                     </AlertDialogHeader>
                     <div className="grid gap-4">
                        <div className="grid gap-3">
                           <Label>Quantity</Label>
                           <Input
                              name="quantity"
                              type="number"
                              min={1}
                              value={quantity}
                              onChange={(e) =>
                                 setQuantity(Number(e.target.value))} />
                        </div>

                        <div className="flex  items-center justify-center">
                           <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-lg border"
                           />
                        </div>


                     </div>
                     <DialogFooter>
                        <DialogClose asChild>
                           <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose>
                           <Button onClick={() => handleBorrowBook(_id)} type="submit" className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white hover:text-white">Borrow Book</Button>
                        </DialogClose>
                     </DialogFooter>
                  </DialogContent>
               </form>
            </Dialog>
         </div>
         <p className="rounded-sm text-sm text-white font-light absolute top-0 right-0">{availability ? <span className="bg-green-500 px-4 py-0.5">Available</span> : <span className="bg-red-500 px-4 py-0.5">Unavailable</span>}</p>
      </div>
   );
};



export default BookCard;
