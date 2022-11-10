import { lazy } from 'react';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
// import Home from 'page/Home';
// import MovieDetails from 'page/MovieDetails';
// import Movies from 'page/Movies';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const Home = lazy(() => import('page/Home'));
const Movies = lazy(() => import('page/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;

// помилка відображаєьбся двічі
// яз оптимізувати подую з мишкою на navLink
