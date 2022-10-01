import styled from "styled-components";
import {
  WHITE_COLOR,
  BORDER_RADIUS,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
} from "../../constants/style";
import { ITextInputProps } from "../../interfaces/ITextInputProps";
import { IUnknownObject } from "../../interfaces/IUnknownObject";

const Wrapper = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.8rem;
  cursor: pointer;
  font-size: 12pt;
  margin-top: 2rem;
  font-weight: 700;
  color: ${WHITE_COLOR};
  background: ${PRIMARY_COLOR};
  border-radius: ${BORDER_RADIUS};
  transition: background ease-in-out 100ms;
  &:hover {
    background: ${PRIMARY_COLOR_DARK}
`;

const Button = (props: ITextInputProps): JSX.Element => (
  <Wrapper {...(props as IUnknownObject)} />
);

export default Button;
