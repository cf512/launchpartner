import React, { Component } from "react";
import characters from "../characters.json";
import Characters from "./Characters";
import Form from "./Form";

class Users extends Component {
    state = {
        characters
    };

    render() {
        console.log("Testing, Testing, 1-2, 1-2");
        return (
            <div>
                <h1>LaunchPartner Coding Assignment</h1>
                <h3>featuring Punch-Out!!</h3>
                <h6>by Connor Finnigan (<i class="fab fa-github"></i><a href="https://github.com/cf512" target="_blank" rel="noopener noreferrer"> cf512</a>)</h6>
                <hr />
                <Form />
                <hr />
                {this.state.characters.map(character => {
                    return <Characters 
                            key={character.id}
                            id={character.id}
                            image={character.image} 
                            name={character.name}
                            from={character.from}
                            about={character.about}
                            />
                })}
            </div>
        );
    }
}

export default Users;