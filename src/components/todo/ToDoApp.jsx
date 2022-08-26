import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./ToDoApp.css"
import withNavigation from './WithNavigation'
import withParams from './WithParams'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'

class ToDoApp extends Component {
    render () {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const WelcomeComponentWithParams = withParams(WelcomeComponent)
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent)

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <br></br>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} /> 
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent /></AuthenticatedRoute>} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <br></br>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default ToDoApp