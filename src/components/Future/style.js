import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1290px;
  margin-top: 130px;
  gap: 120px;
`;

const Picture = styled.img``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const TitleWrap = styled.div`
  display: flex;
  border-bottom: ${({ top }) => top && "1px solid var(--secondaryColor)"};
  padding: ${({ top }) => (top ? "0 0 27px 0" : "27px 0 0 0")};
`;

export { Container, Picture, Wrapper, TitleWrap };
