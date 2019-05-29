import React, { Component } from "react";
import Characters from "../components/Characters";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => this.setState({ characters: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  deleteThisCharacter = event => {
    console.log("Click");
    API.deleteCharacter(this.state.id)
      .then(res => console.log(res.data));
    this.props.history.push('/');
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Form validation. We need a name at minimum.
    if (!this.state.name) {
      return alert("Please enter a name.");
    }

    // If image URL is entered but missing a prefix, alert user to include prefix
    if (this.state.image) {
      const prefix = ("http" || "https");
      if (this.state.image.includes(prefix) === false) {
        return alert("Please enter a valid URL with an http/https prefix");
      }
    }

    // If a name is entered, then the form meets the minimum requirement and inputs are relayed to API and to DB 
    if (this.state.name) {
      API.saveCharacter({
        name: this.state.name,
        from: this.state.from,
        about: this.state.about,
        // If an Image URL isn't entered, it gets a placeholder image via this ternary operator (so that we don't have unpleasant broken image icons in the results)
        image: this.state.image ? this.state.image : "https://placehold.it/80x80"
      })
        .then(res => this.loadCharacters())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <hr />
        <div className="container">
          <div className="formStyle">
            <h5>Add a character (or yourself):</h5>
            <form>
              <div className="form-row align-items-center">
                <div className="col-sm-3 my-1">
                  <Input className="form-control"
                    value={this.state.name || ''}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Name (required)"
                  />
                </div>
                <div className="col-sm-3 my-1">
                  <Input className="form-control"
                    value={this.state.from || ''}
                    name="from"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="From"
                  />
                </div>
                <div className="col-sm-3 my-1">
                  <Input className="form-control"
                    value={this.state.about || ''}
                    name="about"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="About"
                  />
                </div>
                <div className="col-sm-3 my-1">
                  <Input className="form-control"
                    value={this.state.image || ''}
                    name="image"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Image URL"
                  />
                </div>
                <div className="col-auto my-1">
                  <FormBtn type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</FormBtn>
                </div>
              </div>
            </form>
            <hr />
            <p className="preview">Live Preview of Form Submission:</p>
            <ul>
              <div className="img-container">
                {/* if there's an image URL, display it in the preview; otherwise, display a placeholder image in the preview */}
                <img alt="preview" src={this.state.image ? this.state.image : "https://placehold.it/80x80"} style={{ width: "80px", border: "1px solid white" }} />
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
          <hr />
          <h3>Meet the Characters:</h3>
          {this.state.characters.map(character => {
            return <Characters
              key={character._id}
              id={character._id}
              image={character.image}
              name={character.name}
              from={character.from}
              about={character.about}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Users;