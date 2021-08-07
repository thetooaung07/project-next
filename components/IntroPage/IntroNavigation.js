import React from 'react'
import Link from 'next/link'
import cls from "./IntroNavigation.module.css"

export default function IntroNavigation() {
   return (
      <nav className={cls.listElements}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">About Me</Link>
        </li>
        <li>
          <Link href="/">Support</Link>
        </li>
      </ul>
    </nav>
   )
}
