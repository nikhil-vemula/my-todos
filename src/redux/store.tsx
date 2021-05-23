import { createStore, combineReducers, Store} from 'redux';
import { todos } from './reducers';
import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { DispatchType, RState, TodoAction } from './types.d';


const reducers= {
    todos
};

const persistConfig = {
    key: 'primary',
    storage: storage,
    stateReconsiler: autoMergeLevel2
}
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = ():Store<RState, TodoAction> & {dispatch: DispatchType} => createStore(persistedReducer);