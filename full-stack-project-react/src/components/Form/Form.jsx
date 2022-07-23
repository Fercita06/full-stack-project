import React, { useState } from 'react'
import "./Form.scss"


const Form = ({toggleAddBox}) => {
    const [project, setProject] = useState({
        name: "",
        place: "",
        nacionality: "",
        notes: "",
    })

  //   const handleSubmit = (e) => {
  //       e.preventDefault()
  //       fetch('https://google.com', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(id)
  //   })
  //   .then((response) => response.json())
  //   .then((json => console.log(json)))
  //   .catch(err => console.log(err))
  //   e.target.reset();
  // }
            
      
  return (
    <div className="log-form">
      <div className='log-form__content'>
        <img src={whiteCross} alt="Close Add Project" className='log-form__cross' onClick={toggleAddBox}/>
      <h2>Add your favourite place</h2> 
      <form onSubmit={handleSubmit}>
       
      </form>
      </div>
    </div>
  )
}

export default Form