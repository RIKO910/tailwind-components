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
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex items-center gap-x-12">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex">
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main>
                {/* Contact form */}
                <div className="relative isolate bg-gray-900">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                        <div className="relative px-6 pt-14 lg:static lg:px-8">
                            <div className="mx-auto max-w-xl pb-20 pt-24 sm:pt-32 lg:mx-0 lg:max-w-lg lg:py-48">
                                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                                    <svg
                                        aria-hidden="true"
                                        className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    >
                                        <defs>
                                            <pattern
                                                x="100%"
                                                y={-1}
                                                id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                                                width={200}
                                                height={200}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <path d="M130 200V.5M.5 .5H200" fill="none" />
                                            </pattern>
                                        </defs>
                                        <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                        </svg>
                                        <rect
                                            fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                                            width="100%"
                                            height="100%"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <svg
                                        viewBox="0 0 1155 678"
                                        aria-hidden="true"
                                        className="absolute -left-56 top-[calc(100%-13rem)] w-[72.1875rem] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                    >
                                        <path
                                            d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                                            fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                                            fillOpacity=".2"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                                                x1="1155.49"
                                                x2="-78.208"
                                                y1="677.823"
                                                y2="203.355"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#4F46E5" />
                                                <stop offset={1} stopColor="#80CAFF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                                    integer elementum id sem. Arcu sed malesuada et magna.
                                </p>
                                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                                    <div className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">Address</span>
                                            <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                        </dt>
                                        <dd>
                                            545 Mavis Island
                                            <br />
                                            Chicago, IL 99191
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">Telephone</span>
                                            <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                        </dt>
                                        <dd>
                                            <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                                                +1 (555) 234-5678
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">Email</span>
                                            <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                        </dt>
                                        <dd>
                                            <a href="mailto:hello@example.com" className="hover:text-white">
                                                hello@example.com
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <form action="#" method="POST" className="px-6 lg:px-8 lg:pt-14">
                            <div className="mx-auto max-w-xl pb-24 pt-20 sm:pb-32 lg:mr-0 lg:max-w-lg lg:py-48">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                                            Phone number
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="phone-number"
                                                name="phone-number"
                                                type="tel"
                                                autoComplete="tel"
                                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                      <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          defaultValue={''}
                      />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Contact details */}
                <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-48 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our offices</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                            dui laoreet diam sed lacus, fames.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Los Angeles</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>4556 Brendan Ferry</p>
                                <p>Los Angeles, CA 90210</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">New York</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>886 Walter Street</p>
                                <p>New York, NY 12345</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Toronto</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>7363 Cynthia Pass</p>
                                <p>Toronto, ON N3Y 4H8</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">London</h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <p>114 Cobble Lane</p>
                                <p>London N1 2EF</p>
                            </address>
                        </div>
                    </div>
                </div>

                {/* Newsletter section */}
                <div className="mx-auto mt-24 max-w-7xl sm:mt-48 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Get notified when we’re launching.
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                        </p>
                        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Notify me
                            </button>
                        </form>
                        <svg
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        >
                            <defs>
                                <pattern
                                    x="50%"
                                    y={-24}
                                    id="3096c803-efce-4a18-a601-c2f068f9adf3"
                                    width={200}
                                    height={200}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M.5 200V.5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y={-24} className="overflow-visible fill-gray-800/20">
                                <path d="M0 0h201v201h-201Z" strokeWidth={0} />
                            </svg>
                            <rect fill="url(#3096c803-efce-4a18-a601-c2f068f9adf3)" width="100%" height="100%" strokeWidth={0} />
                        </svg>
                        <svg
                            viewBox="0 0 1108 632"
                            aria-hidden="true"
                            className="absolute -right-14 -top-24 -z-10 w-[69.25rem] transform-gpu blur-3xl"
                        >
                            <path
                                d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z"
                                fill="url(#986f4ec8-ca62-4906-a05f-981d15a9baf5)"
                                fillOpacity=".25"
                            />
                            <defs>
                                <linearGradient
                                    id="986f4ec8-ca62-4906-a05f-981d15a9baf5"
                                    x1="1220.59"
                                    x2="-85.053"
                                    y1="198.898"
                                    y2="-7.05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4F46E5" />
                                    <stop offset={1} stopColor="#80CAFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer aria-labelledby="footer-heading" className="mt-24 sm:mt-48">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8">
                            <img
                                alt="Company name"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-7"
                            />
                            <p className="text-sm leading-6 text-gray-600">
                                Making the world a better place through constructing elegant hierarchies.
                            </p>
                            <div className="flex space-x-6">
                                {footerNavigation.social.map((item) => (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
