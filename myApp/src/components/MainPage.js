import React from "react";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="h-screen grid grid-rows-2 gap-1 m-2 md:grid-cols-2 md:w-10/12 md:mx-auto">
          <div className=" grid grid-rows-3 gap-1 md:h-screen">
            <div className="bg-yellow-500 row-span-2 rounded"></div>
            <div className="bg-blue-500 rounded"></div>
          </div>
          <div className="grid grid-rows-3 gap-1 md:h-screen">
            <div className="grid grid-cols-3 gap-1">
                <div className="bg-blue-500 rounded"></div>
                <div className="bg-blue-700 rounded"></div>
                <div className="bg-blue-900 rounded"></div>
               
            </div>
            <div className="bg-yellow-500 row-span-2 rounded"></div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
