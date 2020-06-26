import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleOne};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: linear-gradient(
    135deg,
    rgba(2, 128, 144, 1) 36%,
    rgba(228, 253, 225, 1) 100%
  );

  .headerNav {
    width: 98%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    a {
      text-decoration: none;
    }

    @media (max-width: 500px) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      h1 {
        font-size: 2rem;
        text-align: center;
        margin: 2% 12.5% 2% 12.5%;
        padding: 05 5%;
      }
      .link-contain {
        width: 100%;
        a {
          width: 100%;
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.titleTwo};
    color: ${(props) => props.theme.colors.white};
    text-shadow: 0px 0px 5px ${(props) => props.theme.colors.darkGreen};
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  .link-contain {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 35%;

    a {
      margin: 0% 5%;
      font-size: ${(props) => props.theme.fontSizes.body};
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
      padding: 5px 10px;
      border: 1px solid white;
      border-radius: 5px;
      text-shadow: 0px 0px 5px ${(props) => props.theme.colors.darkGreen};
      box-shadow: 0px 0px 5px ${(props) => props.theme.colors.darkGreen};
      font-weight: bold;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default Header;
