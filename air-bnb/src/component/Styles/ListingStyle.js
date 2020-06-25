import styled from "styled-components";

const ListingStyle = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.darkGreen};
  font-size: ${(props) => props.theme.fontSizes.titleOne};
  color: ${(props) => props.theme.colors.medGreen};
  text-shadow: 0px 0px 5px ${(props) => props.theme.colors.lightGreen};
  letter-spacing: 0.1rem;
  font-weight: bold;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  padding: 5%;
  margin: 5%;
  line-height: 50px;

  .listing-span {
    h4 {
      font-size: ${(props) => props.theme.fontSizes.body};
    }
  }

  .listing-details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 25px;

    .button-row {
      align-self: baseline;
    }
  }

  input,
  a {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.black};
    text-align: center;
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
    margin: 5px;

    :hover {
      transform: scale(1.1);
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.medGreen};
      border: 1px solid ${(props) => props.theme.colors.white};
      text-shadow: 0px 0px 0px ${(props) => props.theme.colors.white};
      box-shadow: 0px 0px 2px ${(props) => props.theme.colors.darkGreen};
    }
  }
`;

export default ListingStyle;
