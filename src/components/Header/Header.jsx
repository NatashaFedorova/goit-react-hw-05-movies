import {
  HeaderPage,
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
} from './Header.styled';

const Header = () => {
  const handleMouse = e => {
    const el = e.target;
    const tolerance = 10;
    const left = 0;
    const right = el;

    let x = e.pageX - el.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    el.style.setProperty('--x', `${x}px`);
  };
  return (
    <HeaderPage>
      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink
              to="/"
              end
              onMouseLeave={handleMouse}
              onMouseEnter={handleMouse}
            >
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/movies"
              onMouseLeave={handleMouse}
              onMouseEnter={handleMouse}
            >
              Movies
            </StyledNavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderPage>
  );
};

export default Header;
