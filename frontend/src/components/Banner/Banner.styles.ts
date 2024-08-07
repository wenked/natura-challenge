import styled from 'styled-components';
import NaturaBanner from '../../assets/Banner Essencial 1920x832.jpeg';

export const BannerContainer = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url(${NaturaBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  margin-top: 10rem;
`;

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
  word-break: normal;
  text-align: center;
  color: white;
  font-weight: 500;
  padding: 2rem;
  margin-top: 5rem;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    color: white;
  }

  h3 {
    font-size: 1.5rem;
    color: white;
  }
`;
