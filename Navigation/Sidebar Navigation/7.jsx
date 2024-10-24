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
        <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
            <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=300"
                        className="h-8 w-auto"
                    />
                </div>
                <nav aria-label="Sidebar" className="mt-5 flex-1 space-y-1 px-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75',
                                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                            )}
                        >
                            <item.icon aria-hidden="true" className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                            <span className="flex-1">{item.name}</span>
                            {item.count ? (
                                <span
                                    className={classNames(
                                        item.current ? 'bg-indigo-600' : 'bg-indigo-800',
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
            <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                        <div>
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="inline-block h-9 w-9 rounded-full"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">Tom Cook</p>
                            <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
