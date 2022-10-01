import { FC, ReactNode } from "react";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";

interface IFormControlProps {
  children: ReactNode;
  error: string | undefined;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const FormControl: FC<IFormControlProps> = ({ error, children }) => {
  return (
    <Wrapper>
      {children}
      {error && <ErrorMessage message={error} />}
    </Wrapper>
  );
};

export default FormControl;
