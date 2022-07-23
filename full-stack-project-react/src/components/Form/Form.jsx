import React, { useState } from 'react'
import "./Form.scss"


const Form = ({toggleAddBox}) => {
    const [project, setProject] = useState({
        name: "",
        place: "",
        nationality: "",
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
    
     
    </div>
  )
}

export default Form