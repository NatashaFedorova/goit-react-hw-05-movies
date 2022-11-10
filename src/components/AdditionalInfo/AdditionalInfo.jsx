import { Box, Title, List, Item, StyledLink } from './AdditionalInfo.styled';

const AdditionalInfo = ({ id }) => {
  return (
    <Box>
      <Title>Additional information</Title>
      <List>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </List>
    </Box>
  );
};

export default AdditionalInfo;
