'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
    Bars3Icon,
    BookmarkSquareIcon,
    FireIcon,
    HomeIcon,
    InboxIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const user = {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'Trending', href: '#', icon: FireIcon },
    { name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon },
    { name: 'Messages', href: '#', icon: InboxIcon },
    { name: 'Profile', href: '#', icon: UserIcon },
]

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
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative flex w-full max-w-xs flex-1 transform flex-col bg-white transition duration-300 ease-in-out focus:outline-none data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute right-0 top-0 -mr-12 pt-4 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="pb-4 pt-5">
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav aria-label="Sidebar" className="mt-5">
                                    <div className="space-y-1 px-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                                <a href="#" className="group block flex-shrink-0">
                                    <div className="flex items-center">
                                        <div>
                                            <img alt="" src={user.imageUrl} className="inline-block h-10 w-10 rounded-full" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Account Settings</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </DialogPanel>
                        <div aria-hidden="true" className="w-14 flex-shrink-0">
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex w-20 flex-col">
                        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-indigo-600">
                            <div className="flex-1">
                                <div className="flex items-center justify-center bg-indigo-700 py-4">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav aria-label="Sidebar" className="flex flex-col items-center space-y-3 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-indigo-700"
                                        >
                                            <item.icon aria-hidden="true" className="h-6 w-6" />
                                            <span className="sr-only">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 pb-5">
                                <a href="#" className="w-full flex-shrink-0">
                                    <img alt="" src={user.imageUrl} className="mx-auto block h-10 w-10 rounded-full" />
                                    <div className="sr-only">
                                        <p>{user.name}</p>
                                        <p>Account settings</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                    {/* Mobile top navigation */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between bg-indigo-600 px-4 py-2 sm:px-6 lg:px-8">
                            <div>
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <main className="flex flex-1 overflow-hidden">
                        {/* Primary column */}
                        <section
                            aria-labelledby="primary-heading"
                            className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
                        >
                            <h1 id="primary-heading" className="sr-only">
                                Account
                            </h1>
                            {/* Your content */}
                        </section>

                        {/* Secondary column (hidden on smaller screens) */}
                        <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
                            <div className="relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white">
                                {/* Your content */}
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </>
    )
}
