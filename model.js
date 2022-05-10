class ToDo {

    static PRIORITY = {
        Low: { order: 0, name: 'Bassa', color: 'green' },
        Medium: { order: 1, name: 'Media', color: 'darkgoldenrod' },
        High: { order: 2, name: 'Alta', color: 'Orange' },
        veryHigh: { order: 3, name: 'Molto alta', color: 'red' },
    }

    constructor(name, priority = ToDo.PRIORITY.Low, tags = []) {
        this.name = name;
        this._priority = priority;
        this.tags = tags;
        this._creationDate = new Date().getTime();
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }

    get priority() {
        return this._priority;
    }

    set creationDate(date) {
        const timeStamp = date.getTime();
        this._creationDate = timeStamp;
    }

    get creationDate() {
        const date = new Date(this._creationDate);
        return date
    }



    toString() {
        const todoString = 'ToDo: ' + this.name + '\n' +
            'Priority: ' + this.priority.name + '\n' +
            'Tags: ' + this.tags + '\n' +
            'Creation date: ' + this.creationDate;

        return todoString;
    }

   static getFormattedDate(date){
       const dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
       return dateString
   }

    // static fromPriorityToString(selectedPriority) {
    //     if (selectedPriority === 0) {
    //         return 'Low';
    //     } else if (selectedPriority === 1) {
    //         return 'Medium';
    //     } else if (selectedPriority === 2) {
    //         return 'High';
    //     } else {
    //         return 'Very High';
    //     }
    // }
}


class DeadLineToDo extends ToDo {

    constructor(name, deadLineDate = null, priority = ToDo.PRIORITY.Low, tags = []) {
        super(name, priority, tags);
        if (deadLineDate === null) {
            this._deadLineDate = this._creationDate + (1000 * 60 * 60 * 24);
            //     const tomorrow = new Date(this._creationDate.getTime());
            //     tomorrow.setDate(tomorrow.getDate() + 1);
            //     this._deadLineDate = tomorrow.getTime();
        } else {
            this._deadLineDate = deadLineDate.getTime();
        }
    }

    get priority() {
        const nowTimeStamp = new Date().getTime();
        const deltaTime = this._deadLineDate - nowTimeStamp;
        const day = 1000 * 60 * 60 * 24;
        let deadLinePriority;
        if (deltaTime <= day) {
            deadLinePriority = ToDo.PRIORITY.veryHigh;
        } else if (deltaTime <= 2 * day) {
            deadLinePriority = ToDo.PRIORITY.High;
        } else  if (deltaTime <= 3 * day) {
            deadLinePriority =  ToDo.PRIORITY.Medium;
        } else {
             deadLinePriority =  ToDo.PRIORITY.Low
        }

        if (this._priority.order > deadLinePriority.order) {
            return this._priority;
        } else {
            return deadLinePriority;
        }
    }

    set deadLineDate(date) {
            const timeStamp = date.getTime();
            this._deadLineDate = timeStamp;
        }

    get deadLineDate() {
            const date = new Date(this._deadLineDate);
            return date
        }

        toString(){
            const todoString = super.toString() + '\n' +
                'Deadline: ' + this.deadLineDate;

            return todoString
        }

    }


    