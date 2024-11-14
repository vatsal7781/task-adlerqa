import React from "react";

function VideoShowreel() {
  return (
    <div className="rounded-xl flex relative flex-col justify-center self-end  text-sm font-medium leading-loose text-white aspect-[1.855] max-md:px-5 max-md:mt-10">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e3ef399353c086dcb756dbe0d8c626a9171122545ae75897b4ef2d1e617ca44?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="" className="object-cover absolute inset-0 size-full" />
      <button className="flex relative gap-2 justify-center items-center px-6 py-3 bg-white bg-opacity-10 min-h-[45px] rounded-[32px] max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcab5a989de55139b8c094d80b7841c017cbe3a80faa8b7f5b8ce4bb4115bab3?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-2.5 rounded-sm aspect-[0.77]"
      />
      <span className="self-stretch my-auto">Play Showreel</span>
    </button>
    </div>
  );
}

export default VideoShowreel;