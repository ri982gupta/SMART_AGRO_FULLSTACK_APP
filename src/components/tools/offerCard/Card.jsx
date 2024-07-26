import { Link } from 'react-router-dom'
import '../offerCard/offerCard.css'

const Card = () => {
    return (
        <>
            <div data-aos="zoom-in" className="relative aspect-[4/3] md:max-w-sm bg-white rounded-lg border border-white shadow-md  hover:bg-blue-500 hover:-translate-y-2 duration-500 custom_hover mb-6 md:mb-0 w-full">


                <div className="flex h-[40vh] items-center justify-center overflow-hidden">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Xk4tst_-Lc83juqYnIB7hVoOqqCPlSyQLWeES6_pP4L6YzhUn_1pNuX0RHLW4kWLvDayp7nOLqusBDLLwnc_enrCS7NFrSpAGG6k1fIjc6WpeBrB8aOmlc9KbF9QbdQaAi1QLW_7a6pSZ1nqVFP7fAU2sxqs75fVecOqz0xT5MqNxym5TobM2-n-CQ/s1600/images.png" alt="Technical Skill" className=" hover:scale-110 duration-500 rounded-sm  w-full h-full" />
                </div>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white custom_first">Soft Skills</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 custom_second">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to='/about' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 custom_third">
                        Read more </Link>
                </div>


            </div>


            {/* --------------------------------------------------------- */}

            <div data-aos="zoom-in" className="relative aspect-[4/3] md:max-w-sm bg-white rounded-lg border border-white shadow-md  hover:bg-blue-500 hover:-translate-y-2 duration-500 custom_hover mb-6 md:mb-0 w-full">


                <div className="flex h-[40vh] items-center justify-center overflow-hidden">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcwxwAgOQh5Om02_JblbDKfqAnEwuOXJXLkRzc9ND6kYt1dowBczzz3MguM0cDQExt-2XVx95kMBJe-EIhp_fY5h_L30ycBKJ77AjVC8NKpupG0v6m2hScqx_mC6DG00eAWN282fb_rEHC2Rmo-NsG5PZ9CVYjY2ATFqTFm2vDW5-m_RDfPRs1lzA1A/s320/EHdJ-jnVUAAjFvY.jpeg" alt="UHV" className=" hover:scale-110 duration-500 rounded-sm  w-full h-full" />
                </div>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white custom_first">Universal Human Values</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 custom_second">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to='/about' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 custom_third">
                        Read more </Link>
                </div>


            </div>
            {/* --------------------------------------- */}
            <div data-aos="zoom-in" className="relative aspect-[4/3] md:max-w-sm bg-white rounded-lg border border-white shadow-md  hover:bg-blue-500 hover:-translate-y-2 duration-500 custom_hover mb-6 md:mb-0 w-full">


                <div className="flex h-[40vh]   items-center justify-center overflow-hidden">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVjeD_4e2I9tD6L8RZMm_QrSUkxTEouX41votF6SeF1_uclFeRbF8kZupXuNOR53yInz3JrG-DBKJcpLvJGalrjZ57eFIm5MnW4rjQTSSLU37-Er-4yocRo10CxM0LfnM9rTM0eVAMHYyZ66UA8Iy1e7QMm1KlPZB0NExmmtTjOK17OToPdTYoCIKeTg/s320/technical-skills.png" alt="Technical Skills" className=" hover:scale-110 duration-500 rounded-sm  w-full h-full" />
                </div>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white custom_first">Technical Slill</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 custom_second">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to="/about" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 custom_third">
                        Read more </Link>
                </div>


            </div>


        </>
    )
}

export default Card