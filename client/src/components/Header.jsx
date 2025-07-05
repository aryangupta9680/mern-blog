import React from 'react'
import { Navbar, TextInput, Button, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-2">
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>Aryan's</span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button color="light" className='lg:hidden' pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className='hidden sm:inline' color="light" pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" >
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink active={path === "/"} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </NavbarLink>
                <NavbarLink active={path === "/about"} as={'div'}>
                    <Link to="/about">
                        About
                    </Link>
                </NavbarLink>
                <NavbarLink active={path === "/projects"} as={'div'}>
                    <Link to="/projects">
                        Projects
                    </Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}
