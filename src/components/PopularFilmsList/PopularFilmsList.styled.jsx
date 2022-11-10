import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${props => props.theme.spacing(6)};
  list-style: square;
`;

export const Item = styled.li`
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.dark};
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
