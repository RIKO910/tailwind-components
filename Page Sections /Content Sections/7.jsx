/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/20/solid'

export default function Example() {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-lg font-semibold text-indigo-600">Case Study</h2>
                        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-2 lg:row-start-1">
                        <svg
                            fill="none"
                            width={404}
                            height={384}
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                            className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
                        >
                            <defs>
                                <pattern
                                    x={0}
                                    y={0}
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                                </pattern>
                            </defs>
                            <rect fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" width={404} height={384} />
                        </svg>
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                                    <img
                                        alt="Whitney leaning against a railing on a downtown street"
                                        src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                        width={1184}
                                        height={1376}
                                        className="rounded-lg object-cover object-center shadow-lg"
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <CameraIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="mx-auto max-w-prose text-base lg:max-w-none">
                            <p className="text-lg text-gray-500">
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                            </p>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            <p>
                                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                            </p>
                            <p>
                                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                                fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
                            </p>
                            <p>
                                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
                            </p>
                            <ul role="list">
                                <li>Quis elit egestas venenatis mattis dignissim.</li>
                                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                            </ul>
                            <p>
                                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                            </p>
                            <h3>How we helped</h3>
                            <p>
                                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                            </p>
                            <p>
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
