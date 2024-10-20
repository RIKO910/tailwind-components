/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block">Ready to dive in?</span>
                                <span className="block">Start your free trial today.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                                nec.
                            </p>
                            <a
                                href="#"
                                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                            >
                                Sign up for free
                            </a>
                        </div>
                    </div>
                    <div className="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
                        <img
                            alt="App screenshot"
                            src="https://tailwindui.com/plus/img/component-images/full-width-with-sidebar.jpg"
                            className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
