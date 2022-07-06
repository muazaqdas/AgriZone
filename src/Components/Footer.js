import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer id="contactus" style={bgStyle} className="mt-auto py-4 text-center  ">
      <Container>
        <i className="fas fa-code" />  with  <i className="fas fa-heart" /> by {""}
        <a className="badge badge-dark" rel="noopener" href="https://github.com/muazaqdas" aria-label="My GitHub"> {props.children}</a>
        {""} using {""}
        <i className="fab fa-react" />
        {/* <p><small className="text-muted"></small></p> */}
      </Container>
    </footer>
  );
};

export default Footer;
