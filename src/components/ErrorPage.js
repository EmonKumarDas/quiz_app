import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='text-center mt-60'>
      <h3 className='text-3xl font-bold text-red-600'>Oops. Page not Found!.</h3>
      <h3 className='my-4 text-2xl'> {error.statusText}</h3>
      <h3 className='text-5xl'>{error.status}</h3>
    </div>
  );
};

export default ErrorPage;