import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Toaster />
    </Container>
  );
};
export default SharedLayout;
