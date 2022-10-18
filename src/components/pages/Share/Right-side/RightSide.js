import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitch,
  FaLinkedin,
  Fa
} from "react-icons/fa";
import CarouselBrand from "../../../CaroselBrand/CaroselBrand";

const RightSide = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>{" "}
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>{" "}
      </ButtonGroup>
      <div>
        <h2>Find us on</h2>
        <ListGroup>
          <ListGroup.Item className="my-1">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="my-1">
            <FaWhatsapp/> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="my-1">
            <FaTwitch/> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="my-1">
            <FaLinkedin/> Linkedin</ListGroup.Item>
         
          <ListGroup.Item className="my-1"> <FaTwitch/> Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <CarouselBrand/>
      </div>
    </div>
  );
};

export default RightSide;
