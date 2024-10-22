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

import { Fragment, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ArchiveBoxIcon as ArchiveBoxIconMini,
    ArrowUturnLeftIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    EllipsisVerticalIcon,
    FolderArrowDownIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    UserPlusIcon,
} from '@heroicons/react/20/solid'
import {
    ArchiveBoxIcon as ArchiveBoxIconOutline,
    Bars3Icon,
    BellIcon,
    FlagIcon,
    InboxIcon,
    NoSymbolIcon,
    PencilSquareIcon,
    UserCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const user = {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    {
        name: 'Inboxes',
        href: '#',
        children: [
            { name: 'Technical Support', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'General', href: '#' },
        ],
    },
    { name: 'Reporting', href: '#', children: [] },
    { name: 'Settings', href: '#', children: [] },
]
const sidebarNavigation = [
    { name: 'Open', href: '#', icon: InboxIcon, current: true },
    { name: 'Archive', href: '#', icon: ArchiveBoxIconOutline, current: false },
    { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
    { name: 'Spam', href: '#', icon: NoSymbolIcon, current: false },
    { name: 'Drafts', href: '#', icon: PencilSquareIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
]
const messages = [
    {
        id: 1,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 2,
        subject: 'Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil',
        sender: 'Virginia Abshire',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 3,
        subject: 'Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus',
        sender: 'Kyle Gulgowski',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 4,
        subject: 'Eos sequi et aut ex impedit',
        sender: 'Hattie Haag',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 5,
        subject: 'Quisquam veniam explicabo',
        sender: 'Wilma Glover',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 6,
        subject: 'Est ratione molestiae modi maiores consequatur eligendi et excepturi magni',
        sender: 'Dolores Morissette',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 7,
        subject: 'Commodi deserunt aut veniam rem ipsam',
        sender: 'Guadalupe Walsh',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 8,
        subject: 'Illo illum aut debitis earum',
        sender: 'Jasmine Hansen',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 9,
        subject: 'Qui dolore iste ut est cumque sed',
        sender: 'Ian Volkman',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 10,
        subject: 'Aut sed aut illum delectus maiores laboriosam ex',
        sender: 'Rafael Klocko',
        href: '#',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
]
const message = {
    subject: 'Re: New pricing for existing customers',
    sender: 'joearmstrong@example.com',
    status: 'Open',
    items: [
        {
            id: 1,
            author: 'Joe Armstrong',
            date: 'Yesterday at 7:24am',
            datetime: '2021-01-28T19:24',
            body: "<p>Thanks so much! Can't wait to try it out.</p>",
        },
        {
            id: 2,
            author: 'Monica White',
            date: 'Wednesday at 4:35pm',
            datetime: '2021-01-27T16:35',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
        },
        {
            id: 3,
            author: 'Joe Armstrong',
            date: 'Wednesday at 4:09pm',
            datetime: '2021-01-27T16:09',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className="flex h-full flex-col">
                {/* Top nav*/}
                <header className="relative flex h-16 flex-shrink-0 items-center bg-white">
                    {/* Logo area */}
                    <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
                        <a
                            href="#"
                            className="flex h-16 w-16 items-center justify-center bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
                        >
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Picker area */}
                    <div className="mx-auto lg:hidden">
                        <div className="relative">
                            <label htmlFor="inbox-select" className="sr-only">
                                Choose inbox
                            </label>
                            <select
                                id="inbox-select"
                                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="/open">Open</option>
                                <option value="/archived">Archived</option>
                                <option value="/assigned">Assigned</option>
                                <option value="/flagged">Flagged</option>
                                <option value="/spam">Spam</option>
                                <option value="/drafts">Drafts</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    {/* Menu button area */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="relative -mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                        </button>
                    </div>

                    {/* Desktop nav area */}
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
                                <label htmlFor="desktop-search" className="sr-only">
                                    Search all inboxes
                                </label>
                                <input
                                    id="desktop-search"
                                    type="search"
                                    placeholder="Search all inboxes"
                                    className="block w-full border-transparent pl-12 text-gray-900 focus:border-transparent focus:ring-0 sm:text-sm"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
                            <nav aria-label="Global" className="flex space-x-10">
                                {navigation.map((item) =>
                                    item.children.length ? (
                                        <Menu key={item.name} as="div" className="relative text-left">
                                            <MenuButton className="flex items-center rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                                                <span>{item.name}</span>
                                                <ChevronDownIcon aria-hidden="true" className="ml-1 h-5 w-5 text-gray-500" />
                                            </MenuButton>

                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div className="py-1">
                                                    {item.children.map((child) => (
                                                        <MenuItem key={child.name}>
                                                            <a
                                                                href={child.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                            >
                                                                {child.name}
                                                            </a>
                                                        </MenuItem>
                                                    ))}
                                                </div>
                                            </MenuItems>
                                        </Menu>
                                    ) : (
                                        <a key={item.name} href={item.href} className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </a>
                                    ),
                                )}
                            </nav>
                            <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a href="#" className="relative -mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </span>

                                <Menu as="div" className="relative inline-block text-left">
                                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Your Profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    Sign Out
                                                </a>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
                    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                        <DialogBackdrop
                            transition
                            className="hidden transition-opacity duration-300 ease-linear data-[closed]:opacity-0 sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75"
                        />

                        <div className="fixed inset-0 z-40">
                            <DialogPanel
                                transition
                                aria-label="Global"
                                className="fixed inset-0 z-40 h-full w-full bg-white transition duration-150 data-[closed]:scale-110 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg sm:duration-300 sm:ease-in-out data-[closed]:sm:translate-x-full data-[closed]:sm:scale-100 data-[closed]:sm:opacity-100"
                            >
                                <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                                    <a href="#">
                                        <img
                                            alt="Your Company"
                                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=cyan&shade=400"
                                            className="block h-8 w-auto"
                                        />
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative -mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close main menu</span>
                                        <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                                    </button>
                                </div>
                                <div className="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                                    <div className="relative text-gray-400 focus-within:text-gray-500">
                                        <label htmlFor="mobile-search" className="sr-only">
                                            Search all inboxes
                                        </label>
                                        <input
                                            id="mobile-search"
                                            type="search"
                                            placeholder="Search all inboxes"
                                            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                                            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-8xl mx-auto px-2 py-3 sm:px-4">
                                    {navigation.map((item) => (
                                        <Fragment key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                                            >
                                                {item.name}
                                            </a>
                                            {item.children.map((child) => (
                                                <a
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                                                >
                                                    {child.name}
                                                </a>
                                            ))}
                                        </Fragment>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pb-3 pt-4">
                                    <div className="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                                        </div>
                                        <div className="ml-3 min-w-0 flex-1">
                                            <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                                            <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <a
                                            href="#"
                                            className="relative ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                                        </a>
                                    </div>
                                    <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                                        {userNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                </header>

                {/* Bottom section */}
                <div className="flex min-h-0 flex-1 overflow-hidden">
                    {/* Narrow sidebar*/}
                    <nav aria-label="Sidebar" className="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800">
                        <div className="relative flex w-20 flex-col space-y-3 p-3">
                            {sidebarNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                                        'inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg',
                                    )}
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Main area */}
                    <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex">
                        <section
                            aria-labelledby="message-heading"
                            className="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last"
                        >
                            {/* Top section */}
                            <div className="flex-shrink-0 border-b border-gray-200 bg-white">
                                {/* Toolbar*/}
                                <div className="flex h-16 flex-col justify-center">
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <div className="flex justify-between py-3">
                                            {/* Left buttons */}
                                            <div>
                                                <div className="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                          <span className="inline-flex sm:shadow-sm">
                            <button
                                type="button"
                                className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                            >
                              <ArrowUturnLeftIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                              Reply
                            </button>
                            <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                            >
                              <PencilIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                              Note
                            </button>
                            <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                            >
                              <UserPlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                              Assign
                            </button>
                          </span>

                                                    <span className="hidden space-x-3 lg:flex">
                            <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                            >
                              <ArchiveBoxIconMini aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                              Archive
                            </button>
                            <button
                                type="button"
                                className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex"
                            >
                              <FolderArrowDownIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                              Move
                            </button>
                          </span>

                                                    <Menu as="div" className="relative -ml-px block sm:shadow-sm lg:hidden">
                                                        <div>
                                                            <MenuButton className="relative inline-flex items-center gap-x-1.5 rounded-r-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 sm:rounded-md sm:px-3">
                                                                <span className="sr-only sm:hidden">More</span>
                                                                <span className="hidden sm:inline">More</span>
                                                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400 sm:-mr-1" />
                                                            </MenuButton>
                                                        </div>

                                                        <MenuItems
                                                            transition
                                                            className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                        >
                                                            <div className="py-1">
                                                                <MenuItem>
                                                                    <a
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 sm:hidden"
                                                                    >
                                                                        Note
                                                                    </a>
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <a
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 sm:hidden"
                                                                    >
                                                                        Assign
                                                                    </a>
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <a
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Archive
                                                                    </a>
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <a
                                                                        href="#"
                                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                    >
                                                                        Move
                                                                    </a>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </Menu>
                                                </div>
                                            </div>

                                            {/* Right buttons */}
                                            <nav aria-label="Pagination">
                        <span className="isolate inline-flex rounded-md shadow-sm">
                          <a
                              href="#"
                              className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronUpIcon aria-hidden="true" className="h-5 w-5" />
                          </a>
                          <a
                              href="#"
                              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                          </a>
                        </span>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/* Message header */}
                            </div>

                            <div className="min-h-0 flex-1 overflow-y-auto">
                                <div className="bg-white pb-6 pt-5 shadow">
                                    <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
                                        <div className="sm:w-0 sm:flex-1">
                                            <h1 id="message-heading" className="text-lg font-medium text-gray-900">
                                                {message.subject}
                                            </h1>
                                            <p className="mt-1 truncate text-sm text-gray-500">{message.sender}</p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
                      <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">
                        {message.status}
                      </span>
                                            <Menu as="div" className="relative ml-3 inline-block text-left">
                                                <div>
                                                    <MenuButton className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                                        <span className="sr-only">Open options</span>
                                                        <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                                                    </MenuButton>
                                                </div>

                                                <MenuItems
                                                    transition
                                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <div className="py-1">
                                                        <MenuItem>
                                                            <button
                                                                type="button"
                                                                className="flex w-full justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                <span>Copy email address</span>
                                                            </button>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                <span>Previous conversations</span>
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                <span>View original</span>
                                                            </a>
                                                        </MenuItem>
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                                {/* Thread section*/}
                                <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
                                    {message.items.map((item) => (
                                        <li key={item.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                                            <div className="sm:flex sm:items-baseline sm:justify-between">
                                                <h3 className="text-base font-medium">
                                                    <span className="text-gray-900">{item.author}</span>{' '}
                                                    <span className="text-gray-600">wrote</span>
                                                </h3>
                                                <p className="mt-1 whitespace-nowrap text-sm text-gray-600 sm:ml-3 sm:mt-0">
                                                    <time dateTime={item.datetime}>{item.date}</time>
                                                </p>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={{ __html: item.body }}
                                                className="mt-4 space-y-6 text-sm text-gray-800"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Message list*/}
                        <aside className="hidden xl:order-first xl:block xl:flex-shrink-0">
                            <div className="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 flex-col justify-center bg-white px-6">
                                        <div className="flex items-baseline space-x-3">
                                            <h2 className="text-lg font-medium text-gray-900">Inbox</h2>
                                            <p className="text-sm font-medium text-gray-500">{messages.length} messages</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-t border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
                                        Sorted by date
                                    </div>
                                </div>
                                <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
                                    <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                                        {messages.map((message) => (
                                            <li
                                                key={message.id}
                                                className="relative bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-50"
                                            >
                                                <div className="flex justify-between space-x-3">
                                                    <div className="min-w-0 flex-1">
                                                        <a href={message.href} className="block focus:outline-none">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            <p className="truncate text-sm font-medium text-gray-900">{message.sender}</p>
                                                            <p className="truncate text-sm text-gray-500">{message.subject}</p>
                                                        </a>
                                                    </div>
                                                    <time
                                                        dateTime={message.datetime}
                                                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                                                    >
                                                        {message.date}
                                                    </time>
                                                </div>
                                                <div className="mt-1">
                                                    <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </>
    )
}
