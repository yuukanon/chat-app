import React from 'react';
import './Contact.css';
// import PropTypes from 'prop-types';


function Contact({avatar, name, online}) {
  return (
    <div className="Contact">
      <img src={avatar} alt={avatar} className="avatar" />
      <p>
        <div className="name">{name}</div>
        <div className="status">
          <div className= { online === true ? 'status-online' : 'status-offline' }>
            </div>
          <div className="status-text">{ online === true ? 'online' : 'offline' }
          </div>
        </div>
      </p>
    </div>
  );
}

// Contact.propTypes = {
//   name: PropTypes.string,
//   avatar: PropTypes.object,
//   online: PropTypes.bool,
// };


export default Contact;