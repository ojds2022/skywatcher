import React, {useState} from "react";
import BackgroundImage from "../assets/nightSky.jpg";
import "../styles/contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = () => {
    setMessageSent(!messageSent);
  }

  return (
    <div className="flex h-screen bg-center bg-cover" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {messageSent === true ?
          <div className="bg-black bg-opacity-50 rounded-xl h-1/2 m-auto">
            <h1 className="text-2xl font-bold text-white p-2 mt-10">Message has been sent</h1>
            <p className="text-xl font-bold text-white">Thank you!</p>
          </div>
          :
          <div className="bg-black bg-opacity-50 rounded-xl h-3/4 m-auto">
        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
        <form className="flex flex-col w-auto h-auto p-5 text-white text-left" method="POST">
          <label className="mt-5" htmlFor="name">Full Name</label>
          <input className="w-4/5 border-b-2 border-black focus:outline-none" name="name" placeholder="Enter full name..." type="text" />
          <label className="mt-5" htmlFor="email">Email</label>
          <input className="w-4/5 border-b-2 border-black focus:outline-none" name="email" placeholder="Enter email..." type="email" />
          <label className="mt-5" htmlFor="message">Message</label>
          <textarea
            className="mt-4 h-20 w-4/5 border-b-2 border-black focus:outline-none"
            rows={6}
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button className="cursor-pointer text-white bg-black h-10 mt-10 rounded-lg hover:bg-white hover:text-black" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
      </div>
      }
    </div>
  );
};

export default Contact;
