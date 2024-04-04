'use client'

import { Fragment, useState} from "react";
import { Dialog, Transition} from "@headlessui/react"
import {menuItems} from "@/app/data/constants";
import {NavLink} from "@/components/navBar/navLink";


export function NavBar() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
          <nav className='container flex items-center justify-between px-4 py-4 mx-auto font-semibold leading-6 lg:py-6 max-w-md'>
              {menuItems.map((item, index) => {
                return (
                    <NavLink key={`${item.name}`} href={item.path} exact className='transition duration-300 text-hover'>
                      {item.name}
                    </NavLink>
                );
              })}
          </nav>
      </>
  )
}