import { useLocation } from 'react-router-dom';
import { Box, Title, List, Item, StyledLink } from './AdditionalInfo.styled';

const AdditionalInfo = ({ backLinkHref, movieId }) => {
  // const location = useLocation();
  return (
    <Box>
      <Title>Additional information</Title>
      <List>
        <Item>
          <StyledLink
            to={`/movies/${movieId}/cast`}
            state={{ from: backLinkHref }}
          >
            Cast
          </StyledLink>
        </Item>
        <Item>
          <StyledLink
            to={`/movies/${movieId}/cast`}
            state={{ from: backLinkHref }}
          >
            Reviews
          </StyledLink>
        </Item>
      </List>
    </Box>
  );
};

export default AdditionalInfo;
