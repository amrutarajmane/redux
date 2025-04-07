import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { TaskActions, taskFeatureKey } from "../SAGA/TaskSlice";

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const taskList = useSelector((store) => store[taskFeatureKey].taskList);
    
    const task = taskList.find((t) => t.id === parseInt(id));

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        due_date: "",
        priority: "",
        status: ""
    });

    useEffect(() => {
        if (task) {
            setFormData(task);
        }
    }, [task]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: TaskActions.editTask.type, payload: formData });
        navigate("/task");
    };

    return (
        <Paper style={{ padding: 20, maxWidth: 400, margin: "20px auto" }}>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Due Date"
                    name="due_date"
                    type="date"
                    
                    value={formData.due_date}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save Changes
                </Button>
            </form>
        </Paper>
    );
};

export default Edit;
