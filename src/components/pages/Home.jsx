import './pages.css';
import Slider from "../tools/imageSlider/Slider";
import OfferCard from "../tools/offerCard/OfferCard";
import CourseCategory from '../tools/courseCategory/CourseCategory';
import PopularCoursesCard from '../tools/popularCoursesCard/PopularCoursesCard';
import Testimonial from '../tools/testimonial/Testimonial';
import Trainers from '../tools/trainers/Trainers';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            {/* //- Image Slider */}
            <div className="relative w-100 h-[100vh] ">
                <Slider />
            </div>

            {/* //- Courses Offer Cardes */}
            <div className="w-[90%] mx-auto ">
                <OfferCard />
            </div>

            {/* //- About Us  container Start */}
            <div className="w-[90%] mx-auto md:flex md:justify-between justify-around mt-20 md:h-full lg:h-full xl:h-[71vh] 2xl:h-[63vh] h-full">


                <div data-aos="zoom-in" className="md:basis-[40%] mb-6 md:mb-0 ">
                    <img src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Img" className="w-full md:h-full h-[40vh] object-cover " />
                </div>

                <div className="md:basis-[60%] ">

                    <div className='ml:0 md:ml-7'>
                        {/* //- About Heading  */}
                        <div data-aos="zoom-in" className="flex flex-row flex-wrap">
                            <h3 className="font-semibold text-blue-500">ABOUT US</h3>
                            <div className="flex flex-col mt-1">
                                <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                                <span className="about-show bg-blue-500 mx-2 w-10"></span>
                            </div>
                        </div>
                        {/* //- About Content */}
                        <div data-aos="zoom-in">
                            <h1 className='text-3xl font-semibold mt-2'>Welcome to HABIT</h1>
                            <p className='mt-4 text-justify  w-full'>
                                We HABITS  providing complete solution at one place for student which teach student universal human value & ethics soft skill, business development and technical skill. Our goal to change student thinking & performance towards life & make them success.
                            </p>
                            <p className='mt-4 text-justify  w-full'>
                                HABIT is providing training on all things which can make any one success in their life. In todays world we are not getting ETHICAL VALUES that is important for living & negotiation with life.
                                Every one have to be ready with soft skill like leadership, communication, problem solving.
                            </p>
                            {/* //- Services We provide */}
                            <div className='flex items-center justify-between md:justify-around mt-7'>
                                <div>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Universal Human Values
                                    </p>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Soft Skill
                                    </p>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Business Skill
                                    </p>

                                </div>
                                <div>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Technical Skill
                                    </p>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Freelancing
                                    </p>
                                    <p>
                                        <ion-icon color="primary" name="arrow-forward-outline"></ion-icon> Problem Solving
                                    </p>
                                </div>
                            </div>
                            {/* //- end of services */}

                            <button className='mt-11  rounded-md text-white bg-blue-500 px-4 py-4 hover:bg-blue-600'>Read More</button>
                        </div>


                    </div>
                </div>

            </div>

            {/* //- About Us Container End */}


            {/* //- Course Category Component */}
            <div className='w-[90%] mx-auto my-20 '>
                <CourseCategory />
            </div>

            {/* //- Popular Courses */}
            <div className='relative w-[90%] h-[85vh] mx-auto mt-20 '>
                <PopularCoursesCard />
            </div>

            {/* //- Trainers Section */}
            <div className='relative w-[90%] mx-auto mt-20'>

                {/* //- Trainers heading */}
                <div className='w-full my-10'>
                    <div className="relative w-full h-full">
                        <div className="flex  items-center justify-center">
                            <div className="flex flex-col mt-1">
                                <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                                <span className="about-show bg-blue-500 mx-2 w-10"></span>
                            </div>
                            <h1 className="font-semibold text-xl text-blue-500">INSTRUCTORS</h1>
                            <div className="flex flex-col mt-1">
                                <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                                <span className="about-show bg-blue-500 mx-2 w-10"></span>
                            </div>
                        </div>
                        {/* //- Testimonial Heading */}
                        <div className="flex items-center justify-center mt-3 mb-5">
                            <h1 className="font-semibold text-3xl tracking-wide">Expert Instructors</h1>
                        </div>

                    </div>
                    <Trainers />
                </div>
            </div>
            {/* //- Testimonial Component */}
            <div className='relative w-[90%] md:h-[85vh] mx-auto my-20'>
                <Testimonial />
            </div>

        </>
    )
}

export default Home

