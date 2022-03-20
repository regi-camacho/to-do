import { compareAsc, format, toDate } from 'date-fns';

class ToDo{
    constructor(description, dueDate = null){
        this.description = description;
         this.dueDate = format(dueDate,('MMMM-dd-yyyy'));
    }

    get description(){
        return this._description;
    }

    get dueDate(){
        return toDate(new Date(this._dueDate));
    }
      
    set description(description){
        this._description = description;
    }

    set dueDate(dueDate){
        this._dueDate = format(new Date(dueDate),('MMMM-dd-yyyy'));
    }

     toString(){
        return `Task: ${this.description}  Due Date: ${this.dueDate}`
    }
}

export default ToDo;