import React, { useState } from "react";
import axios from "axios";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [attach, setAttach] = useState(null);

  const handleSubmit = async () => {
    const data = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_AIRTABLE_ID}/clients`,
      {
        name: name,
        email: email,
        phone: phone,
        message: message,
        links: "Boom",
      },
      {
        headers: {
          Authentication: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    );

    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {/* <input type="file" value={attach} onChange={(e)=>setAttach(e.target.files[0])}/> */}
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Contactus;
