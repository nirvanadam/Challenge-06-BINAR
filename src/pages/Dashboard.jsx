import React from "react";

function Dashboard() {
  const film = [1, 2, 3, 4, 5, 6];
  const posterStyle = {
    backgroundImage: "url(/images/endgame_poster.jpg)",
    backgroundSize: "cover",
    // filter: "brightness(50%)",
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between gap-4 mx-4 lg:mx-12 my-6">
        <img src="icons/profile_icon.svg" alt="" width="40px" className="invert lg:hidden" />
        <form action="" className="flex w-full bg-slate-200 border border-slate-400 rounded-md">
          <img src="icons/search_icon.svg" alt="" width="35px" className="px-1" />
          <input type="text" placeholder="Search" className="bg-transparent border-transparent w-full pr-3 py-2" />
        </form>
        <img src="icons/hamburger_menu_icon.svg" alt="" width="40px" className="invert lg:hidden" />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div
        className="relative mx-4 lg:mx-12 rounded-lg h-[50vw] lg:h-[40vw] before:content-[''] before:absolute before:bg-black before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-40 before:rounded-lg "
        style={posterStyle}
      >
        <div className="absolute flex flex-col top-[65%] lg:top-[40%] lg:left-4 lg:w-[600px] gap-2 mx-4">
          <h1 className="text-[5vw] font-semibold text-white leading-tight">Avengers: Endgame</h1>
          <p className="hidden lg:block text-white">
            After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.
          </p>
          <a href="https://youtu.be/TcMBFSGVi1c" target="_blank" className="bg-cyan-400 w-fit lg:mt-2 rounded-sm text-[8px] md:text-[12px] px-4 py-1 text-white ">
            TRAILER
          </a>
        </div>
      </div>
      {/* Header End*/}

      {/* Popular Movie */}
      <div className="mx-4 lg:mx-12 mt-8">
        <h1 className="text-white text-xl font-medium mb-6">Popular Movie</h1>
        <div className="border flex flex-wrap justify-center gap-2">
          {film.map((item) => {
            return <p className="rounded-lg border mb-2 text-white w-[110px] h-[200px]">{item}</p>;
          })}
        </div>
      </div>
      {/* Popular Movie End */}
    </>
  );
}

export default Dashboard;
