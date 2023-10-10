import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Tab, Tabs } from '@mui/material';
import '../App.css'

function isValidEmail(email) {
    // This is a simple regular expression for email validation. There are more comprehensive regex patterns for email, but this one serves most common use-cases.
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  

function    LoginPage() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Container component="main" maxWidth="xs" className="loginPageContainer">
            <Tabs value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)} variant="fullWidth">
                <Tab label="Login" />
                <Tab label="Signup" />
            </Tabs>
            {tabIndex === 0 ? <LoginForm /> : <SignupForm />}
        </Container>
    );
}

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login:', username, password);
        if (password.length < 8) {
            setPasswordError('Password should be at least 8 characters');
            return;
        }
        setPasswordError('');
    };

    return (
        <div>
            <Typography variant="h5" align="center">Login</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
            />
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>
    );
}

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup:', username, email, password);
        if(username === null || username === '') {
            setUsernameError('Please Enter Username');
        } else {
            setUsernameError('');
        }
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            console.log('Please enter a valid email address')
            return;
          }
        if (password.length < 8) {
            setPasswordError('Password should be at least 8 characters');
            console.log('assword should be at least 8 characters')
            return;
        }

        if (password !== passwordConfirm) {
            setPasswordConfirmError('Passwords do not match');
            console.log('Passwords do not match')
            return;
        }
        console.log('reached end')
    
          setEmailError('');
        setPasswordError('');
        setPasswordConfirmError('');
    };

    return (
        <div>
            <Typography variant="h5" align="center">Signup</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                error={!!usernameError}
                helperText={usernameError}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
            />
             <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                error={!!passwordConfirmError}
                helperText={passwordConfirmError}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSignup}
            >
                Signup
            </Button>
        </div>
    );
}

export default LoginPage;
