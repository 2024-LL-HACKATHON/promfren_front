import styled from "styled-components";
import MainSection1 from "../../components/Main/MainSection1";
import MainTop from "../../components/Main/Top";
import MainSection3 from "../../components/Main/MainSection3";
import Footer from "../../components/Footer/Footer";

export default function Main() {
    return (
      <MainContainer>
        <MainTop />
        <MainSection1 />
        <MainSection3 />
        <Footer />
      </MainContainer>
    );
  }

  const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;