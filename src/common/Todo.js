class Todo {
    constructor() {
        this.id = "";
        this.text = "";
        this.isComplete = false;
        this.created = new Date();
        this.priority = 3;
    }

    setValues(id, text, isComplete, created, priority) {
        this.id = id;
        this.text = text;
        this.isComplete = isComplete;
        this.created = new Date(created);
        this.priority = priority;
    }

    markComplete() {
        this.isComplete = true;
    }

    toJSON() {
        return {
            "id": this.id,
            "text": this.text,
            "isComplete": this.isComplete,
            "created": this.created,
            "priority": this.priority
        }
    }
}

export { Todo };
