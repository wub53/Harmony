import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import React from 'react';
import LoginPage from './LoginPage';
//import RegistrationForm from './RegisterationForm';
import './App.css';
import AdminPanel from './AdminPanel';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

export default App;