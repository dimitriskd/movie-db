export default function Loading() {
    return (
        <section className="h-fit">
            <div className="flex flex-col justify-center items-center">
                <span className="loading loading-ring w-1/4"></span>
                <p className="text-4xl font-semibold">Loading. . .</p>
            </div>
        </section>
    )
}