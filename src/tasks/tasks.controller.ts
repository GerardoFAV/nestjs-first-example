import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query,UsePipes, ValidationPipe} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController{
    tasksService:TasksService;

    constructor(tasksService:TasksService){
        this.tasksService=tasksService;
    }

    @Get()
    @ApiOperation({summary:'Obtiene todos los tasks'})
    @ApiResponse({status:200,description:'Retorna todas las tareas'})
    @ApiResponse({status:403,description:'Forbidden'})
    getAllTasks(@Query() query:any){
        console.log(query)
       return  this.tasksService.getTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id:string){
        console.log(id)
       return  this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({summary:'Crea una tarea'})
    createTasks(@Body() task:CreateTaskDto){
        
       return  this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task:UpdateTaskDto){
       return  this.tasksService.updateTasks(task);
    }

    @Delete('/:id')
    deleteTasks(@Param('id') id:string){
         console.log(`Deleting task with id: ${id}`);
       return  this.tasksService.deleteTasks(parseInt(id));
    }

    @Patch()
    patchTasks(){
       return  this.tasksService.patchTasks();
    }


}