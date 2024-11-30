import styled, { keyframes } from "styled-components";
import getValue from "../../hooks/getStyleValue";
// Kengaytirish animatsiyasi
const expandReverseAnimation = keyframes`
  0% {
    width: 40px;
  }
  100% {
    width: 140px; /* "Read more" so‘zini sig‘diradigan kenglik */
  }
`;

// Kichraytirish animatsiyasi
const collapseAnimation = keyframes`
  0% {
    width: 140px;
  }
  100% {
    width: 40px; /* Tugmaning boshlang‘ich holati */
  }
`;

// Matnning paydo bo‘lish va yo‘qolish animatsiyasi
const fadeInTextReverse = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutText = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(10px);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  color: var(--primaryColor);
  cursor: pointer;
  background-color: white;
  overflow: hidden;

  /* Animatsiya holatiga ko‘ra kengaytirish yoki kichraytirish */
  &:not(:hover) {
    animation: ${collapseAnimation} 0.4s forwards;
    svg {
      transform: translateX(0);
    }
  }

  /* Ikonka */
  svg {
    position: relative;
    z-index: 2;
    transition: transform 0.4s ease;
  }

  /* "Read more" so‘zi */
  &::before {
    content: "Read more";
    position: absolute;
    right: 50px;
    white-space: nowrap;
    color: var(--primaryColor);
    font-size: 16px;
    opacity: 0;
  }

  &:hover::before {
    animation: ${fadeInTextReverse} 0.4s forwards;
  }

  &:not(:hover)::before {
    animation: ${fadeOutText} 0.4s forwards;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  border-right: ${({ br }) => br && "1px solid #e8e9f1"};

  /* Container hover bo'lganda ichidagi elementlarni animatsiya qilamiz */
  &:hover ${TextWrapper} {
    animation: ${expandReverseAnimation} 0.4s forwards;
    svg {
      transform: translateX(40px); /* Ikonkani o'ngga surish */
    }
    &::before {
      animation: ${fadeInTextReverse} 0.4s forwards;
    }
  }
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: ${({ size }) => getValue(size, "18px")};
    height: ${({ size }) => getValue(size, "18px")};
    fill: white;
  }
`;

export { Container, CardContainer, IconWrapper, TextWrapper };
