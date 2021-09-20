import { MouseEventHandler } from "react";
import styled from "styled-components";

type ButtonProps = {
  type?: string;
  name: String;
  loading?: Boolean;
  action?: MouseEventHandler;
};

const ButtonContainer = styled.div<ButtonProps>`
  cursor: pointer;
  user-select: none;
  display: inline-block;

  background-color: ${({ type }: ButtonProps) =>
    type !== "secondary" ? "var(--primary)" : "var(--secondary)"};
  color: var(--white);

  padding: 15px 15px 15px;
  border-radius: 5px;

  transition: 0.5s ease-in-out all;

  &:hover {
    box-shadow: 1px 1px 30px -2px rgba(0, 0, 0, 0.25);
    opacity: 5;
  }

  &:active {
    box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.25);
    transform: translateY(0.5rem);
  }
`;

const Button = ({ name, type, loading, action }: ButtonProps) => {
  return (
    <ButtonContainer type={type} name={name} onClick={action}>
      {name}
    </ButtonContainer>
  );
};

export default Button;
