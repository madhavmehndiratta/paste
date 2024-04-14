import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">PasteBin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Button href="/create-snippet" variant="outline-info">
              Create a Snippet
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
