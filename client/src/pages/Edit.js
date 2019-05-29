import React, { Component } from 'react';
import API from "../utils/API";

export default class EditCharacter extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.deleteThisCharacter = this.deleteThisCharacter.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            from: '',
            about: '',
            image: ''
        }
    }

    componentDidMount() {
        API.getCharacter(this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    from: response.data.from,
                    about: response.data.about,
                    image: response.data.image
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeFrom(e) {
        this.setState({
            from: e.target.value
        });
    }

    onChangeAbout(e) {
        this.setState({
            about: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    deleteThisCharacter() {
        API.deleteCharacter(this.props.match.params.id)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            from: this.state.from,
            about: this.state.about,
            image: this.state.image,
            date: new Date(Date.now())
        };
        API.updateCharacter(this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <hr />
                <div className="container">
                    <h3>Update Todo</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Image: </label>
                            <div className="img-container">
                                <img alt={this.state.image} src={this.state.image} style={{ width: "80px" }} />
                            </div>
                            <br />
                            <input type="text"
                                className="form-control"
                                value={this.state.image || ''}
                                onChange={this.onChangeImage}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.name || ''}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>From: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.from || ''}
                                onChange={this.onChangeFrom}
                            />
                        </div>
                        <div className="form-group">
                            <label>About: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.about || ''}
                                onChange={this.onChangeAbout}
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <input type="submit" value="Save Changes" className="btn btn-primary" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <input type="submit" value="Delete Character" className="btn btn-danger" onClick={this.deleteThisCharacter} />
                            </div>
                        </div>
                    </form>
                </div>
                {/* <hr />
                <div className="container">
                    <div>
                        <h3 align="center">Update Character</h3>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>From: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.from}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>About: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.about}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="submit" value="Update Todo" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        )
    }
}