import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Api';

import { ReviewList, Item, Author, Content, NoReview } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchReviews() {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (reviews.length > 0) {
    return (
      <ReviewList>
        {reviews &&
          reviews.map(({ author, content, movieId }) => {
            return (
              <Item key={movieId}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Item>
            );
          })}
      </ReviewList>
    );
  }
  return <NoReview> There is no reviews on this movie</NoReview>;
};
export default Reviews;
