import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router";

const Banner = () => {
   const navigate = useNavigate();

   return (
      <div className="bg-sky-50 py-12 px-6 md:px-12">
         <div className="max-w-6xl mx-auto text-center">
            {/* Main Icon */}
            <div className="mb-8 relative">
               <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-sky-600 to-sky-400 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <BookOpen className="w-12 h-12 text-white" />
               </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
               <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                  Smart Library
               </span>
               <br />
               <span className="text-gray-700">Management System</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
               Effortless book management for the digital age
            </p>


            {/* CTA Button */}
            <button onClick={() => navigate('/all-books')} className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-3 cursor-pointer">
               All Books
               <BookOpen className="w-5 h-5" />
            </button>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
         </div>
      </div>
   );
};

export default Banner;