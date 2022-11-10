import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/constans/BaseStyle.styled';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
export default SharedLayout;
