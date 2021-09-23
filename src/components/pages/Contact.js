import React from "react";
import "../styles/Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div clasName="container">
        <div className="card responsive-width mx-2 p-4 my-5">
          <div>
            <h1>Contact</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="contactName"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mt-3">Email</label>
              <input
                type="text"
                className="form-control"
                id="contactEmail"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mt-3">Message</label>
              <textarea
                rows="3"
                className="form-control mb-4"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
