import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByTitle } from 'api';
import SearchForm from 'components/SearchForm';
import MoviesByTitle from 'components/MoviesByTitle';

const SearchForMoviesByTitle = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value');

  useEffect(() => {
    if (value === '' || !value) {
      return;
    }
    const getMovies = async () => {
      const response = await fetchMoviesByTitle(value);
      const res = response.data.results;
      if (res.length === 0) {
        return;
      }
      setMovies(res);
    };
    getMovies();
  }, [value]);

  const changeValueInput = value => {
    setSearchParams({ value });
  };

  return (
    <>
      <SearchForm onSubmit={changeValueInput} value={value} />
      <MoviesByTitle movies={movies} />
    </>
  );
};

export default SearchForMoviesByTitle;
