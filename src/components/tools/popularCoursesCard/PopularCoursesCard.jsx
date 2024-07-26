import PopularCard from "./PopularCard"


const PopularCoursesCard = () => {
    return (
        <>
            {/* //- Popular Courses heading */}
            <div className="relative w-full h-full">
                <div className="flex  items-center justify-center">
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                    <h1 className="font-semibold text-xl text-blue-500">COURSES</h1>
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                </div>
                {/* //- Popular Course Category Heading */}
                <div className="flex items-center justify-center mt-3">
                    <h1 className="font-semibold text-3xl tracking-wide">Popular Courses</h1>
                </div>

                {/* //- Popular Courses Card */}
                <div className="w-full h-[70vh] mt-8">
                    <PopularCard />
                </div>
            </div>
        </>
    )
}

export default PopularCoursesCard