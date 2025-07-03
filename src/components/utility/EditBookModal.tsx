import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { IBook } from "@/interfaces/bookInterfaceClient";
import toast from "react-hot-toast";
import { useUpdateBookMutation } from "@/redux/api/baseApi";

const genreOptions = [
   "FICTION",
   "NON_FICTION",
   "SCIENCE",
   "HISTORY",
   "BIOGRAPHY",
   "FANTASY",
];

const EditBookModal = ({ book, refetch }: { book: IBook | null, refetch: () => void }) => {
   const [genre, setGenre] = useState<string>("");
   const [updateBook] = useUpdateBookMutation();

   useEffect(() => {
      if (book) {
         setGenre(book.genre);
      }
   }, [book]);

   if (!book) return null;

   const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      const updatedData = {
         title: formData.get("title") as string,
         author: formData.get("author") as string,
         genre,
         isbn: formData.get("isbn") as string,
         copies: Number(formData.get("copies")),
         description: formData.get("description") as string,
      };

      try {
         const res = await updateBook({ id: book._id, data: updatedData }).unwrap();
         toast.success(res.message || "Book updated successfully");
         refetch()
      } catch (error: unknown) {
         console.log(error);
         toast.error("Failed to update the book");
      }
   };

   return (
      <DialogContent className="sm:max-w-[500px]">
         <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogDescription>
               Update the book's details and click save when you're done.
            </DialogDescription>
         </DialogHeader>

         <form onSubmit={handleUpdate} className="grid gap-4">
            <div className="grid gap-2">
               <Label htmlFor="title">Book Title</Label>
               <Input id="title" name="title" defaultValue={book.title} />
            </div>

            <div className="grid gap-2">
               <Label htmlFor="author">Author</Label>
               <Input id="author" name="author" defaultValue={book.author} />
            </div>

            <div className="grid gap-2">
               <Label>Genre</Label>
               <Select value={genre} onValueChange={(value) => setGenre(value)}>
                  <SelectTrigger className="w-full">
                     <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Genre</SelectLabel>
                        {genreOptions.map((option) => (
                           <SelectItem key={option} value={option}>
                              {option}
                           </SelectItem>
                        ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>

            <div className="grid gap-2">
               <Label htmlFor="isbn">ISBN</Label>
               <Input id="isbn" name="isbn" defaultValue={book.isbn} />
            </div>

            <div className="grid gap-2">
               <Label htmlFor="copies">Copies</Label>
               <Input
                  id="copies"
                  name="copies"
                  type="number"
                  defaultValue={book.copies}
               />
            </div>

            <div className="grid gap-2">
               <Label htmlFor="description">Description</Label>
               <Textarea
                  id="description"
                  name="description"
                  defaultValue={book.description}
               />
            </div>

            <DialogFooter>
               <DialogClose asChild>
                  <Button type="button" variant="outline">
                     Cancel
                  </Button>
               </DialogClose>
               <DialogClose>
                  <Button type="submit" className="cursor-pointer">Book Update</Button>
               </DialogClose>
            </DialogFooter>
         </form>
      </DialogContent>
   );
};

export default EditBookModal;
