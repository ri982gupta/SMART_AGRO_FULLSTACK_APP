import { Link } from "react-router-dom"


const CourseCategory = () => {
    return (
        <>
            <div className="w-full h-full">
                {/* //- Category Heading  */}
                <div className="flex  items-center justify-center">
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                    <h1 className=" font-semibold md:text-xl text-blue-500">CATEGORIES</h1>
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                </div>

                {/* //- Course Category Heading */}
                <div className="flex items-center justify-center mt-3">
                    <h1 className="text-xl font-semibold md:text-3xl tracking-wide">Courses Categories</h1>
                </div>

                {/* //- Category Image Section */}

                <div className="mt-6 relative flex flex-wrap justify-between">
                    {/* //- First Div */}
                    <div data-aos="zoom-in" className="w-full md:basis-[65%] md:w-[30vw] h-[32vh]">
                        <Link to='/'>
                            <div className="w-full h-full overflow-hidden relative">
                                <div className="absolute bottom-1 right-1 text-black z-[1] border-2 border-white md:w-32 md:h-16 bg-white flex items-center justify-center ">
                                    <h1 className=" md:text-xl font-semibold p-3">Soft Skill</h1>
                                </div>
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="banner-1" className="w-full h-full object-cover hover:scale-110 duration-500 cursor-pointer" />

                            </div>
                        </Link>
                    </div>
                    {/* //- Second Div */}
                    <div data-aos="zoom-in" className="w-full h-[32vh] md:absolute md:right-0 md:top-0 md:basis-[23%] md:w-[30vw] md:h-[66vh] mt-2 md:mt-0">
                        <Link to='/'>
                            <div className="w-full h-full overflow-hidden relative">
                                <div className="absolute bottom-1 right-1 text-black z-[1] border-2 border-white md:w-38 md:h-16 bg-white flex items-center justify-center ">
                                    <h1 className="md:text-xl font-semibold p-3">Universal Human Values</h1>
                                </div>
                                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="banner-2" className="w-full h-full object-cover hover:scale-110 duration-500 cursor-pointer" />
                            </div>
                        </Link>


                    </div>
                    {/* //- Third DIv */}
                    <div className="md:mt-4 md:basis-[65%] w-full md:w-[30vw] md:h-[32vh] flex flex-col md:flex-row items-center md:justify-between">
                        {/* //- third-sub-div 1 */}
                        <div className="w-full h-full md:basis-[48%] mt-2 md:mt-0">
                            <Link to='/'>
                                <div data-aos="zoom-in" className="w-full h-[32vh] md:h-full overflow-hidden relative">
                                    <div className="absolute bottom-1 right-1 text-black z-[1] border-2 border-white md:w-44 md:h-16 bg-white flex items-center justify-center ">
                                        <h1 className="md:text-xl font-semibold p-3">Technical Skill</h1>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="banner-1" className="w-full h-full object-cover hover:scale-110 duration-500 cursor-pointer" />

                                </div>
                            </Link>
                        </div>
                        {/* //- Third-sub-div 2 */}
                        <div className="w-full h-full md:basis-[48%] mt-2 md:mt-0">
                            <Link to='/'>
                                <div data-aos="zoom-in" className="w-full h-[32vh] md:h-full overflow-hidden relative">
                                    <div className="absolute bottom-1 right-1 text-black z-[1] border-2 border-white md:w-32 md:h-16 bg-white flex items-center justify-center ">
                                        <h1 className="md:text-xl font-semibold p-3">Freelancing</h1>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="banner-1" className="w-full h-full object-cover hover:scale-110 duration-500 cursor-pointer" />

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCategory