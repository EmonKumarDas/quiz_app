import React from 'react';
import { GoEye } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Option from '../components/Option';


const Question = ({ data }) => {
    // console.log(data);
    const { question, correctAnswer, options } = data;

    const handleEyeBtn = () => {
        toast.success(`${correctAnswer}`, {
            position: 'top-center'
        })

    }
    return (
        <div>
            <div className='p-5 mx-auto text-white rounded-md md:w-1/2 mt-7 bg-sky-900 '>
                <div className='justify-between md:flex'>
                    <h4 className='justify-between font-bold  md:w-4/5 md:flex'><span className='mr-10'>Quiz: </span> <span>{question}</span></h4>
                    <button title='show the right answer' onClick={handleEyeBtn} ><GoEye /></button>
                </div>
                <div className='grid gap-2 md:last:grid-cols-2'>
                    {options.map(option => <Option
                        key={option.idx}
                        option={option}
                        correctAnswer={correctAnswer}
                        options={options}
                    ></Option>)}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;