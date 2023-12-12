import React, {useState} from "react";
import "../styles/contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = () => {
    setMessageSent(!messageSent);
  }

  return (
    <div className="flex h-screen bg-center bg-cover">
      {messageSent === true ?
          <div className="m-auto bg-black bg-opacity-50 rounded-xl h-1/2">
            <h1 className="p-2 mt-10 text-2xl font-bold text-white">Message has been sent</h1>
            <p className="text-xl font-bold text-white">Thank you!</p>
          </div>
          :
          <div className="m-auto bg-black bg-opacity-50 rounded-xl h-3/4">
        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
        <form className="flex flex-col w-auto h-auto p-5 text-left text-white" method="POST">
          <label className="mt-5" htmlFor="name">Full Name</label>
          <input className="w-4/5 border-b-2 border-black focus:outline-none" name="name" placeholder="Enter full name..." type="text" />
          <label className="mt-5" htmlFor="email">Email</label>
          <input className="w-4/5 border-b-2 border-black focus:outline-none" name="email" placeholder="Enter email..." type="email" />
          <label className="mt-5" htmlFor="message">Message</label>
          <textarea
            className="w-4/5 h-20 mt-4 border-b-2 border-black focus:outline-none"
            rows={6}
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button className="h-10 mt-10 text-white bg-black rounded-lg cursor-pointer hover:bg-white hover:text-black" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
      </div>
      }
    </div>
  );
};

export default Contact;
