import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    ArrowPathIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/outline'

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
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions',
        href: '#',
        icon: DocumentChartBarIcon,
    },
]

export default function Example() {
    return (
        <Popover className="relative">
            <PopoverButton className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 data-[open]:text-gray-900">
                <span>Solutions</span>
                <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-0 lg:max-w-3xl"
            >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" className="h-6 w-6" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-5 sm:p-8">
                        <a href="#" className="-m-3 flow-root rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-100">
              <span className="flex items-center">
                <span className="text-base font-medium text-gray-900">Enterprise</span>
                <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                  New
                </span>
              </span>
                            <span className="mt-1 block text-sm text-gray-500">
                Empower your entire team with even more advanced tools.
              </span>
                        </a>
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
