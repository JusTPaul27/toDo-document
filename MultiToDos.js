class MultiToDo extends ToDo {

    constructor(name, priority, tags = [] , subToDos = []){ 
        super(name, priority, tags); 
        this.subToDos = subToDos;
    }

    getHighestPriority(){
        for (let i = 0; i < this.subToDos.priority.length; i++) {
            if (i) {
                
            }
        }
    }
}