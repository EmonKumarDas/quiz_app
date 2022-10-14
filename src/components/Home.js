import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';




const Home = () => {

    const allCourses = useLoaderData();
    const courses = allCourses.data;

    // console.log(courses)


    return (
        <div className=''>
            <div className='p-12 text-center text-indigo-900 '>

                <h3 className='text-4xl font-bold'>
                Welcome ! Start your Quiz!
                </h3>
            </div>
            <div className='grid gap-4 p-5 mx-8 md:grid-cols-4 w-100 bg-sky-900'>
                {courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)}
            </div>

        </div>

    );
};

export default Home;