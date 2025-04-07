import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem, Container, Typography } from "@mui/material";
import { TaskActions } from "../SAGA/TaskSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "Low",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure no empty fields
    if (!task.title || !task.description || !task.due_date) {
      alert("Please fill in all required fields!");
      return;

      
    }

    dispatch(TaskActions.addTask(task)); 

    
    setTimeout(() => navigate("/task"), 500);
 };

 
 
 return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Due Date"
          name="due_date"
          type="date"
          value={task.due_date}
          onChange={handleChange}
          margin="normal"
          
          required
        />
        <TextField
          select
          fullWidth
          label="Priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <TextField
          select
          fullWidth
          label="Status"
          name="status"
          value={task.status}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Task
        </Button>
      </form>
    </Container>
  );
};

export default AddTask;
