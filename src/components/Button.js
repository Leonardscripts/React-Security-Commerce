import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.2rem solid var(--mainDark);
  border-color: ${props => (props.cart ? "var--mainWhite" : "var--mainYellow")}
  border-radius: 65px;
  color: var(--mainDark);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;
