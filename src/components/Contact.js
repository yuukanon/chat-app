import React from 'react';
import './Contact.css';

let status = 'offline';


function Contact() {
  return (
    <div className="Contact">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="avatar" className="avatar"/>
      <p>
        <div className="name">Ida Crawford</div>
        <div className="status">
          <div className= { status === 'online' ? 'status-online' : 'status-offline' }>
            </div>
          <div className="status-text">{ status }
          </div>
        </div>
      </p>
    </div>
  );
}

export default Contact;