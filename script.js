

const task1 = new ToDo('Compra il latte ', ToDo.PRIORITY.Medium, ['spesa', 'frigo']);

const task2 = new ToDo('Compra la focaccia', ToDo.PRIORITY.Low, ['spesa', 'casa']);

const task3 = new DeadLineToDo('Fai gli auguri a Nonna', new Date(2022, 6, 9), ToDo.PRIORITY.High, ['famiglia', 'compleanni']);

const task4 = new DeadLineToDo('Chiama Marco');

const task5 = new DeadLineToDo('Vai a allenamento', null, ToDo.PRIORITY.High, ['Salute']);


const toDoList = [task1, task2, task3, task4, task5];

function displayToDo(toDoList) {

    const container = document.getElementById('todo-container');

    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];

        const par = document.createElement('p');

        par.classList.add('list-element');

        const node = document.createTextNode(todo.name);

        const creationDateNode = document.createTextNode(todo.creationDate);

        const priorityNode = document.createTextNode(" Priority " + todo._priority.name ) ;

        const tagsNode = document.createTextNode(todo.tags);

        const deadLineDateNode = document.createTextNode(' Da completare enro il: ' + todo.deadLineDate);

        const br = document.createElement('br')

        par.appendChild(node);

        par.appendChild(br);

        par.appendChild(tagsNode);

        par.appendChild(br);

        par.appendChild(creationDateNode);

        par.appendChild(deadLineDateNode);
      
        par.appendChild(br);

        par.appendChild(priorityNode);

        container.appendChild(par);

    }
}

displayToDo(toDoList)










const doneList = [];
