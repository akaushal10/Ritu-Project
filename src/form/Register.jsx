import React, { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email : ", email);
    console.log("username : ", username);
    console.log("mobile : ", mobile);
    console.log("city : ", city);
  };
  return (
    <>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
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
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
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
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">Please choose a valid number.</div>
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
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
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
          <h1>{username}</h1>
          <h1>{email}</h1>
          <h1>{mobile}</h1>
          <h1>{city}</h1>
      </div>
    </>
  );
};
export default Register;
