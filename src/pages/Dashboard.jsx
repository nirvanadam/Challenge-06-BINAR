import React from "react";

function Dashboard() {
  const film = [1, 2, 3, 4, 5, 6];
  const posterStyle = {
    backgroundImage: "url(/images/endgame_poster.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "200px",
    // filter: "brightness(50%)",
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between gap-9 mx-4 lg:mx-10 my-6 fonts-['montserrat']">
        <img src="icons/binar_icon.png" alt="" width="50px" />
        <div className="hidden lg:flex justify-center items-center gap-16 font-['montserrat'] text-white">
          <a href="#" className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-75 hover:before:w-full">
            HOME
          </a>
          <a href="#" className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-75 hover:before:w-full">
            MOVIES
          </a>
          <a href="#" className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-75 hover:before:w-full">
            TV SHOWS
          </a>
          <a href="#" className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-75 hover:before:w-full">
            CONTACT
          </a>
        </div>
        <form action="" className="w-[380px] hidden lg:flex rounded-full border-2 border-slate-600 px-1">
          <img src="icons/search_icon.svg" alt="" width="35px" className="invert px-1" />
          <input type="text" placeholder="Search" className="bg-transparent w-full outline-none text-white pr-3 py-2 placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48" />
        </form>
        <div className="flex gap-4">
          <img src="icons/notification_icon.svg" alt="" width="30px" className="hidden lg:block invert" />
          <img src="icons/profile_icon.svg" alt="" width="40px" className="hidden lg:block invert" />
        </div>
        <img src="icons/hamburger_menu_icon.svg" alt="" width="40px" className="invert lg:hidden" />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div
        className="relative mx-4 lg:mx-8 rounded-2xl h-[50vw] lg:h-[40vw] before:content-[''] before:absolute before:bg-gradient-to-r from-black from-10% to-transparent before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-2xl"
        style={posterStyle}
      >
        <div className="absolute flex flex-col top-[65%] lg:top-[40%] lg:left-10 lg:w-[550px] gap-2 mx-4">
          <h1 className="font-['montserrat'] text-[5vw] font-semibold text-white leading-tight">Avengers: Endgame</h1>
          <p className="hidden lg:block text-white text-justify">
            After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
          </p>
          <a href="https://youtu.be/TcMBFSGVi1c" target="_blank" className="flex gap-2 bg-cyan-400 w-fit lg:mt-2 rounded-sm text-[8px] md:text-[12px] lg:text-[1vw] pl-2 pr-3 py-2 text-white ">
            <img src="icons/play_icon.svg" alt="" width="20px" className="invert" />
            <h1 className="">TRAILER</h1>
          </a>
        </div>
      </div>
      {/* Header End*/}

      {/* Popular Movie */}
      <div className="mx-4 lg:mx-12 mt-8 font-['montserrat']">
        <h1 className="text-white text-xl font-medium mb-6">Popular Movie</h1>
        <div className="flex flex-wrap justify-center gap-2">
          {film.map((item) => {
            return <p className="w-[110px] lg:w-[300px] rounded-lg border mb-2 text-white ">{item}</p>;
          })}
        </div>
      </div>
      {/* Popular Movie End */}
    </>
  );
}

export default Dashboard;
