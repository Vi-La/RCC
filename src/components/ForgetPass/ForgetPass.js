import React, { Component } from "react";
import logo from "./../../assets/holy-spirit-OCN.jpg";
import "./ForgetPass.css";

class App extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
    };

    handleClick = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="App">
                <img src={logo} className="logo" alt="Business view - Reports" />
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter email address" />
                    </div>
                    <button className="primary">Rest Password</button>
                </form>
            </div>
        );
    }
}

export default App;