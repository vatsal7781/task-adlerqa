import React from "react";

function ActionButtons() {
  return (
    <div className="ml-[100px] flex flex-wrap gap-5 justify-between items-center mt-16 max-w-full text-base leading-none w-[597px]">
      <button className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch px-8 py-5 font-bold text-white uppercase bg-red-600 rounded-[34px] max-md:px-5">
        Get professional video services
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a39a802934bb8b2751b1f2dd55adf6c16e86b9f852dfc58a0a07994320b0ce?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
      </button>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be765ac91cfbdae4968244fdd1b78b6d0a8c39bf03c326194ba50095782becf0?placeholderIfAbsent=true&apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.75] w-[84px]" />
      <div className="flex flex-col self-stretch my-auto font-medium tracking-tighter">
        <span className="text-stone-950 max-md:mr-1">Marin / Ayesha</span>
        <span className="text-stone-950 text-opacity-60">Global Services</span>
      </div>
    </div>
  );
}

export default ActionButtons;