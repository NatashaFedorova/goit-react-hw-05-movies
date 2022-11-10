import PopularFilmsList from 'components/PopularFilmsList';
import { Box, TitlePage } from './Home.styled';

const Home = () => {
  return (
    <Box>
      <TitlePage>Trending today</TitlePage>
      <PopularFilmsList />
    </Box>
  );
};

export default Home;
