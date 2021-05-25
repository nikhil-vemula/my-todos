import { ITodo } from '../redux/types.d';
import { v4 as uuidv4 } from 'uuid';

class Todo implements ITodo{
    text: string;
    id: string;
    isComplete: boolean = false;

    constructor(text: string) {
        this.id = uuidv4();
        this.text = text;
    }
}

export { Todo };
