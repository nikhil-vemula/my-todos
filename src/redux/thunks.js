import {  fetchingTodos, todosFetched, todoCreated, todoRemoved, todoMarked, showToast} from './actions'
import { db } from '../common/firebase'; 
import { Todo } from '../common/Todo';
import { getUserTodosPath } from '../common/util';

const loadTodos =  () => async (dispatch, getState) => {
    dispatch(fetchingTodos());
    console.log(getUserTodosPath(getState()));
    db.collection(getUserTodosPath(getState())).get().then((snapshot) => {
        let todos = [];
        snapshot.forEach((doc) => {
            let id = doc.id;
            let { text, isComplete } = doc.data();
            let todo = new Todo();
            todo.id = id;
            todo.text = text;
            todo.isComplete = isComplete;
            todos.push(todo);
        });
        dispatch(todosFetched(todos));
    }).catch((error)=> {
        console.error(error);
        dispatch(showToast("Error fetching todos", "error"));
    });
};

const createTodo =  (text) => async (dispatch, getState) => {
    db.collection(getUserTodosPath(getState())).add({
        text: text,
        isComplete: false
    }).then((docRef) => {
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

const markTodo =  (id, isComplete) => async (dispatch, getState) => {
    db.collection(getUserTodosPath(getState())).doc(id)
    .set({isComplete}, {merge: true})
    .then(() => {
        dispatch(todoMarked(id, isComplete));
    }).catch((error) => {
        console.error("Error marking the todo: ", error);
        dispatch(showToast("Error completing todo", "error"));
    });
 };

export { loadTodos, createTodo, removeTodo, markTodo };
