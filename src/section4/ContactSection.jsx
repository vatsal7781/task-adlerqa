import React from 'react';
import TeamMember from './TeamMember.jsx';
import ContactForm from './ContactForm.jsx';

const teamMembers = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ca8f01de0f2f77cae0f3f5e2425b72f4a24ce2380e5862ef0ba89ef48c18e3a?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c",
    description: "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
    name: "Milly Cyrus",
    role: "Global Lead"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/488b76ba359900e4d3c74ac68163de67e07851cbcb7498864da1e5390d19d89e?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c",
    description: "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
    name: "Vinita Singh",
    role: "Asst. Global Lead"
  }
];

function ContactSection() {
  return (
    <section className="px-20 py-24 mt-32 w-full bg-gray-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-6xl tracking-tighter uppercase leading-[68px] text-stone-950 max-md:text-4xl max-md:leading-10">
              <span className="font-medium">lets start</span>
              <br />
              <span className="font-medium">something</span>
              <br />
              <span className="font-medium text-red-600">new</span>
              <br />
              <span className="font-medium">together</span>
            </h2>
            <div className="flex flex- gap-5 justify-between mt-16 max-md:mt-10">
              {teamMembers.map((member, index) => (
                <React.Fragment key={index}>
                  <div className="shrink-0 w-px border border-solid border-zinc-800 border-opacity-10 h-[211px]" />
                  <TeamMember {...member} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;