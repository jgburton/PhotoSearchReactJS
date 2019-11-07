import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    formControls: {
      name: { value: "" },
      company: { value: "" },
      department: { value: "" },
      email: { value: "" },
      address: { value: "" },
      device: { value: "" }
    },
    submit: false
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };

  handleSubmit(event) {
    this.setState({submit:true});
    // alert(this.state.formControls.value);
    console.log('Submited');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>*Name:</label>
            <input
              required
              type="text"
              name="name"
              placeholder="James"
              value={this.state.formControls.name.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.name.value  && <div className="invalid-feedback">Please enter a Name.</div>}
          </div>
          <div className="field">
            <label>*Company:</label>
            <input
              required
              type="text"
              name="company"
              placeholder="Brown Industries"
              value={this.state.formControls.company.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.company.value && <div className="invalid-feedback">Please enter a Company.</div>}
          </div>
          <div className="field">
            <label>*Department:</label>
            <input
              required
              type="text"
              name="department"
              placeholder="Inovation"
              value={this.state.formControls.department.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.department.value && <div className="invalid-feedback">Please enter a Department.</div>}
          </div>
          <div className="field">
            <label>*Email address:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="jg8785@zebra.com"
              value={this.state.formControls.email.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.email.value && <div className="invalid-feedback">Please enter a valid Email.</div>}
          </div>
          <div className="field">
            <label>*Address:</label>
            <input
              required
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.formControls.address.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.address.value && <div className="invalid-feedback">Please enter a valid address.</div>}
          </div>
          <div className="field">
            <label>*Favorrite Zebra Device:</label>
            <input
              required
              type="text"
              name="device"
              placeholder="TC70, TC75, etc."
              value={this.state.formControls.device.value}
              onChange={this.changeHandler}
            />
            {!this.state.formControls.device.value && <div className="invalid-feedback">Please enter Device.</div>}
          </div>
          <small className="form-text text-muted mandatory">
            *Mandatory fields
          </small>
          <br />
          <button className="ui button" type="submit" value="submit">
            Submit Form
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
