import { Modal, Button } from "react-bootstrap";

const renderFooter = props => {
  const { type, toggle, onConfirm, onCancel, variant } = props;
  if (type == "confirm") {
    return (
      <Modal.Footer className={type == "confirm" && "confirm"}>
        <Button variant="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          OK
        </Button>
      </Modal.Footer>
    );
  } else if (type == "alert") {
    return (
      <Modal.Footer className={type == "alert" && "alert-dialog"}>
        <Button variant="primary" onClick={toggle}>
          OK
        </Button>
      </Modal.Footer>
    );
  }
};

const AppModal = props => {
  const {
    show,
    toggle,
    size,
    onConfirm,
    onCancel,
    type,
    backdrop,
    variant,
    title
  } = props;

  return (
    <Modal
      show={show}
      onHide={toggle}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={backdrop || true}
    >
      <Modal.Header closeButton>
        {title && (
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      {renderFooter(props)}
    </Modal>
  );
};

export default AppModal;
