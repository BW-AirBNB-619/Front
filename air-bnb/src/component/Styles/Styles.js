import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleOne};

  .App-header {
    background-color: #ffffff;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .link-contain {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .home-link {
    width: 15%;
    text-decoration: none;
    color: white;
    background-color: #e61e4d;
    padding: 1%;
    margin: 0 5%;
    border-radius: 15px;
  }
  .signUp-link {
    width: 15%;
    text-decoration: none;
    background-color: #e61e4d;
    color: white;
    padding: 1%;
    margin: 0 5%;
    border-radius: 15px;
  }
`;

export { Header };
