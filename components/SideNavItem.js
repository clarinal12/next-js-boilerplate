/**
 * ReactBoostrap
 */
import { Row, Col, Nav } from "react-bootstrap";

/**
 * FontAwesome
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SideNavItem = props => {
  const { name, open } = props;

  return <Nav.Link href="/home">{open && name}</Nav.Link>;
};

export default SideNavItem;
