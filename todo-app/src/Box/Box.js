import React from 'react';
import Task from './Task/Task';
import './Box.scss';
import eventBus from './../EventBus';


class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }



    componentDidMount() {
        // const tasks = [...this.props.tasks];

        // console.log(tasks);

        // eventBus.on("addTasks", (data) =>
        //     this.setState({
        //         tasks: [...data]
        //     })
        // );



    }

    componentWillUnmount() {
        eventBus.remove("addTasks");
    }



    render() {
        console.log(this.props.tasks);

        // eventBus.on("addTasks", (data) =>
        //     this.setState({ tasks: [...data] }, function () {

        //         console.log(tasks);
        //     })
        // );
        let tasks = this.props.tasks;



        return (
            <div class="row">
                <div class="dragdropzone" id="ddzone1">
                    <h2>To Do</h2>
                    {tasks.map((task) => {
                        return <Task task={task} tasks={tasks} />
                    })}
                </div>
                <div class="dragdropzone">
                    <h2>Initiated</h2>
                </div>
                <div class="dragdropzone">
                    <h2>Ongoing</h2>
                </div>
                <div class="dragdropzone">
                    <h2>Done</h2>
                </div>
            </div>
        );
    }

}

export default Box;