import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BaseList, BaseItem } from 'components/constans/BaseStyle.styled';

export const Box = styled.div`
  padding-bottom: ${props => props.theme.spacing(4)};
  border-bottom: 1px solid ${props => props.theme.colors.accent};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-top: ${props => props.theme.spacing(8)};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const List = styled(BaseList)``;

export const Item = styled(BaseItem)``;

export const StyledLink = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.dark};
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
  }

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;
