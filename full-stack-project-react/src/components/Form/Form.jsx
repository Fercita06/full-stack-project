import React, { useState } from 'react'
import "./Form.scss"


const Form = ({changeShowModal}) => {

    //const _baseURL = 'https://62dd123057ac3c3f3c6392c1.mockapi.io';

    const [ showError, setShowError ] = useState(false);
    const [data, setData] = useState({
        Place_name: "",
        Location: "",
        Country: "",
        Highlights: "",
    })

    const handleSubmit = async (e) => {
       try {
        e.preventDefault()
        console.log(e)
        //validate the data
        const data = {
          Place_name: e.target[0].value,
          Location: e.target[1].value,
          Country: e.target[2].value,
          Highlights: e.target[3].value
        }
        console.table(data);
        await fetch("http://localhost:8080/place",{
          method: 'POST',
          body: JSON.stringify(data), 
          headers:{
            'Content-Type': 'application/json'
          }
        });

        e.target[0].value="";
        e.target[1].value="";
        e.target[2].value="";
        e.target[3].value="";
       } catch (error) {
        console.error(error);
       }
       
    }
            
      
  return (
    <div className="form-container">
      <h2 className="form-container__title">Add your favourite place</h2> 
      {showError && <p>Invalid fields</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="">Place</label>
          <input className='input' type="text"/>
        </div>
        <div className='form-group'>
          <label htmlFor="">Location</label>
          <input className='input' type="text"/>
        </div>
        <div className='form-group'>
          <label htmlFor="">Country</label>
          <input className='input' type="text"/>
        </div>
        <div className='form-group'>
          <label htmlFor="">Highlights</label>
          <input className='input' type="text"/>
        </div>
        
        <button className="primary-button">Submit</button>
       
      </form>

    </div>
  )
}

export default Form