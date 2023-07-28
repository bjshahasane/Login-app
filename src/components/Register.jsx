import React, { useState } from "react";


const initialValue = {
    name: '',
    email: '',
    password: '',
}

const Register = ({onFormSwitch}) => {
    const [formVal, setFormVal] = useState(initialValue);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = { ...formVal };
        temp[name] = value;
        setFormVal(temp);
        localStorage.setItem("userData", JSON.stringify(temp));
    }
    return (
        <div>
            <label htmlFor="email">Name</label>
            <input type="text" name="name" value={formVal.name} onChange={(e) => handleChange(e)}  placeholder="Enter Email ID" ></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formVal.email} onChange={(e) => handleChange(e)}  placeholder="Enter Email ID" ></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formVal.password} onChange={(e) => handleChange(e)} placeholder="Enter Password" ></input>
            <button type="button" onClick={() => onFormSwitch('login')}>Register</button>
            {/* <button >Not a Registered User?? Register Here</button> */}
        </div>

    )
}

export default Register;