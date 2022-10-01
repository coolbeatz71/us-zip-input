import { FC, Fragment } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import {
  WHITE_COLOR,
  ERROR_COLOR,
  BLACK_COLOR,
  BORDER_RADIUS,
  PRIMARY_COLOR,
  PRIMARY_COLOR_LIGHT,
} from "../../constants/style";
import { IUnknownObject } from "../../interfaces/IUnknownObject";

const Wrapper = styled.div.attrs((props: { data: IUnknownObject }) => props)`
  padding: 1rem;
  margin: 1rem 0;
  color: ${({ data }) =>
    isEmpty(data) || typeof data === "string" ? WHITE_COLOR : BLACK_COLOR};
  border-radius: ${BORDER_RADIUS};
  background: ${({ data }) =>
    isEmpty(data) || typeof data === "string"
      ? ERROR_COLOR
      : PRIMARY_COLOR_LIGHT};
  border: 1px solid
    ${({ data }) =>
      isEmpty(data) || typeof data === "string" ? ERROR_COLOR : PRIMARY_COLOR};
`;

interface IResultsProps {
  data: IUnknownObject;
}

const Results: FC<IResultsProps> = ({ data }) =>
  !isEmpty(data) ? (
    <Wrapper data={data}>
      {typeof data === "string" ? (
        <Fragment>{data}</Fragment>
      ) : (
        <Fragment>
          city : {data.city} <br />
          province : {data.province} <br />
          state : {data.state} <br />
          state code : {data.state_code} <br />
        </Fragment>
      )}
    </Wrapper>
  ) : (
    <Wrapper data={data}>No info was found for this postal code</Wrapper>
  );

export default Results;
