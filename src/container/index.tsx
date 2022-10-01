import { useState } from "react";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import FormControl from "../components/FormControl";
import getZipCodesinfo from "../services/getZipCode";
import { IUnknownObject } from "../interfaces/IUnknownObject";
import { ThreeDots } from "react-loader-spinner";
import { PRIMARY_COLOR } from "../constants/style";
import Results from "../components/Results";

const AppForm = () => {
  const inputName = "postalCode";
  const inputLabel = "Postal code";

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IUnknownObject>({});
  const [submited, setSubmited] = useState<boolean>(false);

  const submitForm = async () => {
    setSubmited(true);
    const data = await getZipCodesinfo({
      value: values[inputName],
      setLoading,
    });
    setResult(data);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={errors[inputName]}>
        <TextInput
          type="number"
          name={inputName}
          label={inputLabel}
          onChange={(e) => {
            setSubmited(false);
            handleChange(e, inputLabel);
          }}
          placeholder="Example: 63878, 10005, etc."
        />
      </FormControl>

      {loading ? (
        <div className="loader">
          <ThreeDots
            width={50}
            height={20}
            color={PRIMARY_COLOR}
            visible={true}
          />
        </div>
      ) : (
        submited && <Results data={result} />
      )}

      <Button type="submit" value="Submit" />
    </form>
  );
};

export default AppForm;
