import { ChangeEvent, FormEvent, useState } from "react";
import { isEmpty, omit } from "lodash";
import { IUnknownObject } from "../interfaces/IUnknownObject";

const useForm = (callback: () => void) => {
  const [values, setValues] = useState<IUnknownObject>({});
  const [errors, setErrors] = useState<IUnknownObject>({});

  const validate = (label: string, name: string, value: string) => {
    const pattern = /^[0-9]{3,5}$/;
    const regex = new RegExp(pattern);

    if (isEmpty(value)) setErrors({ [name]: `${label} is required` });
    else if (!regex.test(value)) {
      setErrors({ [name]: `${label} has an invalid format` });
    } else {
      let newObj = omit(errors, name);
      setErrors(newObj);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    label: string,
  ) => {
    event?.persist();
    const { name, value } = event.currentTarget;
    validate(label, name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const isNoErrors =
      Object.keys(errors).length === 0 && Object.keys(values).length !== 0;
    if (event) event.preventDefault();
    if (isNoErrors) callback();
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
