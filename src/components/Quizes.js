import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../components/Question';

const Quizes = () => {

    const quiz = useLoaderData();
    // console.log(quiz.data)
    const { name, questions } = quiz.data;
    // console.log(questions)
    return (
        <div className='my-12'>
            <h3 className='text-3xl font-bold text-center text-sky-900 '>Quiz Of {name}</h3>
            {questions.map(question => <Question
                key={question.id}
                data={question}
            ></Question>)}

        </div>
    );
};

export default Quizes;