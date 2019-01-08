import React from 'react';
import {Modal, Button} from 'react-bootstrap';


class Test1 extends React.Component{

    renderModal() {
        if(this.state.showModal === true) {
            return (
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>One fine body...</Modal.Body>

                        <Modal.Footer>
                            <Button>Close</Button>
                            <Button bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )
        }
        else
            return false;
    }

    state = {showModal: false};

    setModal = () => {
        this.setState((prevState) => ({showModal: !prevState.showModal}))
    };
/*
    setModal = () => {
        this.setState((prevState) => ({showModal: !prevState.showModal}))
    };
*/
    render() {
        return (
            <div>
                test fraier
                <br />
                {this.renderModal()}
                <button onClick={this.setModal}>Show Modal</button>
            </div>
        )

    }
}

export default Test1;