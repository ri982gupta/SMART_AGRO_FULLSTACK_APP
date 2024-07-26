import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

    const [credientials, setCredientials] = useState({ email: "", password: "", repeat_password: "", first_name: "", last_name: "", phone: "" });

    // - Handle Form data and update state
    const handleChange = (e) => {
        setCredientials({ ...credientials, [e.target.name]: e.target.value })
    }
    // - Handle Form on Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (credientials.password !== credientials.repeat_password) {

            alert("Confirm password not Matched")
        }

        if (credientials.email !== '' && credientials.first_name !== '' && credientials.last_name !== '' && credientials.password !== '' && credientials.phone !== '') {
            if (credientials.password === credientials.repeat_password) {
                alert("Success")
            }
        }
        else {
            alert("All fields are required")
        }
    }

    return (
        <>
            <div className="w-full h-full">

                <div className="w-[90%] mx-auto my-7 h-full">

                    <div className=" md:flex">
                        {/* //- Left Part */}
                        <div className="lg:basis-[40%]">
                            <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?w=740&t=st=1660283034~exp=1660283634~hmac=dbaa7e6d9974b4702ef61d0f8de8f44484ddb3a7bd8eb31467434650a6fecdf2" alt="Signup-Image" className="object-cover w-full h-full" />
                        </div>

                        {/* //- Right Part */}
                        <div className="lg:basis-[60%] w-full h-full">
                            <div className="w-[90%] mx-auto">
                                <h1 className="lg:text-3xl text-2xl font-semibold  lg:text-center my-8">Create An Account</h1>
                            </div>
                            {/* //? Signup form */}
                            <div className=" flex items-center justify-center h-full lg:w-[80%] lg:ml-20 ">

                                <form className="lg:w-full w-[90%]" onSubmit={handleSubmit}>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" onChange={handleChange} />
                                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                        </div>
                                        {/* <div className="relative z-0 mb-6 w-full group">
                                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type (Ex. Student)</label>
                                        </div> */}
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
                                </form>

                            </div>
                        </div>
                    </div>


                    {/* //- If user Already registered */}
                    <div className="w-full text-center mt-6">
                        <span className=' md:text-lg'>Already Registered Please <Link to='/login' className='underline text-blue-500'>Login</Link></span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SignUp