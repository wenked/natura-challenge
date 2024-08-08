import { FaStar, FaStarHalf } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FullStar = styled(FaStar)`
  color: #f8e825 !important;
`;

export const HalfStar = styled(FaStarHalf)`
  color: #f8e825 !important;
`;

export const RatingText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  color: #b0b0b0;
  font-weight: 600;
  margin-left: 0.5rem;
`;
