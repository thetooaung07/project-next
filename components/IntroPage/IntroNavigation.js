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
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
        <li>
          <Link href="/aboutme">About Me</Link>
        </li>
      </ul>
    </nav>
   )
}
