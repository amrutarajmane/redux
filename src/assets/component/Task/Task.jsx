import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

import { TaskActions, taskFeatureKey } from "../SAGA/TaskSlice";

const Task = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access task data from the Redux store
  const dataObj = useSelector((store) => store[taskFeatureKey]);

  useEffect(() => {
    dispatch({
      type: TaskActions.getAllTasks.type, // Fetch tasks on mount
    });
  }, [dispatch]);

  // Function to handle delete with confirmation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch({ type: TaskActions.deleteTask.type, payload: id });
    }
  };

  // Function to handle edit navigation
  const handleEdit = (id) => {
    navigate(`/task/edit/${id}`);
  };

  return (
    <>
      <Button variant="contained" sx={{ margin: "10px" }} component={Link} to="/task/Addtask">
        ADD DATA
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Priority</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataObj.taskList.map((el, index) => (
              <TableRow key={el.id}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="right">{el.title}</TableCell>
                <TableCell align="right">{el.description}</TableCell>
                <TableCell align="right">{el.due_date}</TableCell>
                <TableCell align="right">{el.priority}</TableCell>
                <TableCell align="right">{el.status}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    sx={{ margin: "10px" }}
                    color="secondary"
                    onClick={() => handleEdit(el.id)}
                  >
                    EDIT
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ margin: "10px" }}
                    color="error"
                    onClick={() => handleDelete(el.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Task;
