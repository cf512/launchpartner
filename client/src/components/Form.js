import React, { Component } from "react";
// import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    from: "",
    about: "",
    image: ""
  };

  //   addNewCharacter = () => {
  //     this.setState({
  //         name: this.state.name,
  //         from: this.state.from,
  //         about: this.state.about,
  //         image: this.state.image
  //     })
  // }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Form validation. We need a name at minimum.
    if (!this.state.name) {
      return alert("Please enter a name.");
    }

    // If image field is left blank, inserting placeholder image URL
    if (!this.state.image){
      return this.setState({
        image: "https://placehold.it/80x80"
      });
    }
    // If image URL is entered but missing a prefix, alert user to include prefix
      else if (this.state.image) {
        const prefix = ("http" || "https");
        if (this.state.image.includes(prefix) === false) {
          return alert("Please enter a valid URL with an http/https prefix");
        }
      }    

    // Greet the user and clear the inputs
    alert(`Hello ${this.state.name}`);
    this.setState({
      name: "",
      from: "",
      about: "",
      image: ""
    });
  };

  render() {
    return (
      <div>
        <h6>
          Add a character (or yourself):
        </h6>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name (required)"
          />
          <input
            value={this.state.from}
            name="from"
            onChange={this.handleInputChange}
            type="text"
            placeholder="From"
          />
          <input
            value={this.state.about}
            name="about"
            onChange={this.handleInputChange}
            type="text"
            placeholder="About"
          />
          <input
            value={this.state.image}
            name="image"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Image URL"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <hr />
        <p className="preview">Live Preview of Form Submission:</p>
        <ul>
          <div className="img-container">
            {/* if there's an image URL, display it in the preview; otherwise, display a placeholder image in the preview */}
            <img alt="preview" src={this.state.image ? this.state.image : "https://placehold.it/80x80"} style={{ width: "80px" }} />
          </div>
          <li>
            <strong>Name:</strong> {this.state.name}
          </li>
          <li>
            <strong>From:</strong> {this.state.from}
          </li>
          <li>
            <strong>About:</strong> {this.state.about}
          </li>

        </ul>
      </div>
    );
  }
}

export default Form;
