import React from 'react';
import './Task.scss';
import Draggable from 'react-draggable';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.task)
        return (
            <Draggable>
                <details>
                    <summary>{this.props.task.title}</summary>
                    <div>
                        <ul>
                            <li>{this.props.task.desc}</li>
                            <li>{this.props.task.date}</li>
                            <li>{this.props.task.time}</li>
                        </ul>
                    </div>
                </details>
            </Draggable>

        )
    }
}

export default Task;

// {/* <button type="button" class="task" draggable="true">
//     {this.props.task.title}
//     <div class="collapse">
//         <ul>
//             <li>{this.props.task.desc}</li>
//             <li>{this.props.task.date}</li>
//             <li>{this.props.task.time}</li>
//         </ul>
//     </div>
// </button> */}