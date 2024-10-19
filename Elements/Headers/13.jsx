import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: 'Your customers’ data will be safe and secure.', href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default function Example() {
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto sm:h-10"
                            />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </PopoverButton>
                    </div>
                    <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
                        <Popover className="relative">
                            <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                                <span>Solutions</span>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                            >
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                            >
                                                <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-x-10 sm:space-y-0 sm:px-8">
                                        {callsToAction.map((item) => (
                                            <div key={item.name} className="flow-root">
                                                <a
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400" />
                                                    <span className="ml-3">{item.name}</span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>

                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Docs
                        </a>

                        <Popover className="relative">
                            <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                                <span>More</span>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-0"
                            >
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        {resources.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                            >
                                                <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                        <div>
                                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                            <ul role="list" className="mt-4 space-y-4">
                                                {recentPosts.map((post) => (
                                                    <li key={post.id} className="truncate text-base">
                                                        <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                            {post.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-5 text-sm">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View all posts
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </PopoverGroup>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>

            <PopoverPanel
                transition
                className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
            >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pb-6 pt-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="-mr-2">
                                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </PopoverButton>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                {solutions.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
                                        <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="space-y-6 px-5 py-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Pricing
                            </a>

                            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Docs
                            </a>
                            {resources.map((item) => (
                                <a key={item.name} href={item.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div>
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?{' '}
                                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
