import { Box, Title, List, Item, StyledLink } from './AdditionalInfo.styled';

const AdditionalInfo = ({ backLinkHref, movieId }) => {
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
