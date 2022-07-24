import React, { useState } from 'react';
import ActionButton from '../../components/ActionButton/ActionButton';
import Form from '../../components/Form/Form';
import LocationList from '../../components/LocationList/LocationList';
import Modal from '../../components/Modal/Modal';

const Places = (props) => {
    
    const [ showModal, setShowModal ] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    return(
        <section className='places-container'>

            <LocationList />
            

            <ActionButton handleClick={handleShowModal} />
            { showModal && <Modal>
                <Form changeShowModal={handleShowModal} />
            </Modal> }
        </section>
    );
}

export default Places;