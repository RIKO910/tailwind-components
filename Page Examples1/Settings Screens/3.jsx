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
    Description,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Field,
    Label,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
    Bars3Icon,
    BellIcon,
    CogIcon,
    CreditCardIcon,
    KeyIcon,
    SquaresPlusIcon,
    UserCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const user = {
    name: 'Debbie Lewis',
    handle: 'deblewis',
    email: 'debbielewis@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Jobs', href: '#', current: false },
    { name: 'Applicants', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
]
const subNavigation = [
    { name: 'Profile', href: '#', icon: UserCircleIcon, current: true },
    { name: 'Account', href: '#', icon: CogIcon, current: false },
    { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [availableToHire, setAvailableToHire] = useState(true)
    const [privateAccount, setPrivateAccount] = useState(false)
    const [allowCommenting, setAllowCommenting] = useState(true)
    const [allowMentions, setAllowMentions] = useState(true)

    return (
        <div>
            <Disclosure as="div" className="relative overflow-hidden bg-sky-700 pb-32">
                <nav className="relative z-10 border-b border-teal-500 border-opacity-25 bg-transparent data-[open]:bg-sky-900 lg:border-none lg:bg-transparent data-[open]:lg:bg-transparent">
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
                            <div className="flex items-center px-2 lg:px-0">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=teal&shade=400"
                                        className="block h-8 w-auto"
                                    />
                                </div>
                                <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                                    <div className="flex">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-black bg-opacity-25' : 'hover:bg-sky-800',
                                                    'rounded-md px-3 py-2 text-sm font-medium text-white',
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="w-full max-w-lg lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative text-sky-100 focus-within:text-gray-400">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            type="search"
                                            placeholder="Search"
                                            className="block w-full rounded-md border-0 bg-sky-700/50 py-1.5 pl-10 pr-3 text-white placeholder:text-sky-100 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 flex-shrink-0 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 flex-shrink-0 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                            <div className="hidden lg:ml-4 lg:block">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="relative flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                                        <div>
                                            <MenuButton className="relative flex rounded-full text-sm text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="bg-sky-900 lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-black bg-opacity-25' : 'hover:bg-sky-800',
                                        'block rounded-md px-3 py-2 text-base font-medium text-white',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-sky-800 pb-3 pt-4">
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
                                    className="relative ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
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
                                        className="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </nav>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 inset-y-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden data-[open]:bottom-0 lg:inset-y-0 data-[open]:lg:inset-y-0"
                >
                    <div className="absolute inset-0 flex">
                        <div style={{ backgroundColor: '#0a527b' }} className="h-full w-1/2" />
                        <div style={{ backgroundColor: '#065d8c' }} className="h-full w-1/2" />
                    </div>
                    <div className="relative flex justify-center">
                        <svg width={1750} height={308} viewBox="0 0 1750 308" className="flex-shrink-0">
                            <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
                            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
                            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                            <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
                        </svg>
                    </div>
                </div>
                <header className="relative py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
                    </div>
                </header>
            </Disclosure>

            <main className="relative -mt-32">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                            <aside className="py-6 lg:col-span-3">
                                <nav className="space-y-1">
                                    {subNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current
                                                    ? 'border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                                                    : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    item.current
                                                        ? 'text-teal-500 group-hover:text-teal-500'
                                                        : 'text-gray-400 group-hover:text-gray-500',
                                                    '-ml-1 mr-3 h-6 w-6 flex-shrink-0',
                                                )}
                                            />
                                            <span className="truncate">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </aside>

                            <form action="#" method="POST" className="divide-y divide-gray-200 lg:col-span-9">
                                {/* Profile section */}
                                <div className="px-4 py-6 sm:p-6 lg:pb-8">
                                    <div>
                                        <h2 className="text-lg font-medium leading-6 text-gray-900">Profile</h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>

                                    <div className="mt-6 flex flex-col lg:flex-row">
                                        <div className="flex-grow space-y-6">
                                            <div>
                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Username
                                                </label>
                                                <div className="mt-2 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                                                    <input
                                                        defaultValue={user.handle}
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        autoComplete="username"
                                                        className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                    About
                                                </label>
                                                <div className="mt-2">
                          <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                              defaultValue={''}
                          />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Brief description for your profile. URLs are hyperlinked.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                                            <p aria-hidden="true" className="text-sm font-medium leading-6 text-gray-900">
                                                Photo
                                            </p>
                                            <div className="mt-2 lg:hidden">
                                                <div className="flex items-center">
                                                    <div
                                                        aria-hidden="true"
                                                        className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                                    >
                                                        <img alt="" src={user.imageUrl} className="h-full w-full rounded-full" />
                                                    </div>
                                                    <div className="relative ml-5">
                                                        <input
                                                            id="mobile-user-photo"
                                                            name="user-photo"
                                                            type="file"
                                                            className="peer absolute h-full w-full rounded-md opacity-0"
                                                        />
                                                        <label
                                                            htmlFor="mobile-user-photo"
                                                            className="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                                                        >
                                                            <span>Change</span>
                                                            <span className="sr-only"> user photo</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative hidden overflow-hidden rounded-full lg:block">
                                                <img alt="" src={user.imageUrl} className="relative h-40 w-40 rounded-full" />
                                                <label
                                                    htmlFor="desktop-user-photo"
                                                    className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                                                >
                                                    <span>Change</span>
                                                    <span className="sr-only"> user photo</span>
                                                    <input
                                                        id="desktop-user-photo"
                                                        name="user-photo"
                                                        type="file"
                                                        className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-12 gap-6">
                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>

                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>

                                        <div className="col-span-12">
                                            <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                                                URL
                                            </label>
                                            <input
                                                id="url"
                                                name="url"
                                                type="text"
                                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>

                                        <div className="col-span-12 sm:col-span-6">
                                            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                                                Company
                                            </label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                autoComplete="organization"
                                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy section */}
                                <div className="divide-y divide-gray-200 pt-6">
                                    <div className="px-4 sm:px-6">
                                        <div>
                                            <h2 className="text-lg font-medium leading-6 text-gray-900">Privacy</h2>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                                            </p>
                                        </div>
                                        <ul role="list" className="mt-2 divide-y divide-gray-200">
                                            <Field as="li" className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <Label as="p" passive className="text-sm font-medium leading-6 text-gray-900">
                                                        Available to hire
                                                    </Label>
                                                    <Description className="text-sm text-gray-500">
                                                        Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
                                                    </Description>
                                                </div>
                                                <Switch
                                                    checked={availableToHire}
                                                    onChange={setAvailableToHire}
                                                    className="group relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 data-[checked]:bg-teal-500"
                                                >
                          <span
                              aria-hidden="true"
                              className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                          />
                                                </Switch>
                                            </Field>
                                            <Field as="li" className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <Label as="p" passive className="text-sm font-medium leading-6 text-gray-900">
                                                        Make account private
                                                    </Label>
                                                    <Description className="text-sm text-gray-500">
                                                        Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.
                                                    </Description>
                                                </div>
                                                <Switch
                                                    checked={privateAccount}
                                                    onChange={setPrivateAccount}
                                                    className="group relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 data-[checked]:bg-teal-500"
                                                >
                          <span
                              aria-hidden="true"
                              className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                          />
                                                </Switch>
                                            </Field>
                                            <Field as="li" className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <Label as="p" passive className="text-sm font-medium leading-6 text-gray-900">
                                                        Allow commenting
                                                    </Label>
                                                    <Description className="text-sm text-gray-500">
                                                        Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                                                    </Description>
                                                </div>
                                                <Switch
                                                    checked={allowCommenting}
                                                    onChange={setAllowCommenting}
                                                    className="group relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 data-[checked]:bg-teal-500"
                                                >
                          <span
                              aria-hidden="true"
                              className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                          />
                                                </Switch>
                                            </Field>
                                            <Field as="li" className="flex items-center justify-between py-4">
                                                <div className="flex flex-col">
                                                    <Label as="p" passive className="text-sm font-medium leading-6 text-gray-900">
                                                        Allow mentions
                                                    </Label>
                                                    <Description className="text-sm text-gray-500">
                                                        Adipiscing est venenatis enim molestie commodo eu gravid
                                                    </Description>
                                                </div>
                                                <Switch
                                                    checked={allowMentions}
                                                    onChange={setAllowMentions}
                                                    className="group relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 data-[checked]:bg-teal-500"
                                                >
                          <span
                              aria-hidden="true"
                              className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                          />
                                                </Switch>
                                            </Field>
                                        </ul>
                                    </div>
                                    <div className="mt-4 flex justify-end gap-x-3 px-4 py-4 sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
