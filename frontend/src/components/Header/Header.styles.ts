import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 40;
  background-color: #ffffff;
  height: 10rem;
`;

export const Container = styled.div`
  width: 100%;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 96px;
  padding-right: 96px;
  position: relative;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
`;
