import { IUnknownObject } from "./IUnknownObject";

export type ITextInputProps =
  | React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  | IUnknownObject;
