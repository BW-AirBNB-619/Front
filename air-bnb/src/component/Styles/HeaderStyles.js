import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleOne};
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: radial-gradient(
    circle at top left,
    rgb(255, 56, 92) 0%,
    rgb(230, 30, 77) 27.5%,
    rgb(227, 28, 95) 40%,
    rgb(215, 4, 102) 57.5%,
    rgb(189, 30, 89) 75%,
    rgb(189, 30, 89) 100%
  );

  .headerNav {
    width: 98%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    max-width: 1200px;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.titleTwo};
    letter-spacing: 0.1rem;
  }
`;

export default Header;
