/**
 * NextJs
 */
import Link from "next/link";

/**
 * React Bootstrap
 */
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";

const Footer = props => {
  return (
    <div className="footer">
      <Row>
        <Col sm={12} md={6} lg={4} style={{ marginTop: 30 }}>
          <h5>STAY WITH ME</h5>
          <p>Join this shit right now. Or else...</p>
          <Col lg={9} className="padding-0">
            <Form>
              <InputGroup className="mb-3">
                <FormControl placeholder="Email Address" required />
                <InputGroup.Append>
                  <Button variant="outline-primary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Col>
        <Col sm={12} md={6} lg={4} style={{ marginTop: 30 }}>
          <Col lg={10} className="padding-0">
            <h5>WE ARE COMMITTED</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse convallis, diam elementum tempor ornare, leo ante
              ultrices metus, sed lacinia neque metus quis nibh. Nunc fermentum.
            </p>
          </Col>
          <Link href="#">
            <a>More about our shit here &#9658;</a>
          </Link>
        </Col>
        <Col sm={12} md={12} lg={4} style={{ marginTop: 30 }}>
          <h5>NAVIGATE</h5>
          <Row>
            <Col>
              <ul className="navigation-list">
                <li>
                  <Link href="#">
                    <a>Portfolio &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Web Design & Developments &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>About Us &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Our Team &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Blog &#9658;</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="navigation-list">
                <li>
                  <Link href="#">
                    <a>Events &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Hosting &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Careers &#9658;</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Contact Us &#9658;</a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row style={{ textAlign: "center" }}>
        <Col>
          <p style={{ fontSize: 16 }}>
            <strong>Alddict's Studio</strong> &#183; NHA Bangkal, Davao City
            &#183;{" "}
            <Link href="#">
              <a>Map</a>
            </Link>{" "}
            &#183; Main (123) 456 789 &#183; Support (987) 654 321
          </p>
        </Col>
      </Row>
      <Row
        className="justify-content-md-center"
        style={{ textAlign: "center", fontSize: 14 }}
      >
        <Col md="2">
          <p>Privacy Policy</p>
        </Col>
        <Col md="2">
          <p>&copy; 2019 Alddict's Studios</p>
        </Col>
        <Col md="2">
          <p>Sitemap</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
