const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function Example() {
    return (
        <div className="bg-indigo-700">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
                <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-lg font-medium leading-6 text-white">{faq.question}</dt>
                                <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
