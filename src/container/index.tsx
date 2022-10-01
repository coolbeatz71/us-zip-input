import useForm from "../hooks/useForm";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import FormControl from "../components/FormControl";

const AppForm = () => {
  const inputName = "postalCode";
  const inputLabel = "Postal code";

  const submitForm = () => {
    console.log("form value", values);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={errors[inputName]}>
        <TextInput
          name={inputName}
          label={inputLabel}
          onChange={(e) => handleChange(e, inputLabel)}
          placeholder="Example: 601, 544, etc."
        />
      </FormControl>
      <Button type="submit" value="Submit" />
    </form>
  );
};

export default AppForm;
