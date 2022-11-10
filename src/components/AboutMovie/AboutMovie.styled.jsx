import styled from 'styled-components';
import { BaseText } from '../../components/constans/BaseStyle.styled';

export const Box = styled.div`
  display: flex;
  padding-bottom: ${props => props.theme.spacing(4)};
  border-bottom: 1px solid ${props => props.theme.colors.accent};
`;

export const Img = styled.img`
  width: 320px;
`;

export const Info = styled.div`
  padding-left: ${props => props.theme.spacing(8)};
`;

export const MovieName = styled.h1`
  font-size: ${props => props.theme.fontSizes.mediumPlus};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Text = styled(BaseText)`
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const UserScore = styled.span`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSizes.normal};
`;
