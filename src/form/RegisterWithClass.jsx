import React, { Component, useState } from "react";
import "../static/style.css";
import Photo from "../static/WhatsappImage.jpeg";
class RegisterWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      mobile: "",
      city: "",
      theme:"dark"
    };
  }
  changeTheme = ()=>{
    if(this.state.theme==="dark"){
        this.setState({theme:"light"})
    }else{
        this.setState({theme:"dark"})
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("email : ", this.state.email);
    console.log("username : ", this.state.username);
    console.log("mobile : ", this.state.mobile);
    console.log("city : ", this.state.city);
  };
  render() {
    return (
      <>
        <img
          style={{
            height: "100px",
            border: "2px solid red",
            borderRadius: "10px",
            textAlign: "center",
          }}
          src={Photo}
          className="img-fluid"
        />
            <button className="btn btn-primary" onClick={this.changeTheme}>Change Theme</button>
        <form
          className={`row g-3 needs-validation ${this.state.theme==="dark"?"bg-secondary":"bg-warning"}`}
          noValidate
          onSubmit={this.handleSubmit}
        >
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              placeholder="Enter Name"
              name="username"
              value={this.state.username}
              onChange={(event) => {
                this.setState({ username: event.target.value });
              }}
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationTooltip02"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">
              Mobile
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                placeholder="Enter Mobile Number"
                value={this.state.mobile}
                onChange={(event) => {
                  this.setState({ mobile: event.target.value });
                }}
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a valid number.
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="validationTooltip03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              placeholder="Enter City"
              value={this.state.city}
              onChange={(event) => {
                this.setState({ city: event.target.value });
              }}
              required
            />
            <div className="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
        <div>
          <h1>{this.state.username}</h1>
          <h1>{this.state.email}</h1>
          <h1>{this.state.mobile}</h1>
          <h1>{this.state.city}</h1>
        </div>
      </>
    );
  }
}
export default RegisterWithClass;
