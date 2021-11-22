import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.taskService.findOne(id);
    }

    @Post()
    create(@Body() task: TaskDTO) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("something was worng");
            }, 5000);
        });
        return this.taskService.create(task);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() task: TaskDTO) {
        return this.taskService.update(id, task);
    }
    
    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.taskService.delete(id);
    }
}
