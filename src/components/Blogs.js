import React from "react";

const Blog = () => {
    return (
        <div className='w-2/3 mx-auto mt-10'>
        <div className='p-5 text-white border rounded border-sky-900 border-3 bg-sky-900' data-aos="zoom-in">
            <h4 className='mb-3 text-2xl font-semibold'>  What is the purpose of React Router?</h4>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        </div>
        <div className='p-5 my-4 text-white border rounded border-sky-900 border-3 bg-sky-900' data-aos="zoom-in">
            <h4 className='mb-3 text-2xl font-semibold'>How does Context Api work?</h4>
            <p>React Context allows you to pass data through the component tree without having to manually pass props down at each level.</p>
        </div>
        <div className='p-5 mb-4 text-white border rounded border-sky-900 border-3 bg-sky-900' data-aos="zoom-in">
            <h4 className='mb-3 text-2xl font-semibold'> What is useRef?</h4>
            <p>The useRef hook produces a mutable object that does not require a new rendering of the component upon modification.</p>
        </div>
    </div>
);
};



export default Blog;
