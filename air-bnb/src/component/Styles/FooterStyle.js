import styled from "styled-components";

const Footer = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleOne};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

 background-image: linear-gradient(138deg, rgba(228,253,225,1) 13%, rgba(2,128,144,1) 59%);

  .footerNav {
    width: 98%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    max-width: 1200px;
  }

  .link-contain {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 35%;
    margin: auto;

    a {
      margin: 0% 5%;
      font-size: ${(props) => props.theme.fontSizes.body};
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
      text-shadow: 0px 0px 5px ${(props) => props.theme.colors.darkGreen};
    }
`;

export default Footer;
