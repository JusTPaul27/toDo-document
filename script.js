const todo1 = new ToDo('Uscire', ToDo.PRIORITY.Medium, ['divertimento'])

console.log(todo1);

const todo2 = new ToDo('Pane', ToDo.PRIORITY.Medium, ['casa'])
const todo3 = new ToDo('Latte', ToDo.PRIORITY.Low, ['casa'])
const todo4 = new ToDo('caffè', ToDo.PRIORITY.Max, ['casa'])


const multi = new MultiToDo('Spesa', ToDo.PRIORITY.Medium, ['casa'], [todo2, todo3, todo4]);

console.log(multi);