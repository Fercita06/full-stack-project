import React,{ useState } from 'react';
import SearchItemList from './SearchItemList';
import { MdClose } from "react-icons/md";
import './styles/SearchModal.scss';

const SearchModal = ({setShowModal}) => {

    const [query, setQuery] = useState("");
    const handleSearch = (e) =>{ 
        console.log(e.target.value);
        setQuery(e.target.value)
    }

  return (
    <section className="search-modal">
        <MdClose onClick={()=>{setShowModal(false)}} className='search-modal__icon--close' />
        <input 
            value={query}
            onChange={(e)=>{ handleSearch(e) }}
        />

        { query.length > 0 && <SearchItemList query={query}/> }


    </section>
  )
}

export default SearchModal