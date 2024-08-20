import './contact.scss';
import Map from "../map/Map";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault()

  const sm = document.getElementById('sm');

  emailjs.init({
    publicKey: 'yFNDsfwT8__PnMjDk',
  });

  emailjs.sendForm('service_ey11r7z', 'template_76uicad', '#myForm').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      sm.style.color = 'green';
      sm.innerHTML = "Great! Message Sent!";
    },
    (error) => {
      console.log('FAILED...', error);
      sm.style.color = 'red';
      sm.innerHTML = "Failed!! Message Not Sent! Try Again!";

    },
  );
};

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="left">
          <Map />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} id="myForm" className="form">
            <h1 className="title">Contact Me</h1>
            <div className="hold">
              <label htmlFor="name">Name</label>
              <input name="name" placeholder="John Doe" />
            </div>

            <div className="hold">
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="email@example.com" />
            </div>
            
            <div className="hold">
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message Here" rows={10} />
            </div>
            
            <button type="submit">Send</button>
            <small id="sm"></small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact