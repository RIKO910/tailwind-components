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
    Field,
    Label,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Radio,
    RadioGroup,
    Switch,
} from '@headlessui/react'
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
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
    name: 'Lisa Marie',
    email: 'lisamarie@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Applicants', href: '#' },
    { name: 'Company', href: '#' },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const subNavigation = [
    { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Account', href: '#', icon: CogIcon, current: false },
    { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
    { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
]
const plans = [
    { name: 'Startup', priceMonthly: '$29', priceYearly: '$290', limit: 'Up to 5 active job postings' },
    { name: 'Business', priceMonthly: '$99', priceYearly: '$990', limit: 'Up to 25 active job postings' },
    { name: 'Enterprise', priceMonthly: '$249', priceYearly: '$2490', limit: 'Unlimited active job postings' },
]
const payments = [
    {
        id: 1,
        date: '1/1/2020',
        datetime: '2020-01-01',
        description: 'Business Plan - Annual Billing',
        amount: 'CA$109.00',
        href: '#',
    },
    // More payments...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selectedPlan, setSelectedPlan] = useState(plans[1])
    const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="h-full">
                <Disclosure as="header" className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=orange&shade=500"
                                        className="block h-8 w-auto"
                                    />
                                </div>
                            </div>
                            <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                                <div className="w-full max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            type="search"
                                            placeholder="Search"
                                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <button
                                    type="button"
                                    className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-4 flex-shrink-0">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
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
                        <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                        <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
                            <nav className="space-y-1">
                                {subNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-orange-600 hover:bg-white'
                                                : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500',
                                                '-ml-1 mr-3 h-6 w-6 flex-shrink-0',
                                            )}
                                        />
                                        <span className="truncate">{item.name}</span>
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        {/* Payment details */}
                        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                            <section aria-labelledby="payment-details-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="bg-white px-4 py-6 sm:p-6">
                                            <div>
                                                <h2 id="payment-details-heading" className="text-lg font-medium leading-6 text-gray-900">
                                                    Payment details
                                                </h2>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Update your billing information. Please note that updating your location could affect your tax
                                                    rates.
                                                </p>
                                            </div>

                                            <div className="mt-6 grid grid-cols-4 gap-6">
                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                        First name
                                                    </label>
                                                    <input
                                                        id="first-name"
                                                        name="first-name"
                                                        type="text"
                                                        autoComplete="cc-given-name"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Last name
                                                    </label>
                                                    <input
                                                        id="last-name"
                                                        name="last-name"
                                                        type="text"
                                                        autoComplete="cc-family-name"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="email-address"
                                                        name="email-address"
                                                        type="text"
                                                        autoComplete="email"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label
                                                        htmlFor="expiration-date"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Expration date
                                                    </label>
                                                    <input
                                                        id="expiration-date"
                                                        name="expiration-date"
                                                        type="text"
                                                        placeholder="MM / YY"
                                                        autoComplete="cc-exp"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label
                                                        htmlFor="security-code"
                                                        className="flex items-center text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        <span>Security code</span>
                                                        <QuestionMarkCircleIcon
                                                            aria-hidden="true"
                                                            className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
                                                        />
                                                    </label>
                                                    <input
                                                        id="security-code"
                                                        name="security-code"
                                                        type="text"
                                                        autoComplete="cc-csc"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Country
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    >
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        id="postal-code"
                                                        name="postal-code"
                                                        type="text"
                                                        autoComplete="postal-code"
                                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Plan */}
                            <section aria-labelledby="plan-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="space-y-6 bg-white px-4 py-6 sm:p-6">
                                            <div>
                                                <h2 id="plan-heading" className="text-lg font-medium leading-6 text-gray-900">
                                                    Plan
                                                </h2>
                                            </div>

                                            <fieldset aria-label="Pricing plans">
                                                <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                                                    <div className="relative -space-y-px rounded-md bg-white">
                                                        {plans.map((plan, planIdx) => (
                                                            <Radio
                                                                key={plan.name}
                                                                value={plan}
                                                                aria-label={plan.name}
                                                                aria-description={`${plan.priceMonthly} per month, ${plan.priceYearly} per year, ${plan.limit}`}
                                                                className={classNames(
                                                                    planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                                                    planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                                                    'group relative flex cursor-pointer flex-col border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-orange-200 data-[checked]:bg-orange-50 md:grid md:grid-cols-3 md:pr-6',
                                                                )}
                                                            >
                                <span className="flex items-center text-sm">
                                  <span
                                      aria-hidden="true"
                                      className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-orange-500 group-data-[focus]:ring-2 group-data-[focus]:ring-gray-900 group-data-[focus]:ring-offset-2"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  </span>
                                  <span className="ml-3 font-medium text-gray-900">{plan.name}</span>
                                </span>
                                                                <span className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                                  <span className="font-medium text-gray-900 group-data-[checked]:text-orange-900">
                                    {plan.priceMonthly} / mo
                                  </span>{' '}
                                                                    <span className="text-gray-500 group-data-[checked]:text-orange-700">
                                    ({plan.priceYearly} / yr)
                                  </span>
                                </span>
                                                                <span
                                                                    as="span"
                                                                    className="ml-6 pl-1 text-sm text-gray-500 group-data-[checked]:text-orange-700 md:ml-0 md:pl-0 md:text-right"
                                                                >
                                  {plan.limit}
                                </span>
                                                            </Radio>
                                                        ))}
                                                    </div>
                                                </RadioGroup>
                                            </fieldset>

                                            <Field className="flex items-center">
                                                <Switch
                                                    checked={annualBillingEnabled}
                                                    onChange={setAnnualBillingEnabled}
                                                    className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 data-[checked]:bg-orange-500"
                                                >
                          <span
                              aria-hidden="true"
                              className="inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                          />
                                                </Switch>
                                                <Label as="span" className="ml-3 text-sm">
                                                    <span className="font-medium text-gray-900">Annual billing</span>{' '}
                                                    <span className="text-gray-500">(Save 10%)</span>
                                                </Label>
                                            </Field>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Billing history */}
                            <section aria-labelledby="billing-history-heading">
                                <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="px-4 sm:px-6">
                                        <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                                            Billing history
                                        </h2>
                                    </div>
                                    <div className="mt-6 flex flex-col">
                                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                <div className="overflow-hidden border-t border-gray-200">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                Date
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                Description
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                Amount
                                                            </th>
                                                            {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                                                            <th
                                                                scope="col"
                                                                className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                                            >
                                                                <span className="sr-only">View receipt</span>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200 bg-white">
                                                        {payments.map((payment) => (
                                                            <tr key={payment.id}>
                                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                                    <time dateTime={payment.datetime}>{payment.date}</time>
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                    {payment.description}
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                    {payment.amount}
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                                    <a href={payment.href} className="text-orange-600 hover:text-orange-900">
                                                                        View receipt
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
