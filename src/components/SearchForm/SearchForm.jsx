import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

import { StyledForm, Input, Icon, Btn, Error } from './SearchForm.styled';

const schema = yup.object().shape({
  value: yup.string().trim().required(),
});

const SearchForm = ({ onSubmit, value }) => {
  const handleSubmit = ({ value }, { resetForm }) => {
    onSubmit(value.trim());
    resetForm();
  };
  return (
    <Formik
      initialValues={{ value }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Input
          name="value"
          type="text"
          autoComplete="off"
          placeholder="Search for a movie by title"
        />

        <Btn type="submit">
          <Icon />
        </Btn>
        <ErrorMessage name="value" component={Error} />
      </StyledForm>
    </Formik>
  );
};

export default SearchForm;
