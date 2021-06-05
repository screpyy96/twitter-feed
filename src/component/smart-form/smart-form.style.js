import { Form } from "formik";
import styled from "styled-components";

const FormWrapper = styled.div`
  border: 5px solid white;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 7px 0px #888843;
`;

const SmartForm = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtons = styled.div`
  display: inline-flex;
  grid-gap: 0.5rem; ;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

// eslint-disable-next-line
export default {
  FormWrapper,
  SmartForm,
  Title,
  StyledForm,
  StyledButtons,
};
