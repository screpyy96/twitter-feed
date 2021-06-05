import { Button } from "@material-ui/core";
import { Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { initialValues, validationSchema } from "./smart-form.form";
import F from "./smart-form.style";

const SmartForm = ({ setScreenName }) => {
  const onSubmit = (values, { resetForm }) => {
    setScreenName(values.screenName);
    resetForm();
  };

  return (
    <F.SmartForm>
      <F.FormWrapper>
        <F.Title>Search Twitter Id</F.Title>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {({ isValid }) => (
            <F.StyledForm>
              <Field
                variant="outlined"
                color="primary"
                name="screenName"
                component={TextField}
                placeholder="type an id..."
              />
              <F.StyledButtons>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                  type="submit"
                >
                  Search
                </Button>
                <Button variant="contained" color="secondary" type="reset">
                  Reset
                </Button>
              </F.StyledButtons>
            </F.StyledForm>
          )}
        </Formik>
      </F.FormWrapper>
    </F.SmartForm>
  );
};

export default SmartForm;
