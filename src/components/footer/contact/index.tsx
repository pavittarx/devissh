import React, { useState } from 'react';
import {ReactComponent as Phone} from "assets/icons/phone.svg";
import './Contact.scss';

function Contact(){
    const [email, setEmailorPhone] = useState("");
    const [message, setMessage] = useState("");
    const [attach, setAttach] = useState(null);

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
                    <div className="phone">
                        <Phone/>
                        <div className="ph-num">
                            9012090000
                        </div>
                    </div>
            </div>
            <div className="right">
            <div className="contact-form">
                
                <input
                    type="text"
                    placeholder="Email or Phone"
                    value={email}
                    onChange={(e) => setEmailorPhone(e.target.value)}
                />
              
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {/* <input type="file" value={attach} onChange={(e)=>setAttach(e.target.files[0])}/> */}
                <button className="Btn">Get to us</button>
                </div>
            </div>
        </div>;
}

export default Contact;