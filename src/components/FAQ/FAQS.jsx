import React, { useState } from 'react'
import { faqDatas } from '../../assets/faqData'

import './faq.css'
import FAQ from './FAQ'

function FAQS() {
    // console.log(faqDatas);
    const [faqs, setFaqs] = useState(faqDatas);
  return (
    <div className='container'>
      <div className="left">
        <h1>Frequently Ask Question's</h1>

        <h3>About React</h3>

        <a href="https://react.dev/learn">Go to React Docs</a>
      </div>
      <div className="right">
        {faqs.map(faq => {
            return(<FAQ key={faq.id} {...faq} />)
        })}
      </div>
    </div>
  )
}

export default FAQS
