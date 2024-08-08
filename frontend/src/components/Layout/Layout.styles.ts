import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: transparent;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
