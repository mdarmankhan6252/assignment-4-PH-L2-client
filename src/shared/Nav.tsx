import { Link, NavLink } from "react-router";

const Nav = () => {
   return (
      <nav className="flex items-center justify-between p-4 md:px-10 2xl:px-28 bg-sky-50">
         <Link to='/' className="text-2xl font-semibold font-serif inline-block"><span>Our </span><span className="text-sky-500">Library</span></Link>
         <ul className="flex items-center gap-6 *:text-gray-800 *:hover:text-sky-600">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/all-books'>All Books</NavLink></li>
            <li><NavLink to='/add-book'>Add Book</NavLink></li>
            <li><NavLink to='/manage-books'>Manage Books</NavLink></li>
            <li><NavLink to='/borrow-summary'>Borrow Summary</NavLink></li>
         </ul>
      </nav>
   );
};

export default Nav;