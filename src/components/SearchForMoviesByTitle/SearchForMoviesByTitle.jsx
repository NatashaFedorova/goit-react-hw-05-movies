import { fetchMoviesByTitle } from 'api';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { List, Item, StyledLink } from './SearchForMoviesByTitle.styled';

const SearchForMoviesByTitle = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (value === '') {
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

  return (
    <>
      <SearchForm onSubmit={setValue} />
      <List>
        {movies.map(film => {
          return (
            <Item key={film.id}>
              <StyledLink to={`${film.id}`}>
                {film['original_title']}
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default SearchForMoviesByTitle;
