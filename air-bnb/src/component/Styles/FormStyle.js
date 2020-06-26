import styled from "styled-components";
import { motion } from "framer-motion";

const FormStyle = styled(motion.form)`
  width:100%;
  min-width: 60%;
  min-height: 250px;
  margin: auto;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.red};
  background-color: white;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.darkGreen};
  text-align: center;
  line-height: 1.8;
  font-size: ${(props) => props.theme.fontSizes.small};
  box-sizing: border-box;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
  }
 
  h3 {
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.darkGreen};
    text-shadow: 0px 0px 5px ${(props) => props.theme.colors.lightGreen};
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  input,
  a {
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.medGreen};
    text-align: center;
  }

  legend {
    margin: 50px;
    font-size: ${(props) => props.theme.fontSizes.titleThree};
    color: ${(props) => props.theme.colors.darkGreen};
  }

  button {
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.medGreen};
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.colors.medGreen};
    border-radius: 5px;
    text-shadow: 0px 0px 0px ${(props) => props.theme.colors.white};
    box-shadow: 0px 0px 2px ${(props) => props.theme.colors.darkGreen};
    font-weight: bold;

    :hover {
      transform: scale(1.1);
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.medGreen};
      text-shadow: 0px 0px 0px ${(props) => props.theme.colors.white};
      box-shadow: 0px 0px 2px ${(props) => props.theme.colors.darkGreen};
    }
  }

  .user-form {
    margin: 0% 10%;
    box-sizing: border-box;
  }

  .error-container {
    font-size: ${(props) => props.theme.fontSizes.titleThree};
    color: ${(props) => props.theme.colors.red};
  }
   @media (max-width: 500px){
    h3 {
      font-size: 1.8rem;
    }
    button {
      font-size: 1.8rem;
    }
  }

`;
export default FormStyle;
