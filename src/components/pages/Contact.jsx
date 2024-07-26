

const Contact = () => {
    return (
        <>
            {/* //- Contact page heading */}
            <div className="w-[90%] mx-auto mt-10">
                <div className="flex  items-center justify-center">
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6 ml-[23px]"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                    <h1 className="font-semibold md:text-xl text-blue-500">CONTACT US</h1>
                    <div className="flex flex-col mt-1">
                        <span className="about-show bg-blue-500 mx-2 my-1 w-6"></span>
                        <span className="about-show bg-blue-500 mx-2 w-10"></span>
                    </div>
                </div>

                {/* //- Course Category Heading */}
                <div className="flex items-center justify-center mt-3">
                    <h1 className="font-semibold text-xl md:text-3xl tracking-wide ">Contact For Any Query</h1>
                </div>
            </div>

            {/* //- Address Section */}

            <div className="relative w-[90%] mx-auto mt-10">


                <div className="w-full flex-wrap flex items-center justify-around">

                    {/* //- Contact details */}
                    <div className="md:h-[33rem] md:basis-[33%] p-3 mb-10 md:mb-0 shadow-md hover:shadow-xl duration-500 border-2 rounded-md" >
                        <h1 className="text-2xl font-semibold md:mt-10">Get In Touch</h1>
                        <p className="text-justify mt-5">
                            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.
                        </p>

                        <div className=" flex items-center h-[3rem] mt-10 ">
                            <div className="border-2 border-blue-500 h-full w-[3rem] bg-blue-500 flex items-center justify-center">
                                <i class="fa-solid fa-location-dot text-xl text-white"></i>
                            </div>
                            <div className="ml-2 h-full flex flex-col justify-center ">
                                <h1 className="font-semibold text-blue-500 text-xl">Office</h1>
                                <p className="w-full text-sm">IIMT College of Engineering,</p>
                            </div>
                        </div>
                        <div className=" flex items-center h-[3rem] mt-5 ">
                            <div className="border-2 border-blue-500 h-full w-[3rem] bg-blue-500 flex items-center justify-center">
                                <i class="fa-solid fa-phone text-xl text-white"></i>
                            </div>
                            <div className="ml-2 h-full flex flex-col justify-center ">
                                <h1 className="font-semibold text-blue-500 text-xl">Mobile</h1>
                                <p className="w-full text-sm">+91 0123 456 789</p>
                            </div>
                        </div>
                        <div className=" flex items-center h-[3rem] mt-5 ">
                            <div className="border-2 border-blue-500 h-full w-[3rem] bg-blue-500 flex items-center justify-center">
                                <i class="fa-solid fa-envelope text-xl text-white"></i>
                            </div>
                            <div className="ml-2 h-full flex flex-col justify-center ">
                                <h1 className="font-semibold text-blue-500 text-xl">Email</h1>
                                <p className="w-full text-sm">info@habbit.com</p>
                            </div>
                        </div>

                    </div>



                    {/* //- Contact form Section */}

                    <div className="md:basis-[33%] shadow-md hover:shadow-xl duration-500 border-2 rounded-md">
                        <div className="bg-white flex flex-col w-full p-3 mt-8">
                            <h2 className="text-gray-900 text-3xl  mb-1 font-bold title-font">Contact Us</h2>
                            <p className="text-base leading-relaxed mb-5 text-gray-600">We can try to resolve your query as soon as possible</p>
                            <form action="#">
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Send Message</button>

                            </form>
                        </div>
                    </div>
                </div>



            </div >
            <div className="my-10 w-[90vw] md:w-[75vw] mx-auto">
                {/* //- Google Map */}


                <div className="w-full h-full shadow-md hover:shadow-xl duration-500 border-2 rounded-md">

                    <div className="h-[33rem] w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.93170316842!2d77.49014931488978!3d28.48160338247751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07c7e0cae3%3A0x82b288a0fa2a6a5!2sIIMT%20COLLEGE%20KNOWLEDGE%20PARK%203%20%2C%20GREATER%20NOIDA!5e0!3m2!1sen!2sin!4v1658678481206!5m2!1sen!2sin" ></iframe>


                        <div className="hidden bg-white absolute top-1 right-1 p-3 md:flex flex-wrap py-6 rounded shadow-md">
                            <div className="">
                                <h2 className=" text-sm font-semibold text-gray-900 tracking-widest">IIMT College Of Engineering</h2>
                                <p className="mt-1">Greater Noida</p>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Contact