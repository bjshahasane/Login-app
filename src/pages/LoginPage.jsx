import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
    const [state, setState] = useState('login');

    const setPage = (formName) => {
        setState(formName)
    }
    return (
        <div className="App">
            {
                state === 'login' ? <Login onFormSwitch={setPage} /> : <Register onFormSwitch={setPage} />
            }
        </div>
    )
}

export default LoginPage;
