import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.button`
  background-color: ${({ bgcolor }) => bgcolor || ""};
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: scale(0.99);
  }

  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;

  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  font-weight: ${({ fw }) => (fw ? fw : "500")};
  padding: ${({ padding }) => getValue(padding, "5px")};
  width: fit-content;
  flex-wrap: nowrap;
  height: 55px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 50%;
  opacity: 0px;
  background-color: #1890ff;
  margin-left: 8px;
  color: white;
`;

export { Container, Counter };
