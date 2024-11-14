import React, { useState } from 'react';
import StatisticItem from './StatisticItem.jsx';
import FAQItem from './FAQItem.jsx';
import john from '../media/reliable.jpeg'
const ExpertiseSection = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [display, setDisplay] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const contentData = [
    {
      name: "Lissa Smith",
      company: "VYMO",
      position: "Director of Marketing and Communications",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f79cb7676b7018a6fa7063b7a0877a1ce7e2ebccef62d81a2be494214128eb96?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c",
    },
    {
      name: "John Doe",
      company: "XYZ Corp",
      position: "Head of Branding",
      description: "Dummy text of the printing industry. Lorem Ipsum has been the industry's standard...",
      image: john,
    },
    // Add more objects for different content options
  ];

  const statistics = [
    { number: '60+', description: 'brands partnered with' },
    { number: '3k+', description: 'brand content assets created' },
    { number: '1k+', description: 'global partners and collaborators' },
    { number: '100+', description: 'cities worldwide' },
  ];

  const faqs = [
    { question: 'How do I sign up?', answer: 'You can sign up by clicking on the signup button and following the instructions.' },
    { question: 'What information do I need to provide during the sign-up process?', answer: 'You need to provide your name, email, and contact details during signup.' },
    { question: 'Is my information secure during the sign-up process?', answer: 'Yes, all information is encrypted and secure during the sign-up process.' },
    { question: 'Who can apply?', answer: 'Anyone with a valid email and contact information can apply.' },
    { question: 'What are the terms and conditions for the collaboration?', answer: 'The terms and conditions vary depending on the collaboration agreement.' },
    { question: 'What is the minimum duration of the contract?', answer: 'The minimum duration of the contract is six months.' },
  ];

  const handleToggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
  };

  const handleToggleContent = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/fbd176d2fc6897b9bc97b135da5f1bb9a54acc9192cdd9aa9eba9ef2ef23bf4f?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f79cb7676b7018a6fa7063b7a0877a1ce7e2ebccef62d81a2be494214128eb96?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s"

  ];
  const [i, setI] = useState(0)

  const click0 = () => {
    setDisplay(0)
    setI(0);
  }
  const click1 = () => {
    setDisplay(1)
    setI(1);

  }
  const click2 = () => {
    setDisplay(2)
    setI(2)
  }





  return (
    <section className="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-5xl font-medium tracking-tighter leading-[56px] text-stone-950 w-[725px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Our expertise and passion breathe life into your narratives
      </h1>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={images[i]} alt="" className="object-contain grow w-full aspect-[1.07] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
              {/* <hr className="shrink-0 self-stretch h-px border border-solid border-stone-950 border-opacity-10 max-md:max-w-full" /> */}
              <div className='flex flex-col items-start'>
                {display === 0 ? (<>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                  <span className="mt-8 text-xl tracking-tighter leading-snug text-red-600">
                    01
                  </span><button className="mt-6 text-3xl tracking-tighter leading-none text-stone-950">
                    Innovative
                  </button><p className="mt-5 text-lg tracking-tight leading-7 text-stone-950 text-opacity-80 w-[511px] max-md:max-w-full">
                    Creation, ensuring your messages resonate worldwide. <br />
                    From concept to distribution, our platform serves as your strategic partner.
                  </p>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                </>) : (<button className="mt-8 text-2xl tracking-tighter leading-none text-zinc-800" onClick={click0}>Innovative</button>)
                }
              </div>



              <div className='flex flex-col items-start'>
                {display === 1 ? (<>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                  <span className="mt-8 text-xl tracking-tighter leading-snug text-red-600">
                    02
                  </span><button className="mt-6 text-3xl tracking-tighter leading-none text-stone-950">
                    Reliable
                  </button><p className="mt-5 text-lg tracking-tight leading-7 text-stone-950 text-opacity-80 w-[511px] max-md:max-w-full">
                    Creation, ensuring your messages resonate worldwide. <br />
                    From concept to distribution, our platform serves as your strategic partner.
                  </p>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                </>) : (<button className="mt-8 text-2xl tracking-tighter leading-none text-zinc-800" onClick={click1}>Reliable</button>)
                }
              </div>
              <div className='flex flex-col items-start'>
                {display === 2 ? (<>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                  <span className="mt-8 text-xl tracking-tighter leading-snug text-red-600">
                    03
                  </span><button className="mt-6 text-3xl tracking-tighter leading-none text-stone-950">
                    Quality
                  </button><p className="mt-5 text-lg tracking-tight leading-7 text-stone-950 text-opacity-80 w-[511px] max-md:max-w-full">
                    Creation, ensuring your messages resonate worldwide. <br />
                    From concept to distribution, our platform serves as your strategic partner.
                  </p>
                  <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid border-stone-950 border-opacity-10 max-md:mr-1.5" />
                </>) : (<button className="mt-8 text-2xl tracking-tighter leading-none text-zinc-800" onClick={click2}>Quality</button>)
                }
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 w-full max-w-[1999px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {statistics.map((stat, index) => (
            <StatisticItem key={index} number={stat.number} description={stat.description} />
          ))}
        </div>
      </div>
      <div className="mt-32 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-3 items-center text-xl font-semibold tracking-wider text-red-600 uppercase">
                <hr className="shrink-0 self-stretch my-auto h-px border border-red-600 border-solid w-[54px]" />
                <span className="self-stretch my-auto">
                  TESTIMONY FROM OUR PARTNERS
                </span>
              </div>
              <img
                loading="lazy"
                src={contentData[contentIndex].image}
                alt="Profile"
                className="object-contain grow w-full aspect-[1.07] max-md:mt-10 max-md:max-w-full"
              />
              <h2 className="mt-32 text-5xl font-medium tracking-tighter leading-[54px] text-stone-950 max-md:mt-10 max-md:text-4xl max-md:leading-10">
                Frequently asked <br /> questions
              </h2>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
              <p className="self-start text-2xl font-semibold tracking-normal leading-10 text-stone-950 max-md:max-w-full">
                {contentData[contentIndex].description}
              </p>
              <div className="md:mt-[260px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-lg text-stone-950 max-md:mt-10 max-md:max-w-full">
                      <h3 className="text-3xl font-bold leading-none uppercase">
                        {contentData[contentIndex].name},{" "}
                        <span className="text-lg leading-7 text-stone-950"> {contentData[contentIndex].company} </span>
                      </h3>
                      <p className="self-stretch mt-1 font-semibold tracking-normal leading-none uppercase text-stone-950 text-opacity-80 max-md:max-w-full">
                        {contentData[contentIndex].position}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-3 max-md:mt-10">
                      <button onClick={handleToggleContent}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f707086444362eb7bbb722e4db424f08c6a513d49e68060a26c391de4524290a?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="Profile" className="object-contain aspect-[2.74] rounded-[34px] w-[137px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:mt-[240px]'>
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggleFAQ(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;