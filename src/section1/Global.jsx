import React from "react";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Reel from "./VideoShowreel.jsx";

function GlobalAgencyComponent() {
  return (
    <>
      <main className="flex flex-col items-start px-20 mt-9 w-full max-md:px-5 max-md:max-w-full">
        <Header />

      </main>

      <Description />


      {/* <div className="flex"> */}

      <div className=" flex flex-row ">
        <ActionButtons />
        <div className="mb-[12] md:ml-[400px] w-[260px]">
          <Reel />
        </div>
      </div>
      {/* <VideoShowreel /> */}
      {/* </div> */}

    </>




  );
}

export default GlobalAgencyComponent;