import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.2rem solid var(--mainWhite);
  border-radius: 60px;
  color: var(--lightBlue);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--lightBlue);
  }
  &:focus {
    outline: none;
  }
`;
