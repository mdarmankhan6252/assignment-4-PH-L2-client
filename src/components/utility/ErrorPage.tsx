import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const ErrorPage = () => {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
         <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
         <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
         <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
         </p>
         <Button onClick={() => navigate("/")} className="bg-sky-500 cursor-pointer hover:bg-sky-600 text-white">
            ⬅ Go Home
         </Button>
      </div>
   );
};

export default ErrorPage;
