import React from 'react';
import './Contact.css';
// import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }
  render() {
    return(
      <div className="Contact">
        <img src={this.props.avatar} alt={this.props.avatar} className="avatar" />
        <p>
          <div className="name">{this.props.name}</div>
          <div className="status">
              <div className= { this.state.online ? 'status-offline' : 'status-online' } 
              onClick = {event => {
                const statusMark = !this.state.online;
                this.setState({online: statusMark});
              }}></div>
              <div className="status-text">
                {this.props.online ? 'offline' : 'online'}
              </div>
              </div>
            </p>
      </div>
    );
  }
}


export default Contact;