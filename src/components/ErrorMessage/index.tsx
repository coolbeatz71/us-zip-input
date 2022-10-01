import { FC } from "react";
import styled from "styled-components";

import { ERROR_COLOR } from "../../constants/style";

const Wrapper = styled.div`
  font-size: 10pt;
  margin-top: 0.5rem;
  color: ${ERROR_COLOR};
`;

interface IErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => (
  <Wrapper>{message}</Wrapper>
);
export default ErrorMessage;
