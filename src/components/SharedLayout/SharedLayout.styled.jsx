import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.dark};
`;
