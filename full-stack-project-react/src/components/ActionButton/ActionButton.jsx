import React, { useState } from 'react';
import { MdAdd, MdClose } from "react-icons/md";

import './ActionButton.scss';

const ActionButton = ({handleClick}) => {

    const [action, setAction] = useState(true);

    return(
        <button className={`action-button-container ${action}`}
            onClick={()=>{
                handleClick();
                setAction(!action);
            }}
        >
            { action ? <MdAdd /> : <MdClose />}
        </button>
    );

}

export default ActionButton;