import { useLocation } from 'react-router-dom';
import { List, Item, StyledLink } from './MoviesByTitle.styled';

const MoviesByTitle = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(film => {
        return (
          <Item key={film.id}>
            <StyledLink to={`${film.id}`} state={{ from: location }}>
              {film['original_title']}
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesByTitle;
