import { all } from "redux-saga/effects";
import { watchGetAllTasks, watchAddTask,watchDeleteTask , watchEditTask} from "./Task.saga";

const rootSaga = function* () {
  yield all([
    watchGetAllTasks(),
    watchAddTask(), 
    watchDeleteTask(),
     watchEditTask()
  ]);
};

export default rootSaga;
