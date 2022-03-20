import Project from './project.js'



class ProjectList{
    constructor(){
        this.projectList = [];
        this.projectList.push(new Project('default'));
    }

    get projectList(){
        return this._projectList;
    }

    set projectList(list){
        this._projectList = list;
    }
    addToProjectList(projectName=`new project${this.projectList.length}`){
        this.projectList.push(new Project(projectName))
    }
  
    
}



export default ProjectList;