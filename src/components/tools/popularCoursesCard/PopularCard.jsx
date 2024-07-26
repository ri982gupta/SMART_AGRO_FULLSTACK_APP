import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import '../popularCoursesCard/card.css'

import { Link } from "react-router-dom";

const PopularCard = () => {
    return (
        <>
            <div className="w-full h-full">
                <Swiper
                    className="h-[70vh]"
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    autoplay={{ delay: 2500, }}
                    speed={800}
                    spaceBetween={50}
                    // slidesPerView={3}
                    loop={false}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }

                    }}

                >
                    <div className="swiper-pagination"></div>
                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* //--------------------------------------- */}
                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* //- Popular Courses Card */}
                        <div className=" bg-gray-200  rounded-md shadow-lg hover:-translate-y-2 duration-500">

                            <div className="w-full h-[35vh] overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
                                <div className="z-10 absolute bottom-3 left-[4rem] md:left-[4rem] lg:left-[3rem] xl:left-[6rem] text-white flex items-center ">
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-2 lg:px-1 md:pl-3 xl:px-5 py-1 rounded-l-xl text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
                                    <Link to='/' className="border-2 border-blue-500 hover:border-blue-600 mx-1 px-3 lg:px-1 md:pr-4 xl:px-5 py-1 rounded-r-xl text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

                                </div>
                            </div>
                            <div className="relative text-center border-2 h-[20vh] mt-5">
                                <h1 className="text-2xl"> $149.00</h1>
                                <h1 className="mt-5 text-2xl lg:text-xl tracking-wide font-medium">Univarsal Human Values 1</h1>

                                <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
                                    <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
                                    <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default PopularCard
















// {/* //- Popular Courses Card */ }
// <div className="w-[30%]  bg-gray-200 rounded-md shadow-lg hover:-translate-y-2 duration-500">

//     <div className="w-full h-[35vh] overflow-hidden  relative">
//         <img src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="Course Image" className="w-full h-full object-cover hover:scale-110 duration-500" />
//         <div className="z-10 absolute bottom-3 left-[6rem] text-white flex items-center ">
//             <Link to='/' className="border-2 border-blue-500 mx-1 pl-3 py-1 rounded-l-xl w-[7vw] text-left bg-blue-500 hover:bg-blue-600 duration-500" >Read More</Link>
//             <Link to='/' className="border-2 border-blue-500 mx-1 pr-3 py-1 rounded-r-xl w-[6vw] text-right bg-blue-500 hover:bg-blue-600 duration-500"  >Join Now</Link>

//         </div>
//     </div>
//     <div className="relative text-center border-2 h-[20vh] mt-5">
//         <h1 className="text-2xl"> $149.00</h1>
//         <h1 className="mt-5 text-2xl tracking-wide font-medium">Univarsal Human Values</h1>

//         <div className="flex items-center mt-7 w-full absolute bottom-0 left-0">
//             <p className="py-1 basis-[35%] border-r-2 border-t-2  border-gray-300 flex items-center justify-center"><i className="fa-solid fa-user-tie mr-2"></i> John Doe</p>
//             <p className="py-1 basis-[35%] border-r-2 border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-clock mr-2"></i> 1.9hrs</p>
//             <p className="py-1 basis-[35%] border-t-2 border-gray-300 flex items-center justify-center"><i className="fa-solid fa-users mr-2"></i> 30 student</p>
//         </div>
//     </div>
// </div>