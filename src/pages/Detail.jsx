import React, { useEffect, useState } from "react";
import { detailMovie } from "../api";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [detail, setDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    detailMovie(params.id).then((result) => {
      setDetail(result);
    });
  }, [params]);
  console.log(detail);

  return (
    <div>
      <div className="container">
        <img
          src={`${process.env.REACT_APP_BASEIMGURL}/${detail.backdrop_path}`}
          alt="Backdrop"
        />
        <h1>{detail.original_title}</h1>
        <h2>
          Genre :
          {detail.genres?.map((genre) => (
            <h2 key={genre.id}>{genre.name}</h2>
          ))}
        </h2>
        <h2>Synopsis : </h2>
        <h2>{detail.overview}</h2>
        <h2>Watched :{detail.popularity}</h2>
        <h2>Duration : {detail.runtime} minutes</h2>
        <h2>Release Date :{detail.release_date}</h2>
        <h2>Release Status : {detail.status}</h2>
      </div>
    </div>
  );
}
