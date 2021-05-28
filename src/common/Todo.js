import { v4 as uuidv4 } from 'uuid';

class Todo {
    constructor(text) {
        this.id = uuidv4();
        this.text = text;
        this.isComplete = false;
    }
}

export { Todo };
