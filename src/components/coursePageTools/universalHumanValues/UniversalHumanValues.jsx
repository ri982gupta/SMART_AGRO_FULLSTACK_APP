import { CartState } from "../../../context/Context"


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css';

import { Link } from 'react-router-dom';

const UniversalHumanValues = (props) => {

    const { data } = props;
    const { state: { cart }, dispatch } = CartState();
    // console.log(cart);


    return (



        <>
            <Swiper
                className='h-[60vh]'
                modules={[Navigation, Pagination, Autoplay]}
                // pagination={{ el: ".cus-swiper-pagination", clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                speed={800}
                spaceBetween={50}
                loop={false}
                navigation={{
                    nextEl: '.cus3-swiper-button-next',
                    prevEl: '.cus3-swiper-button-prev',
                }}
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
                <div className="cus3-swiper-button-next"></div>
                <div className="cus3-swiper-button-prev"></div>
                <div className="cus-swiper-pagination"></div>


                {data.map((e) => {

                    if (e.type === 'uhv') {
                        return (
                            <SwiperSlide key={e.id}>
                                <div className="relative aspect-[4/3] md:max-w-sm bg-white rounded-lg border-2 border-white shadow-md  duration-500  mb-6 md:mb-0 w-full">
                                    <div className="flex items-center justify-center overflow-hidden">
                                        <Link to='/' className='w-full h-full'>
                                            <img src={e.image} alt="" className=" duration-500 rounded-sm h-52 w-full object-cover" />
                                        </Link>
                                    </div>
                                    <div className="p-5">
                                        <Link to='/'>
                                            <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white inline-block">UHV</h5>
                                        </Link>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                        </p>

                                        <p className='mb-5'>
                                            <span className='font-bold'>Trainer:</span> {e.name}
                                        </p>
                                        <div className='flex items-center justify-between'>
                                            <Link to={`course-details/${e.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2">
                                                View Details </Link>
                                            {/* //? Some function check item is availabe or not  */}
                                            {/* 
                                            {cart.some(p => p.id === e.id) ? (
                                                <button onClick={() => {
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: e
                                                    })
                                                }} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 duration-500" >
                                                    Remove From cart </button>

                                            ) : (

                                                <button onClick={() => {
                                                    dispatch({
                                                        type: 'ADD_TO_CART',
                                                        payload: e
                                                    })
                                                }} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 duration-500" >
                                                    Add to cart </button>

                                            )}
                                             */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                })}

            </Swiper>
        </>
    )
}

export default UniversalHumanValues