import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = (
    <>
      <li><NavLink to='/' className="hover:text-sky-600">Home</NavLink></li>
      <li><NavLink to='/all-books' className="hover:text-sky-600">All Books</NavLink></li>
      <li><NavLink to='/add-book' className="hover:text-sky-600">Add Book</NavLink></li>
      <li><NavLink to='/manage-books' className="hover:text-sky-600">Manage Books</NavLink></li>
      <li><NavLink to='/borrow-summary' className="hover:text-sky-600">Borrow Summary</NavLink></li>
    </>
  );

  return (
    <nav className="flex items-center justify-between p-4 md:px-10 2xl:px-28 bg-sky-50 relative">
      <Link to='/' className="text-2xl font-semibold font-serif inline-block">
        <span>Our </span><span className="text-sky-500">Library</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="md:flex items-center gap-6 *:text-gray-800 hidden">
        {navLinks}
      </ul>

      {/* Mobile Menu Toggle */}
      <span
        onClick={() => setMenu(!menu)}
        className="hover:text-sky-500 cursor-pointer bg-sky-200 p-1 border border-sky-400 rounded md:hidden"
      >
        {menu ? <X /> : <Menu />}
      </span>

      {/* Mobile Menu */}
      {menu && (
        <ul className="flex flex-col items-start gap-3 md:hidden absolute bg-white shadow-md px-10 py-8 right-4 top-16 z-50 rounded border">
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
