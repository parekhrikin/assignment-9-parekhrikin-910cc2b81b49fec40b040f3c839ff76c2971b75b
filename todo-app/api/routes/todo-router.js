// Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
import express from 'express';
import * as todoController from './../controllers/todo-controller.js';

// Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.
const router = express.Router();

router.route('/todo')
    .post(todoController.post)
    .get(todoController.index);

router.route('/todo/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);

export default router;