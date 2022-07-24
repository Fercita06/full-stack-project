import React from 'react';

import './Modal.scss';

const Modal = (props) => {

    return(
        <section className='modal-container'>
            <div className='modal-container__bg'>
            </div>
            <div className='modal-container__item'>
                { props.children } 
            </div>
            
        </section>
    );

}

export default Modal;