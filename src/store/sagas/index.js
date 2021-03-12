import { all } from 'redux-saga/effects';

import { watchCreateTask, watchFetchTasks, watchCompleteTask } from './tasks';

function* rootSaga(){
    yield all([
        watchFetchTasks(),
        watchCreateTask(),
        watchCompleteTask()
    ])
}

export default rootSaga