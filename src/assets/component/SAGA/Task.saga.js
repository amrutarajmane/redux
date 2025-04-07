import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { TaskActions } from "./TaskSlice";

// Function to fetch tasks from the API
const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/Tasks");
    return response;
};

// Function to save a new task to the API
const saveTask = async (task) => {
    const response = await axios.post("http://localhost:3000/Tasks", task);
    return response;
};

// ✅ Function to delete a task from the API
const deleteTask = async (id) => {
    return await axios.delete(`http://localhost:3000/Tasks/${id}`);
};

// Worker saga to fetch all tasks
function* getAllTasks() {
    try {
        const resp = yield call(fetchTask);
        if (resp.status === 200) {  
            yield put(TaskActions.getAllTasksSuccess(resp.data));
        } 
    } catch (err) {
        yield put(TaskActions.getAllTasksFailure(err.message || "Failed to fetch tasks"));
    }
}

// Worker saga to handle adding a task
function* addTask(action) {
    try {
        const resp = yield call(saveTask, action.payload);
        if (resp.status === 201) {  
            yield put(TaskActions.addTaskSuccess(resp.data)); // Dispatch success action
        } 
    } catch (err) {
        yield put(TaskActions.addTaskFailure(err.message || "Failed to add task")); // Dispatch failure action
    }
}

// ✅ Worker saga to handle deleting a task
function* removeTask(action) {
    try {
        const resp = yield call(deleteTask, action.payload);
        if (resp.status === 200 || resp.status === 204) {  
            yield put(TaskActions.deleteTaskSuccess(action.payload)); // Dispatch success action
        }
    } catch (err) {
        yield put(TaskActions.deleteTaskFailure(err.message || "Failed to delete task")); // Dispatch failure action
    }
}

// Worker saga to handle updating a task
function* editTask(action) {
    try {
        yield put(TaskActions.editTaskLoading()); // Dispatch loading action
        const resp = yield call(updateTask, action.payload);
        yield put(TaskActions.editTaskSuccess(resp.data));
    } catch (err) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to update task";
        yield put(TaskActions.editTaskFailure(errorMessage));
    }
}


// Watcher sagas
function* watchGetAllTasks() {
    yield takeLatest(TaskActions.getAllTasks.type, getAllTasks);
}

function* watchAddTask() {
    yield takeLatest(TaskActions.addTask.type, addTask);
}

// ✅ Watcher saga for delete action
function* watchDeleteTask() {
    yield takeLatest(TaskActions.deleteTask.type, removeTask);
}

function* watchEditTask() {
    yield takeLatest(TaskActions.editTask.type, editTask);
}


export { watchGetAllTasks, watchAddTask, watchDeleteTask, watchEditTask };
