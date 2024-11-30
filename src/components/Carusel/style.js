import styled from "styled-components";

const CarouselContainer = styled.div`
  margin-top: 90px;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: ${(props) => props.padding}px; /* Dinamik padding */
  padding-right: ${(props) => props.padding}px; /* Dinamik padding */

  .cursor {
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-radius: 50%;
    position: fixed;
    top: ${({ posy }) => posy - 25 + "px"}; /* Markazlashtirish */
    left: ${({ posx }) => posx - 25 + "px"};
    z-index: 5;
    pointer-events: none; /* To'qnashmaslik uchun */
    transition: transform 0.1s ease-in-out;

    .arrow-left,
    .arrow-right {
      font-size: 14px;
      font-weight: bold;
      user-select: none;
    }

    &.clicked {
      transform: scale(0.9);
    }
  }
  cursor: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 346px;
  height: ${({ height }) => (height ? "270px" : "330px")};
  flex-shrink: 0;
  transition: transform 0.2s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-user-drag: none;
`;

export { CarouselContainer, ImageWrapper, Image };
