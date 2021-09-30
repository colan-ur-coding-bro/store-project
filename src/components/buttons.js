import StyledComponent from "styled-components";

export const Stylebtn = StyledComponent.button`
  background: transparent;
  transition: all 0.25s ease-in-out;
  margin-right: 10px;
  border:1px solid;
  border-color: ${(props) => {
    return props.yellow ? "rgb(223, 176, 21)" : "var(--light_blue)";
  }};
  color: ${(props) =>
    props.yellow ? "rgb(223, 176, 21)" : "var(--light_blue)"};
  border-radius: 0.3rem;
  padding: 2px 7px;
  &:hover {
    background-color: ${(props) =>
      props.yellow ? "rgb(223, 176, 21)" : "var(--light_blue)"};
    color:#333;
  }
`;
