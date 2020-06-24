import styled from "styled-components";
import { motion } from "framer-motion";

const FormStyle = styled(motion.form)`
  min-width: 35%;
  min-height: 250px;
  margin: auto;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.red};
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.darkGreen};
  padding: 5% 0;
  line-height: 1.8;
  font-size: ${(props) => props.theme.fontSizes.small};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.body};
    letter-spacing: 0.1rem;
    font-weight: bolder;
  }

  input,
  button,
  a {
    font-size: ${(props) => props.theme.fontSizes.body};
    text-align: center;
  }
`;
export default FormStyle;
