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
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
    { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
    {
        id: 1,
        title: 'GraphQL API',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Courtney Henry',
                handle: 'courtneyhenry',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Tom Cook',
                handle: 'tomcook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 12,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-pink-600',
    },
    // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative flex w-full max-w-xs flex-1 transform flex-col bg-white pb-4 pt-5 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute right-0 top-0 -mr-12 pt-2 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button
                                        type="button"
                                        onClick={() => setSidebarOpen(false)}
                                        className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=500"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                <nav className="px-2">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-3 h-6 w-6 flex-shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <h3 id="mobile-teams-headline" className="px-3 text-sm font-medium text-gray-500">
                                            Teams
                                        </h3>
                                        <div role="group" aria-labelledby="mobile-teams-headline" className="mt-1 space-y-1">
                                            {teams.map((team) => (
                                                <a
                                                    key={team.name}
                                                    href={team.href}
                                                    className="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                          <span
                              aria-hidden="true"
                              className={classNames(team.bgColorClass, 'mr-4 h-2.5 w-2.5 rounded-full')}
                          />
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </DialogPanel>
                        <div aria-hidden="true" className="w-14 flex-shrink-0">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pb-4 lg:pt-5">
                    <div className="flex flex-shrink-0 items-center px-6">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=500"
                            className="h-8 w-auto"
                        />
                    </div>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
                        {/* User account dropdown */}
                        <Menu as="div" className="relative inline-block px-3 text-left">
                            <div>
                                <MenuButton className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span className="flex w-full items-center justify-between">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <img
                          alt=""
                          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-medium text-gray-900">Jessy Schwarz</span>
                        <span className="truncate text-sm text-gray-500">@jessyschwarz</span>
                      </span>
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </span>
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute left-0 right-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            View profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Notifications
                                        </a>
                                    </MenuItem>
                                </div>
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Get desktop app
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Support
                                        </a>
                                    </MenuItem>
                                </div>
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Logout
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                        {/* Sidebar Search */}
                        <div className="mt-5 px-3">
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    type="text"
                                    placeholder="Search"
                                    className="block w-full rounded-md border-0 py-1.5 pl-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Navigation */}
                        <nav className="mt-6 px-3">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 h-6 w-6 flex-shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8">
                                {/* Secondary navigation */}
                                <h3 id="desktop-teams-headline" className="px-3 text-sm font-medium text-gray-500">
                                    Teams
                                </h3>
                                <div role="group" aria-labelledby="desktop-teams-headline" className="mt-1 space-y-1">
                                    {teams.map((team) => (
                                        <a
                                            key={team.name}
                                            href={team.href}
                                            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        >
                      <span
                          aria-hidden="true"
                          className={classNames(team.bgColorClass, 'mr-4 h-2.5 w-2.5 rounded-full')}
                      />
                                            <span className="truncate">{team.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Main column */}
                <div className="flex flex-col lg:pl-64">
                    {/* Search header */}
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3CenterLeftIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-1">
                                <form action="#" method="GET" className="flex w-full md:ml-0">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5" />
                                        </div>
                                        <input
                                            id="search-field"
                                            name="search-field"
                                            type="search"
                                            placeholder="Search"
                                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="h-8 w-8 rounded-full"
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    View profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Notifications
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Get desktop app
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Support
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >
                                                    Logout
                                                </a>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1">
                        {/* Page title & actions */}
                        <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                            <div className="min-w-0 flex-1">
                                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
                            </div>
                            <div className="mt-4 flex sm:ml-4 sm:mt-0">
                                <button
                                    type="button"
                                    className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-0"
                                >
                                    Share
                                </button>
                                <button
                                    type="button"
                                    className="order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                        {/* Pinned projects */}
                        <div className="mt-6 px-4 sm:px-6 lg:px-8">
                            <h2 className="text-sm font-medium text-gray-900">Pinned Projects</h2>
                            <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                                {pinnedProjects.map((project) => (
                                    <li key={project.id} className="relative col-span-1 flex rounded-md shadow-sm">
                                        <div
                                            className={classNames(
                                                project.bgColorClass,
                                                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                                            )}
                                        >
                                            {project.initials}
                                        </div>
                                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                                                    {project.title}
                                                </a>
                                                <p className="text-gray-500">{project.totalMembers} Members</p>
                                            </div>
                                            <Menu as="div" className="flex-shrink-0 pr-2">
                                                <MenuButton className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                                    <span className="sr-only">Open options</span>
                                                    <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                                                </MenuButton>
                                                <MenuItems
                                                    transition
                                                    className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <div className="py-1">
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                View
                                                            </a>
                                                        </MenuItem>
                                                    </div>
                                                    <div className="py-1">
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                Removed from pinned
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                            >
                                                                Share
                                                            </a>
                                                        </MenuItem>
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects list (only on smallest breakpoint) */}
                        <div className="mt-10 sm:hidden">
                            <div className="px-4 sm:px-6">
                                <h2 className="text-sm font-medium text-gray-900">Projects</h2>
                            </div>
                            <ul role="list" className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
                                {projects.map((project) => (
                                    <li key={project.id}>
                                        <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center space-x-3 truncate">
                        <span
                            aria-hidden="true"
                            className={classNames(project.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full')}
                        />
                        <span className="truncate text-sm font-medium leading-6">
                          {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                        </span>
                      </span>
                                            <ChevronRightIcon
                                                aria-hidden="true"
                                                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects table (small breakpoint and up) */}
                        <div className="mt-8 hidden sm:block">
                            <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                                <table className="min-w-full">
                                    <thead>
                                    <tr className="border-t border-gray-200">
                                        <th
                                            scope="col"
                                            className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                        >
                                            <span className="lg:pl-2">Project</span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Members
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                                        >
                                            Last updated
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                                        />
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                                                <div className="flex items-center space-x-3 lg:pl-2">
                                                    <div
                                                        aria-hidden="true"
                                                        className={classNames(project.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full')}
                                                    />
                                                    <a href="#" className="truncate hover:text-gray-600">
                              <span>
                                {project.title} <span className="font-normal text-gray-500">in {project.team}</span>
                              </span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3 text-sm font-medium text-gray-500">
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex flex-shrink-0 -space-x-1">
                                                        {project.members.map((member) => (
                                                            <img
                                                                key={member.handle}
                                                                alt={member.name}
                                                                src={member.imageUrl}
                                                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                            />
                                                        ))}
                                                    </div>
                                                    {project.totalMembers > project.members.length ? (
                                                        <span className="flex-shrink-0 text-xs font-medium leading-5">
                                +{project.totalMembers - project.members.length}
                              </span>
                                                    ) : null}
                                                </div>
                                            </td>
                                            <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                                                {project.lastUpdated}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
