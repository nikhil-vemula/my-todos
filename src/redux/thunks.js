import {  fetchingTodos, todosFetched, todoCreated, todoRemoved, todoMarked} from './actions'
import { db } from '../common/firebase'; 
import { Todo } from '../common/Todo';
import { TODOS_DB_PATH } from '../common/constants';

const loadTodos =  () => async (dispatch, getState) => {
    dispatch(fetchingTodos());
    db.collection(TODOS_DB_PATH).get().then((snapshot) => {
        let todos = [];
        snapshot.forEach((doc) => {
            let id = doc.id;
            let { text } = doc.data();
            let todo = new Todo();
            todo.id = id;
            todo.text = text;
            console.log(id, todo);
            todos.push(todo);
        });
        dispatch(todosFetched(todos));
    });
};

const createTodo =  (text) => async (dispatch, getState) => {
    db.collection(TODOS_DB_PATH).add({
        text: text,
        isComplete: false
    }).then((docRef) => {
        let newTodo = new Todo();
        console.log(docRef);
        newTodo.text = text;
        newTodo.id = docRef.id;
        dispatch(todoCreated(newTodo));
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
};

const removeTodo =  (id) => async (dispatch, getState) => {
    db.collection(TODOS_DB_PATH).doc(id).delete().then(() => {
        dispatch(todoRemoved(id));
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
};

const markTodo =  (id, isComplete) => async (dispatch, getState) => {
    db.collection(TODOS_DB_PATH).doc(id)
    .set({isComplete}, {merge: true})
    .then(() => {
        dispatch(todoMarked(id, isComplete));
    });
 };

export { loadTodos, createTodo, removeTodo, markTodo };
