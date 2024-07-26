import TestimonialCard from "./TestimonialCard"

const Testimonial = () => {
    return (
        <>
            {/* //- Testimonial heading */}
            <div className="relative w-full h-full">
                <div className="flex  items-center justify-center">
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                    <h1 className="font-semibold text-xl text-blue-500">TESTIMONIAL</h1>
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                </div>
                {/* //- Testimonial Heading */}
                <div className="flex items-center justify-center mt-3">
                    <h1 className="font-semibold text-3xl tracking-wide">Our Students Say!</h1>
                </div>

                {/* //- Testimonial Card */}
                <div className="w-full mt-14  md:h-[70vh]">
                    <TestimonialCard />
                </div>

            </div>
        </>
    )
}

export default Testimonial



