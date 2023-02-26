import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Crud />
    </div>
  )
}

function Crud() {
  return (
    <div>
       <AppBar position="static">
      
       <Toolbar className='curdopertion'>
          <Button variant = "contained">List User</Button>
          <Button variant = "contained">Edit User</Button>
          <Button variant = "contained">Profile</Button>
          <Button variant = "contained">Delete</Button>
       </Toolbar>
       </AppBar>
    </div>
  );
}

export default App
