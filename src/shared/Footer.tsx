
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
   return (
      <footer className="bg-sky-50 shadow-md dark:bg-slate-900 rounded-xl w-full md:px-10 2xl:px-28 py-10">
         <div
            className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
            <div className="w-full sm:w-[25%] ">
               <Link to='/' className="text-2xl font-semibold font-serif pb-5 block"><span>Our </span><span className="text-sky-500">Library</span></Link>
               <div className="flex flex-col gap-[20px]  text-sky-500">
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                     <IoLocationOutline className="text-[1.2rem]" />
                     Barishal, Bangladesh
                  </a></span>
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                     <MdOutlineEmail className="text-[1.1rem]" />
                     ourlibrary@gmail.com
                  </a></span>
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                     <MdOutlineLocalPhone className="text-[1.1rem]" />
                     +8801305282768
                  </a></span>
               </div>
            </div>

            <div className="">
               <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">Services</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">UI
                     Components</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Website
                     Templates</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Icons</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Opacity
                     Palette</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Blocks</p>
               </div>
            </div>


            <div>
               <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">Company</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Service</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Features</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Our
                     Team</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Portfolio</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Blog</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Contact
                     Us</p>
               </div>
            </div>


            <div className="">
               <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">Our Social Media</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Dribble</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Behance</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Medium</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Instagram</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Facebook</p>
                  <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Twitter</p>
               </div>
            </div>

            <div className="w-full text-center text-sm text-sky-800">
               <small>All Rights Reserved - MD Arman Khan</small>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
