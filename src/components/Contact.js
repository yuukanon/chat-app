import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


let online = "true";


function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.avatar} className="avatar" />
      <p>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className= { props.online === "true" ? 'status-online' : 'status-offline' }>
            </div>
          <div className="status-text">{ props.online === "true" ? 'online' : 'offline' }
          </div>
        </div>
      </p>
    </div>
  );
}




export default Contact;