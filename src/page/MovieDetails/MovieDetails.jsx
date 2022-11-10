import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import AboutMovie from 'components/AboutMovie';
import AdditionalInfo from 'components/AdditionalInfo';
import { fetchFilmsByRequest } from '../../api';
import { Box, StyledLink, Icon } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getFilmByRequest = async () => {
      try {
        const response = await fetchFilmsByRequest(movieId);
        if (!response.data) {
          toast.error('Oops, something went wrong, be kind, change your side');
          return;
        }
        setFilm(response.data);
      } catch {
        toast.error('Oops, something went wrong, be kind, change your side');
      }
    };
    getFilmByRequest();
  }, [movieId]);

  return (
    <Box>
      <StyledLink to={backLinkHref}>
        <Icon />
        Go back
      </StyledLink>
      <AboutMovie film={film} />
      <AdditionalInfo />
      <Outlet />
    </Box>
  );
};

export default MovieDetails;
