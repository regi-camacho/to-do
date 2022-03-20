import Project from './project.js'
import ToDo from './todo.js'
import ProjectList from './projectlist.js'
import './style.css'


class UI{
    constructor(){
        this.initSideUI();
        this.initAddProjectButton();
        this.list = new ProjectList();
        this.initProjectList();
        this.test();
    }

    initSideUI(){
        const sideContainer = document.createElement('div');
        sideContainer.setAttribute('id', 'side');
        document.body.appendChild(sideContainer);  
    }
    initAddProjectButton(){
        const sideContainer = document.getElementById('side');
        const addProjectButton = document.createElement('button');
        addProjectButton.textContent = "Add Project";
        addProjectButton.setAttribute('id', 'add-project-button');
        sideContainer.appendChild(addProjectButton);
        addProjectButton.addEventListener('click',event => this.addProject(event));
    }

    initProjectList(){
        const sideContainer = document.getElementById('side');
        for(let i = 0; i < this.list.projectList.length; i++){
            const project = document.createElement('button');
            project.setAttribute('class', 'project');
            project.textContent = this.list.projectList[i].name;
            sideContainer.appendChild(project);
        }
    }

    addProject(){
        const sideContainer = document.getElementById('side');
        this.list.addToProjectList();
        const proj = document.createElement('button');
        proj.setAttribute('class', 'project')
        proj.textContent = this.list.projectList[this.list.projectList.length-1].name;
        sideContainer.appendChild(proj);
        this.test();
        console.log(this.list.projectList.length)
    }

    test(){
        const buttons = document.querySelectorAll('.project');
        buttons.forEach(event=>event.addEventListener('click',this.printme));
    }
    printme(event){
        console.log(event.target.parentNode.removeChild(event.target));
    }

}

export default UI;
