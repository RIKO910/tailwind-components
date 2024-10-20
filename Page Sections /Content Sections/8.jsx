/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Example() {
    return (
        <div className="overflow-hidden bg-white px-6 py-16 lg:px-8 xl:py-36">
            <div className="mx-auto max-w-max lg:max-w-7xl">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="max-w-prose text-base lg:max-w-none">
                        <h2 className="font-semibold leading-6 text-indigo-600">Transactions</h2>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <svg
                        fill="none"
                        width={404}
                        height={384}
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        className="absolute right-0 top-0 -mr-20 -mt-20 hidden md:block md:[overflow-anchor:none]"
                    >
                        <defs>
                            <pattern
                                x={0}
                                y={0}
                                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                            </pattern>
                        </defs>
                        <rect fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" width={404} height={384} />
                    </svg>
                    <svg
                        fill="none"
                        width={404}
                        height={384}
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
                    >
                        <defs>
                            <pattern
                                x={0}
                                y={0}
                                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                            </pattern>
                        </defs>
                        <rect fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" width={404} height={384} />
                    </svg>
                    <div className="relative md:bg-white md:p-6">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                            <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                <p>
                                    Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum. Duis nullam placerat
                                    cursus risus ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut rerum. Perspiciatis iusto
                                    mollitia iste minima soluta id.
                                </p>
                                <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                                    eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta
                                    integer suspendisse sed sit ligula elit.
                                </p>
                                <ol role="list">
                                    <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
                                    <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
                                </ol>
                                <p>
                                    Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum
                                    blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.
                                </p>
                            </div>
                            <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                                </p>
                                <p>
                                    Eu leo risus porta integer suspendisse sed sit ligula elit. Elit egestas lacinia sagittis pellentesque
                                    neque dignissim vulputate sodales. Diam sed mauris felis risus, ultricies mauris netus tincidunt.
                                    Mauris sit eu ac tellus nibh non eget sed accumsan. Viverra ac sed venenatis pulvinar elit. Cras diam
                                    quis tincidunt lectus. Non mi vitae, scelerisque felis nisi, netus amet nisl.
                                </p>
                                <p>
                                    Eu eu mauris bibendum scelerisque adipiscing et. Justo, elementum consectetur morbi eros, posuere
                                    ipsum tortor. Eget cursus massa sed velit feugiat sed ut. Faucibus eros mauris morbi aliquam nullam.
                                    Scelerisque elementum sit magna ullamcorper dignissim pretium.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >
                                Contact sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
