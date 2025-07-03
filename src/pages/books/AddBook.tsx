import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";
import type React from "react";
import { useCreateBookMutation, useGetBooksQuery } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";

const AddBook = () => {
   const [genre, setGenre] = useState<string>("");
   const [createBook] = useCreateBookMutation();
   const { refetch } = useGetBooksQuery(undefined);
   const navigate = useNavigate();

   const bookHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      const bookData = {
         title: formData.get("title") as string,
         author: formData.get("author") as string,
         genre,
         isbn: formData.get("isbn") as string,
         copies: Number(formData.get("copies")),
         description: formData.get("description") as string
      };

      try {
         const res = await createBook(bookData).unwrap();
         form.reset();
         setGenre("")
         refetch()
         navigate('/all-books')
         toast.success(res.message || 'Book created!')
      } catch (error: unknown) {
         console.log(error);
         toast.error("Failed to delete the data")
      }
   };

   return (
      <div className="py-12 lg:py-16 px-6 md:px-10">
         <form onSubmit={bookHandler} className="space-y-4 bg-sky-50 p-10 border border-sky-300 rounded-lg max-w-lg mx-auto basis-1/2">
            <h2 className="font-semibold text-center text-2xl text-sky-600 ">Add Book</h2>
            <div>
               <Label className="pb-2 pl-0.5">Book's Title</Label>
               <Input placeholder="Title" name="title" />
            </div>
            <div>
               <Label className="pb-2 pl-0.5">Author's Name</Label>
               <Input placeholder="Author's Name" name="author" />
            </div>
            <div>
               <Label className="pb-2 pl-0.5">Genre</Label>
               <Select value={genre} onValueChange={(value) => setGenre(value)}>
                  <SelectTrigger className="w-full">
                     <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Genre</SelectLabel>
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div>
               <Label className="pb-2 pl-0.5">ISBN</Label>
               <Input placeholder="ISBN" name="isbn" />
            </div>
            <div>
               <Label className="pb-2 pl-0.5">Copies</Label>
               <Input placeholder="Copies" name="copies" type="number" />
            </div>

            <div>
               <Label className="pb-2 pl-0.5">Description</Label>
               <Textarea placeholder="Description" name="description" />
            </div>

            <Button type="submit" className="w-full bg-sky-500 h-11 hover:bg-sky-600 cursor-pointer">
               Add Book
            </Button>
         </form>
      </div>
   );
};

export default AddBook;
