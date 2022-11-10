import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderPage = styled.header`
  padding: ${props => props.theme.spacing(5)} 0;
  border-bottom: 3px solid ${props => props.theme.colors.accent};
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(8)};
`;
export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
  font-size: ${props => props.theme.fontSizes.medium};
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  &::after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 3px;
    background: linear-gradient(135deg, rgb(250, 115, 115), rgb(155, 0, 0));
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }
  &:hover:not(.active) {
    opacity: 1;
  }
  &:hover:not(.active)::after {
    --scale: 1;
  }
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
  }

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;
