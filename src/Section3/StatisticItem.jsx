import React from 'react';

const StatisticItem = ({ number, description }) => {
  return (
    <div className="flex flex-col w-1/4 max-md:w-full">
      <div className="flex grow gap-3.5 font-medium text-stone-950 max-md:mt-10">
        <div className="flex flex-col items-start w-full">
          <div className="mt-8 text-8xl tracking-tighter leading-none uppercase max-md:text-4xl">
            <span className="">{number.split('+')[0]}</span>
            <span className="text-red-600">+</span>
          </div>
          <div className="mt-3 text-2xl tracking-tighter leading-7">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticItem;