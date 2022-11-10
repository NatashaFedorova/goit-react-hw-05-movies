import PopularFilmsList from 'components/PopularFilmsList';
import { Loader } from 'components/constans/BaseStyle.styled';
import { Suspense } from 'react';
import { Box, TitlePage } from './Home.styled';

const Home = () => {
  return (
    <Box>
      <TitlePage>Trending today</TitlePage>
      <Suspense fallback={<Loader />}>
        <PopularFilmsList />
      </Suspense>
    </Box>
  );
};

export default Home;
