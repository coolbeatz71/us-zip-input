import { FC } from "react";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/style";

interface IInputLabelProps {
  title: string;
}

const Wrapper = styled.label`
  display: inline-block;
  font-size: 10pt;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: ${PRIMARY_COLOR};
`;

const InputLabel: FC<IInputLabelProps> = ({ title }) => (
  <Wrapper>{title}</Wrapper>
);

export default InputLabel;
