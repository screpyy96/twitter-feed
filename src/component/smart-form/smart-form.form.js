import * as Yup from "yup";

export const initialValues = {
  screenName: "",
};

export const validationSchema = Yup.object().shape({
  screenName: Yup.string().min(4, "").required("add an id"),
});
