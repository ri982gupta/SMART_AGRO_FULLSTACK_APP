import { Link } from "react-router-dom"


const StudentDashboard = () => {


    return (
        <>
            {/* //- Greeting User */}
            <div className="w-full h-full">
                <div className="w-[90vw] mx-auto mt-12">
                    <h1 className="text-3xl font-bold">Welcome Back, User</h1>
                </div>
                {/* //- My courses */}
                <div className="w-[90vw] mx-auto mt-5">
                    <h1 className="text-2xl font-semibold py-5">My Courses</h1>
                    <Link to='/courses' className="text-blue-600 py-5">View More Courses</Link>
                </div>
                {/* //- Course Card */}
                <div className="w-[90vw] mx-auto  mt-10">
                    <div class="py-4 grid grid-cols-3 gap-4">
                        <div className="relative aspect-[4/3] md:max-w-sm bg-white rounded-lg border-2 border-gray-300 shadow-md  duration-500  mb-6 md:mb-0 w-full">
                            <div className="flex items-center justify-center overflow-hidden">
                                <Link to='/' className='w-full h-full'>
                                    <img src='https://images.unsplash.com/photo-1659948782675-9d4fadea983b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" className=" duration-500 rounded-sm h-52 w-full object-cover" />
                                </Link>
                            </div>
                            <div className="p-5">
                                <Link to='/'>
                                    <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white inline-block">UHV</h5>
                                </Link>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                </p>

                                <div className='flex items-center justify-between mt-7'>
                                    <Link to='/' className="bg-blue-500 text-white p-3 hover:bg-blue-600 tracking-wider">Start Learning</Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDashboard