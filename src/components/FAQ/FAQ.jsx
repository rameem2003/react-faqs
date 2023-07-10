import React, { useState } from 'react'
import './card.css'

function FAQ({id, qns, ans}) {
    const [toggle, setToggle] = useState(false);

    const stateChange = () => {
        setToggle(!toggle)
    }

  return (
    <div className='faq'>
      <div className="title">
        <h2>{qns}</h2>
        <button onClick={stateChange}>{toggle ? "-" : "+"}</button>
      </div>

      <div className="des">
        {toggle && <p>{ans}</p>}
      </div>
    </div>
  )
}

export default FAQ
