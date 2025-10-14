import React from 'react'



const Contact = () => {


  const handleFormData=(formdata)=>{
 const data=Object.fromEntries(formdata.entries());
  console.log(data)
  }

  return (
   <section className="contact-container">
  <h1 className="contact-heading">Contact Us</h1>
  <form action={handleFormData} className="contact-form">
    <input
      type="text"
      className="form-input"
      placeholder="Enter your name"
      name="username"
      required
      autoComplete="off"
    />
    <input
      type="email"
      className="form-input"
      placeholder="Enter your email"
      name="email"
      required
      // autoComplete="off"
    />
    <textarea
      className="form-textarea"
      placeholder="Enter your message"
      name="message"
      required
      autoComplete="off"
    ></textarea>

    <button className="form-submit" type="submit">Send Message</button>
  </form>
</section>
  )}

export default Contact
