import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from './Icons'
import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import useScrollDirection from './hooks/useScrollDirection'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky ${ scrollDirection === "down" ? "-top-32 opacity-0" : "top-0 opacity-100"}
                  bg-white
                  bg-opacity-80           
                  w-full
                  px-32
                  font-medium
                  flex
                  items-center
                  justify-between
                  dark:text-light
                  dark:bg-black
                  fixed
                  z-10
                  lg:px-16
                  md:px-12
                  sm:px-8
                  h-28
                  transition-all
                  duration-500`}
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">

        <Logo />

        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/detail" title="Esperienze" className="mx-4" />
          <CustomLink href="/" title="Cantine" className="mx-4" />
          <CustomLink href="/" title="Chi Siamo" className="mx-4" />
          <CustomLink href="/" title="Blog" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ease
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            // initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            // animate={{ scale: 1, opacity: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring' }}
            className="w-full
            h-full
            flex
            flex-col
            justify-between
            z-30
            items-center
            fixed
            top-0
            left-0
            -translate-x-1/2
            -translate-y-1/2
            bg-dark/90
            dark:bg-light/75
            
            backdrop-blur-md
            py-32
            "
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/"
                title="Esperienze"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/"
                title="Cantine"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/"
                title="Chi Siamo"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/"
                title="Blog"
                className=""
                toggle={handleClick}
              />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://twitter.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
              >
                {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
