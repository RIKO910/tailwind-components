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
import { Dialog, DialogBackdrop, DialogPanel, Field, Label, Switch, TransitionChild } from '@headlessui/react'
import {
    ArrowLeftOnRectangleIcon,
    Bars3BottomLeftIcon,
    BellIcon,
    BriefcaseIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    CogIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
    { name: 'Applications', href: '#', icon: DocumentMagnifyingGlassIcon, current: false },
    { name: 'Messages', href: '#', icon: ChatBubbleOvalLeftEllipsisIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: true },
]
const secondaryNavigation = [
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Logout', href: '#', icon: ArrowLeftOnRectangleIcon },
]
const tabs = [
    { name: 'General', href: '#', current: true },
    { name: 'Password', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Plan', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
    const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
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
                                <div className="absolute right-0 top-0 -mr-14 p-1 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button
                                        type="button"
                                        onClick={() => setSidebarOpen(false)}
                                        className="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
                                    >
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                        <span className="sr-only">Close sidebar</span>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    alt="Easywire"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=600"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                <nav className="flex h-full flex-col">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current
                                                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                                                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center border-l-4 px-3 py-2 text-base font-medium',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 h-6 w-6 flex-shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-auto space-y-1 pt-10">
                                        {secondaryNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group flex items-center border-l-4 border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
                        </DialogPanel>
                        <div aria-hidden="true" className="w-14 flex-shrink-0">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pb-4 pt-5">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <img
                                alt="Easywire"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=600"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="mt-5 flex-grow">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'border-purple-600 bg-purple-50 text-purple-600'
                                                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 h-6 w-6 flex-shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="block w-full flex-shrink-0">
                            {secondaryNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    <item.icon aria-hidden="true" className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Content area */}
                <div className="lg:pl-64">
                    <div className="lg:px-8">
                        <div className="mx-auto flex flex-col lg:max-w-4xl">
                            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(true)}
                                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <Bars3BottomLeftIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                                <div className="flex flex-1 justify-between px-4 lg:px-0">
                                    <div className="flex flex-1">
                                        <form action="#" method="GET" className="flex w-full lg:ml-0">
                                            <label htmlFor="mobile-search-field" className="sr-only">
                                                Search
                                            </label>
                                            <label htmlFor="desktop-search-field" className="sr-only">
                                                Search
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
                                                    className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden"
                                                />
                                                <input
                                                    id="desktop-search-field"
                                                    name="desktop-search-field"
                                                    type="search"
                                                    placeholder="Search jobs, applicants, and more"
                                                    className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="ml-4 flex items-center lg:ml-6">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                                            <span className="sr-only">View notifications</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <main className="flex-1">
                                <div className="relative mx-auto max-w-4xl">
                                    <div className="pb-16 pt-10">
                                        <div className="px-4 sm:px-6 lg:px-0">
                                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Settings</h1>
                                        </div>
                                        <div className="px-4 sm:px-6 lg:px-0">
                                            <div className="py-6">
                                                {/* Tabs */}
                                                <div className="lg:hidden">
                                                    <label htmlFor="selected-tab" className="sr-only">
                                                        Select a tab
                                                    </label>
                                                    <select
                                                        id="selected-tab"
                                                        name="selected-tab"
                                                        defaultValue={tabs.find((tab) => tab.current).name}
                                                        className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                                                    >
                                                        {tabs.map((tab) => (
                                                            <option key={tab.name}>{tab.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="hidden lg:block">
                                                    <div className="border-b border-gray-200">
                                                        <nav className="-mb-px flex space-x-8">
                                                            {tabs.map((tab) => (
                                                                <a
                                                                    key={tab.name}
                                                                    href={tab.href}
                                                                    className={classNames(
                                                                        tab.current
                                                                            ? 'border-purple-500 text-purple-600'
                                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                                                                    )}
                                                                >
                                                                    {tab.name}
                                                                </a>
                                                            ))}
                                                        </nav>
                                                    </div>
                                                </div>

                                                {/* Description list with inline editing */}
                                                <div className="mt-10 divide-y divide-gray-200">
                                                    <div className="space-y-1">
                                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                                        <p className="max-w-2xl text-sm text-gray-500">
                                                            This information will be displayed publicly so be careful what you share.
                                                        </p>
                                                    </div>
                                                    <div className="mt-6">
                                                        <dl className="divide-y divide-gray-200">
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span className="flex-grow">Chelsea Hagon</span>
                                                                    <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                                                <dt className="text-sm font-medium text-gray-500">Photo</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="flex-grow">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                  </span>
                                                                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                    <span aria-hidden="true" className="text-gray-300">
                                      |
                                    </span>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span className="flex-grow">chelsea.hagon@example.com</span>
                                                                    <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                                                <dt className="text-sm font-medium text-gray-500">Job title</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span className="flex-grow">Human Resources Manager</span>
                                                                    <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>

                                                <div className="mt-10 divide-y divide-gray-200">
                                                    <div className="space-y-1">
                                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Account</h3>
                                                        <p className="max-w-2xl text-sm text-gray-500">
                                                            Manage how information is displayed on your account.
                                                        </p>
                                                    </div>
                                                    <div className="mt-6">
                                                        <dl className="divide-y divide-gray-200">
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                                                <dt className="text-sm font-medium text-gray-500">Language</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span className="flex-grow">English</span>
                                                                    <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                                                <dt className="text-sm font-medium text-gray-500">Date format</dt>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <span className="flex-grow">DD-MM-YYYY</span>
                                                                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Update
                                    </button>
                                    <span aria-hidden="true" className="text-gray-300">
                                      |
                                    </span>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                                                </dd>
                                                            </div>
                                                            <Field className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                                                <Label as="dt" passive className="text-sm font-medium text-gray-500">
                                                                    Automatic timezone
                                                                </Label>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <Switch
                                                                        checked={automaticTimezoneEnabled}
                                                                        onChange={setAutomaticTimezoneEnabled}
                                                                        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 data-[checked]:bg-purple-600 sm:ml-auto"
                                                                    >
                                    <span
                                        aria-hidden="true"
                                        className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                                    />
                                                                    </Switch>
                                                                </dd>
                                                            </Field>
                                                            <Field className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                                                <Label as="dt" passive className="text-sm font-medium text-gray-500">
                                                                    Auto-update applicant data
                                                                </Label>
                                                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                    <Switch
                                                                        checked={autoUpdateApplicantDataEnabled}
                                                                        onChange={setAutoUpdateApplicantDataEnabled}
                                                                        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 data-[checked]:bg-purple-600 sm:ml-auto"
                                                                    >
                                    <span
                                        aria-hidden="true"
                                        className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                                    />
                                                                    </Switch>
                                                                </dd>
                                                            </Field>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
