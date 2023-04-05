import {useCallback, useState} from 'react';
import {BsChevronDown} from 'react-icons/bs';

import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
const [ShowMobileMenu, setShowMobileMenu] = useState(false);

const toggleMobileMenu = useCallback(() => {
  setShowMobileMenu((current) => !current);
}, [])

  return (
    <nav className="w-full fixed z-40">
      <div className="
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items bg-center
        transition
        duration-500
        bg-zinc-900
        bg-opciity-90
      ">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className="
          flex-row
          ml-8
          gap-7
          hidden
          lg:flex
        ">
          <NavbarItem label="Home"/>
          <NavbarItem label="Series"/>
          <NavbarItem label="Filmes"/>
          <NavbarItem label="Popular"/>
          <NavbarItem label="Milnha Lista"/>
          <NavbarItem label="Browse by Languages"/>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Esxplorar</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={ShowMobileMenu}/>
        </div>
      </div>
     
    </nav>
  )
}

export default Navbar;