/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
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
    HeartIcon,
    HomeIcon,
    PhotoIcon,
    RectangleStackIcon,
    Squares2X2Icon as Squares2X2IconOutline,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    Bars4Icon,
    MagnifyingGlassIcon,
    PencilIcon,
    PlusIcon,
    Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'All Files', href: '#', icon: Squares2X2IconOutline, current: false },
    { name: 'Photos', href: '#', icon: PhotoIcon, current: true },
    { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Albums', href: '#', icon: RectangleStackIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]
const tabs = [
    { name: 'Recently Viewed', href: '#', current: true },
    { name: 'Recently Added', href: '#', current: false },
    { name: 'Favorited', href: '#', current: false },
]
const files = [
    {
        name: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        current: true,
    },
    // More files...
]
const currentFile = {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    information: {
        'Uploaded by': 'Marie Culver',
        Created: 'June 8, 2020',
        'Last modified': 'June 8, 2020',
        Dimensions: '4032 x 3024',
        Resolution: '72 x 72',
    },
    sharedWith: [
        {
            id: 1,
            name: 'Aimee Douglas',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
        },
        {
            id: 2,
            name: 'Andrea McMillan',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
}

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
                            {navigation.map((item) => (
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
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 md:hidden">
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
                                        {navigation.map((item) => (
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
                                        <label htmlFor="desktop-search-field" className="sr-only">
                                            Search all files
                                        </label>
                                        <label htmlFor="mobile-search-field" className="sr-only">
                                            Search all files
                                        </label>
                                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                                            </div>
                                            <input
                                                id="mobile-search-field"
                                                name="mobile-search-field"
                                                type="search"
                                                placeholder="Search"
                                                className="h-full w-full border-0 py-2 pl-8 pr-3 text-base text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
                                            />
                                            <input
                                                id="desktop-search-field"
                                                name="desktop-search-field"
                                                type="search"
                                                placeholder="Search all files"
                                                className="hidden h-full w-full border-0 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative flex-shrink-0">
                                        <div>
                                            <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                                                <span className="absolute -inset-1.5" />
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
                                        className="relative rounded-full bg-indigo-600 p-1.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <PlusIcon aria-hidden="true" className="h-5 w-5" />
                                        <span className="sr-only">Add file</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main content */}
                    <div className="flex flex-1 items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                                <div className="flex">
                                    <h1 className="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
                                    <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                                        <button
                                            type="button"
                                            className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <Bars4Icon aria-hidden="true" className="h-5 w-5" />
                                            <span className="sr-only">Use list view</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <Squares2X2IconMini aria-hidden="true" className="h-5 w-5" />
                                            <span className="sr-only">Use grid view</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="mt-3 sm:mt-2">
                                    <div className="sm:hidden">
                                        <label htmlFor="tabs" className="sr-only">
                                            Select a tab
                                        </label>
                                        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                        <select
                                            id="tabs"
                                            name="tabs"
                                            defaultValue="Recently Viewed"
                                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                        >
                                            <option>Recently Viewed</option>
                                            <option>Recently Added</option>
                                            <option>Favorited</option>
                                        </select>
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="flex items-center border-b border-gray-200">
                                            <nav aria-label="Tabs" className="-mb-px flex flex-1 space-x-6 xl:space-x-8">
                                                {tabs.map((tab) => (
                                                    <a
                                                        key={tab.name}
                                                        href={tab.href}
                                                        aria-current={tab.current ? 'page' : undefined}
                                                        className={classNames(
                                                            tab.current
                                                                ? 'border-indigo-500 text-indigo-600'
                                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                            'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                                                        )}
                                                    >
                                                        {tab.name}
                                                    </a>
                                                ))}
                                            </nav>
                                            <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                                                <button
                                                    type="button"
                                                    className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                >
                                                    <Bars4Icon aria-hidden="true" className="h-5 w-5" />
                                                    <span className="sr-only">Use list view</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                >
                                                    <Squares2X2IconMini aria-hidden="true" className="h-5 w-5" />
                                                    <span className="sr-only">Use grid view</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <section aria-labelledby="gallery-heading" className="mt-8 pb-16">
                                    <h2 id="gallery-heading" className="sr-only">
                                        Recently viewed
                                    </h2>
                                    <ul
                                        role="list"
                                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                                    >
                                        {files.map((file) => (
                                            <li key={file.name} className="relative">
                                                <div
                                                    className={classNames(
                                                        file.current
                                                            ? 'ring-2 ring-indigo-500 ring-offset-2'
                                                            : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                                                        'group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100',
                                                    )}
                                                >
                                                    <img
                                                        alt=""
                                                        src={file.source}
                                                        className={classNames(
                                                            file.current ? '' : 'group-hover:opacity-75',
                                                            'pointer-events-none object-cover',
                                                        )}
                                                    />
                                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                                        <span className="sr-only">View details for {file.name}</span>
                                                    </button>
                                                </div>
                                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                                    {file.name}
                                                </p>
                                                <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </main>

                        {/* Details sidebar */}
                        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
                            <div className="space-y-6 pb-16">
                                <div>
                                    <div className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
                                        <img alt="" src={currentFile.source} className="object-cover" />
                                    </div>
                                    <div className="mt-4 flex items-start justify-between">
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-900">
                                                <span className="sr-only">Details for </span>
                                                {currentFile.name}
                                            </h2>
                                            <p className="text-sm font-medium text-gray-500">{currentFile.size}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <HeartIcon aria-hidden="true" className="h-6 w-6" />
                                            <span className="sr-only">Favorite</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Information</h3>
                                    <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                                        {Object.keys(currentFile.information).map((key) => (
                                            <div key={key} className="flex justify-between py-3 text-sm font-medium">
                                                <dt className="text-gray-500">{key}</dt>
                                                <dd className="whitespace-nowrap text-gray-900">{currentFile.information[key]}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Description</h3>
                                    <div className="mt-2 flex items-center justify-between">
                                        <p className="text-sm italic text-gray-500">Add a description to this image.</p>
                                        <button
                                            type="button"
                                            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <PencilIcon aria-hidden="true" className="h-5 w-5" />
                                            <span className="sr-only">Add description</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Shared with</h3>
                                    <ul role="list" className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                                        {currentFile.sharedWith.map((person) => (
                                            <li key={person.id} className="flex items-center justify-between py-3">
                                                <div className="flex items-center">
                                                    <img alt="" src={person.imageUrl} className="h-8 w-8 rounded-full" />
                                                    <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Remove<span className="sr-only"> {person.name}</span>
                                                </button>
                                            </li>
                                        ))}
                                        <li className="flex items-center justify-between py-2">
                                            <button
                                                type="button"
                                                className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                          <PlusIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                                                <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                          Share
                        </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex gap-x-3">
                                    <button
                                        type="button"
                                        className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Download
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
