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
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    Bars4Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CheckIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    PlusIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    UsersIcon,
    ViewColumnsIcon,
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
    {
        name: 'List view',
        description:
            'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
        icon: Bars4Icon,
    },
    {
        name: 'Boards',
        description:
            'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
        icon: ViewColumnsIcon,
    },
    {
        name: 'Calendar',
        description:
            'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
        icon: CalendarIcon,
    },
    {
        name: 'Teams',
        description:
            'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
        icon: UsersIcon,
    },
]
const checklist = [
    'Unlimited projects',
    'No per user fees',
    'Unlimited storage',
    '24/7 support',
    'Cancel any time',
    '14 days free',
]
const logos = [
    { name: 'Workcation', url: 'https://tailwindui.com/plus/img/logos/workcation-logo-cyan-900.svg' },
    { name: 'Tuple', url: 'https://tailwindui.com/plus/img/logos/tuple-logo-cyan-900.svg' },
    { name: 'Level', url: 'https://tailwindui.com/plus/img/logos/level-logo-cyan-900.svg' },
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
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 3,
        question: 'Why do you never see elephants hiding in trees?',
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 4,
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 5,
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer:
            'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 6,
        question: 'Why did the invisible man turn down the job offer?',
        answer:
            "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
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
            <div className="bg-gray-50">
                <Popover className="relative">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=cyan&shade=600"
                                        className="h-8 w-auto sm:h-10"
                                    />
                                </a>
                            </div>
                            <div className="-my-2 -mr-2 md:hidden">
                                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                                </PopoverButton>
                            </div>
                            <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
                                <Popover className="relative">
                                    <PopoverButton className="group inline-flex items-center rounded-md bg-gray-50 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 data-[open]:text-gray-900">
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
                                                        <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-cyan-600" />
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
                                    <PopoverButton className="group inline-flex items-center rounded-md bg-gray-50 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 data-[open]:text-gray-900">
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
                                                    <a key={item.name} href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                                        <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-cyan-600" />
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
                                                                <a href={post.href} className="font-medium text-gray-900 hover:text-gray-800">
                                                                    {post.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="mt-5 text-sm">
                                                    <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
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
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>

                    <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            alt="Your Company"
                                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=cyan&shade=600"
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
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
                                                <item.icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-cyan-600" />
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
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-cyan-600 hover:text-cyan-500">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </Popover>

                {/* Header section */}
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-lg font-semibold text-cyan-600">Pricing</h1>
                        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Take control of your team.
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                            Start building for free, then add a site plan to go live. Account plans unlock additional features.
                        </p>
                    </div>
                </div>
            </div>

            {/* Split brand panel */}
            <div className="relative bg-white">
                <div aria-hidden="true" className="absolute inset-0">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400" />
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
                    <div className="bg-white px-6 py-16 sm:py-24 lg:px-0 lg:pr-8">
                        <div className="mx-auto max-w-lg lg:mx-0">
                            <h2 className="text-lg font-semibold text-cyan-600">Full-featured</h2>
                            <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                                Everything you need to talk with your customers
                            </p>
                            <dl className="mt-12 space-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-green-400">
                                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                            </div>
                                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="ml-16 mt-2 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600 to-green-400 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
                        <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
                            <div>
                                <h2 className="sr-only">Price</h2>
                                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-bold tracking-tight text-white">$99</span>
                    <span className="mt-2 text-base font-medium text-cyan-100">Setup fee</span>
                    <span className="sr-only">plus</span>
                  </span>
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute flex h-12 w-full items-center justify-center"
                                    >
                    <PlusIcon aria-hidden="true" className="h-6 w-6 text-cyan-200" />
                  </span>
                                    <span>
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-bold tracking-tight text-white">$4</span>
                      <span className="mt-2 text-base font-medium text-cyan-100">Per month</span>
                    </span>
                  </span>
                                </p>
                            </div>
                            <ul role="list" className="grid gap-px overflow-hidden rounded sm:grid-cols-2">
                                {checklist.map((item) => (
                                    <li key={item} className="flex items-center bg-cyan-700 bg-opacity-50 px-4 py-4 text-base text-white">
                                        <CheckIcon aria-hidden="true" className="h-6 w-6 text-cyan-200" />
                                        <span className="ml-3">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-4 text-lg font-medium leading-6 text-cyan-700 hover:bg-cyan-50 md:px-10"
                            >
                                Get started today
                            </a>
                            <a href="#" className="block text-center text-base font-medium text-cyan-100 hover:text-white">
                                Try our Lite plan for free
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-cyan-100 bg-opacity-25">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-cyan-900 lg:max-w-xl lg:text-left">
                            The world's most innovative companies use our app
                        </h2>
                        <div className="mt-8 flow-root self-center lg:mt-0">
                            <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
                                {logos.map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="ml-8 mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
                                    >
                                        <img alt={logo.name} src={logo.url} className="h-12" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                <div className="mt-12">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.id}>
                                <dt className="text-lg font-medium leading-6 text-gray-900">{item.question}</dt>
                                <dd className="mt-2 text-base text-gray-500">{item.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-gradient-to-r from-cyan-600 to-green-400">
                <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span className="block">Boost your productivity.</span>
                        <span className="block text-cyan-900">Start using our app today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-cyan-100">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-50 px-5 py-3 text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
                    >
                        Sign up for free
                    </a>
                </div>
            </div>

            {/* Footer 4-column with newsletter and localization dark */}
            <footer className="bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                    <h2 className="sr-only">Footer</h2>
                    <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
                        <div className="grid grid-cols-2 gap-8 xl:col-span-4">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-base font-medium text-white">Solutions</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-base font-medium text-white">Support</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.support.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-base font-medium text-white">Company</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-base font-medium text-white">Legal</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        {footerNavigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 xl:mt-0">
                            <h3 className="text-base font-medium text-white">Language &amp; Currency</h3>
                            <form className="mt-4 space-y-4 sm:max-w-xs">
                                <fieldset className="w-full">
                                    <label htmlFor="language" className="sr-only">
                                        Language
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="language"
                                            name="language"
                                            defaultValue="English"
                                            className="block w-full rounded-md border border-transparent bg-gray-800 bg-none text-base text-white focus:border-white focus:ring-white sm:text-sm"
                                        >
                                            <option>English</option>
                                            <option>French</option>
                                            <option>German</option>
                                            <option>Japanese</option>
                                            <option>Spanish</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                            <ChevronDownIcon aria-hidden="true" className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="w-full">
                                    <label htmlFor="currency" className="sr-only">
                                        Currency
                                    </label>
                                    <div className="relative mt-1.5">
                                        <select
                                            id="currency"
                                            name="currency"
                                            defaultValue="AUD"
                                            className="block w-full rounded-md border border-transparent bg-gray-800 bg-none text-base text-white focus:border-white focus:ring-white sm:text-sm"
                                        >
                                            <option>ARS</option>
                                            <option>AUD</option>
                                            <option>CAD</option>
                                            <option>CHF</option>
                                            <option>EUR</option>
                                            <option>GBP</option>
                                            <option>JPY</option>
                                            <option>USD</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                            <ChevronDownIcon aria-hidden="true" className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="space-y-4 border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between lg:space-y-0 xl:mt-0">
                        <div className="space-y-2">
                            <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
                            <p className="text-base text-gray-300">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                        </div>
                        <form className="sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-full min-w-0 rounded-md border border-transparent bg-white px-4 py-2 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:max-w-xs"
                            />
                            <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                            &copy; 2020 Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
