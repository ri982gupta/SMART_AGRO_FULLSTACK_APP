import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';


const Trainers = () => {
    return (
        <>
            <div className="w-full h-full">
                <Swiper
                    direction="vertical"
                    className="h-[60vh]"
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: true }}
                    speed={800}
                    spaceBetween={50}
                    // slidesPerView={3}
                    loop={false}
                >
                    <div className="swiper-pagination"></div>
                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 1</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //--------------------------------------- */}

                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 1</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 2</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 3</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 4</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" h-full w-full flex items-center justify-center ">
                            <div className="border-2 w-full h-full md:w-[60vw] md:h-[55vh] relative  rounded-md shadow-md flex items-center  justify-around flex-col md:flex-row bg-blue-300">
                                {/* //- Social media icons */}
                                <div className="absolute bottom-0 left-0 p-2 md:p-2 h-[16vh] md:h-[18vh] flex flex-col justify-between ">
                                    <div className="border-2 flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="border-2  flex items-center justify-center w-8 h-8">
                                        <a href="#" className="p-0 hover:bg-blue-600 w-full h-full flex items-center justify-center duration-500 hover:text-white">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>

                                </div>
                                {/* //- Image  */}
                                <div className="flex justify-center items-center flex-col w-full md:w-[32rem] md:h-full">

                                    <div className="border-8 border-blue-500 w-40 h-40 xl:w-60 xl:h-60 rounded-full flex items-center justify-center mt-3">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

                                    </div>

                                </div>
                                {/* //- Content */}
                                <div className="w-full text-center md:w-[32rem] p-4  -mt-10">
                                    <h2 className="mt-4 tracking-wide font-semibold md:text-2xl">John Doe 5</h2>
                                    <p className="md:text-xl">Developer</p>
                                    <p className="md:text-lg">2 years</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}

export default Trainers