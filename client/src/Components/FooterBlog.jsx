import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

function FooterBlog() {
  return (
    <Footer  container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Sahand's
              </span>
              Blog
            </Link>
          </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div className="">
                    <FooterTitle title='About' />
                        <FooterLinkGroup col>
                            <FooterLink
                            href='https://www.100jsprojects.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                                100 JS Projects
                            </FooterLink>
                           <FooterLink
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                Sahand's Blog
                            </FooterLink>
                        </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title='Follow us' />
                    <FooterLinkGroup col>
                        <FooterLink
                        href='https://www.github.com/sahandghavidel'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                        Github
                        </FooterLink>
                        <FooterLink href='#'>Discord</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title='Legal' />
                    <FooterLinkGroup col>
                        <FooterLink href='#'>Privacy Policy</FooterLink>
                        <FooterLink href='#'>Terms &amp; Conditions</FooterLink>
                    </FooterLinkGroup>
                </div>
            </div>
        
          
          </div>
          </div>
    </Footer>
  )
}

export default FooterBlog
