import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TaskService {

    tasks: ITask[] = [];

    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(id: string): ITask {        
        return this.tasks.find(task => task.id === id);
    }

    create(taskDTO: TaskDTO): ITask {
        const task = {
            id: uuidv4(),
            ...taskDTO
        }
        this.tasks.push(task);
        return task;
    }

    update(id: string, task: TaskDTO): ITask {
        const newTask = {id, ...task};
        this.tasks = this.tasks.map(task => (task.id === id ? newTask : task));
        return newTask;
    }

    delete(id: string): string {
        
        this.tasks = this.tasks.filter(task => task.id !== id);
        return "Deleted task";
    }
}
