import { call, put, takeLatest,} from 'redux-saga/effects';
import * as TasksActions from '../../actions/tasks';
import api from '../../../services/api';


function* getTasks(){
    try {
        const tasks = yield call(api.get, 'tasks')
        yield put(TasksActions.fetchTasksSuccess(tasks.data))
    } catch (err) {
        yield put(TasksActions.fetchTasksFailure(err.message))
    }
}

function* createTask(action){
    try {
        yield call(api.post, 'create/task', {taskName: action.payload})
        yield put({type: TasksActions.FETCH_TASKS_REQUEST})   
    } catch (err) {
        console.log(err.message);
    }
}

function* completeTask(action){
    try {
        yield call(api.put, `/update/task/?id=${action.payload}`)
        yield put({type: TasksActions.FETCH_TASKS_REQUEST})
    }catch(err){
        console.log(err.message);
    }
}

export function* watchFetchTasks() {
    yield takeLatest(TasksActions.FETCH_TASKS_REQUEST, getTasks)
}

export function* watchCreateTask(){
    yield takeLatest(TasksActions.CREATE_TASK, createTask)
}

export function* watchCompleteTask(){
    yield takeLatest(TasksActions.COMPLETE_TASK, completeTask)
}


    
