import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

Injectable()
export class TasksService{

    private tasks=[]

    getTasks(){
        return this.tasks;
    }

    getTask(id:number){
        const taskFound=this.tasks.find(task => task.id===id)

        if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`);
        }

        return taskFound;
    }

   
    createTasks(task:CreateTaskDto){
        console.log(task);
        this.tasks.push({
            ...task,
            id:this.tasks.length+1
        })
       return  this.tasks[this.tasks.length - 1];
    }

    updateTasks(task:UpdateTaskDto){
        console.log(task)
       return  'Actualizando tareas';
    }

   
    deleteTasks(id:number){
       return  'Eliminando tarea de id: '+id;
    }

  
    patchTasks(){
       return  'Actulizando el estado de una tareas';
    }
    
}