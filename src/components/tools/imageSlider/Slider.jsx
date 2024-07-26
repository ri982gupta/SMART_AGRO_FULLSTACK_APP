import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import 'swiper/css'
import 'swiper/css/pagination'
// - Custom CSS
import '../imageSlider/slider.css'
// - Importin AOS For Animation
import Aos from "aos";
import 'aos/dist/aos.css';

const Slider = () => {
    return (
        <>

            <div className="relative w-full h-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.cus0-swiper-button-next',
                        prevEl: '.cus0-swiper-button-prev',
                    }}
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: true }}
                    speed={800}
                    slidesPerView={1}
                    loop




                >
                    <div className="cus0-swiper-button-next"></div>
                    <div className="cus0-swiper-button-prev"></div>
                    {/* //* 1 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-[92vh] flex items-center justify-center">
                            <div className="img_slider object-cover">
                                <img src="/image/banner1.png" alt="banner" className="img w-full h-full" />
                                <div className=" overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            {/* <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 1</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>

                    {/* // ----------------------------------------------------------------------- */}
                    {/* //* 2 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner2.png" alt="banner" className="img w-full h-full" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            {/* <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    {/* //* 3 */}
                    {/* //------------------------------- */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner3.png" alt="banner" className="img" width={100} height={100} />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //------------------------ */}
                    {/* //* 4 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="https://internationalschooling.org/wp-content/uploads/2021/05/Why-soft-skills-are-gaining-importance-over-mainstream-subjects-02.png" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //--------------------- */}
                    {/* //* 5 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //------------------------------------ */}
                    {/* //* 6 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner6.jpeg" alt="banner" className="img object-cover h-[92vh]" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //* 7 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner7.webp" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* //* 8 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner5.jpeg" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* //* 9 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner8.jpeg" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* //* 10 */}
                    <SwiperSlide>
                        <div className="relative w-100 h-full   flex items-center justify-center">
                            <div className="img_slider">
                                <img src="/image/banner9.jpeg" alt="banner" className="img" />
                                <div className="overlay"></div>
                            </div>
                            {/* // ---------------------------------------------------------------------------------- // */}
                            <div className="absolute -top-3 md:top-0 left-0 p-3 w-full h-full flex justify-center flex-col z-2">
                                {/* <div className="md:ml-16">

                                    <h1 className="text-white md:text-6xl font-bold md:ml-5 mb-5 md:w-[60%] leading-relaxed text-2xl">The Best Online Learning Platform 2</h1>
                                    <p className="text-white md:ml-5  md:w-5/12 w-full text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut ipsa eligendi dolores.
                                    </p>
                                    <button className="text-white border-2 w-[40%] md:w-[10%] h-14 md:ml-5 mt-5 rounded-md px-1 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 duration-500 ">Read More</button>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

        </>
    )
}

export default Slider