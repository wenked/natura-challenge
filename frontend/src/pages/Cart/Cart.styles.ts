import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 96px;
  padding-right: 96px;
  margin-top: 10rem;
  margin-bottom: 4rem;

  & h1 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const BreadCrumbs = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: row;

  & > span {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
  }
`;

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;
`;
