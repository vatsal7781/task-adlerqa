import React from 'react';

function ContactForm() {
  return (
    <form className="flex flex-col self-stretch my-auto w-full text-base text-stone-950 max-md:mt-10 max-md:max-w-full">
      <h3 className="mt-7 text-2xl font-semibold leading-none max-md:max-w-full">
        Give us few details and we'll get in touch
      </h3>
      <div className="mt-7">
        <label htmlFor="name" className="tracking-normal">Name*</label>
        <input id="name" type="text" required className="w-full mt-3 border-b border-neutral-600" />
      </div>
      <div className="mt-8">
        <label htmlFor="company" className="tracking-normal">Company name</label>
        <input id="company" type="text" className="w-full mt-3 border-b border-neutral-600" />
      </div>
      <div className="mt-8">
        <label htmlFor="email" className="tracking-normal">Email*</label>
        <input id="email" type="email" required className="w-full mt-3 border-b border-neutral-600" />
      </div>
      <div className="mt-8">
        <label htmlFor="phone" className="tracking-normal">Phone no*</label>
        <input id="phone" type="tel" required className="w-full mt-3 border-b border-neutral-600" />
      </div>
      <div className="mt-8">
        <label htmlFor="message" className="tracking-normal">Message*</label>
        <textarea id="message" required className="w-full mt-3 border-b border-neutral-600"></textarea>
      </div>
      <button type="submit" className="flex overflow-hidden gap-2.5 justify-center items-center px-8 py-5 mt-10 font-bold leading-none text-white uppercase bg-red-600 min-h-[60px] rounded-[34px] max-md:px-5">
        CONTACT US
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8b06c8efb6a2cbed969f374c34c542e7db36a885346caf8906afc3c85fbacf?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]" />
      </button>
    </form>
  );
}

export default ContactForm;