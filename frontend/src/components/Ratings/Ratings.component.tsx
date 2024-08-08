import {
  Container,
  FullStar,
  HalfStar,
  RatingText,
  StarsContainer,
} from './Ratings.styles';

interface RatingProps {
  rating: number;
}

export function Ratings({ rating }: RatingProps) {
  return (
    <Container>
      <StarsContainer>
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = index < rating;
          const isHalfFilled = rating % 1 !== 0 && index === Math.floor(rating);

          if (isHalfFilled) {
            return <HalfStar key={index} color="#f8e825" />;
          }

          return isFilled ? <FullStar key={index} color="#f8e825" /> : null;
        })}
      </StarsContainer>
      <RatingText>{rating}/5</RatingText>
    </Container>
  );
}
