import { useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { CartState } from "../../context/Context";

const CourseDetails = () => {

    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => {
        if (collapse) {
            setCollapse(false)
        }
        else {
            setCollapse(true)
        }
    }

    const { id } = useParams()
    const { state: { products } } = CartState();
    const comID = Number(id)




    return (
        <>

            {
                products.map((e) => {
                    if (e.id === comID) {
                        return (
                            <div className=" mx-auto border-2 border-cyan-500" key={e.id}>

                                <div className="relative w-[90vw] h-[45vh] bg-slate-800 text-white mx-auto flex items-center justify-between border-2 border-emerald-500 ">


                                    <div className=" ml-16  w-[35vw]">
                                        <h1 className="text-3xl font-bold">{e.name}</h1>
                                        <p className="mt-6">
                                            {e.smallPara}
                                        </p>
                                    </div>
                                    <div className="absolute top-10  left-[42rem] w-[50vw]">
                                        <div className="w-[25vw] border-2 border-white mx-auto shadow-lg drop-shadow-md">
                                            {/* //-video */}
                                            <div className="w-full h-[30vh] flex items-center justify-center border-2 border-red-500">
                                                <img src={e.image} alt="" className="w-full h-full" />
                                            </div>
                                            {/* //- Enroll Now */}
                                            <div className="w-[20vw] mx-auto my-3">
                                                <button className="w-full bg-blue-500 font-semibold tracking-wide hover:bg-blue-600 cursor-pointer py-2 text-xl rounded-md">Enroll Now</button>
                                            </div>

                                            <div className="ml-5">
                                                <h1 className="text-black font-semibold mb-6">
                                                    This course Containd
                                                </h1>
                                                <p className="text-black">
                                                    5.5 hours on-demand video
                                                </p>
                                                <p className="text-black">
                                                    12 articles
                                                </p>
                                                <p className="text-black">
                                                    12 downloadable resources
                                                </p>
                                                <p className="text-black">
                                                    Full lifetime access
                                                </p>
                                                <p className="text-black">
                                                    Access on mobile and TV
                                                </p>
                                                <p className="text-black">
                                                    Certificate of completion
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* //- What you will learn */}

                                <div className="w-[90vw] mx-auto mt-16">
                                    <div className="w-[50vw] border-2 pl-4">

                                        <h1 className="font-semibold text-2xl mt-5">What you'll learn</h1>

                                        <div className="mt-4 grid grid-cols-2 gap-4">
                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Write clean code that is reusable, modular, and readable</h1>
                                            </div>

                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Learn the fundamental object-oriented programming concepts</h1>
                                            </div>

                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Work on a project to enhance your understanding of the course</h1>
                                            </div>

                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Level up your Python programming skills</h1>
                                            </div>

                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Apply OOP concepts to your Python code</h1>
                                            </div>

                                            <div className="flex">
                                                <i className="fa-solid fa-check mr-3"></i>
                                                <h1>Good and bad practices when writing OOP code</h1>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                                {/* //- What you will learn (End) */}

                                {/* //- Course Content start */}

                                <div className="w-[90vw] mx-auto mt-10 ">
                                    <div className="my-5 pl-4">
                                        <h1 className="font-semibold text-2xl " >Course Content</h1>
                                    </div>

                                    <div id="accordion-collapse" data-accordion="collapse">
                                        <h2 id="accordion-collapse-heading-1">
                                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={handleCollapse}>
                                                <span>What is Flowbite?</span>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className={`${collapse ? "" : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                            </div>
                                        </div>

                                        {/* ---------------------------------------- */}
                                        <h2 id="accordion-collapse-heading-1">
                                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={handleCollapse}>
                                                <span>What is Flowbite?</span>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className={`${collapse ? "" : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        )
                    }
                })
            }


        </>
    )
}

export default CourseDetails



