import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Box = styled.main`
  padding: ${props => props.theme.spacing(8)} 0;
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(8)};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.dark};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
export const Icon = styled(AiOutlineArrowLeft)`
  color: inherit;
  margin-right: ${props => props.theme.spacing(2)};
`;
