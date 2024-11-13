'use client'

import useScrollPos from "@/hooks/useScrollPos";
import MenuItem from "../navbar/elements/navbarItem";
import ContactBtn from "../navbar/elements/ContactBtn";

function Navbar() {

    const isAtTop = useScrollPos();

    return <div className={`mobile:hidden sticky -mt-14 top-0 z-50 ${isAtTop?'opacity-100':'opacity-0 hover:opacity-100 transition-opacity duration-500'} flex justify-end items-center h-14 w-full bg-green`} >
        <div className="flex justify-around text-2xl w-1/2 items-center">
            <MenuItem title={"About"} />
            <MenuItem title={"Projects"} />
            <MenuItem title={"Services"} />
            <ContactBtn title={"Contact"} />
        </div>
    </div>
}

export default Navbar;