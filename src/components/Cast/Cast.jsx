import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchCastByRequest } from '../../api';
import { Img, Text, List, Item } from './Cast.styled';
import { nanoid } from 'nanoid';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await fetchCastByRequest(movieId);
        if (cast.length === 0) {
          toast.error('Oops, something went wrong, be kind, change your side');
          return;
        }
        setCast(cast);
      } catch (error) {
        toast.error('Oops, something went wrong, be kind, change your side');
      }
    };
    getCast();
  }, [movieId]);

  const getSrc = value => `https://image.tmdb.org/t/p/w500/${value}`;

  return (
    <List>
      {cast.map(({ profile_path, name, character }) => (
        <Item key={nanoid()}>
          <Img src={getSrc(profile_path)} alt={name} width="120" />
          <Text>{name}</Text>
          <Text>Character: {character}</Text>
        </Item>
      ))}
    </List>
  );
};

export default Cast;
