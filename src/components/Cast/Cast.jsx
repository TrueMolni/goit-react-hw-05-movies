import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'Api';
// import defaultImg from '../../defaultImg/defaultImg.jpg';

import { ProfileImg, CastsList, Item, Description } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchCredits() {
      try {
        const results = await getMovieCredits(movieId);
        setCasts(results.cast);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchCredits();
  }, [movieId]);

  return (
    <CastsList>
      {casts &&
        casts.map(
          ({ profile_path, name, movieId, original_name, character }) => {
            const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
            const profilePath = IMG_PATH + profile_path;

            return (
              <Item key={movieId}>
                <ProfileImg src={profilePath} alt={name} />
                <Description> {name || original_name}</Description>
                <Description>Character: {character}</Description>
              </Item>
            );
          }
        )}
    </CastsList>
  );
};

export default Cast;
