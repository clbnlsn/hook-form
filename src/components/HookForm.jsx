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

    const firstNameValid = (title) => {
        if(title.length <2){
            return false;
        }
        return true;
    }
    const lastNameValid = (words) => {
        if(words.length <2){
            return false;
        }
        return true;
    }
    const emailValid = (email) => {
        if(email.length <5){
            return false;
        }
        return true;
    }
    const passwordValid = (pw) => {
        if(pw.length <8){
            return false;
        }
        return true;
    }
    const passwordMatch = (password, confirm) => {
        if(password === confirm){
            return true;
        }
        return false;
    }
    // const onChangeHandler = (e) => {
    //     setFormState
    // }

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
                {firstNameValid(firstName) ? null : <p>name must be at least 2 characters</p>}
                <label htmlFor="" className="form-group">Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        value={Form.lastName}
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </label>
                {lastNameValid(lastName) ? null : <p>name must be at least 2 characters</p>}
                <label htmlFor="" className="form-group">Email:
                    <input 
                        type="email"
                        name="email"
                        value={Form.email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </label>
                {emailValid(email) ? null : <p>email must be at least 5 characters</p>}
                <label htmlFor="" className="form-group">Password:
                    <input 
                        type="password"
                        name="password"
                        value={Form.password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </label>
                {passwordValid(password) ? null : <p>password must be at least 8 characters</p>}
                <label htmlFor="" className="form-group">Confirm Password:
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={Form.confirmPassword}
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </label>
                {passwordValid(password) ? null : <p>password must be at least 8 characters</p>}
                {passwordMatch(password, confirmPassword) ? null : <p>passwords must match!</p>}
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