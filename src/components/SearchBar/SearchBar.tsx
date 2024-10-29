import { Field, Form, Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";

type Props = {
  resetValues: (arg: string) => void;
};

type InitialValues = {
  searchField: string;
};

const initialValues: InitialValues = {
  searchField: "",
};

const SearchBar = ({ resetValues }: Props) => {
  function handleSubmit(
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) {
    if (values.searchField === "") {
      toast.error("Enter th request");
    }
    if (values.searchField !== "") {
      resetValues(values.searchField);
    }

    actions.resetForm();
  }

  return (
    <div className="flex justify-center mt-7 ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex gap-2 ">
          <label>
            <Field
              type="text"
              name="searchField"
              className="border-2 border-gray-400 rounded-lg p-[5px] outline-none focus:border-purple-400 transition-border duration-300"
            />
          </label>

          <button className="btn-primary" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
