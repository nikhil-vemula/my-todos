class Todo {
    constructor() {
        this.id = "";
        this.text = "";
        this.isComplete = false;
        this.created = new Date();
    }

    setValues(id, text, isComplete, created) {
        this.id = id;
        this.text = text;
        this.isComplete = isComplete;
        this.created = new Date(created);
    }

    markComplete() {
        this.isComplete = true;
    }

    toJSON() {
        return {
            "id": this.id,
            "text": this.text,
            "isComplete": this.isComplete,
            "created": this.created
        }
    }
}

export { Todo };
