import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import '../testimonial/card.css'
import { Link } from "react-router-dom";

const TestimonialCard = () => {
    return (
        <>

            <div className="w-full h-full">
                <Swiper
                    className="md:h-[60vh] relative"
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: true }}
                    speed={800}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={false}
                >
                    <div className="swiper-pagination"></div>
                    <div className=" absolute w-24 h-24 top-0 left-0 ">
                        <img src="/image/Quotes.png" className="w-full h-full" alt="" />
                    </div>
                    {/* //--------------------------------------- */}
                    <SwiperSlide>
                        <div className="relative w-full md:h-[45vh] flex justify-center flex-col md:flex-row ">


                            <div className="md:basis-[70%] z-[2] text-justify">
                                <h1 className="mt-16 md:ml-16 p-4 md:p-0">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsum a quas in vero totam aut doloribus laboriosam? Vero aspernatur maiores tempore voluptatibus inventore sit quidem dolor aliquid sunt, distinctio ipsum qui natus accusantium, perspiciatis fugiat suscipit ad, a nesciunt velit illo voluptatum modi reiciendis iste officia? Nihil, quidem quas.
                                </h1>
                                <h1 className="mt-10 text-right mr-2 font-semibold">John Doe 1</h1>
                                <h1 className="mt-1 text-right mr-2 font-semibold">IIMT College, Gr. Noida</h1>
                            </div>

                            {/* //- Image */}
                            <div className="md:basis-[25%] flex items-center justify-center mt-7 md:mt:0">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-[70%] h-[80%] rounded-full border-4 border-cyan-500" />

                            </div>

                        </div>
                    </SwiperSlide>




                    {/* //------------------------------- */}

                    <SwiperSlide>
                        <div className="relative w-full md:h-[45vh] flex justify-center flex-col md:flex-row ">


                            <div className="md:basis-[70%] z-[2] text-justify">
                                <h1 className="mt-16 md:ml-16 p-4 md:p-0">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsum a quas in vero totam aut doloribus laboriosam? Vero aspernatur maiores tempore voluptatibus inventore sit quidem dolor aliquid sunt, distinctio ipsum qui natus accusantium, perspiciatis fugiat suscipit ad, a nesciunt velit illo voluptatum modi reiciendis iste officia? Nihil, quidem quas.
                                </h1>
                                <h1 className="mt-10 text-right mr-2 font-semibold">John Doe 2</h1>
                                <h1 className="mt-1 text-right mr-2 font-semibold">IIMT College, Gr. Noida</h1>
                            </div>

                            {/* //- Image */}
                            <div className="md:basis-[25%] flex items-center justify-center mt-7 md:mt:0">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-[70%] h-[80%] rounded-full border-4 border-cyan-500" />

                            </div>

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="relative w-full md:h-[45vh] flex justify-center flex-col md:flex-row ">


                            <div className="md:basis-[70%] z-[2] text-justify">
                                <h1 className="mt-16 md:ml-16 p-4 md:p-0">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsum a quas in vero totam aut doloribus laboriosam? Vero aspernatur maiores tempore voluptatibus inventore sit quidem dolor aliquid sunt, distinctio ipsum qui natus accusantium, perspiciatis fugiat suscipit ad, a nesciunt velit illo voluptatum modi reiciendis iste officia? Nihil, quidem quas.
                                </h1>
                                <h1 className="mt-10 text-right mr-2 font-semibold">John Doe 3</h1>
                                <h1 className="mt-1 text-right mr-2 font-semibold">IIMT College, Gr. Noida</h1>
                            </div>

                            {/* //- Image */}
                            <div className="md:basis-[25%] flex items-center justify-center mt-7 md:mt:0">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-[70%] h-[80%] rounded-full border-4 border-cyan-500" />

                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full md:h-[45vh] flex justify-center flex-col md:flex-row ">


                            <div className="md:basis-[70%] z-[2] text-justify">
                                <h1 className="mt-16 md:ml-16 p-4 md:p-0">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsum a quas in vero totam aut doloribus laboriosam? Vero aspernatur maiores tempore voluptatibus inventore sit quidem dolor aliquid sunt, distinctio ipsum qui natus accusantium, perspiciatis fugiat suscipit ad, a nesciunt velit illo voluptatum modi reiciendis iste officia? Nihil, quidem quas.
                                </h1>
                                <h1 className="mt-10 text-right mr-2 font-semibold">John Doe 4</h1>
                                <h1 className="mt-1 text-right mr-2 font-semibold">IIMT College, Gr. Noida</h1>
                            </div>

                            {/* //- Image */}
                            <div className="md:basis-[25%] flex items-center justify-center mt-7 md:mt:0">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-[70%] h-[80%] rounded-full border-4 border-cyan-500" />

                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper >
            </div >

        </>
    )
}

export default TestimonialCard

//     < SwiperSlide >

//     <div className="border-2 w-full h-[50vh] relative bg-gray-100 rounded-md shadow-md">

//         <div className="flex justify-center items-center flex-col">

//             <div className="border-8 border-white w-20 h-20 rounded-full flex items-center justify-center mt-3">
//                 <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="User" className="w-full h-full rounded-full" />

//             </div>
//             <h2 className="mt-4 tracking-wide font-semibold">John Doe 1</h2>
//             <p>Developer</p>
//         </div>

//         <div className="absolute bottom-0 left-0 w-full p-4">
//             <p className="text-justify">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quisquam voluptate eum cum, nam assumenda cumque rem aut molestias accusamus ut vero exercitationem at suscipit ducimus vel consectetur consequatur consequuntur.
//             </p>
//         </div>

//     </div >
// </SwiperSlide > 