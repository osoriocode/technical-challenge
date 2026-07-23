import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { updateTaskDto, createTaskDto } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async createTasks(task: createTaskDto) {
    const taskFound = await this.taskRepository.findOne({
      where: {
        title: task.title,
      },
    });

    if (taskFound) {
      return new HttpException('Title already exists', HttpStatus.CONFLICT);
    }
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  async updateTasks(id: string, updatedFields: updateTaskDto) {
    const taskFound = await this.taskRepository.findOne({ where: { id } });
    if (!taskFound) {
      return new HttpException('Task not Found', HttpStatus.NOT_FOUND);
    }
    if (updatedFields.title) {
      const titleExists = await this.taskRepository.findOne({
        where: { title: updatedFields.title },
      });

      if (titleExists && titleExists.id !== id) {
        return new HttpException('Title already exists', HttpStatus.CONFLICT);
      }
    }
    const updateTask = Object.assign(taskFound, updatedFields);
    return this.taskRepository.save(updateTask);
  }

  getTasks() {
    return this.taskRepository.find();
  }

  async getTask(id: string) {
    const taskFound = await this.taskRepository.findOne({
      where: {
        id,
      },
    });

    if (!taskFound) {
      return new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return taskFound;
  }

  async deleteTask(id: string) {
    const result = await this.taskRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Task not Found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
