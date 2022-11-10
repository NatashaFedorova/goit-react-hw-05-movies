import styled from 'styled-components';
import {
  BaseList,
  BaseItem,
  BaseText,
} from 'components/constans/BaseStyle.styled';
export const Img = styled.img`
  width: 120px;
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const List = styled(BaseList)`
  margin-top: ${props => props.theme.spacing(8)};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Item = styled(BaseItem)`
  margin-bottom: ${props => props.theme.spacing(8)};
`;
export const Text = styled(BaseText)`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;
