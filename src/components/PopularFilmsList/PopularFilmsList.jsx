import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { fetchPopularFilms } from 'api';
import { List, Item, StyledLink } from './PopularFilmsList.styled';

const PopularFilmsList = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getPopularFilms();
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}
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
    </div>
  );
};

export default PopularFilmsList;
