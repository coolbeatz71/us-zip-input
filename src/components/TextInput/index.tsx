import styled from "styled-components";
import { BLACK_COLOR, BORDER_RADIUS, GREY_COLOR } from "../../constants/style";
import { ITextInputProps } from "../../interfaces/ITextInputProps";
import { IUnknownObject } from "../../interfaces/IUnknownObject";
import InputLabel from "../InputLabel";

export const Wrapper = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  font-size: 11pt;
  display: inline-block;
  color: ${BLACK_COLOR};
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${GREY_COLOR};
  padding: 0.3em 0.75em 0.4em 0.75em;
  ::placeholder {
    color: ${GREY_COLOR};
  }
`;

const TextInput = (props: ITextInputProps): JSX.Element => {
  const { label, type, placeholder, name } = props as IUnknownObject;
  return (
    <>
      <InputLabel title={label} />
      <Wrapper
        type={type}
        name={name}
        placeholder={placeholder}
        {...(props as IUnknownObject)}
      />
    </>
  );
};

export default TextInput;
