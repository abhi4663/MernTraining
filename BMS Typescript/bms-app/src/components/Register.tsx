import React, { ReactElement } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';



function Register(): ReactElement {
    return (

        <div className='login-field'>
            <u><h4>Enter the Credentials</h4></u>
            <InputGroup className="mb-3 fields">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Enter Your Name"
                    aria-label="name"
                    aria-describedby="basic-addon1"

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
                />
            </InputGroup>
            <button type="button" className="btn btn-primary">Register</button>
        </div>
    )
}

export default Register