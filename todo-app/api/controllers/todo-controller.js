import * as todoService from './../services/todo-service.js';

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

export const post = async (request, response) => {
    try {
        const payload = request.body;
        const task = await todoService.save(payload);
        setSuccessResponse(task, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const index = async (request, response) => {
    try {
        const title = request.query.title;
        const desc = request.query.desc;
        const query = {};
        if (title) {
            query.title = title;
        }
        if (desc) {
            query.desc = desc;
        }

        const tasks = await todoService.search(query);
        setSuccessResponse(tasks, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const task = await todoService.get(id);
        setSuccessResponse(task, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const updated = { ...request.body };
        updated.id = id;
        let task = await todoService.update(updated);
        task = await todoService.get(task.id);
        setSuccessResponse(task, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const task = await todoService.remove(id);
        setSuccessResponse({ message: `Successfully Removed ${id}` }, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}