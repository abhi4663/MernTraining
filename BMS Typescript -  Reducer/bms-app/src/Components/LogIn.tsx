import React, { useState, useContext } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import { user } from './user';
import BookContext from '../context/BookContext'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


interface Props {
    valid: string,
    handleUserNamePasswordInput: () => void
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const LogIn: React.FC<Props> = (Props: any) => {
    const { booksArray, dispatch } = useContext(BookContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState<boolean>(true);
    const classes = useStyles();

    function inputEmail(e: any) {
        setEmail(e.target.value);
    }
    function inputPassword(e: any) {
        setPassword(e.target.value);
    }
    const handleUserNamePasswordInput = (email: string, password: string) => {
        // console.log(booksArray.users);
        dispatch({ type: "LOGIN", user: { email: email, password: password } })
        if (booksArray.loginUser) {
            Props.handleUserNamePasswordInput();
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <>
            {/* <div className='login-field-1'>
                <u><h4>Enter the Credentials</h4></u>
                <InputGroup className="mb-3 fields">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={inputEmail}
                        required
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
                        required
                    />
                </InputGroup>
                <button type="button" className="btn btn-primary" onClick={() => handleUserNamePasswordInput(email, password)}>LogIn</button>
                {valid ? null : <div>Invalid username or Password</div>}

            </div> */}
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
           </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={inputEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={inputPassword}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => handleUserNamePasswordInput(email, password)}
                            >
                                LOGIN
             </Button>
                            {valid ? null : <div>Invalid username or Password</div>}
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                 </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        {/* <Copyright /> */}
                    </Box>
                </Container>
            </div>
        </>
    )
}

export default LogIn
