import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="w-full overflow-hidden xl:h-[700px] relative">
            <article className="absolute z-1 right-2 top-1/4 flex flex-col gap-3 md:gap-4 md:right-1/4 md:top-1/3 lg:gap-6 lg:right-16 xl:right-1/4 xl:top-2/4">
                <h2 className=" uppercase font-bold text-base md:text-xl lg:text-4xl ">the new season arrived </h2>
                <span className="font-semibold text-sm md:text-xl lg:text-2xl">look at the new trends</span>
                <div>
                    <Link className="px-2 py-1 text-sm rounded border-[1px] border-transparent bg-[#802C6E] font-semibold text-white hover:bg-white hover:text-[#802C6E] hover:border-[#802C6E] md:text-xl xl:text-2xl" to={"/Products"}>Go to products</Link>
                </div>
            </article>
            <img className="w-full object-cover object-top " src="/woman-hero-img.jpg" alt="woman-image" />
        </section>
    )
}

export default Hero