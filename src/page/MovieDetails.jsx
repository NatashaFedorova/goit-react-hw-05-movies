import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmsByRequest } from '../api';
import toast from 'react-hot-toast';

const MovieDetails = () => {
  console.log('xfghxfghxfg');
  const { movieId } = useParams();
  console.log(movieId);
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getFilmByRequest = async () => {
      try {
        const response = await fetchFilmsByRequest(movieId);
        console.log(response.data['original_title']);
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
  console.log(film);

  return (
    <>
      {loading && <p>loading...</p>}
      <h1>
        {film['original_title']}
        <span>({film['release_date']})</span>
      </h1>
      <p>User score: ... %</p>
      <p>Overview</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum
        dicta. Quis eaque quam ullam cum necessitatibus, perspiciatis numquam a
        consequuntur ipsam tenetur ea ex, nostrum, quod adipisci qui labore?
      </p>
      <p>Genres</p>
      <p>Genres list</p>
    </>
  );
};

export default MovieDetails;
