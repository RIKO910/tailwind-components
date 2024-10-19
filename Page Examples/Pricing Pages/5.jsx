import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CheckIcon,
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
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
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
const features = [
    'Vitae in pulvinar odio id utobortis in inter.',
    'Sed sed id viverra viverra augue eget massa.',
    'Urna, gravida amet, a, integer venenatis.',
    'Lobortis sed pharetra amet vitae eleifend.',
    'Ullamcorper blandit a consequat donec elit aoreet.',
    'Dolor quo assumenda.',
    'Esse rerum distinctio maiores maiores.',
    'Eos enim officiis ratione.',
    'Tempore molestiae aliquid excepturi.',
    'Perspiciatis eveniet inventore eum et aliquam.',
]
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: 'Why do you never see elephants hiding in trees?',
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 4,
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer:
            'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 5,
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 6,
        question: 'Why did the invisible man turn down the job offer?',
        answer:
            "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]
const footerNavigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="bg-white">
            <Popover className="relative">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600"
                                    className="h-8 w-auto sm:h-10"
                                />
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </PopoverButton>
                        </div>
                        <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
                            <Popover className="relative">
                                <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[open]:text-gray-900">
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
                                                    <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-blue-600" />
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
                                <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[open]:text-gray-900">
                                    <span>More</span>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                                    />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute left-1/2 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-0"
                                >
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            {resources.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                >
                                                    <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-blue-600" />
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
                                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                                    View all posts
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </Popover>
                        </PopoverGroup>
                        <div className="hidden items-center justify-end space-x-8 md:flex md:flex-1 lg:w-0">
                            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-700 hover:bg-blue-200"
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
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
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
                                            <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-blue-600" />
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

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Blog
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Contact Sales
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </Popover>

            <div className="bg-gradient-to-b from-blue-50 via-white to-white">
                {/* Pricing section with single price and feature list */}
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                <span className="text-gray-900">Everything you need for</span>
                                <span className="text-blue-600">$99 a month</span>
                            </h1>
                            <p className="mt-5 text-xl text-gray-500">
                                Includes every feature we offer plus unlimited projects and unlimited users.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
                        >
                            Get started today
                        </a>
                    </div>
                    <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                        <div>
                            <h2 className="text-lg font-semibold text-blue-600">Everything you need</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
                            <p className="mt-4 text-lg text-gray-500">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                                nec. Urna, sed a lectus elementum blandit et.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:col-span-2 xl:mt-0">
                            <ul role="list" className="divide-y divide-gray-200">
                                {features.slice(0, 5).map((feature, featureIdx) => (
                                    <li key={feature} className={classNames(featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'flex py-4')}>
                                        <CheckIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-green-500" />
                                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul role="list" className="divide-y divide-gray-200 border-t border-gray-200 md:border-t-0">
                                {features.slice(5).map((feature, featureIdx) => (
                                    <li
                                        key={feature}
                                        className={classNames(featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'flex py-4')}
                                    >
                                        <CheckIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-green-500" />
                                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branded FAQ */}
            <div className="bg-blue-900">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
                    <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
                            {faqs.map((item) => (
                                <div key={item.id}>
                                    <dt className="text-lg font-medium leading-6 text-white">{item.question}</dt>
                                    <dd className="mt-2 text-base text-blue-200">{item.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-blue-50">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-24">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-blue-600">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple footer */}
            <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-16 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    {footerNavigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {footerNavigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="h-6 w-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}
