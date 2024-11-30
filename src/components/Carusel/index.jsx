import { useRef, useState } from "react";
import pictures from "../../mock/pictures";
import { CarouselContainer, Image, ImageWrapper } from "./style";

const Carusel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  // Start drag event
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // During drag event
  const onDrag = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - distance;
    setPosX(e.clientX);
    setPosY(e.clientY);
  };

  // Stop drag event
  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <CarouselContainer
      ref={containerRef}
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      //   style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {pictures.map((v, i) => {
        return (
          <ImageWrapper key={i}>
            <Image src={v.link} alt="Image 1" />
          </ImageWrapper>
        );
      })}
    </CarouselContainer>
  );
};

export default Carusel;
