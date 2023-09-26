import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="contact">
            <a href="https://t.me/zaharkiy" className="a_contact"><FontAwesomeIcon icon={faPaperPlane}/></a>
            <a href="https://github.com/ztvza" className="a_contact"><FontAwesomeIcon icon={faUser}/></a>
        </div>
    );
};

export default Contact;