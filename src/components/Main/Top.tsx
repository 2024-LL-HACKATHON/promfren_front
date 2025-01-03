import styled from "styled-components";
import Header from "../Header/Header";
import { ReactComponent as MainTop1 } from "../../assets/images/MainTop1.svg";
import { ReactComponent as MainTop2 } from "../../assets/images/MainTop2.svg";

export default function MainTop() {
  return (
    <MainTopContainer>
      <Background>
        <Img1 />
        <Img2 />
      </Background>
      <HeaderWrapper>
        <Header isLoggedIn={false} fixed={false} />
      </HeaderWrapper>
      <Text>
        <span>프롬프렌</span>의 다양한 기능을 <span>활용</span>해 보세요!
      </Text>
    </MainTopContainer>
  );
}

const MainTopContainer = styled.div`
  position: relative;
  height: 435px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 1;
  font-family: "Gmarket Sans TTF light";
  font-size: 40px;
  font-weight: 300;
  margin-top: 7rem;

  span {
    font-weight: 700;
    display: inline-block;
    box-shadow: inset 0 -30px 0 rgba(66, 208, 159, 0.39);
    text-emphasis: filled #b6edda;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Img1 = styled(MainTop1)`
  position: absolute;
  width: 391px;
  height: 401px;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const Img2 = styled(MainTop2)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const HeaderWrapper = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
`;
