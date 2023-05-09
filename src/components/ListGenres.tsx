import React from "react";
import useGenres from "../hooks/useGenres";

function ListGenres() {
  const { genres, error } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListGenres;
