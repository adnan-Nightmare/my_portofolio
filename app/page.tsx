"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";

const page = () => {
  return(
    <ReactFullpage
    navigation
    scrollingSpeed={700}
    licenseKey={"YOUR_KEY_HERE"}
    render={() => {
      return (
        <>
          <div className="h-screen border-b-2 flex justify-center items-center">
            <h1 className="capitalize font-medium text-7xl text-[#989c96] text-center">
              <span className="text-black">big things</span> start from <br /> small begining
            </h1>
          </div>
          <div className="h-screen snap-center">aa</div>
        </>
      );
    }}
  />
  );
};

export default page;
