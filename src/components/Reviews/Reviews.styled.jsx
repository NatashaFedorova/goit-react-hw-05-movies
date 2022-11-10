import styled from 'styled-components';
import {
  BaseList,
  BaseItem,
  BaseText,
} from '../../components/constans/BaseStyle.styled';

export const Title = styled.h3`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.fontSizes.normal};
`;

export const List = styled(BaseList)``;

export const Item = styled(BaseItem)`
  margin-bottom: ${props => props.theme.spacing(8)};
`;
export const Text = styled(BaseText)`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;
export const Message = styled(Title)`
  margin: ${props => props.theme.spacing(4)};
`;
