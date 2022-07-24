import React,{useState} from 'react';
import { MdSearch } from "react-icons/md";
import SearchModal from './SearchModal';


const SearchWidget = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ fontSize:"30px", cursor: "pointer" }}>

        {/* icono de search */}
        <MdSearch  onClick={() => { setShowModal(!showModal) }} />
        { showModal && <SearchModal setShowModal={setShowModal}/> }


    </div>
  )
}

export default SearchWidget