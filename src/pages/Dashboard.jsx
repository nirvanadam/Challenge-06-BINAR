import React, { useEffect, useState } from "react";
import { detailMovie, getMovieList, searchMovie } from "../api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  // Mendapatkan data ketika website dibuka
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          key={i}
          className="flex flex-col gap-2 lg:gap-4 w-[30%] lg:w-[22%] h-fit font-['montserrat'] text-center text-white group text-[8px] lg:text-base"
        >
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster"
            className="group-hover:scale-105 transition-all duration-150"
          />
          <h1 className="font-semibold tracking-widest uppercase">
            {movie.title}
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4">
            <h2 className="tracking-widest">{movie.release_date}</h2>
            <span className="hidden lg:block">|</span>
            <div className="flex gap-1 lg:gap-3 items-center">
              <img
                src="icons/star_icon.svg"
                alt=""
                className="invert w-3 lg:w-5"
              />
              <h2 className="text-yellow-300">{movie.vote_average}</h2>
            </div>
          </div>
          <Link to={`/movie/${movie.id}`}>Detail</Link>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(querySearch);
  };

  // Style header poster
  const posterStyle = {
    backgroundImage: "url(images/endgame_poster.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "200px",
    // filter: "brightness(50%)",
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between lg:gap-9 mx-4 lg:mx-10 my-6 fonts-['montserrat']">
        <img src="icons/binar_icon.png" alt="" width="50px" />
        <div className="hidden lg:flex justify-center items-center gap-16 font-['montserrat'] text-white">
          <Link
            to={`/`}
            className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-200 hover:before:w-full"
          >
            HOME
          </Link>

          <a
            href="#"
            className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-200 hover:before:w-full"
          >
            MOVIES
          </a>
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-200 hover:before:w-full"
          >
            TV SHOWS
          </a>
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[1px] before:transition-all before:bottom-0 before:left-0 before:duration-200 hover:before:w-full"
          >
            CONTACT
          </a>
        </div>
        {/* Search Bar */}
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex lg:w-[380px] rounded-full border-2 border-slate-600 px-1"
        >
          <img
            src="icons/search_icon.svg"
            alt=""
            width="35px"
            className="invert px-1"
          />
          <input
            type="text"
            placeholder="Search movie"
            onChange={handleChange}
            className="group bg-transparent w-full outline-none text-white pr-3 py-2 placeholder:font-[montserrat] placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48"
          />
        </form>
        {/* Search Bar End */}
        <div className="flex gap-4">
          <img
            src="icons/notification_icon.svg"
            alt=""
            width="30px"
            className="hidden lg:block invert"
          />
          <img
            src="icons/profile_icon.svg"
            alt=""
            width="40px"
            className="hidden lg:block invert"
          />
        </div>
        <img
          src="icons/hamburger_menu_icon.svg"
          alt=""
          width="40px"
          className="invert lg:hidden"
        />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div
        className="relative rounded-lg lg:rounded-none mx-4 lg:mx-0 h-[50vw] lg:h-[40vw] before:content-[''] before:absolute before:bg-gradient-to-r from-black from-10% to-transparent before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-lg lg:before:rounded-none"
        style={posterStyle}
      >
        <div className="absolute flex flex-col top-[65%] lg:top-[40%] lg:left-10 lg:w-[550px] gap-2 mx-4">
          <h1 className="font-['montserrat'] text-[5vw] font-semibold text-white leading-tight">
            Avengers: Endgame
          </h1>
          <p className="hidden lg:block text-white text-justify">
            After the devastating events of Avengers: Infinity War (2018), the
            universe is in ruins. With the help of remaining allies, the
            Avengers assemble once more in order to reverse Thanos' actions and
            restore balance to the universe.
          </p>
          <a
            href="https://youtu.be/TcMBFSGVi1c"
            target="_blank"
            className="flex items-center gap-2 bg-cyan-500 w-fit lg:mt-2 rounded-sm text-[8px] md:text-[12px] lg:text-[1vw] pl-2 pr-3 py-1 lg:py-2 text-white hover:bg-cyan-600 transition active:scale-90"
          >
            <img src="icons/play_icon.svg" alt="" className="invert w-[15px]" />
            <h1 className="">TRAILER</h1>
          </a>
        </div>
      </div>
      {/* Header End*/}

      {/* Popular Movie */}
      <div className="mx-4 lg:mx-12 mt-8 font-['montserrat']">
        <h1 className="relative text-white text-3xl font-medium mb-8">
          Popular Movie
        </h1>
        <div className="flex flex-wrap justify-between gap-2 lg:gap-10">
          {/* {film.map((item) => {
            return <p className="w-[110px] lg:w-[300px] rounded-lg border mb-2 text-white ">{item}</p>;
          })} */}
          <PopularMovieList />
        </div>
      </div>
      {/* Popular Movie End */}

      {/* Footer */}
      <div className="flex flex-col items-center lg:flex-row gap-4 justify-between px-4 lg:px-10 py-12 mt-28 bg-black text-slate-300 font-[montserrat]">
        <img src="icons/binar_icon.png" alt="" className="w-20" />
        <div className="flex flex-col gap-4 text-xs lg:text-sm font-medium">
          <h1>ABOUT</h1>
          <h1>MOVIE</h1>
          <h1>TV SHOWS</h1>
          <h1>CONTACT</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Connect with us</h1>
          <div className="flex gap-4">
            <a href="">
              <img src="icons/binar_icon.png" width="25px" alt="" />
            </a>
            <a href="">
              <img src="icons/binar_icon.png" width="25px" alt="" />
            </a>
            <a href="">
              <img src="icons/binar_icon.png" width="25px" alt="" />
            </a>
            <a href="">
              <img src="icons/binar_icon.png" width="25px" alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h1>Copyright © 2023 Team 3. All right reserved.</h1>
          <h1>Terms and Conditions | Privacy Policy</h1>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Dashboard;
