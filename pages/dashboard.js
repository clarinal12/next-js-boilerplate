import React from "react";

/**
 * ReactBootstrap
 */
import { Button, Form } from "react-bootstrap";

/**
 * Components
 */
import Layout from "../components/CoreLayout";
import Modal from "../components/Modal";

export default class Dashboard extends React.Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    const state = this.state;
    state.showModal = !state.showModal;
    this.setState(state);
  };

  render() {
    const { showModal } = this.state;
    return (
      <Layout
        pageTitle="Dashboard"
        pageSubTitle="The page's subtitle is written here."
      >
        <h1>Dashboard Page Information</h1>
        <Button onClick={this.toggleModal} variant="primary">
          OPEN
        </Button>
        <Modal
          type="alert"
          size="md"
          toggle={this.toggleModal}
          show={showModal}
        >
          <h1>MESSAGE</h1>
        </Modal>
      </Layout>
    );
  }
}
