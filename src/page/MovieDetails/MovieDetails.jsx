import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import AboutMovie from 'components/AboutMovie';
import AdditionalInfo from 'components/AdditionalInfo';
import { fetchFilmsByRequest } from '../../api';
import { Box, StyledLink, Icon } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getFilmByRequest();
  }, [movieId]);

  return (
    <Box>
      <StyledLink to="/">
        <Icon />
        Go back
      </StyledLink>
      {loading && <p>loading...</p>}
      <AboutMovie film={film} />
      <AdditionalInfo />
      <Outlet />
    </Box>
  );
};

export default MovieDetails;
