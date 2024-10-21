import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
    {
        name: 'Team',
        icon: UsersIcon,
        current: false,
        children: [
            { name: 'Overview', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Settings', href: '#' },
        ],
    },
    {
        name: 'Projects',
        icon: FolderIcon,
        current: false,
        children: [
            { name: 'Overview', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Settings', href: '#' },
        ],
    },
    {
        name: 'Calendar',
        icon: CalendarIcon,
        current: false,
        children: [
            { name: 'Overview', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Settings', href: '#' },
        ],
    },
    {
        name: 'Documents',
        icon: InboxIcon,
        current: false,
        children: [
            { name: 'Overview', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Settings', href: '#' },
        ],
    },
    {
        name: 'Reports',
        icon: ChartBarIcon,
        current: false,
        children: [
            { name: 'Overview', href: '#' },
            { name: 'Members', href: '#' },
            { name: 'Calendar', href: '#' },
            { name: 'Settings', href: '#' },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
                <nav aria-label="Sidebar" className="flex-1 space-y-1 bg-white px-2">
                    {navigation.map((item) =>
                        !item.children ? (
                            <div key={item.name}>
                                <a
                                    href="#"
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium',
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
                            </div>
                        ) : (
                            <Disclosure key={item.name} as="div" className="space-y-1">
                                <DisclosureButton
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500',
                                    )}
                                >
                                    <item.icon
                                        aria-hidden="true"
                                        className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                    <span className="flex-1">{item.name}</span>
                                    <svg
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        className="ml-3 h-5 w-5 flex-shrink-0 transform text-gray-300 transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-400"
                                    >
                                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                    </svg>
                                </DisclosureButton>
                                <DisclosurePanel className="space-y-1">
                                    {item.children.map((subItem) => (
                                        <DisclosureButton
                                            key={subItem.name}
                                            as="a"
                                            href={subItem.href}
                                            className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        >
                                            {subItem.name}
                                        </DisclosureButton>
                                    ))}
                                </DisclosurePanel>
                            </Disclosure>
                        ),
                    )}
                </nav>
            </div>
        </div>
    )
}
