import React from 'react'
import {Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from  'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice'

function Header() {
  const {currentUser}=useSelector(state=>state.user);
  const {theme}=useSelector(state=>state.theme);
  const dispath=useDispatch();
  const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to={'/'} className='self-center whitespace-nowrap font-semibold dark:text-white'>
        <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-white'>Jugnu</span>
        Everyday
      </Link>
      <form action="" method="post">
        <TextInput
          type='text'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        ></TextInput>
      </form>
      <Button className='w-12 h-10 lg:hidden' color={"gray"}>
        {AiOutlineSearch}
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color={'gray'} onClick={()=>dispath(toggleTheme())}>
          {
            theme==='light' ? <FaSun/> : <FaMoon/>
          }
        </Button>
        {
          currentUser ? 
          (
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='user'
                img={currentUser.profilePicture}
                rounded
              />
            }
            >
              <DropdownHeader>
                <span className='block text-sm'>@{currentUser.username}</span>
                <span className='block text-sm'>{currentUser.email}</span>

              </DropdownHeader>
              <Link to={'/dashboard?tab=profile'}>
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownDivider/>
                <Link to={'/signout'}>
                <DropdownItem>Signout</DropdownItem>
              </Link>
            </Dropdown>
          ):
          (
        <Link to={'/signin'}>
         <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
            Sign In
        </Button>
        </Link>
          )
        }
        <NavbarToggle/>
      </div>
        <NavbarCollapse>
          <NavbarLink active={path=="/"}>
            <Link to={'/'}>
              Home
            </Link>
          </NavbarLink>
          <NavbarLink active={path=="/about"}>
            <Link to={'/about'}>
              About
            </Link>
          </NavbarLink>
          <NavbarLink active={path=="/projects"}>
            <Link to={'/projects'}>
              Projects
            </Link>
          </NavbarLink>
          <NavbarLink active={path=="/contact"}>
            <Link to={'/contact'}>
              Contact Us
            </Link>
          </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

export default Header
