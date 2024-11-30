import videoBg from "../../assets/vidoes/background.mp4";
import SubTitle from "../Generics/Subtitle";
import Button from "../Generics/Button";
import image from "../../assets/icons/wave.svg";
import {
  BackgroundImage,
  CardContainer,
  ChildContainer,
  Con,
  Container,
  GreyWrap,
  Input,
  MarketingWrap,
  ReadButton,
  SolutionContainer,
  TitleStyle,
  VideoBackground,
} from "./style";
import Card from "../Card";
import cardInfo from "../../utils/cardInfo";
import Future from "../Future";
import Carusel from "../Carusel";

const Home = () => {
  return (
    <Container>
      <VideoBackground>
        <video src={videoBg} autoPlay loop muted playsInline></video>
      </VideoBackground>
      <GreyWrap></GreyWrap>
      <BackgroundImage>
        <img src={image} alt="No image" />
      </BackgroundImage>
      <MarketingWrap>
        <TitleStyle>
          Right Social Networking
          <br /> for Marketing
        </TitleStyle>
        <SubTitle color="white">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
          dolore magna aliqua quis nostrud exerc.
        </SubTitle>
        <Button bgcolor={"#8f6dff"} color="white" padding={"15px 45px"}>
          Discover Now
        </Button>
      </MarketingWrap>
      <CardContainer>
        {cardInfo.map((v, i) => {
          return (
            <Card key={i} date={v} br={cardInfo.length - 1 != i ? 1 : 0} />
          );
        })}
      </CardContainer>

      <Future />

      <SolutionContainer>
        <ChildContainer>
          <SubTitle size={14} fw={500}>
            PERFECT SOLUTIONS
          </SubTitle>
          <br />
          <SubTitle size="46px" fw={600}>
            Check Our Flexible <br />
            <br />
            Clients Plans
          </SubTitle>
        </ChildContainer>

        <ChildContainer>
          <br />
          <br />
          <SubTitle size={17} color={"var(--secondaryColor)"}>
            We perform full analysis of the client’s website and collect
            information about the competitors to formulate a proper strategy.
          </SubTitle>
          <br />
          <br />
          <SubTitle size={17} color={"var(--secondaryColor)"}>
            There is no one universal solution in online marketing, that’s why
            every time we create a unique strategy tailored to the customer’s
            needs.
          </SubTitle>

          <br />
          <br />
          <br />
          <ReadButton>
            <SubTitle fw={600}>Read More</SubTitle>
          </ReadButton>
        </ChildContainer>
      </SolutionContainer>

      <Carusel />

      <SolutionContainer>
        <ChildContainer>
          <SubTitle size="46px" fw={600}>
            Subscribe to the <br />
            <br /> Exclusive Updates!
          </SubTitle>
        </ChildContainer>
        <ChildContainer>
          <Con>
            <Input placeholder="Enter Your email address" />
            <Button
              onClick={() => navigate("/contacts")}
              padding={"9px 40px"}
              bgcolor="#ff2e57"
              color={"white"}
            >
              Subscribe
            </Button>
          </Con>
          <SubTitle mt={10}>
            <input type="checkbox" />
            <SubTitle pl={10}>
              I agree to the <a href=""> Privacy Policy.</a>
            </SubTitle>
          </SubTitle>
        </ChildContainer>
      </SolutionContainer>
      <Future creative="true" />
    </Container>
  );
};

export default Home;
