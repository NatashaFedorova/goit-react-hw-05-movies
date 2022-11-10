import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Text, List, Item, Title, Message } from './Reviews.styled';
import { fetchReviewsByRequest } from '../../api';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchReviewsByRequest(movieId);
        if (results.length === 0) {
          setMessage(true);
          return;
        }
        setReviews(results);
      } catch (error) {
        toast.error('Oops, something went wrong, be kind, change your side');
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {message && <Message>We don't have any reviews for this movie</Message>}
      <List>
        {reviews.map(({ author, content }) => (
          <Item key={nanoid()}>
            <Title>Author: {author}</Title>
            <Text>{content}</Text>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Reviews;
