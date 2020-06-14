import React from 'react';
import './Contact.css';

let status = 'offline';


function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.avatar} className="avatar" />
      <p>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className= { props.status === 'online' ? 'status-online' : 'status-offline' }>
            </div>
          <div className="status-text">{ props.status }
          </div>
        </div>
      </p>
    </div>
  );
}




export default Contact;