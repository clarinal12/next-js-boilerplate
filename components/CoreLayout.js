/**
 * Style
 */
import "../styles.scss";

/**
 * ReactBoostrap
 */
import { Container } from "react-bootstrap";

/**
 * Components
 */
import Head from "./Head";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const CoreLayout = props => (
  <div className="root">
    <Head />
    <Header />
    <Body {...props}>{props.children}</Body>
    <Footer />
  </div>
);

export default CoreLayout;
