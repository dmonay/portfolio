import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Review,
  Contact
} from "../sections";
import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Container>
          <Row>
            <Col md={4}>
              <Education />
            </Col>
            <Col md={8}>
              <Experience />
            </Col>
          </Row>
        </Container>
        <Review />
        <Contact />
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;
