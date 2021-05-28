import { TODOS_DB_PATH, USERS_DB_PATH } from './constants';

export const getUserTodosPath = (state) => {
    const userId = state.userData.userId;
    if (!userId)
        console.error("User id can not be empty");
    return USERS_DB_PATH + '/' + userId + '/' + TODOS_DB_PATH;
}