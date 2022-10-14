import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";




const Option = ({ option, options, correctAnswer }) => {

    const [total, setTotal] = useState([])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    let rightAns = [];
    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            toast.success('Your ans is correct', {
                position: 'top-center'
            })

        }
        else {
            toast.error('Wrong ans!!!', {
                position: 'top-center'
            })
        }

        const exist = total.find(single => single === correctAnswer)

        if (exist) {
            return;
        }
        else {
            rightAns = [...total, e]
            setTotal(rightAns)
        }


    }
    return (
        <fieldset className='flex p-4 mt-3 border border-white'>
            <div data-aos="fade-left" className='flex'>
                <input onClick={(e) => handleAnswer(e.target.value)} className='cursor-pointer' type="radio" id="option" name="option" value={option}
                />
                <p className='ml-3' for="option">{option} </p>
            </div>
            <ToastContainer />
        </fieldset>
    );
}

export default Option;