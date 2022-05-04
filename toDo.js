class ToDo{

    constructor(name, priority, tags = []){
        this.name = name;
        this.priority = priority;
        this._creationDate = new Date().getTime();
        this.tags = tags;
    }

    static PRIORITY = {
        Low: 0,
        Medium: 1,
        High: 2,
        Max: 3,
    }

}