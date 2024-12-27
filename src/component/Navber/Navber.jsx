import { NavLink } from "react-router-dom";

export const Navber = () => {

    const links = <>
    <li><NavLink className='mr-6 text-[14px] font-semibold hover:text-[#FFA6B6]' to='/'>Home</NavLink></li>
    <li><NavLink className='mr-6 text-[14px] font-semibold hover:text-[#FFA6B6]' to='/product'>Product</NavLink></li>
    <li><NavLink className='mr-6 text-[14px] font-semibold hover:text-[#FFA6B6]' to='/about'>About</NavLink></li>
    <li><NavLink className='mr-6 text-[14px] font-semibold hover:text-[#FFA6B6]' to='/contact'>Contact</NavLink></li>
    </>

  return (
    <div className="navbar bg-[#FFFFFF] py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl text-[#1c1c28] font-semibold">Gift Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 uppercase">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#A31352] text-white">Button</a>
      </div>
    </div>
  );
};
