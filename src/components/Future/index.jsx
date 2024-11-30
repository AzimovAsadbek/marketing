import { Container, Picture, TitleWrap, Wrapper } from "./style";
import img from "../../assets/pictures/image.png";
import child from "../../assets/pictures/child.png";
import SubTitle from "../Generics/Subtitle";
import Button from "../Generics/Button";

const Future = ({ creative }) => {
  return (
    <Container>
      <Picture src={creative ? child : img} alt="no img" />
      <Wrapper>
        <div>
          <SubTitle size={14}>
            {" "}
            {creative ? "CREATIVE AGENCY" : "CORPORATE SERVICE"}
          </SubTitle>
          <br />
          <br />
          <SubTitle size={56}>
            {!creative ? "We Develop" : "We Help Your"} <br /> <br /> Digital
            Future
          </SubTitle>
        </div>
        <SubTitle size={17} color={"var(--secondaryColor)"}>
          {creative
            ? "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
            : `
          We appreciate your trust greatly! Our clients choose us and our
          products because they know we're the best.`}
        </SubTitle>
        <div>
          <TitleWrap top={"true"}>
            <SubTitle
              pr={"15px"}
              size={19}
              pw={400}
              color={"var(--secondaryColor)"}
            >
              01.
            </SubTitle>
            <SubTitle size={19} color={"var(--primaryColor)"}>
              Endless Possibilities
            </SubTitle>
          </TitleWrap>

          <TitleWrap>
            <SubTitle
              pr={"15px"}
              size={19}
              pw={400}
              color={"var(--secondaryColor)"}
            >
              02.
            </SubTitle>
            <SubTitle size={19} color={"var(--primaryColor)"}>
              Process Optimization
            </SubTitle>
          </TitleWrap>
        </div>
        <Button bgcolor={"#0c0367"} padding={"17px 45px"} color="white">
          Discover Now
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Future;
