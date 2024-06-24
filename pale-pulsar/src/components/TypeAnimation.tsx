import React from 'react';
import { TypeAnimation as Typing } from 'react-type-animation';

const TypeAnimation = () => {
  return (
    <h1 className='mb-5 text-2xl leading-tight text-center md:text-left dark:text-neutral-200 text-gray-900'>
      ¡Soy 
      <Typing
        sequence={[
          750,
          ' Lucas Roman!',
          750,
          ' Programador!',
          750,
          ' tu proxima eleccion!'
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
        className='font-bold text-blue-600'
      />
    </h1>
  );
};

export default TypeAnimation;
