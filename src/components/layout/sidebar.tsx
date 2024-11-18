"use client"

import Image from "next/image";
import {ROUTES} from "@/routes/routes";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className={`bg-slate-600`}>
      <div className={`py-4 px-3 bg-slate-700`}>
        <Image
          className={'invert'}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>

      <div className={`py-4 px-3`}>
        <nav>
          <ul>
            {ROUTES?.map((item, index) => {
              return (
                <li key={index} className={`block mb-3`}>
                  <Link href={item?.path}
                        className={`flex items-center gap-2 font-bold sidebar-link link ${pathname === item?.path ? 'active ' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         stroke="black" strokeWidth="2">
                      <line x1="2" y1="10" x2="30" y2="10"/>
                      <line x1="2" y1="20" x2="30" y2="20"/>
                      <line x1="10" y1="2" x2="10" y2="30"/>
                      <line x1="20" y1="2" x2="20" y2="30"/>
                    </svg>
                    {item?.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
