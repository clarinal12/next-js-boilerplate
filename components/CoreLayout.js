/**
 * Style
 */
import "../styles.scss";

/**
 * React Bootstrap
 */
import { Container } from "react-bootstrap";

/**
 * Components
 */
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const CoreLayout = props => (
  <div className="root">
    <Head />
    <Header />
    <Container className="body">{props.children}</Container>
    <Footer />
  </div>
);

export default CoreLayout;
