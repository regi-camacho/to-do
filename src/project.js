import { compareAsc,format, toDate} from 'date-fns';
import ToDo from './todo.js'

class Project{
    constructor(name=""){
        this.name = name;
        this.toDoList = [];
    }

    get Project(){
        return this; 
    }
    
    get name(){
        return this._name;
    }
    
    get toDoList(){
        return this._todoList;
    }
    
    set name(name){
        this._name = name;
    }
    set toDoList(toDo){
        this._todoList = toDo;
    }

    addToDo(todo){
        this.toDoList.push(todo);
    }

    sortByDueDate(){
        this.toDoList.sort(function(a,b){
            return a.dueDate - b.dueDate;
        });
    }
    
    // printToDoList(){
    //     for(let i = 0; i < this.toDoList.length; i++){
    //         return this.toDoList[i].toString();
    //     }
    // }
    
}

export default Project;

