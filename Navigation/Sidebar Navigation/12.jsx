import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    {
        name: 'Team',
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
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex w-full items-center rounded-md py-2 pl-7 pr-2 text-sm font-medium',
                                    )}
                                >
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
                                        'group flex w-full items-center rounded-md py-2 pr-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500',
                                    )}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 flex-shrink-0 transform text-gray-300 transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-400"
                                    >
                                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                    </svg>
                                    {item.name}
                                </DisclosureButton>
                                <DisclosurePanel className="space-y-1">
                                    {item.children.map((subItem) => (
                                        <DisclosureButton
                                            key={subItem.name}
                                            as="a"
                                            href={subItem.href}
                                            className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
