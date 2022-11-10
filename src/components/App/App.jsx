import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Home from 'page/Home';
import MovieDetails from 'page/MovieDetails/MovieDetails';
import Movies from 'page/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;

// помилка відображаєьбся двічі
// яз оптимізувати подую з мишкою на navLink
