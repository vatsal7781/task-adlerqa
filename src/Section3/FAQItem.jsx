import React from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="flex flex-wrap gap-5 justify-between mt-6 ml-5 text-lg tracking-normal leading-none text-stone-950 max-md:max-w-full">
        <div className="self-start max-md:max-w-full">
          {question}
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e620f89ccdc8061c48c63f4e1bcb52a9c854770c32462e0ec5c654e762da13?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="" className="object-contain shrink-0 w-8 aspect-square" />
      </div>


      {isOpen && (
        <div className="ml-5 mt-2 text-stone-700 text-sm">
          {answer}
        </div>
      )}
      <hr className="shrink-0 mt-2.5 ml-5 max-w-full h-px border border-solid border-stone-950 border-opacity-10 w-[725px]" />
    </>
  );
};

export default FAQItem;