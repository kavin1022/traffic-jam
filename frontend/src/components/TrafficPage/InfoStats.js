import React from 'react';
import { Button } from '@material-ui/core';
import '../../styling/anotherpage.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
  };

const InfoStats = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'black';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div>
            <Button variant="contained" color="primary" onClick={openModal} className="infoButton">Info</Button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Traffic Stats</h2>
            <div>
                <p>Start Time: 2021-07-31 09:00</p>
                <p>Total Number of Breaks: 5</p>
                <p>Current Duartion: 56 minutes</p>
            </div>
            <Button variant="contained" color="primary" onClick={closeModal}>Close</Button>
        </Modal>
        </div>
    )
}
export default InfoStats