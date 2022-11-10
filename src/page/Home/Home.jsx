import PopularFilmsList from 'components/PopularFilmsList';
import { Box, TitlePage } from './Home.styled';

const Home = () => {
  return (
    <Box>
      <TitlePage>Popular films</TitlePage>
      <PopularFilmsList />
    </Box>
  );
};

export default Home;
