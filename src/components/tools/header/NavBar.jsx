import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import '../header/navbar.css'


const NavBar = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);


    //- Making Navbar Sticky on Scroll
    const [navbar, setNavbar] = useState(false);

    const changeStyle = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeStyle)

    // - Use Location hook for active class
    let history = useLocation();


    const [navItems, setNavItems] = useState(false);

    // - Change hamburge icon and margin of unorderd List
    const changeHamburgerIcon = (e) => {

        if (e.currentTarget.name === 'menu') {
            e.currentTarget.name = 'close'
            setNavItems(true)
            console.log(navItems)
        }
        else {
            e.currentTarget.name = 'menu'
            setNavItems(false)
            console.log(navItems)
        }
    }

    const checkClick = () => {
        setNavItems(false);

    }




    return (
        <>


            {/* // -------------------------------------- Navbar Started -------------------------------- */}
            <nav className={`${navbar ? "z-10 shadow-xl cus-css" : ""} bg-white shadow-lg lg:flex lg:items-center lg:justify-between z-10`}>
                {/* //- Logo Section */}
                <div className="flex justify-between items-center w-full">

                    <span className="text-2xl font-sans font-bold">
                        <Link to='/' onClick={checkClick}>
                            {/* <img className="h-10 inline cursor-pointer" src="/image/logo.png" alt="Logo" />
                            Habbit */}
                            <img src="/image/habbit.png" alt="LOGO" className="h-14 ml-8" />
                        </Link>
                    </span>
                    {/* //- HamBurger Menu Icon */}
                    <span className="text-3xl cursor-pointer z-10 mr-5 mt-2 lg:hidden">

                        {/* <ion-icon name="menu" onClick={changeHamburgerIcon}></ion-icon> */}
                        <ion-icon name={`${navItems ? "close" : "menu"}`} onClick={changeHamburgerIcon}></ion-icon>

                    </span>
                </div>

                {/* //- Navbar Options */}
                <ul className={`lg:flex lg:items-center absolute bg-white w-full left-0 py-4 pl-7${navItems ? "top-[80px] opacity-100 shadow-xl h-[100vh] overflow-auto" : "top-[-80px] opacity-0 hidden"} transition-all ease-in duration-500 lg:relative lg:w-auto lg:py-0 lg:pl-0 lg:opacity-100 z-10`} >

                    <li className="mx-0 my-7 lg:my-0" >
                        <Link to="/" onClick={checkClick} className={`${history.pathname === '/' ? "text-blue-600" : ""} text-lg hover:text-white duration-500 p-5 hover:bg-blue-600 font-semibold`}>Home</Link>
                    </li>
                    <li className="mx-0 my-7 lg:my-0">
                        <Link to="/courses" onClick={checkClick} className={`${history.pathname === '/courses' ? "text-blue-600" : ""} text-lg hover:text-white duration-500 p-5 hover:bg-blue-600 font-semibold `}>Courses</Link>
                    </li>

                    <li className="mx-0 my-7 lg:my-0">
                        <Link to="/blog" onClick={checkClick} className={` ${history.pathname === '/blog' ? "text-blue-600" : ""} text-lg hover:text-white duration-500 p-5 hover:bg-blue-600 font-semibold`}>Blog</Link>
                    </li>
                    <li className="mx-0 my-7 lg:my-0">
                        <Link to="/about" onClick={checkClick} className={`${history.pathname === '/about' ? "text-blue-600" : ""} text-lg hover:text-white duration-500 p-5 hover:bg-blue-600 font-semibold `}>About</Link>
                    </li>
                    <li className="mx-0 my-7 lg:w-[14vw] lg:my-0 lg:-mr-5 xl:-mr-28">
                        <Link to="/contact" onClick={checkClick} className={` ${history.pathname === '/contact' ? "text-blue-600" : ""} text-lg hover:text-white duration-500 p-5 hover:bg-blue-600 font-semibold`}>Contact Us</Link>
                    </li>



                    <Link to='/signup' onClick={checkClick} className="bg-blue-600 md:text-xl text-white font-semibold duration-500 px-3 py-2 mx-5 lg:flex lg:items-center lg:justify-center lg:mr-0 lg:py-4 lg:rounded-none hover:bg-blue-700 rounded lg:w-[15vw] xl:w-[13vw] xl:ml-10 hover:tracking-wider">Join Us <i className="fa-solid fa-arrow-right-long ml-2"></i></Link>
                </ul>

            </nav>
        </>
    )
}

export default NavBar