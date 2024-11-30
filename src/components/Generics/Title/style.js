import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  font-weight: ${({ type }) => (type || type === "primary" ? 600 : 400)};
  font-size: ${({ size }) => getValue(size, "24px")};

  line-height: 28px;
  color: ${({ color }) => color || "var(--activeColor)"};

  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};

  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};

  /* flex-wrap: nowrap; */
`;

export { Container };
