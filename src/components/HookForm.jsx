import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className="">
                <label htmlFor="" className="form-group">First Name:
                    <input 
                        type="text"
                        name="firstName"
                        value={Form.firstName}
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </label>
            
                <label htmlFor="" className="form-group">Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        value={Form.lastName}
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </label>
            
                <label htmlFor="" className="form-group">Email:
                    <input 
                        type="email"
                        name="email"
                        value={Form.email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </label>

                <label htmlFor="" className="form-group">Password:
                    <input 
                        type="password"
                        name="password"
                        value={Form.password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </label>

                <label htmlFor="" className="form-group">Confirm Password:
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={Form.confirmPassword}
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </label>

                <input 
                    type="submit"
                    value="Submit!"
                />
            </form>
            <p>firstName {firstName}</p>
            <p>lastName {lastName}</p>
            <p>email {email}</p>
            <p>password {password}</p>
            <p>confirmPassword {confirmPassword}</p>
        </div>
    );
}



export default Form;