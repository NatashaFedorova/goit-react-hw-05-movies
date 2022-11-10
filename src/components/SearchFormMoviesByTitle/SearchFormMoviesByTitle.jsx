import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByTitle } from 'api';
import SearchForm from 'components/SearchForm';
import MoviesByTitle from 'components/MoviesByTitle';
import { Loader } from 'components/constans/BaseStyle.styled';

const SearchFormMoviesByTitle = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value');
  useEffect(() => {
    if (!value || value === '') return;

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
      <Suspense fallback={<Loader />}>
        <MoviesByTitle movies={movies} />
      </Suspense>
    </>
  );
};

export default SearchFormMoviesByTitle;
