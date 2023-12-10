import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-0'>
        <MotionLink href="/" className="w-44">
          <img className="w-44" src="./img/logo-divinea.svg" />
        </MotionLink>
    </div>
  )
}

export default Logo