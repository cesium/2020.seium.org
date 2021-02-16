import React from "react";

import Container from "../../container/container";
import Carousel from "../../carousels/carousel-agenda";
import Card from "../../utils/cardCompo";
import HeaderIcon from "../../images/Header.svg";
import Footer from "../footer";
import NavBar from "../../../components/nav/nav";
import "../../../assets/css/navChallenge.css";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import SectionDescription from "../../utils/sectionDescription";

function Agenda(props) {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const queryParams = queryString.parse(props.location.search);

  return (
    <>
      <div className="agenda-bg">
        <NavBar />
        <div style={styling}>
          <Container>
            <p className="x-large-1 chall-title">Agenda</p>
            <div className="headerChallenge">
              <h1 className="chall-desc">
                Five awesome days of learning, sharing and{" "}
                <span className="spanChall">
                  winning
                  <div className="box-agenda">
                    <div id="mascote">
                      <Card
                        img={HeaderIcon}
                        alt="HeaderIcon"
                        style={{ alignItems: "flex-end" }}
                      >
                        Or maybe losing. This one is kind of optional.
                      </Card>
                    </div>
                  </div>
                </span>
                .
              </h1>
            </div>
            <Carousel
              initialDay={queryParams.day ? parseInt(queryParams.day) : 0}
            />
          </Container>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default withRouter(Agenda);
