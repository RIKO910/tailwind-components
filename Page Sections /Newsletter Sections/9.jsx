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
export default function Example() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="relative sm:py-16">
                <div aria-hidden="true" className="hidden sm:block">
                    <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
                    <svg fill="none" width={404} height={392} viewBox="0 0 404 392" className="absolute left-1/2 top-8 -ml-3">
                        <defs>
                            <pattern
                                x={0}
                                y={0}
                                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                            </pattern>
                        </defs>
                        <rect fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" width={404} height={392} />
                    </svg>
                </div>
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                        <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                            <svg
                                fill="none"
                                viewBox="0 0 1463 360"
                                preserveAspectRatio="xMidYMid slice"
                                className="absolute inset-0 h-full w-full"
                            >
                                <path
                                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                    fill="currentColor"
                                    className="text-indigo-500 text-opacity-40"
                                />
                                <path
                                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                    fill="currentColor"
                                    className="text-indigo-700 text-opacity-40"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Get notified when we&rsquo;re launching.
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                    tristique pellentesque.
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="cta-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="cta-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                    />
                                </div>
                                <div className="mt-4 sm:ml-3 sm:mt-0">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                                    >
                                        Notify me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
