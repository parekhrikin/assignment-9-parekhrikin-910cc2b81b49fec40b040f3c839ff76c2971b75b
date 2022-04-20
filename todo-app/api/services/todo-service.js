import Todo from './../models/todo.js';

export const save = (newTask) => {
    const taskModel = new Todo(newTask);
    return taskModel.save();
}

export const search = (query) => {
    const params = { ...query };
    return Todo.find(params).exec();
}

export const get = (id) => {
    const task = Todo.findById(id).exec();
    return task;
}

export const update = (updatedTask) => {
    updatedTask.lastModifiedDate = new Date();
    const task = Todo.findByIdAndUpdate(updatedTask.id, updatedTask).exec();
    return task;
}

export const remove = (id) => {
    const task = Todo.findByIdAndDelete(id).exec();
    return task;
}