import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
]
const plans = [
    {
        title: 'Starter',
        featured: false,
        description: 'All your essential business finances, taken care of.',
        priceMonthly: 5,
        priceYearly: 56,
        mainFeatures: [
            { id: 1, value: 'Basic invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
        ],
    },
    {
        title: 'Scale',
        featured: true,
        description: 'The best financial services for your thriving business.',
        priceMonthly: 19,
        priceYearly: 220,
        mainFeatures: [
            { id: 1, value: 'Advanced invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
            { id: 4, value: 'Tax planning toolkit' },
            { id: 5, value: 'VAT & VATMOSS filing' },
            { id: 6, value: 'Free bank transfers' },
        ],
    },
    {
        title: 'Growth',
        featured: false,
        description: 'Convenient features to take your business to the next level.',
        priceMonthly: 12,
        priceYearly: 140,
        mainFeatures: [
            { id: 1, value: 'Basic invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
            { id: 4, value: 'Tax planning toolkit' },
        ],
    },
]
const features = [
    {
        title: 'Tax Savings',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Easy to use accounting',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Multi-accounts',
        tiers: [
            { title: 'starter', value: '3 accounts' },
            { title: 'popular', featured: true, value: 'Unlimited accounts' },
            { title: 'intermediate', value: '7 accounts' },
        ],
    },
    {
        title: 'Invoicing',
        tiers: [
            { title: 'starter', value: '3 invoices' },
            { title: 'popular', featured: true, value: 'Unlimited invoices' },
            { title: 'intermediate', value: '10 invoices' },
        ],
    },
    {
        title: 'Exclusive offers',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: '6 months free advisor',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Mobile and web access',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
]
const perks = [
    {
        title: '24/7 customer support',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Instant notifications',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Budgeting tools',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Digital receipts',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Pots to separate money',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Free bank transfers',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
    {
        title: 'Business debit card',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
]
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="bg-gray-50">
            <header className="bg-indigo-600">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                        <div className="flex items-center">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=white" className="h-10 w-auto" />
                            </a>
                            <div className="ml-10 hidden space-x-8 lg:block">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-indigo-50">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="ml-10 space-x-4">
                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white hover:bg-opacity-75"
                            >
                                Sign in
                            </a>
                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                <span className="md:hidden">Sign up</span>
                                <span className="hidden md:inline lg:hidden">Create account</span>
                                <span className="hidden lg:inline">Create an account</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-x-6 lg:hidden">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-indigo-50">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>

            <main>
                {/* Pricing section */}
                <div>
                    <div className="relative bg-indigo-600">
                        {/* Overlapping background */}
                        <div aria-hidden="true" className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block" />

                        <div className="relative mx-auto max-w-2xl px-6 pt-16 text-center sm:pt-32 lg:max-w-7xl lg:px-8">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                <span className="block lg:inline">Simple pricing,</span>
                                <span className="block lg:inline">no commitment.</span>
                            </h1>
                            <p className="mt-4 text-xl text-indigo-100">
                                Everything you need, nothing you don't. Pick a plan that best suits your business.
                            </p>
                        </div>

                        <h2 className="sr-only">Plans</h2>

                        {/* Toggle */}
                        <div className="relative mt-12 flex justify-center sm:mt-16">
                            <div className="flex rounded-lg bg-indigo-700 p-0.5">
                                <button
                                    type="button"
                                    className="relative whitespace-nowrap rounded-md border-indigo-700 bg-white px-6 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                >
                                    Monthly billing
                                </button>
                                <button
                                    type="button"
                                    className="relative ml-0.5 whitespace-nowrap rounded-md border border-transparent px-6 py-2 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                >
                                    Yearly billing
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
                            {/* Decorative background */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bottom-6 left-8 right-8 top-4 hidden rounded-tl-lg rounded-tr-lg bg-indigo-700 lg:block"
                            />

                            <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.title}
                                        className={classNames(
                                            plan.featured ? 'bg-white shadow-md ring-2 ring-indigo-700' : 'bg-indigo-700 lg:bg-transparent',
                                            'rounded-lg px-6 pb-3 pt-6 lg:px-8 lg:pt-12',
                                        )}
                                    >
                                        <div>
                                            <h3
                                                className={classNames(
                                                    plan.featured ? 'text-indigo-600' : 'text-white',
                                                    'text-base font-semibold',
                                                )}
                                            >
                                                {plan.title}
                                            </h3>
                                            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                                                <div className="mt-3 flex items-center">
                                                    <p
                                                        className={classNames(
                                                            plan.featured ? 'text-indigo-600' : 'text-white',
                                                            'text-4xl font-bold tracking-tight',
                                                        )}
                                                    >
                                                        ${plan.priceMonthly}
                                                    </p>
                                                    <div className="ml-4">
                                                        <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                                                            USD / mo
                                                        </p>
                                                        <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                                                            Billed yearly (${plan.priceYearly})
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        plan.featured
                                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                                            : 'bg-white text-indigo-600 hover:bg-indigo-50',
                                                        'mt-6 inline-block w-full rounded-md border border-transparent px-8 py-2 text-center text-sm font-medium shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full',
                                                    )}
                                                >
                                                    Buy {plan.title}
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="sr-only">Features</h4>
                                        <ul
                                            role="list"
                                            className={classNames(
                                                plan.featured
                                                    ? 'divide-gray-200 border-gray-200'
                                                    : 'divide-indigo-500 divide-opacity-75 border-indigo-500',
                                                'mt-7 divide-y border-t lg:border-t-0',
                                            )}
                                        >
                                            {plan.mainFeatures.map((mainFeature) => (
                                                <li key={mainFeature.id} className="flex items-center py-3">
                                                    <CheckIcon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                                                            'h-5 w-5 flex-shrink-0',
                                                        )}
                                                    />
                                                    <span
                                                        className={classNames(
                                                            plan.featured ? 'text-gray-600' : 'text-white',
                                                            'ml-4 text-sm font-medium',
                                                        )}
                                                    >
                            {mainFeature.value}
                          </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature comparison */}
                    <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                        <h2 id="mobile-comparison-heading" className="sr-only">
                            Feature comparison
                        </h2>

                        <div className="mx-auto mt-16 max-w-2xl space-y-16 px-6">
                            {plans.map((plan, planIndex) => (
                                <div key={plan.title} className="border-t border-gray-200">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'border-indigo-600' : 'border-transparent',
                                            '-mt-px border-t-2 pt-6 sm:w-1/2',
                                        )}
                                    >
                                        <h3
                                            className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                                        >
                                            {plan.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                    </div>
                                    <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                                    <div className="relative mt-6">
                                        {/* Fake card background */}
                                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                            <div
                                                className={classNames(
                                                    plan.featured ? 'shadow-md' : 'shadow',
                                                    'absolute right-0 h-full w-1/2 rounded-lg bg-white',
                                                )}
                                            />
                                        </div>

                                        <div
                                            className={classNames(
                                                plan.featured ? 'shadow-md ring-2 ring-indigo-600' : 'shadow ring-1 ring-black ring-opacity-5',
                                                'relative rounded-lg bg-white px-4 py-3 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0',
                                            )}
                                        >
                                            <dl className="divide-y divide-gray-200">
                                                {features.map((feature) => (
                                                    <div
                                                        key={feature.title}
                                                        className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                                                    >
                                                        <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                                                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                                            {typeof feature.tiers[planIndex].value === 'string' ? (
                                                                <span
                                                                    className={classNames(
                                                                        feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                                                        'text-sm font-medium',
                                                                    )}
                                                                >
                                  {feature.tiers[planIndex].value}
                                </span>
                                                            ) : (
                                                                <>
                                                                    {feature.tiers[planIndex].value === true ? (
                                                                        <CheckIcon aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600" />
                                                                    ) : (
                                                                        <XMarkIcon aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400" />
                                                                    )}

                                                                    <span className="sr-only">
                                    {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                                  </span>
                                                                </>
                                                            )}
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>

                                        {/* Fake card border */}
                                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                            <div
                                                className={classNames(
                                                    plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                                                    'absolute right-0 h-full w-1/2 rounded-lg',
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                                    <div className="relative mt-6">
                                        {/* Fake card background */}
                                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                            <div
                                                className={classNames(
                                                    plan.featured ? 'shadow-md' : 'shadow',
                                                    'absolute right-0 h-full w-1/2 rounded-lg bg-white',
                                                )}
                                            />
                                        </div>

                                        <div
                                            className={classNames(
                                                plan.featured ? 'shadow-md ring-2 ring-indigo-600' : 'shadow ring-1 ring-black ring-opacity-5',
                                                'relative rounded-lg bg-white px-4 py-3 sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0',
                                            )}
                                        >
                                            <dl className="divide-y divide-gray-200">
                                                {perks.map((perk) => (
                                                    <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                                                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                                                        <dd className="text-center sm:px-4">
                                                            {perk.tiers[planIndex].value === true ? (
                                                                <CheckIcon aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600" />
                                                            ) : (
                                                                <XMarkIcon aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400" />
                                                            )}

                                                            <span className="sr-only">{perk.tiers[planIndex].value === true ? 'Yes' : 'No'}</span>
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>

                                        {/* Fake card border */}
                                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                            <div
                                                className={classNames(
                                                    plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                                                    'absolute right-0 h-full w-1/2 rounded-lg',
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="comparison-heading" className="hidden lg:block">
                        <h2 id="comparison-heading" className="sr-only">
                            Feature comparison
                        </h2>

                        <div className="mx-auto mt-24 max-w-7xl px-8">
                            <div className="flex w-full items-stretch border-t border-gray-200">
                                <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
                                    <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
                                </div>
                                {plans.map((plan, index) => (
                                    <div
                                        key={plan.title}
                                        aria-hidden="true"
                                        className={classNames(index === plans.length - 1 ? '' : 'pr-4', '-mt-px w-1/4 pl-4')}
                                    >
                                        <div
                                            className={classNames(
                                                plan.featured ? 'border-indigo-600' : 'border-transparent',
                                                'border-t-2 py-6',
                                            )}
                                        >
                                            <p
                                                className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                                            >
                                                {plan.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative">
                                {/* Fake card backgrounds */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-stretch">
                                    <div className="w-1/4 pr-4" />
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow" />
                                    </div>
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow-md" />
                                    </div>
                                    <div className="w-1/4 pl-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow" />
                                    </div>
                                </div>

                                <table className="relative w-full">
                                    <caption className="sr-only">Business feature comparison</caption>
                                    <thead>
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">Feature</span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">{plan.title} plan</span>
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                    {features.map((feature) => (
                                        <tr key={feature.title}>
                                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                                                {feature.title}
                                            </th>
                                            {feature.tiers.map((tier, index) => (
                                                <td
                                                    key={tier.title}
                                                    className={classNames(
                                                        index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                        'relative w-1/4 py-0 text-center',
                                                    )}
                                                >
                            <span className="relative h-full w-full py-3">
                              {typeof tier.value === 'string' ? (
                                  <span
                                      className={classNames(
                                          tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                          'text-sm font-medium',
                                      )}
                                  >
                                  {tier.value}
                                </span>
                              ) : (
                                  <>
                                      {tier.value === true ? (
                                          <CheckIcon aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600" />
                                      ) : (
                                          <XMarkIcon aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400" />
                                      )}

                                      <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                  </>
                              )}
                            </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                                {/* Fake card borders */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-stretch">
                                    <div className="w-1/4 pr-4" />
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                    </div>
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                                    </div>
                                    <div className="w-1/4 pl-4">
                                        <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

                            <div className="relative mt-6">
                                {/* Fake card backgrounds */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-stretch">
                                    <div className="w-1/4 pr-4" />
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow" />
                                    </div>
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow-md" />
                                    </div>
                                    <div className="w-1/4 pl-4">
                                        <div className="h-full w-full rounded-lg bg-white shadow" />
                                    </div>
                                </div>

                                <table className="relative w-full">
                                    <caption className="sr-only">Perk comparison</caption>
                                    <thead>
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">Perk</span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">{plan.title} plan</span>
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                    {perks.map((perk) => (
                                        <tr key={perk.title}>
                                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                                                {perk.title}
                                            </th>
                                            {perk.tiers.map((tier, index) => (
                                                <td
                                                    key={tier.title}
                                                    className={classNames(
                                                        index === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                        'relative w-1/4 py-0 text-center',
                                                    )}
                                                >
                            <span className="relative h-full w-full py-3">
                              {tier.value === true ? (
                                  <CheckIcon aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600" />
                              ) : (
                                  <XMarkIcon aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400" />
                              )}

                                <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                                {/* Fake card borders */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-stretch">
                                    <div className="w-1/4 pr-4" />
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                    </div>
                                    <div className="w-1/4 px-4">
                                        <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                                    </div>
                                    <div className="w-1/4 pl-4">
                                        <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto max-w-2xl px-6 py-12 lg:max-w-7xl lg:px-8 lg:py-32">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/tuple-logo-gray-400.svg" className="h-12" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img alt="Mirage" src="https://tailwindui.com/plus/img/logos/mirage-logo-gray-400.svg" className="h-12" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                alt="StaticKit"
                                src="https://tailwindui.com/plus/img/logos/statickit-logo-gray-400.svg"
                                className="h-12"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                alt="Transistor"
                                src="https://tailwindui.com/plus/img/logos/transistor-logo-gray-400.svg"
                                className="h-12"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                alt="Workcation"
                                src="https://tailwindui.com/plus/img/logos/workcation-logo-gray-400.svg"
                                className="h-12"
                            />
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <section aria-labelledby="faq-heading" className="bg-gray-900">
                    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="max-w-2xl lg:mx-auto lg:text-center">
                            <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Frequently asked questions
                            </h2>
                            <p className="mt-4 text-gray-400">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                                nec. Urna, sed a lectus elementum blandit et.
                            </p>
                        </div>
                        <div className="mt-20">
                            <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                                {faqs.map((faq) => (
                                    <div key={faq.id}>
                                        <dt className="font-semibold text-white">{faq.question}</dt>
                                        <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-8 xl:col-span-1">
                                <img
                                    alt="Company name"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-10"
                                />
                                <p className="text-base text-gray-500">
                                    Making the world a better place through constructing elegant hierarchies.
                                </p>
                                <div className="flex space-x-6">
                                    {footerNavigation.social.map((item) => (
                                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon aria-hidden="true" className="h-6 w-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.solutions.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-base font-medium text-gray-900">Support</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.support.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900">Company</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.company.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-base font-medium text-gray-900">Legal</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.legal.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <p className="text-base text-gray-400 xl:text-center">
                                &copy; 2021 Your Company, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
