import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 14rem;
  font-family: Arial, sans-serif;
`;

export const DropdownHeader = styled.div`
  padding: 1rem;
  background-color: transparent;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 99999px;
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 0.25rem;
  transform: ${props => (props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 14rem;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
