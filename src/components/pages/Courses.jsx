import FeaturedCard from '../coursePageTools/featuredCard/FeaturedCard';
import TechnicalCourseCard from '../coursePageTools/technical/TechnicalCourseCard';
import UniversalHumanValues from '../coursePageTools/universalHumanValues/UniversalHumanValues';
import SoftSkillsCourses from '../coursePageTools/softSkills/SoftSkillsCourses';


import { CartState } from "../../context/Context"
import BusinessFreelancing from '../coursePageTools/bussiness&freelancing/BusinessFreelancing';

const Courses = () => {
    const { state: { products } } = CartState();
    // console.log(typeof (products))

    return (
        <>
            {/* //- Featured Courses */}
            <div className=" w-[90%] mx-auto mt-16">
                <div className="my-5 flex items-center">
                    <h1 className="text-3xl font-bold">Featured Courses</h1>
                </div>

                <div className="w-full">
                    <FeaturedCard data={products} />
                </div>

            </div>

            {/* //- Human Values Courses */}
            <div className=' w-[90%] mx-auto my-16'>
                <div className="my-5 flex items-center">
                    <h1 className="text-3xl font-bold">Human Values Courses</h1>
                </div>

                <div className='w-full'>
                    <UniversalHumanValues data={products} />
                </div>
            </div>

            {/* //- Soft Skill Courses */}
            <div className=' w-[90%] mx-auto my-16'>
                <div className="my-5 flex items-center">
                    <h1 className="text-3xl font-bold">Soft Skills Courses</h1>
                </div>

                <div className='w-full'>
                    <SoftSkillsCourses data={products} />
                </div>
            </div>

            {/* //- Technical Courses */}
            <div className=' w-[90%] mx-auto my-16'>
                <div className="my-5 flex items-center">
                    <h1 className="text-3xl font-bold">Technical Courses</h1>
                </div>

                <div className='w-full'>
                    <TechnicalCourseCard data={products} />
                </div>
            </div>

            {/* //- Business & Freelancing Courses */}
            <div className=' w-[90%] mx-auto my-16'>
                <div className="my-5 flex items-center">
                    <h1 className="text-3xl font-bold">Business & Freelancing</h1>
                </div>

                <div className='w-full'>
                    <BusinessFreelancing data={products} />

                </div>
            </div>

        </>
    )
}

export default Courses