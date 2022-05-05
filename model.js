class ToDo {

    static PRIORITY = {
        Low: 0,
        Medium: 1,
        High: 2,
        veryHigh: 3,
    }

    constructor(name, priority, tags = []) {
        this.name = name;
        this.priority = priority;
        this.tags = tags;
    }

    toString() {
        const todoString = 'ToDo: ' + this.name + '\n' +
            'Priority: ' + ToDo.fromPriorityToString(this.priority) + '\n' +
            'Tags: ' + this.tags;

        return todoString;
    }

    static fromPriorityToString(selectedPriority) {
        if (selectedPriority === 0) {
            return 'Low';
        } else if (selectedPriority === 1) {
            return 'Medium';
        } else if (selectedPriority === 2) {
            return 'High';
        } else {
            return 'Very High';
        }
    }
}