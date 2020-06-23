import styled from "styled-components";

const Containstyle = styled.div`
  width: 70%;
  height: 60vh;
  margin: 2% 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.red};
  background-color: white;
  box-shadow: 10px 20px 30px;
  padding: 5% 0;
  line-height: 1.8;
`;
export default Containstyle;
