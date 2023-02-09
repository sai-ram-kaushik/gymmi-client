import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleChange = () => {
        setNav(!nav)
    }

  const menuList = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    }
  ];

  return (
    <div className="flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4 text-white">
        <div className="w-full text-2xl">
            <img src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex">
                {
                    menuList?.map((menu,i)=>(
                        <li className="p-4 text-xl hover:text-cyan-600 text-white" key={i}>
                            <a href={menu.link}>{menu.name}</a>
                        </li>
                    ))
                }
                <li className="p-4 text-xl hover:text-cyan-600 text-white">Contact</li>
        </ul>
        <div onClick={handleChange} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00091a] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className="w-full text-2xl m-4">
            <img src={logo} alt="logo" />
        </div>
            <ul className="uppercase p-4">
                 {
                    menuList?.map((menu, i)=>(
                        <li className="p-4 border-b border-b-gray-900">
                            <a href={menu.link}>{menu.name}</a>
                        </li>
                    ))
                 }
                 <li className="p-4">Contact</li>  
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
