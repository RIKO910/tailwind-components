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
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Changelog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'News', href: '#' },
]
const offices = [
    { id: 1, city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
    { id: 2, city: 'New York', address: ['886 Walter Street', 'New York, NY 12345'] },
    { id: 3, city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
    { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
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
            name: 'Dribbble',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    return (
        <div className="bg-white">
            <Popover as="header" className="relative">
                <div className="bg-stone-50">
                    <nav
                        aria-label="Global"
                        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 xl:px-8"
                    >
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between lg:w-auto">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=teal&shade=500"
                                        className="h-8 w-auto sm:h-10"
                                    />
                                </a>
                                <div className="-mr-2 flex items-center lg:hidden">
                                    <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-stone-50 p-2 text-stone-400 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="hidden space-x-10 lg:ml-10 lg:flex">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-stone-500 hover:text-stone-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-6">
                            <a
                                href="#"
                                className="rounded-md border border-transparent bg-stone-100 px-6 py-2 text-base font-medium text-stone-900 hover:bg-stone-200"
                            >
                                Login
                            </a>
                        </div>
                    </nav>
                </div>

                <PopoverPanel
                    focus
                    transition
                    className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in lg:hidden"
                >
                    <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                            <div>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=teal&shade=500"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="-mr-2">
                                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-stone-400 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </PopoverButton>
                            </div>
                        </div>
                        <div className="pb-6 pt-5">
                            <div className="space-y-1 px-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-stone-900 hover:bg-stone-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6 px-5">
                                <a
                                    href="#"
                                    className="block w-full rounded-md border border-transparent bg-teal-500 px-4 py-2 text-center font-medium text-white shadow hover:bg-teal-600"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </Popover>

            <main className="overflow-hidden">
                {/* Header */}
                <div className="bg-stone-50">
                    <div className="py-24 lg:py-32">
                        <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">Get in touch</h1>
                            <p className="mt-6 max-w-3xl text-xl text-stone-500">
                                Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna
                                ut volutpat. Sagittis et vel et fermentum amet consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <section aria-labelledby="contact-heading" className="relative bg-white">
                    <div aria-hidden="true" className="absolute h-1/2 w-full bg-stone-50" />
                    {/* Decorative dot pattern */}
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <svg
                            fill="none"
                            width={404}
                            height={384}
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                            className="absolute right-0 top-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                        >
                            <defs>
                                <pattern
                                    x={0}
                                    y={0}
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-stone-200" />
                                </pattern>
                            </defs>
                            <rect fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" width={404} height={384} />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 id="contact-heading" className="sr-only">
                                Contact us
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Contact information */}
                                <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 px-6 py-10 sm:px-10 xl:p-12">
                                    {/* Decorative angle backgrounds */}
                                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 sm:hidden">
                                        <svg
                                            fill="none"
                                            width={343}
                                            height={388}
                                            viewBox="0 0 343 388"
                                            preserveAspectRatio="xMidYMid slice"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear1"
                                                    x1="254.553"
                                                    x2="961.66"
                                                    y1="107.554"
                                                    y2="814.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                                    >
                                        <svg
                                            fill="none"
                                            width={359}
                                            height={339}
                                            viewBox="0 0 359 339"
                                            preserveAspectRatio="xMidYMid slice"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear2"
                                                    x1="192.553"
                                                    x2="899.66"
                                                    y1="28.553"
                                                    y2="735.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                                    >
                                        <svg
                                            fill="none"
                                            width={160}
                                            height={678}
                                            viewBox="0 0 160 678"
                                            preserveAspectRatio="xMidYMid slice"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear3"
                                                    x1="192.553"
                                                    x2="899.66"
                                                    y1="325.553"
                                                    y2="1032.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Contact information</h3>
                                    <p className="mt-6 max-w-3xl text-base text-teal-50">
                                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                                        lacus arcu.
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <PhoneIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-teal-200" />
                                            <span className="ml-3">+1 (555) 123-4567</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <EnvelopeIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-teal-200" />
                                            <span className="ml-3">support@workcation.com</span>
                                        </dd>
                                    </dl>
                                    <ul role="list" className="mt-8 flex space-x-12">
                                        <li>
                                            <a href="#" className="text-teal-200 hover:text-teal-100">
                                                <span className="sr-only">Facebook</span>
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                                                    <path
                                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-teal-200 hover:text-teal-100">
                                                <span className="sr-only">GitHub</span>
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                                                    <path
                                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-teal-200 hover:text-teal-100">
                                                <span className="sr-only">X</span>
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                                                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact form */}
                                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-stone-900">Send us a message</h3>
                                    <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-stone-900">
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="first-name"
                                                    name="first-name"
                                                    type="text"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-stone-900">
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="last-name"
                                                    name="last-name"
                                                    type="text"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-stone-900">
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <label htmlFor="phone" className="block text-sm font-medium text-stone-900">
                                                    Phone
                                                </label>
                                                <span id="phone-optional" className="text-sm text-stone-500">
                          Optional
                        </span>
                                            </div>
                                            <div className="mt-1">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="text"
                                                    autoComplete="tel"
                                                    aria-describedby="phone-optional"
                                                    className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="subject" className="block text-sm font-medium text-stone-900">
                                                Subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between">
                                                <label htmlFor="message" className="block text-sm font-medium text-stone-900">
                                                    Message
                                                </label>
                                                <span id="message-max" className="text-sm text-stone-500">
                          Max. 500 characters
                        </span>
                                            </div>
                                            <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            aria-describedby="message-max"
                            className="block w-full rounded-md border-stone-300 px-4 py-3 text-stone-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            defaultValue={''}
                        />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button
                                                type="submit"
                                                className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact grid */}
                <section aria-labelledby="offices-heading">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                        <h2 id="offices-heading" className="text-3xl font-bold tracking-tight text-stone-900">
                            Our offices
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg text-stone-500">
                            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                            dui laoreet diam sed lacus, fames.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {offices.map((office) => (
                                <div key={office.id}>
                                    <h3 className="text-lg font-medium text-stone-900">{office.city}</h3>
                                    <p className="mt-2 text-base text-stone-500">
                                        {office.address.map((line) => (
                                            <span key={line} className="block">
                        {line}
                      </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer aria-labelledby="footer-heading" className="bg-stone-900">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                            <img
                                alt="Company name"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=warmGray&shade=400"
                                className="h-10"
                            />
                            <p className="text-base text-stone-400">
                                Making the world a better place through constructing elegant hierarchies.
                            </p>
                            <div className="flex space-x-6">
                                {footerNavigation.social.map((item) => (
                                    <a key={item.name} href={item.href} className="text-stone-400 hover:text-stone-300">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-base font-medium text-stone-200">Solutions</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-stone-400 hover:text-stone-300">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-base font-medium text-stone-200">Support</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-stone-400 hover:text-stone-300">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-base font-medium text-stone-200">Company</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-stone-400 hover:text-stone-300">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-base font-medium text-stone-200">Legal</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-stone-400 hover:text-stone-300">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-stone-700 pt-8">
                        <p className="text-base text-stone-400 xl:text-center">
                            &copy; 2020 Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
