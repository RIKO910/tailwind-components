/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    CogIcon,
    HomeIcon,
    PhotoIcon,
    PlusIcon,
    RectangleStackIcon,
    Squares2X2Icon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const sidebarNavigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'All Files', href: '#', icon: Squares2X2Icon, current: false },
    { name: 'Photos', href: '#', icon: PhotoIcon, current: true },
    { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Albums', href: '#', icon: RectangleStackIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className="flex h-full">
                {/* Narrow sidebar */}
                <div className="hidden w-28 overflow-y-auto bg-indigo-700 md:block">
                    <div className="flex w-full flex-col items-center py-6">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="mt-6 w-full flex-1 space-y-1 px-2">
                            {sidebarNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                                        'group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium',
                                    )}
                                >
                                    <item.icon
                                        aria-hidden="true"
                                        className={classNames(
                                            item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                                            'h-6 w-6',
                                        )}
                                    />
                                    <span className="mt-2">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-20 md:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative flex w-full max-w-xs flex-1 transform flex-col bg-indigo-700 pb-4 pt-5 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute right-0 top-1 -mr-14 p-1 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                        <span className="sr-only">Close sidebar</span>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                <nav className="flex h-full flex-col">
                                    <div className="space-y-1">
                                        {sidebarNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-indigo-800 text-white'
                                                        : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                                                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                                                        'mr-3 h-6 w-6',
                                                    )}
                                                />
                                                <span>{item.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </DialogPanel>
                        <div aria-hidden="true" className="w-14 flex-shrink-0">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>

                {/* Content area */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    <header className="w-full">
                        <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3BottomLeftIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                            <div className="flex flex-1 justify-between px-4 sm:px-6">
                                <div className="flex flex-1">
                                    <form action="#" method="GET" className="flex w-full md:ml-0">
                                        <label htmlFor="search-field" className="sr-only">
                                            Search all files
                                        </label>
                                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                                            </div>
                                            <input
                                                id="search-field"
                                                name="search-field"
                                                type="search"
                                                placeholder="Search"
                                                className="h-full w-full border-0 py-2 pl-8 pr-3 text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative flex-shrink-0">
                                        <div>
                                            <MenuButton className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                    className="h-8 w-8 rounded-full"
                                                />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <PlusIcon aria-hidden="true" className="h-6 w-6" />
                                        <span className="sr-only">Add file</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main content */}
                    <div className="flex flex-1 items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            {/* Primary column */}
                            <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col lg:order-last">
                                <h1 id="primary-heading" className="sr-only">
                                    Photos
                                </h1>
                                {/* Your content */}
                            </section>
                        </main>

                        {/* Secondary column (hidden on smaller screens) */}
                        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white lg:block">
                            {/* Your content */}
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
