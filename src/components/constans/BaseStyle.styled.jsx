import styled from 'styled-components';

export const BaseList = styled.ul`
  padding-left: ${props => props.theme.spacing(6)};
  list-style: square;
`;

export const BaseItem = styled.li`
  margin-bottom: ${props => props.theme.spacing(2)};
`;
export const BaseText = styled.p`
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.normal};
`;
