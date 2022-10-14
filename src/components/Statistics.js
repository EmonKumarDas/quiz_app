import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const loadCourses = useLoaderData();
    const allCourses = loadCourses.data;
    return (
        <div>
            <h3 className='w-2/3 mx-auto text-3xl font-semibold border-b-2 shadow-lg text-sky-900 mt-7'>Line Chart Of Total Quizes Of Every Single Topic</h3>
            <div className='mx-auto md:w-1/2 mt-9'>


                <ResponsiveContainer width={'99%'} height={300}>
                    <LineChart width={300} height={300} data={allCourses} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>




            </div>
        </div>
    );
};

export default Statistics;