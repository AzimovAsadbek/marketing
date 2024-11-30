import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  /* cursor: alias; */

  /* width: 300px;
  height: 300px; */
  /* position: relative; */
  /* overflow: hidden; */
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  /* cursor: none; */
  /* transition: all 0.3; */
`;

const ImageWrapper = styled.div`
  min-width: 300px;
  margin-right: 10px;
  transition: transform 0.2s ease;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-user-drag: none;
`;
export { ImageWrapper, CarouselContainer, Image };
