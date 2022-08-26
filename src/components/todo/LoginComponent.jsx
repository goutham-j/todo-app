import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loginsuccess: false
        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleUpdate(event){
        this.setState ({[event.target.name]: event.target.value})
    }

    loginClicked() {
        if (this.state.username==='gouthamj' & this.state.password==='pass123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.setState ({loginsuccess: true})
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState ({loginsuccess: false})
        }
    }

    render () {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUpdate}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleUpdate}/>
                    <div>
                        <br></br>
                        <button className="login" onClick={this.loginClicked}>Login</button>
                        {this.state.loginsuccess && <div className="alert alert-warning">Invalid Credentials</div>}
                    </div>
                </div>
            </>
        )
    }
}

export default LoginComponent
