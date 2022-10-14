import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Course = ({ course }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    // console.log(course)
    const { id, logo, name, total } = course;
    return (
        <div>
            <div className='bg-gray-300 rounded-md ' data-aos="zoom-in">
                <div className='p-5 text-sky-900' >
                    <img className='w-full h-60' src={logo} alt="" />
                    <h4 className='text-2xl font-bold'>{name} </h4>
                    <p>Total quiz: {total}</p>
                    <Link to={`/quiz/${id}`}><button className='w-full px-3 font-semibold text-gray-300 rounded-lg bg-sky-900'>START QUIZ</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;