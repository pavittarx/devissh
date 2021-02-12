import React, { useState } from 'react';
import axios from "axios";

import FlexContainer from "utils/flex-container";
import Input from "utils/input";
import Button from "utils/button";
import {ReactComponent as Phone} from "assets/icons/phone.svg";
import {ReactComponent as Attachment} from "assets/icons/link.svg";

import './Contact.scss';

function Contact(){
    const [email, setEmailorPhone] = useState("");
    const [message, setMessage] = useState("");
    const [attach, setAttach] = useState(null);

    const handleSubmit = async () => {
        const data = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_AIRTABLE_ID}/clients`,
          {
            email: email,
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

    return <div className="Contact">
            <div className="left">
                    <div className="quotes">
                        <div className="quote-head">
                                We know there is more to it.
                        </div>
                        <div className="quote-body">
                        Tell us about your idea, project or business. So, we can cater you in the best possible way.
                        </div> 
                    </div>
                    <FlexContainer>
                        <Phone/>
                        <div className="val">
                            9012090000
                        </div>
                    </FlexContainer>
            </div>
            <div className="right">
            <div className="contact-form">
                
                <Input
                    type="text"
                    placeholder="Email or Phone"
                    value={email}
                    onChange={(e:any) => setEmailorPhone(e.target.value)}
                />
              
                <Input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e:any) => setMessage(e.target.value)}
                />
                {/* <input type="file" value={attach} onChange={(e)=>setAttach(e.target.files[0])}/> */}
                <Button onClick={() => {
                    handleSubmit();
                    }}>Get to us</Button>
                </div>
            </div>
        </div>;
}

export default Contact;