import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow1 from '../../assets/white-arrow1.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8344897c-48f0-4266-9271-087b6ed6007f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, Questions and suggestions are importent to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt=''/>Contact@puja.dev</li>
                <li><img src={phone_icon} alt=''/>+1 321-645-7890</li>
                <li><img src={location_icon} alt=''/>88 Amberpet pet, Hydrebad <br/> MA 02139, India</li>
            </ul>
      </div>
        <div className="contact-col"></div>
        <form onSubmit={onSubmit}>
            <label>Your name
            </label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message'  rows='6' placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow1} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
  )
}

export default Contact
