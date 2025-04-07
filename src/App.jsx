import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/component/Task/Home";
import Contact from "./assets/component/Task/Contact";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Task from "./assets/component/Task/Task";
import AddTask from "./assets/component/Task/AddTask";
import Edit from "./assets/component/Task/Edit";


const App = () => {
  return (
    <>
     <BrowserRouter>
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <Link to='home' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to='contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
            </Button>
            <Button color="inherit">
              <Link to='task' style={{ textDecoration: 'none', color: 'inherit' }}>Task</Link>
            </Button>
            <Button color="inherit">
              <Link to='login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/Addtask" element={<AddTask />} />
          <Route path="/task/edit/:id" element={<Edit />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;