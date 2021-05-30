import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { user } from "./user";
interface Props {
    success: string
    handleUserInput: (newUser: user) => void
}

const Register: React.FC<Props> = (Props: any) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function inputName(e: any) {
        setName(e.target.value);
    }
    function inputEmail(e: any) {
        setEmail(e.target.value);
    }
    function inputPassword(e: any) {
        setPassword(e.target.value);
    }

    return (

        <div className='login-field'>
            <u><h4>Enter the Credentials</h4></u>
            <form action='/'>
                <InputGroup className="mb-3 fields">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Your Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        onChange={inputName}
                    />
                </InputGroup>
                <InputGroup className="mb-3 fields">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter Your Mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={inputEmail}
                    />
                </InputGroup>
                <InputGroup className="mb-3 fields">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        aria-describedby="basic-addon1"
                        onChange={inputPassword}
                    />
                </InputGroup>
                <button type="button" className="btn btn-primary" onClick={() => Props.handleUserInput({ name: name, email: email, password: password })}>Register</button>
                {Props.success === 'done' ? <div>Registration Successful</div> : null}
            </form>
        </div>


    )
}

export default Register