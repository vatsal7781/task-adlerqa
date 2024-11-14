import React from 'react';
import LogoItem from './LogoItem';
import darwin from '../media/logos/darwin.png'
import heakthify from '../media/logos/heakthify.png'
import ikea from '../media/logos/ikea.png'
import indeed from '../media/logos/indeed.png'
import indiagold from '../media/logos/indiagold.png'
import my11circle from '../media/logos/my11circle.jpg'
import sequia from '../media/logos/sequia.png'
import swiggy from '../media/logos/swiggy.png'
import wipro from '../media/logos/wipron.png'
// import darwin from '../media/logos/darwin.png'

const logoData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f607ef39c10c9f41674b67eebacacbb99fec2319315d937e3a05767a7c53c806?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 1", className: "object-contain mr-0 aspect-[4.46] w-[116px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a7bbc25287e370e9a1c628bcb3c9ada5b8d4cb782951c248657fb92ea00872a?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 2", className: "object-contain shrink-0 my-auto aspect-[1.27] w-[62px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1f33938f802b05bfa9702ab67fd65e29a1df5c8d32abe51537823c5ca7f7ff?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 3", className: "object-contain shrink-0 my-auto max-w-full aspect-[3.7] w-[100px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e764e6ebd03c7e080aff1f38b634fdcb5a24aa81a36e64bc51d46d47f6262dff?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 4", className: "object-contain shrink-0 my-auto max-w-full aspect-[3.75] w-[116px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab1dca2ec2627f753bd626c6ab97e1ba8391d47524214f62df797c2712e8c774?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 5", className: "object-contain shrink-0 aspect-[2.51] w-[88px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf42e8ae4f1f1f758d3ec583a370e0e55efd7b2a44859d117101dcf1adc4d4ef?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 6", className: "object-contain shrink-0 my-auto max-w-full aspect-[4.5] w-[108px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/672734fbd688c2801ddea900b01d50a7fd56adf8a799a3bc09aa13e41fa5df99?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c", alt: "Company logo 7", className: "object-contain shrink-0 self-start mt-1 max-w-full aspect-[3.8] w-[118px]" },
  { src: swiggy, alt: "Company logo 8", className: "object-contain shrink-0 self-start aspect-[2.45] w-[76px]" },

];

function LogoGrid() {
  return (
    <section className="mt-20 w-full max-md:mt-1  0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">

        </div>
        {/* <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-10 self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            {logoData.map((logo, index) => (
              <LogoItem key={index} {...logo} />
            ))}
          </div>
          
        </div> */}
        <div className="animate-slide grow shrink w-[732px] max-md:max-w-full max-md:text-4xl whitespace-nowrap">
          {logoData.map((text, index) => (
            <h2 key={index} className="inline-block mr-10">
              <LogoItem key={index}{...text} />
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoGrid;