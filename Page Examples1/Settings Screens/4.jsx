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
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Radio,
    RadioGroup,
} from '@headlessui/react'
import { HomeIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Applicants', href: '#' },
    { name: 'Company', href: '#' },
]
const breadcrumbs = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const team = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Bessie Richards',
        email: 'bessie.richards@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Floyd Black',
        email: 'floyd.black@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
const settings = [
    { name: 'Public access', description: 'This project would be available to anyone who has the link' },
    { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
    { name: 'Private to you', description: 'You are the only one able to access this project' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selected, setSelected] = useState(settings[0])

    return (
        <>
            <Disclosure as="nav" aria-label="Global" className="bg-sky-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-sky-400"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                            <div className="w-full max-w-lg lg:max-w-xs">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative text-white focus-within:text-gray-400">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        type="search"
                                        placeholder="Search"
                                        className="block w-full rounded-md border-0 bg-sky-400 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center lg:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="hidden lg:ml-4 lg:flex lg:items-center">
                            <button
                                type="button"
                                className="relative flex-shrink-0 rounded-full bg-sky-500 p-1 text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Notificaitons</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-4 flex-shrink-0">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-sky-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-sky-400 hover:text-white"
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                    <div className="border-t border-sky-500 pb-3 pt-4">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">{user.name}</div>
                                <div className="text-sm font-medium text-sky-200">{user.email}</div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto flex-shrink-0 rounded-full bg-sky-500 p-1 text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-3 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-400 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="hidden border-b border-gray-200 bg-white lg:flex">
                <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
                    <li className="flex">
                        <div className="flex items-center">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                                <span className="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                    {breadcrumbs.map((item) => (
                        <li key={item.name} className="flex">
                            <div className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 44"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                    className="h-full w-6 flex-shrink-0 text-gray-200"
                                >
                                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                </svg>
                                <a
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    {item.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>

            <main className="mx-auto max-w-lg px-4 pb-12 pt-10 lg:pb-16">
                <form>
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-lg font-medium leading-6 text-gray-900">Project Settings</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Let’s get started by filling in the information below to create your new project.
                            </p>
                        </div>

                        <div>
                            <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Project Name
                            </label>
                            <div className="mt-2">
                                <input
                                    defaultValue="Project Nero"
                                    id="project-name"
                                    name="project-name"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="space-y-2">
                                <label htmlFor="add-team-members" className="block text-sm font-medium leading-6 text-gray-900">
                                    Add Team Members
                                </label>
                                <p id="add-team-members-helper" className="sr-only">
                                    Search by email address
                                </p>
                                <div className="flex">
                                    <div className="flex-grow">
                                        <input
                                            id="add-team-members"
                                            name="add-team-members"
                                            type="text"
                                            placeholder="Email address"
                                            aria-describedby="add-team-members-helper"
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <span className="ml-3">
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Add
                    </button>
                  </span>
                                </div>
                            </div>

                            <div className="border-b border-gray-200">
                                <ul role="list" className="divide-y divide-gray-200">
                                    {team.map((person) => (
                                        <li key={person.email} className="flex py-4">
                                            <img alt="" src={person.imageUrl} className="h-10 w-10 rounded-full" />
                                            <div className="ml-3 flex flex-col">
                                                <span className="text-sm font-medium text-gray-900">{person.name}</span>
                                                <span className="text-sm text-gray-500">{person.email}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <fieldset>
                            <legend className="block text-sm font-medium leading-6 text-gray-900">Privacy</legend>
                            <RadioGroup
                                value={selected}
                                onChange={setSelected}
                                className="isolate mt-2 -space-y-px rounded-md bg-white shadow-sm"
                            >
                                {settings.map((setting, settingIdx) => (
                                    <Radio
                                        key={setting.name}
                                        value={setting}
                                        aria-label={setting.name}
                                        aria-description={setting.description}
                                        className={classNames(
                                            settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                            settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                            'group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-sky-200 data-[checked]:bg-sky-50',
                                        )}
                                    >
                    <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-sky-600 group-data-[focus]:ring-2 group-data-[focus]:ring-sky-500 group-data-[focus]:ring-offset-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                                        <span className="ml-3 flex flex-col">
                      <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-sky-900">
                        {setting.name}
                      </span>
                      <span className="block text-sm text-gray-500 group-data-[checked]:text-sky-700">
                        {setting.description}
                      </span>
                    </span>
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </fieldset>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                                Tags
                            </label>
                            <input
                                id="tags"
                                name="tags"
                                type="text"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="flex justify-end gap-x-3">
                            <button
                                type="button"
                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                            >
                                Create this project
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}
