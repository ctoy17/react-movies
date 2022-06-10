import {Component} from "react";
import './LogInForm.css';

export default class LogInForm extends Component{
    state = {
        name: '',
        error: ''
    };
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    handleSubmit = (evt) =>{
        evt.preventDefault();
        this.props.setUser(this.state.name);
    }
    render() {
        return (
            <div className="form-container">
                <div className="form-content">
                <label>What's Your Name?</label><hr></hr>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="First Name" value={this.state.name} onChange={this.handleChange} required />
                        <br></br>
                        <button type="submit">Enter</button>
                    </form>
                </div>
                    <div className="error-message">&nbsp;{this.state.error}</div>
            </div>
        );
    }
}

