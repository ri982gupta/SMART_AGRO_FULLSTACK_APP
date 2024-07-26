import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="bg-blue-900 text-white md:h-[155vh] lg:h-[65vh]">
                <div className="w-[90%] mx-auto flex items-center justify-between lg:h-[45vh] flex-wrap lg:flex-nowrap">
                    {/* //- Quick Links */}
                    <div className="basis-[100%] md:basis-[50%] lg:basis-[25%] h-full">
                        <h1 className="text-xl font-semibold mb-6 mt-20">Quick Links</h1>
                        <div>

                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    About Us
                                </span>
                            </Link>
                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    Contact Us
                                </span>
                            </Link>
                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    Privacy Policy
                                </span>
                            </Link>
                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    Terms and Conditions
                                </span>
                            </Link>
                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    FAQs & Help
                                </span>
                            </Link>
                            <Link to='/' className="block mb-2 py-2 md:py-1">
                                <i className="fa-solid fa-angle-right"></i>
                                <span className="ml-3 hover:tracking-wider duration-500">
                                    Careers
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* //- Contact Block */}
                    <div className="basis-[100%] md:basis-[50%] lg:basis-[25%] h-[50vh]  md:h-full">
                        <h1 className="text-xl font-semibold mb-6 mt-20">Contact</h1>
                        <div className="flex items-center mb-3">
                            <h1 className="font-semibold tracking-wide"><i className="fa-solid fa-location-dot mr-3 text-xl"></i> 123 street, Noida, India</h1>
                        </div>
                        <div className="flex items-center mb-3">
                            <h1 className="font-semibold tracking-wide"><i className="fa-solid fa-phone mr-3 text-xl"></i> +012 345 67890</h1>
                        </div>
                        <div className="flex items-center mb-3">
                            <h1 className="font-semibold tracking-wide"><i className="fa-solid fa-envelope mr-3 text-xl"></i> info@example.com</h1>
                        </div>
                        <div className="mt-5">
                            <Link to='/' className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-blue-500 duration-500 mr-3" ><i className="fa-brands fa-twitter"></i></Link>
                            <Link to='/' className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-blue-500 duration-500 mr-3" ><i className="fa-brands fa-instagram"></i></Link>
                            <Link to='/' className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-blue-500 duration-500 mr-3" ><i className="fa-brands fa-youtube"></i></Link>
                            <Link to='/' className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-blue-500 duration-500" ><i className="fa-brands fa-linkedin-in"></i></Link>

                        </div>
                    </div>
                    {/* //- Gallery Block */}
                    <div className="basis-[100%] md:basis-[100%] lg:basis-[25%] h-full">
                        <h1 className="text-xl font-semibold mb-6 md:mt-20">Gallery</h1>

                        <div className="flex items-center justify-between flex-wrap w-full lg:w-[20vw]">
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="1" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1578985824626-945a6f546304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="2" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1514195037031-83d60ed3b448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="3" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="4" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1512540452972-baac55d40ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="5" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=493&q=80" alt="6" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white object-cover">
                                <img src="https://images.unsplash.com/photo-1628417076407-638e6a88a62e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=487&q=80" alt="7" className="w-full h-full object-cover" />
                            </div>
                            <div className="border-4 w-[20%] mb-3 mr-2 h-16 border-white flex items-center justify-center">
                                {/* <img src="https://images.unsplash.com/photo-1521504639232-de5ff0a2710f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="8" className="w-full h-full object-cover" /> */}
                                <i className="fa-solid fa-plus text-white cursor-pointer text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    {/* //- Newsletter */}
                    <div className=" basis-[100%] md:basis-[100%] lg:basis-[25%] h-[55vh]  md:h-full">
                        <h1 className="text-xl font-semibold mb-6 mt-20">Newsletter</h1>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipero ad minus? am quasi eos repellendus?</p>

                            <div className="relative bg-white h-14 w-full md:w-full lg:w-64 mt-7 ">
                                <input type="email" name="news_letter_email" placeholder="Enter Your Email" className="h-full text-black pl-3 outline-none w-full md:w-[83%] lg:w-[56%]" />
                                <button className=" text-white font-semibold h-10 my-1 w-24 md:ml-1 border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-500 duration-500">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="md:mt-10 w-[90%] mx-auto mb-4">
                    <hr />
                </div>
                <div className="w-[90%] mx-auto pb-2">
                    <div className=" lg:mt-10 flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center">
                        <div className="mb-6 lg:mb-0">
                            <h1>© <Link to="/" className="underline">Habbit</Link>, All Right Reserved.</h1>
                        </div>
                        <div className="w-[25%]">
                            <ul className="flex items-center justify-around">
                                <li >
                                    <Link to='/' className="border-r-2 pr-2" >Home</Link>
                                </li>
                                <li >
                                    <Link to='/' className="border-r-2 pr-2">Cookies</Link>
                                </li>
                                <li >
                                    <Link to='/' className="border-r-2 pr-2">Help</Link>
                                </li>
                                <li >
                                    <Link to='/'>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;