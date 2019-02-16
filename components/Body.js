/**
 * React Bootstrap
 */
import { Container, Card } from "react-bootstrap";

/**
 * Components
 */
import SideNav from "./SideNav";

const Body = props => (
  <div className="body">
    <SideNav />
    <Container style={{ paddingTop: 60, paddingBottom: 40 }}>
      <Card>
        <Card.Header>
          <Card.Title>{props.pageTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.pageSubTitle}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>{props.children}</Card.Body>
      </Card>
    </Container>
  </div>
);

export default Body;
