import { Routes, Route } from "react-router-dom";
import { MoviesList } from "../pages/MoviesList";
import { Favorites } from "../pages/Favorites";
import { Watching } from "../pages/Watching";
import { SeriesList } from "../pages/SeriesList";
import { MoviesDetails } from "../pages/MoviesDetails";
import { MoviesSearch } from "../pages/MoviesSearch";
import { SeriesDetails } from "../pages/SeriesDetails";
import React from "react";

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watching" element={<Watching />} />
      <Route path="/series" element={<SeriesList />} />
      <Route path="/search/:query" element={<MoviesSearch />} />
      <Route path="/MoviesDetails/:id" element={<MoviesDetails />}></Route>
      <Route path="/SeriesDetails/:id" element={<SeriesDetails />}></Route>
      <Route path="/search/" element={<MoviesSearch />} />
      <Route path="*" element={<MoviesList/>} />
    </Routes>
  );
};
