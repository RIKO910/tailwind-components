import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
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
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                            )}
                        >
                            <item.icon
                                aria-hidden="true"
                                className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-3 h-6 w-6 flex-shrink-0',
                                )}
                            />
                            <span className="flex-1">{item.name}</span>
                            {item.count ? (
                                <span
                                    className={classNames(
                                        item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                                        'ml-3 inline-block rounded-full px-3 py-0.5 text-xs font-medium',
                                    )}
                                >
                  {item.count}
                </span>
                            ) : null}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}
