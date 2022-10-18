import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Catagory from "../pages/Catagory/Catagory/Catagory";
import Footer from "../pages/Share/Footer";
import LeftSide from "../pages/Share/Left-side/LeftSide";
import RightSide from "../pages/Share/Right-side/RightSide";

const Main = () => {
  return (
   <div>
    <Header></Header>
     <Container>
      <Row>
        <Col lg='2' className="d-none d-lg-block">
         <LeftSide>
            <Catagory></Catagory>
         </LeftSide>
        </Col>
        <Col lg='7'>
          <Outlet></Outlet>
        </Col>
        <Col lg='3'>
         <RightSide></RightSide>
        </Col>
      </Row>
     
    </Container>
    <Footer></Footer>
   </div>
  );
};

export default Main;
