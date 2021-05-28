class Todo {
    constructor() {
        this.id = "";
        this.text = "";
        this.isComplete = false;
    }

    markComplete() {
        this.isComplete = true;
    }
}

export { Todo };
