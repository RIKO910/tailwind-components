export default function Example() {
    return (
        <div className="relative bg-indigo-800">
            <div className="absolute inset-0">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                    className="h-full w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                    Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                    lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
                </p>
            </div>
        </div>
    )
}
