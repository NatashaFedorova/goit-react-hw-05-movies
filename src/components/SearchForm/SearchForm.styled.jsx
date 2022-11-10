import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ImSearch } from 'react-icons/im';

export const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(8)} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(Field)`
  position: relative;
  width: 500px;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(2)};
  border: ${props => props.theme.borders.none};
  border-bottom: ${props => props.theme.borders.normal};
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const Btn = styled.button`
  position: absolute;
  left: 64%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: ${props => props.theme.borders.none};
  background-color: ${props => props.theme.colors.light};
  margin: 0;
  padding: 0;
  &:hover svg,
  &:focus svg {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const Icon = styled(ImSearch)`
  width: 36px;
  height: 36px;
  fill: ${props => props.theme.colors.searchIcon};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Error = styled.p`
  position: absolute;
  bottom: 83%;
  left: 44%;
  color: ${props => props.theme.colors.error};
`;
