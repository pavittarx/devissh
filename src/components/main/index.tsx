import React from "react";
import Container from "utils/container";
import Banner from "./banner";
import Services from "./services";
import {ReactComponent as WebDevIllustration} from "assets/illustrations/website_development_illustration.svg";

const Main = () => {
  return <> 
    <Container >
      <Banner/>
    </Container>
    <Container backcolor="#E5E5E5">
      <Services/>
    </Container>
    <WebDevIllustration />   
  </>;
}

export default Main;