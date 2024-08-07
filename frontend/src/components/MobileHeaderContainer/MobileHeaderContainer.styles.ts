import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
`;

export const StyledForm = styled.form` 
    width: 100%;
    max-width: 25;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

