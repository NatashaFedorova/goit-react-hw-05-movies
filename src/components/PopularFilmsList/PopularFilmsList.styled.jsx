import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseList, BaseItem } from '../../components/constans/BaseStyle.styled';

export const List = styled(BaseList)``;

export const Item = styled(BaseItem)``;

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
