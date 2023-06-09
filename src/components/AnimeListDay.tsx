import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeListDay = ({ anime, day }) => {
  return (
    <section className="mx-auto w-10/12 p-4  rounded-md bg-white shadow-lg ">
      <h2 className="text-3xl">{day}</h2>
      <ul className="my-4 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        {anime.map((ani: any) => (
          <>
            {ani.broadcast.day == day ? (
              <AnimeCard key={ani.mal_id} ani={ani} />
            ) : (
              ""
            )}
          </>
        ))}
      </ul>
    </section>
  );
};

export default AnimeListDay;
