import {  fetchingTodos, todosFetched, todoCreated, todoRemoved, todoUpdated, showToast} from './actions'
import { db } from '../common/firebase'; 
import { Todo } from '../common/Todo';
import { getUserTodosPath } from '../common/util';

const loadTodos =  () => async (dispatch, getState) => {
    dispatch(fetchingTodos());
    db.collection(getUserTodosPath(getState())).get().then((snapshot) => {
        let todos = [];
        snapshot.forEach((doc) => {
            let id = doc.id;
            let { text, isComplete, created, priority } = doc.data();
            let todo = new Todo();
            todo.setValues(id, text, isComplete, created.toDate(), priority);
            todos.push(todo);
        });
        dispatch(todosFetched(todos));
    }).catch((error)=> {
        console.error(error);
        dispatch(showToast("Error fetching todos", "error"));
    });
};

const createTodo =  (text) => async (dispatch, getState) => {
    let newTodo = new Todo();
    newTodo.text = text;
    db.collection(getUserTodosPath(getState())).add(newTodo.toJSON()).then((docRef) => {
        let newTodo = new Todo();
        newTodo.text = text;
        newTodo.id = docRef.id;
        dispatch(todoCreated(newTodo));
    }).catch((error) => {
        console.error("Error adding todo: ", error);
        dispatch(showToast("Error creating todo", "error"));
    });
};

const removeTodo =  (id) => async (dispatch, getState) => {
    db.collection(getUserTodosPath(getState())).doc(id).delete().then(() => {
        dispatch(todoRemoved(id));
    }).catch((error) => {
        console.error("Error removing todo: ", error);
        dispatch(showToast("Error deleting todo", "error"));
    });
};

const updateTodo =  (updateObject) => async (dispatch, getState) => {
    db.collection(getUserTodosPath(getState())).doc(updateObject.id)
    .set(updateObject, {merge: true})
    .then(() => {
        dispatch(todoUpdated(updateObject));
    }).catch((error) => {
        console.error("Error marking the todo: ", error);
        dispatch(showToast("Error completing todo", "error"));
    });
 };

export { loadTodos, createTodo, removeTodo, updateTodo };
