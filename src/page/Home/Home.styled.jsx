import styled from 'styled-components';

export const Box = styled.main`
  padding: ${props => props.theme.spacing(8)} 0;
`;
export const TitlePage = styled.h1`
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing(5)};
`;
