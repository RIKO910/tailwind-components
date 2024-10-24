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
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="rounded-3xl bg-indigo-700 px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
                            fugiat.
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full sm:max-w-md lg:ml-8 lg:mt-0 lg:flex-1">
                        <form className="sm:flex">
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
                                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                            />
                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                            >
                                Notify me
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-indigo-100">
                            We care about the protection of your data. Read our{' '}
                            <a href="#" className="font-medium text-white underline">
                                Privacy Policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
