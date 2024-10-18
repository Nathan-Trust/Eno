import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Importing the Lucide React Menu icon
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from react-router-dom
import { Button } from "@/components/ui/button";
import enoLogo from "../../../assets/landing-page/eno-logo.png";
import { Eno_Routes } from "@/store/route";

// Dummy menu data
  const links = [
    {
      linkTitle: "Home",
      href: Eno_Routes.home,
    },
    {
      linkTitle: "About",
      href: "#",
    },
    {
      linkTitle: "Destinations",
      href: "#",
    },
    {
      linkTitle: "Packages",
      href: "#",
    },
    {
      linkTitle: "Blog",
      href: "#",
    },
    {
      linkTitle: "Contact Us",
      href: "#",
    },
];
  
const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Use useLocation to get the current URL

  // Scroll listener to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100); // Change the value to match the height of your hero section
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <nav
        className={`${
          scrolled
            && "fixed top-0 left-0 w-full  shadow-lg z-50 p-4   bg-white " 
        } transition-all duration-300 ease-in-out  h-fit `}
    >
      <div className="flex justify-between border py-3 px-4 lg:px-0 items-center screen-max-width">
        <img src={enoLogo} alt="enologo" className="w-20" />
        <div className="hidden lg:flex items-center gap-4">
          {links.map((link) => {
            const { href, linkTitle } = link;
            return (
              <Link
                key={linkTitle}
                to={href}
                className={`font-semibold text-lg group hover:text-gray-500 relative ${
                  location.pathname === href ? "text-primary" : "text-black"
                }`}
              >
                {linkTitle}
              </Link>
            );
          })}
        </div>

        <div className="space-x-3  items-center flex ">
          <button>Log in</button>
          <Button className="rounded-3xl shadow-md">Sign up</Button>
        {/* Menu Icon for smaller screens */}
         <div className="md:hidden menu-icon">
           <Menu
             className={` cursor-pointer`}
             size={28}
           />
         </div>
        </div>
      </div>
    </nav>

    //   <nav
    //     className={`${
    //       scrolled
    //         ? "fixed top-0 left-0 w-full  shadow-lg z-50 p-4   bg-white " // Navbar after scrolling
    //         : "absolute md:top-4 w-full  bg-transparent z-50 p-4 md:p-4 md:py-2 lg:px-0 "
    //     } transition-all duration-300 ease-in-out  h-fit `}
    //   >
    //     <div className="flex justify-between screen-max-width mx-auto items-center">
    //       {/* Logo or Brand Name */}
    //       <div className="text-lg flex flex-col items-center font-bold text-black">
    //         <img
    //           src={greenbountyLogo}
    //           alt=""
    //           className={`${scrolled ? "h-8 " : "w-14 lg:h-auto object-contain"}`}
    //         />
    //         <p>GreenBounty</p>
    //       </div>

    //       {/* Menu Icon for smaller screens */}
    //       <div className="md:hidden menu-icon">
    //         <Menu
    //           className={` cursor-pointer`}
    //           size={28}
    //           onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
    //         />
    //       </div>

    //       {/* Desktop Menu */}
    //       <div className="hidden md:flex items-center gap-6  ">
    //         <ul className={`flex space-x-8 items-center `}>
    //           {menuData.map((item, index) => (
    //             <li key={index}>
    //               <Link
    //                 to={item.url}
    //                 className={`font-semibold text-lg group hover:text-gray-500 relative ${
    //                   location.pathname === item.url
    //                     ? "text-green-500"
    //                     : "text-black"
    //                 }`}
    //               >
    //                 {item.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>

    //         <Button className=" ">Start Recycling</Button>
    //       </div>
    //     </div>

    //     {/* Mobile Menu */}
    //     {isMenuOpen && (
    //       <ul
    //         ref={menuRef} // Ref to the mobile menu for "click outside" detection
    //         className={`md:hidden flex flex-col items-center  bg-white shadow-md py-6 mt-2 rounded-md space-y-4 ${
    //           scrolled ? "text-black" : "text-black"
    //         } animate-fadeIn`}
    //       >
    //         {menuData.map((item, index) => (
    //           <li key={index}>
    //             <Link
    //               to={item.url}
    //               className="font-semibold text-lg hover:text-gray-500"
    //             >
    //               {item.title}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </nav>
    // );
  );
};

export default Navbar;



    