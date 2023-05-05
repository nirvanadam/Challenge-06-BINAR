import React, { useEffect, useState } from "react";
import { detailMovie } from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function Detail() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://km4-challenge-5-api.up.railway.app/api/v1/movie/{MOVIE_ID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/login");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMe();
  }, []);

  const [detail, setDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    detailMovie(params.id).then((result) => {
      setDetail(result);
    });
  }, [params]);

  return (
    <div>
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
        className="relative bg-cover h-[100vh] rounded-lg lg:rounded-none mx-4 lg:mx-0 before:content-[''] before:absolute before:bg-gradient-to-r from-black from-10% to-transparent before:top-0 before:bottom-0 before:right-0 before:left-0 font-[montserrat] text-white"
        style={{
          backgroundImage: `url('${process.env.REACT_APP_BASEIMGURL}/${detail.backdrop_path}`,
        }}
      >
        {/* <img src={`${process.env.REACT_APP_BASEIMGURL}/${detail.backdrop_path}`} alt="Backdrop" className="absolute" /> */}
        <div className="absolute top-[47%] left-[7%] w-[500px]">
          <h1 className="text-7xl font-bold mb-5">{detail.original_title}</h1>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2 bg-cyan-500 w-fit lg:mt-2 rounded-sm text-[8px] md:text-[12px] lg:text-[1vw] px-3 py-1 lg:py-2 text-white hover:bg-cyan-600 transition active:scale-90"
            >
              <h1 className="">PLAY NOW</h1>
            </a>
            <h2>{detail.release_date}</h2>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Detail Info */}
      <div className="flex justify-between gap-6 mx-20 my-20 text-slate-400">
        {/* Column 1 */}
        <div className="flex flex-col w-[300px]">
          <h1 className="mb-5">Details</h1>
          <div className="flex justify-between">
            <h1>Release Date</h1>
            <h1>{detail.release_date}</h1>
          </div>
          <span className="w-full h-[1px] bg-slate-500 my-3"></span>
          <div className="flex justify-between">
            <h1>Duration</h1>
            <h1>{detail.runtime} Minute</h1>
          </div>
          <span className="w-full h-[1px] bg-slate-500 my-3"></span>
          <div className="flex justify-between">
            <h1>Watched</h1>
            <h1>{detail.popularity}</h1>
          </div>
          <span className="w-full h-[1px] bg-slate-500 my-3"></span>
          <div className="flex justify-between">
            <h1>Release Status</h1>
            <h1>{detail.status}</h1>
          </div>
        </div>
        {/* Column 1 End */}

        {/* Column 2 */}
        <div className="flex flex-col w-[450px]">
          <h1 className="mb-5">Story Line</h1>
          <h1>{detail.overview}</h1>
        </div>
        {/* Column 2 End */}

        {/* Column 3 */}
        <div className="flex flex-col">
          <h1 className="mb-5">Genre</h1>
          {detail.genres?.map((genre) => (
            <h2 key={genre.id} className="flex flex-col gap-3">
              {genre.name}
            </h2>
          ))}
        </div>
        {/* Column 3 End */}
      </div>
      {/* Detail Info End */}
    </div>
  );
}
