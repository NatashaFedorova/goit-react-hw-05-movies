import {
  Box,
  Img,
  Info,
  MovieName,
  Title,
  Text,
  UserScore,
} from './AboutMovie.styled';

const AboutMovie = ({ film }) => {
  if (!film) {
    return;
  }

  const {
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
    poster_path,
  } = film;

  const genresList = genres.map(({ name }) => name).join(' ');
  const userScore = (vote_average * 10).toFixed();
  const src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const releaseDate = Number.parseFloat(release_date);

  return (
    <Box>
      <Img src={src} alt={original_title} width="320" />
      <Info>
        <MovieName>
          {original_title} ({releaseDate})
        </MovieName>
        <Title>
          User score: <UserScore>{userScore} &#37;</UserScore>
        </Title>
        <Title>Overview</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        <Text>{genresList}</Text>
      </Info>
    </Box>
  );
};

export default AboutMovie;
