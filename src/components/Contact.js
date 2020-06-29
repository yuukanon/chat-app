import React from 'react';
import './Contact.css';
// import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  changeStatus = () => {
    this.setState({ online: !this.state.online })
  }

  render() {
    console.log(this.state.online)
    return(
      <div className="Contact">
        <img src={this.props.avatar} alt={this.props.avatar} className="avatar" />
        <p>
          <div className="name">{this.props.name}</div>
          <div className= "status" onClick = {this.changeStatus}>
              <div className = {this.state.online ? 'status-offline' : 'status-online'}></div>
              <div className="status-text">
                {this.state.online === false ? 'online' : 'offline'}
              </div>
              </div>
            </p>
      </div>
    );
  }
}


export default Contact;