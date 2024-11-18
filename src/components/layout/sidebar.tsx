"use client"
import Image from "next/image";
import {ROUTES} from "@/routes/routes";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Icons} from "@/components/layout/icons";
import {useState} from "react";

export const Sidebar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <>
      <button type={'button'} className={'absolute top-0 left-0 lg:hidden text-gray-100 p-5'} onClick={() => setMenuOpen(true)}>
        <svg width={25} height={25}>
          <use href={`#menu-button`}/>
        </svg>
      </button>
      <div
        className={`w-full max-w-[300px] bg-slate-600 fixed lg:static top-0 left-0 h-full lg:max-w-none transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <Icons/>
        <button type={'button'} className={`absolute top-0 left-full text-gray-100 p-5 ${menuOpen ? 'block' : 'hidden'} lg:hidden`}
                onClick={() => setMenuOpen(false)}>
          <svg width={25} height={25}>
            <use href={`#close`}/>
          </svg>
        </button>
        <div className={`mb-6 bg-slate-700 flex gap-3`}>
          <div className={`bg-slate-800 p-3 w-28 flex items-center justify-center`}>
            <Image
              className={'invert'}
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </div>
          <div className={`flex flex-col gap-1 py-3 px-2`}>
            <span className={`text-lg`}>Test project</span>
            <span className={`text-sm opacity-70`}>User Name</span>
          </div>
        </div>

        <div className={`py-4 px-3`}>
          <nav>
            <ul>
              {ROUTES?.map((item, index) => {
                return (
                  <li key={index} className={`block mb-3`}>
                    <Link href={item?.path}
                          className={`flex items-center gap-2 font-bold sidebar-link link ${pathname === item?.path ? 'active ' : ''}`}>
                      <svg width={25} height={25}>
                        <use href={`#${item?.icon}`}/>
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
    </>
  )
}
