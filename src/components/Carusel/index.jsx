import { useRef, useState, useEffect } from "react";
import pictures from "../../mock/pictures";
import { CarouselContainer, Image, ImageWrapper } from "./style";

const Carusel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const [padding, setPadding] = useState(0); // Dinamik padding
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [showCursor, setShowCursor] = useState(false); // Kursor ko'rinishi
  const [isClicked, setIsClicked] = useState(false); // Kursor bosilgan holat

  // Dinamik paddingni hisoblash
  const calculatePadding = () => {
    const screenWidth = window.innerWidth;
    const extraSpace = screenWidth - 1290; // Bo'sh joyni hisoblash
    const dynamicPadding = extraSpace > 0 ? extraSpace / 2 : 0; // Simmetrik bo'sh joy
    setPadding(dynamicPadding);
  };

  useEffect(() => {
    calculatePadding(); // Komponent yuklanganda hisoblash
    window.addEventListener("resize", calculatePadding); // Oyna o'lchami o'zgarganda qayta hisoblash
    return () => window.removeEventListener("resize", calculatePadding);
  }, []);

  // Caruselni boshlanish joyini sozlash
  useEffect(() => {
    if (containerRef.current) {
      const scrollToIndex = 2; // Ko‘rsatmoqchi bo‘lgan elementning indeksi (masalan, 3-element uchun 2)
      const elementWidth = 346 + 12; // Rasm kengligi + gap
      const scrollPosition = scrollToIndex * elementWidth;
      containerRef.current.scrollLeft = scrollPosition; // Sozlash
    }
  }, []);

  // Drag boshlanishi
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Drag jarayoni
  const onDrag = (e) => {
    setPosX(e.clientX);
    setPosY(e.clientY);
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - containerRef.current.offsetLeft;
    const distance = x - startX;
    containerRef.current.scrollLeft = scrollLeft - distance;
  };

  // Drag tugashi
  const stopDrag = () => {
    setIsDragging(false);
  };

  // Caruselga kursor kirganda ko'rsatish
  const handleMouseEnter = () => setShowCursor(true);

  // Caruseldan chiqqanda yashirish
  const handleMouseLeave = () => setShowCursor(false);

  // Kursor bosilganda kichraytirish
  const handleMouseDown = () => setIsClicked(true);

  // Kursor bo'shatilganda tiklash
  const handleMouseUp = () => setIsClicked(false);

  return (
    <CarouselContainer
      ref={containerRef}
      padding={padding} // Dinamik padding uzatildi
      onMouseDown={(e) => {
        handleMouseDown();
        startDrag(e);
      }}
      onMouseMove={onDrag}
      onMouseUp={(e) => {
        handleMouseUp();
        stopDrag(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        stopDrag(e);
      }}
      onMouseEnter={handleMouseEnter}
      posy={posY}
      posx={posX}
    >
      {showCursor && (
        <div className={`cursor ${isClicked ? "clicked" : ""}`}>
          <span className="arrow-left">{"<"}</span>
          <span className="arrow-right">{">"}</span>
        </div>
      )}
      {pictures.map((v, i) => (
        <ImageWrapper key={i} height={(i + 1) % 2}>
          <Image src={v.link} alt={`Image ${i + 1}`} />
        </ImageWrapper>
      ))}
    </CarouselContainer>
  );
};

export default Carusel;
