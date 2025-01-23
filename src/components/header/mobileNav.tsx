'use client'

import { CiMenuFries } from "react-icons/ci";
import { DrawerMobile } from "../drawer";
import { useState } from "react";

export default function MobileNav() {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        console.log(open)
        setOpen((prev) => !prev);
    }

    return (
        <>
            <CiMenuFries
                onClick={toggleDrawer} 
                style={{fontSize: '32px', color: '#22c55e', cursor: 'pointer'}}
            />
            <DrawerMobile open={open} toggleDrawer={toggleDrawer}/>
        </>
    );
}
