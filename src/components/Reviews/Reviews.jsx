import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Api';

import { ReviewList, Item, Author, Content, NoReview } from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchReviews() {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchReviews();
  }, [id]);

  if (reviews.length > 0) {
    return (
      <ReviewList>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <Item key={id}>
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
