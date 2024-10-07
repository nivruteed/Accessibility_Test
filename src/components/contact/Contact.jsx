import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              
              <input type='text' placeholder='Enter name' aria-label="name"/>
              
              <input type='text' placeholder='Enter email' aria-label="email"/>
            </div>
            <input type='text' placeholder='Subject' aria-label="Subject"/>
            <textarea cols='30' rows='10' aria-label="Your message"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
