import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchPopularFilms } from 'api';
import { List, Item, StyledLink } from './PopularFilmsList.styled';

const PopularFilmsList = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    const getPopularFilms = async () => {
      try {
        const response = await fetchPopularFilms();
        const films = response.data.results;
        if (films.length === 0) {
          toast.error('Oops, something went wrong, be kind, change your side');
          return;
        }
        setPopularFilms(films);
      } catch {
        toast.error('Oops, something went wrong, be kind, change your side');
      }
    };
    getPopularFilms();
  }, []);

  return (
    <>
      <List>
        {popularFilms.map(film => {
          return (
            <Item key={film.id}>
              <StyledLink to={`movies/${film.id}`}>
                {film['original_title']}
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default PopularFilmsList;
