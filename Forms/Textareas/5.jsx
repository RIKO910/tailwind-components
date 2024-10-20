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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'

export default function Example() {
    return (
        <form action="#">
            <TabGroup>
                <TabList className="group flex items-center">
                    <Tab className="rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[selected]:bg-gray-100 data-[selected]:text-gray-900 data-[selected]:hover:bg-gray-200">
                        Write
                    </Tab>
                    <Tab className="ml-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[selected]:bg-gray-100 data-[selected]:text-gray-900 data-[selected]:hover:bg-gray-200">
                        Preview
                    </Tab>

                    {/* These buttons are here simply as examples and don't actually do anything. */}
                    <div className="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Insert link</span>
                                <LinkIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Insert code</span>
                                <CodeBracketIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Mention someone</span>
                                <AtSymbolIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </TabList>
                <TabPanels className="mt-2">
                    <TabPanel className="-m-0.5 rounded-lg p-0.5">
                        <label htmlFor="comment" className="sr-only">
                            Comment
                        </label>
                        <div>
              <textarea
                  id="comment"
                  name="comment"
                  rows={5}
                  placeholder="Add your comment..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                        </div>
                    </TabPanel>
                    <TabPanel className="-m-0.5 rounded-lg p-0.5">
                        <div className="border-b">
                            <div className="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
                                Preview content will render here.
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
            <div className="mt-2 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Post
                </button>
            </div>
        </form>
    )
}
