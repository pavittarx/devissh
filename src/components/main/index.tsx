import React from "react";
import Container from "utils/container";
import Banner from "./banner";
import Services from "./services";

const Main = () => {
  return <> 
    <Container >
      <Banner/>
    </Container>
    <Container backcolor="#192EC90D">
      <Services/>
    </Container>   
  </>;
}

export default Main;