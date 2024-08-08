import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(250 250 250 / 1);
`;

export const HomeTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;

  padding: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
