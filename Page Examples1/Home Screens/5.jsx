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
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {
    ChatBubbleLeftEllipsisIcon,
    CodeBracketIcon,
    EllipsisVerticalIcon,
    EyeIcon,
    FlagIcon,
    HandThumbUpIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    ShareIcon,
    StarIcon,
} from '@heroicons/react/20/solid'
import {
    ArrowTrendingUpIcon,
    Bars3Icon,
    BellIcon,
    FireIcon,
    HomeIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const communities = [
    { name: 'Movies', href: '#' },
    { name: 'Food', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Animals', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'Dinosaurs', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Gaming', href: '#' },
]
const tabs = [
    { name: 'Recent', href: '#', current: true },
    { name: 'Most Liked', href: '#', current: false },
    { name: 'Most Answers', href: '#', current: false },
]
const questions = [
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
    // More questions...
]
const whoToFollow = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]
const trendingPosts = [
    {
        id: 1,
        user: {
            name: 'Floyd Miles',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
        comments: 291,
    },
    // More posts...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
                <Popover
                    as="header"
                    className="bg-white shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="#">
                                        <img
                                            alt="Your Company"
                                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=rose&shade=500"
                                            className="block h-8 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                                <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                    <div className="w-full">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                id="search"
                                                name="search"
                                                type="search"
                                                placeholder="Search"
                                                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                                {/* Mobile menu button */}
                                <PopoverButton className="group relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </PopoverButton>
                            </div>
                            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                                <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
                                    Go Premium
                                </a>
                                <a
                                    href="#"
                                    className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </a>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-5 flex-shrink-0">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>

                                <a
                                    href="#"
                                    className="ml-6 inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                                >
                                    New Post
                                </a>
                            </div>
                        </div>
                    </div>

                    <PopoverPanel as="nav" aria-label="Global" className="lg:hidden">
                        <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                                <div className="flex-shrink-0">
                                    <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                                {userNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                            >
                                New Post
                            </a>

                            <div className="mt-6 flex justify-center">
                                <a href="#" className="text-base font-medium text-gray-900 hover:underline">
                                    Go Premium
                                </a>
                            </div>
                        </div>
                    </PopoverPanel>
                </Popover>

                <div className="py-10">
                    <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                        <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
                            <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                                <div className="space-y-1 pb-8">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                                                'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    '-ml-1 mr-3 h-6 w-6 flex-shrink-0',
                                                )}
                                            />
                                            <span className="truncate">{item.name}</span>
                                        </a>
                                    ))}
                                </div>
                                <div className="pt-10">
                                    <p id="communities-headline" className="px-3 text-sm font-medium text-gray-500">
                                        Communities
                                    </p>
                                    <div aria-labelledby="communities-headline" className="mt-3 space-y-2">
                                        {communities.map((community) => (
                                            <a
                                                key={community.name}
                                                href={community.href}
                                                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                <span className="truncate">{community.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <main className="lg:col-span-9 xl:col-span-6">
                            <div className="px-4 sm:px-0">
                                <div className="sm:hidden">
                                    <label htmlFor="question-tabs" className="sr-only">
                                        Select a tab
                                    </label>
                                    <select
                                        id="question-tabs"
                                        defaultValue={tabs.find((tab) => tab.current).name}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500"
                                    >
                                        {tabs.map((tab) => (
                                            <option key={tab.name}>{tab.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
                                        {tabs.map((tab, tabIdx) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                aria-current={tab.current ? 'page' : undefined}
                                                className={classNames(
                                                    tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                                    tabIdx === 0 ? 'rounded-l-lg' : '',
                                                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                                    'group relative min-w-0 flex-1 overflow-hidden bg-white px-6 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
                                                )}
                                            >
                                                <span>{tab.name}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        tab.current ? 'bg-rose-500' : 'bg-transparent',
                                                        'absolute inset-x-0 bottom-0 h-0.5',
                                                    )}
                                                />
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h1 className="sr-only">Recent questions</h1>
                                <ul role="list" className="space-y-4">
                                    {questions.map((question) => (
                                        <li key={question.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                                            <article aria-labelledby={'question-title-' + question.id}>
                                                <div>
                                                    <div className="flex space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img alt="" src={question.author.imageUrl} className="h-10 w-10 rounded-full" />
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                <a href={question.author.href} className="hover:underline">
                                                                    {question.author.name}
                                                                </a>
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                <a href={question.href} className="hover:underline">
                                                                    <time dateTime={question.datetime}>{question.date}</time>
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-shrink-0 self-center">
                                                            <Menu as="div" className="relative inline-block text-left">
                                                                <div>
                                                                    <MenuButton className="relative -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                                                                        <span className="absolute -inset-1" />
                                                                        <span className="sr-only">Open options</span>
                                                                        <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                                                                    </MenuButton>
                                                                </div>

                                                                <MenuItems
                                                                    transition
                                                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                                >
                                                                    <div className="py-1">
                                                                        <MenuItem>
                                                                            <a
                                                                                href="#"
                                                                                className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                            >
                                                                                <StarIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                                                                                <span>Add to favorites</span>
                                                                            </a>
                                                                        </MenuItem>
                                                                        <MenuItem>
                                                                            <a
                                                                                href="#"
                                                                                className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                            >
                                                                                <CodeBracketIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                                                                                <span>Embed</span>
                                                                            </a>
                                                                        </MenuItem>
                                                                        <MenuItem>
                                                                            <a
                                                                                href="#"
                                                                                className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                            >
                                                                                <FlagIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                                                                                <span>Report content</span>
                                                                            </a>
                                                                        </MenuItem>
                                                                    </div>
                                                                </MenuItems>
                                                            </Menu>
                                                        </div>
                                                    </div>
                                                    <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
                                                        {question.title}
                                                    </h2>
                                                </div>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: question.body }}
                                                    className="mt-2 space-y-4 text-sm text-gray-700"
                                                />
                                                <div className="mt-6 flex justify-between space-x-8">
                                                    <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <HandThumbUpIcon aria-hidden="true" className="h-5 w-5" />
                                <span className="font-medium text-gray-900">{question.likes}</span>
                                <span className="sr-only">likes</span>
                              </button>
                            </span>
                                                        <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="h-5 w-5" />
                                <span className="font-medium text-gray-900">{question.replies}</span>
                                <span className="sr-only">replies</span>
                              </button>
                            </span>
                                                        <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <EyeIcon aria-hidden="true" className="h-5 w-5" />
                                <span className="font-medium text-gray-900">{question.views}</span>
                                <span className="sr-only">views</span>
                              </button>
                            </span>
                                                    </div>
                                                    <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon aria-hidden="true" className="h-5 w-5" />
                                <span className="font-medium text-gray-900">Share</span>
                              </button>
                            </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </main>
                        <aside className="hidden xl:col-span-4 xl:block">
                            <div className="sticky top-4 space-y-4">
                                <section aria-labelledby="who-to-follow-heading">
                                    <div className="rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                                                Who to follow
                                            </h2>
                                            <div className="mt-6 flow-root">
                                                <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                    {whoToFollow.map((user) => (
                                                        <li key={user.handle} className="flex items-center space-x-3 py-4">
                                                            <div className="flex-shrink-0">
                                                                <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    <a href={user.href}>{user.name}</a>
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    <a href={user.href}>{'@' + user.handle}</a>
                                                                </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900"
                                                                >
                                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                                                    Follow
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                                                >
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section aria-labelledby="trending-heading">
                                    <div className="rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                                                Trending
                                            </h2>
                                            <div className="mt-6 flow-root">
                                                <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                    {trendingPosts.map((post) => (
                                                        <li key={post.id} className="flex space-x-3 py-4">
                                                            <div className="flex-shrink-0">
                                                                <img alt={post.user.name} src={post.user.imageUrl} className="h-8 w-8 rounded-full" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm text-gray-800">{post.body}</p>
                                                                <div className="mt-2 flex">
                                  <span className="inline-flex items-center text-sm">
                                    <button
                                        type="button"
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="h-5 w-5" />
                                      <span className="font-medium text-gray-900">{post.comments}</span>
                                    </button>
                                  </span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                                                >
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
