import { Link } from "react-router-dom"


const Blog = () => {
    return (
        <>
            <div className=" w-full">
                <div className="w-[90%] mx-auto mt-10">
                    <div className="flex  items-center justify-center">
                        <div className="flex flex-col mt-1">
                            <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                            <span className="about-show bg-blue-500 mx-2 w-10"></span>
                        </div>
                        <h1 className="font-semibold text-xl text-blue-500">BLOG</h1>
                        <div className="flex flex-col mt-1">
                            <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                            <span className="about-show bg-blue-500 mx-2 w-10"></span>
                        </div>
                    </div>

                    {/* //- Course Category Heading */}
                    <div className="flex items-center justify-center mt-3">
                        <h1 className="font-semibold text-3xl tracking-wide">Our Blogs</h1>
                    </div>
                </div>
                <div className=" grid grid-cols-1 gap-4 my-10 mx-10">

                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw] drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 1</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw]  drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 2</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw]  drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 3</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw]  drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 4</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw]  drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 5</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row border-2 md:w-[90vw]  drop-shadow-xl shadow-lg hover:scale-105 duration-500">

                        <div className="md:basis-[30%] overflow-hidden">
                            <Link to='/'>
                                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="md:w-[32vw] md:h-[32vh] mb-5 md:mb-0 object-cover hover:scale-110 duration-500" alt="Img" />
                            </Link>
                        </div>
                        <div className="basis-full ml-0 md:basis-[60%] md:ml-10 p-2 text-justify">
                            <h1 className="my-3 text-3xl font-semibold">Demo 6</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi vero recusandae necessitatibus unde mollitia incidunt tempora nihil dignissimos. Architecto tempora dolor quisquam adipisci, distinctio cumque fuga quaerat nesciunt, id praesentium aliquam eius minima possimus magni doloribus ipsam exercitationem ipsum quia officiis deserunt temporibus harum quas voluptas? Explicabo, reiciendis obcaecati!

                            <Link to='/' className="ml-2 text-blue-500">Read More</Link>
                        </div>

                    </div>








                </div>
            </div>
        </>
    )
}

export default Blog