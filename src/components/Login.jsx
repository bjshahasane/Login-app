import React, { useState } from "react";
import { payload } from "../data";
import { useNavigate } from 'react-router-dom';


const initialValue = {
    email: '',
    password: '',
}

const Login = ({ onFormSwitch }) => {
    const history = useNavigate();
    const [formVal, setFormVal] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [loginErr, setLoginErr] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = { ...formVal };
        temp[name] = value;
        setFormVal(temp);

    }

    const handleSubmit = () => {
        const user = payload.find(
            (payload) => payload.email === formVal.email && payload.password === formVal.password
        );
        let localUser;
        let parsedUser;
        if (window.localStorage.getItem('userData')) {
            localUser = JSON.parse(window.localStorage.getItem('userData'));
            parsedUser = localUser.email === formVal.email && localUser.password === formVal.password
        }
        if (user || parsedUser) {
            if (user) {
                localStorage.setItem('userData', JSON.stringify(user));
                setMessage(`Login is Successfull !!! Welcome ${user.first} ${user.last}`);
            } else {
                setMessage(`Login is Successfull !!! Welcome ${localUser.name}`);
            }
            setIsLoading(true);
            setLoginErr(false);
            setTimeout(() => {
                history('/home');
                setIsLoading(false);
            }, 2000);

        } else {
            setLoginErr(true);
            setMessage("Invalid email or password");
        }

    }
    return (
        <div className="form-auth-container">
            <h1>Login</h1>
            {message && <p className={loginErr ? "error-text" : ""}>{message}</p>}
            <div className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formVal.email} onChange={(e) => handleChange(e)} placeholder="Enter Email ID" ></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formVal.password} onChange={(e) => handleChange(e)} placeholder="Enter Password" ></input>
                <button type="button" className="btn-submit" onClick={handleSubmit}>Log In</button>
                <button className="btn-link" onClick={() => onFormSwitch('register')}>Not a Registered User?? Register Here</button>
            </div>
            {
                isLoading && <div className="loading">Loading...</div>
            }
        </div>

    )
}

export default Login;