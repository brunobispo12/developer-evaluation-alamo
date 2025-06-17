'use client'
import React, { useState } from 'react'
import UserBadge from '../ui/user-badge'
import { routes } from '@/app/routes'
import { AnimatePresence, motion } from 'framer-motion'
import { usePageStore } from '@/app/store/use-page-store'
import Link from 'next/link'


export default function Aside() {
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const setDisplayName = usePageStore((s) => s.setDisplayName)

  const handleClick = (displayName: string) => {
    setDisplayName(displayName)
  }

  return (
    <aside className='self-stretch w-64 border-r-1 p-2 flex flex-col'>
      <UserBadge
        name='Bruno Bispo'
        avatarUrl='https://media.licdn.com/dms/image/v2/D4D03AQFFjd9Zx8ZSYQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722604126328?e=1755734400&v=beta&t=f6LWpXxN-F1uTXWT04IkF1HSWBm-9mzmkJsEa1ta2I8'
      />

      <nav className='mt-6 flex-1 overflow-auto'>
        <ul>
          {routes.map((route) => {
            const isOpen = open[route.name]
            return (
              <li key={route.name} className='mb-1'>
                {route.children ? (
                  <>
                    <button
                      onClick={() => setOpen((o) => ({ ...o, [route.name]: !o[route.name] }))}
                      className='w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                    >
                      <route.icon className='w-5 h-5 mr-3' />
                      <span className='text-sm flex-1 text-left'>{route.name}</span>
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='pl-8 overflow-hidden'
                        >
                          {route.children!.map((child) => (
                            <li key={child.name} className='mb-1'>
                              <Link
                                href={child.href!}
                                onClick={() => handleClick(`${route.displayName}`)}
                                className='flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                              >
                                <child.icon className='w-4 h-4 mr-2' />
                                <span className='text-sm'>{child.name}</span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={route.href!}
                    onClick={() => handleClick(route.displayName)}
                    className='flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'
                  >
                    <route.icon className='w-5 h-5 mr-3' />
                    <span className='text-sm'>{route.name}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}