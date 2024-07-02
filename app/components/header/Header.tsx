import Link from "next/link";
import Image from "next/image";
import logo from "../header/Airbnb-Logo.wine.svg";

import Navbar from "./Navbar";


import Searchbar from "./Searchbar";

const Header = ({placeholder}:{placeholder?:string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5  ">
      <div className="container  grid grid-cols-3 relative ">
        <Link href="/" className="relative flex items-center 
        h-10  my-auto ">
        <Image src={logo} alt="logo"
         width={200} height={100}
         className="object-contain object-left"
          />
      </Link>
 <Searchbar placeholder={placeholder}/>
 <Navbar/>
      </div>
     
      
    </header>
  );
};

export default Header;
