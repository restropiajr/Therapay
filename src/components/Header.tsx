'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { cm } from '@/utils'

type HeaderProps = {
  //
}

export const Header: FC<HeaderProps> = () => {
  const [navBG, setNavBG] = useState<string>('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      setNavBG(
        window.scrollY >= 50
          ? 'bg-[#FFBFA3]/60 backdrop-blur-md border-b border-white/60 shadow-md'
          : 'bg-transparent backdrop-blur-0 border-transparent shadow-none'
      )
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cm(
        'fixed top-0 left-0 z-10 flex h-[80px] w-full items-center justify-center transition duration-500 ease-in-out',
        navBG
      )}
    >
      <div className="flex w-3/4 items-center justify-between gap-4">
        <Link href="/" className="hover-transition link">
          Home
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link href="/coming-soon" className="hover-transition link text-center">
            Client Calculator
          </Link>
          <Link href="/coming-soon" className="hover-transition link text-center">
            Payroll Calculator
          </Link>
        </div>
      </div>
    </nav>
  )
}
