import React from 'react';
import eventBus from './../EventBus';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            date: "",
            time: ""

        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleDescChange = this.handleDescChange.bind(this);
        // this.handleDateChange = this.handleDateChange.bind(this);
        // this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    //add on change methods for title, date and time

    handleChange(e) {

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });

    }


    handleSubmit(e) {
        alert('A task was submitted: ' + this.state.title);
        e.preventDefault();

        console.log(this.state.title)
        console.log(this.state.desc)
        console.log(this.state.date)
        console.log(this.state.time)

        return fetch('http://localhost:3001/todo', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));

        this.setState({
            title: "",
            desc: "",
            date: "",
            time: ""
        })
    }


    // componentDidMount() {
    //     eventBus.on("couponApply", (data) =>
    //         this.setState({ message: data.message })
    //     );
    // }

    create() {

        const addTaskHandler = this.props.addTaskHandler;
        const task = this.state;
        // eventBus.dispatch("addTask", task);
        addTaskHandler(task);
    }

    render() {
        console.log(this.state);
        return (
            <div class="menu">
                <h2>Add Task:</h2>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td><b>Title:</b></td>
                            <td><input type="text" name="title" defaultValue={this.state.title} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><b>Description:</b></td>
                            <td><textarea name="desc" rows="4" cols="20" defaultValue={this.state.desc} onChange={this.handleChange}></textarea></td>
                        </tr>
                        <tr>
                            <td><b>Date:</b></td>
                            <td><input type="date" id="date" name="date" defaultValue={this.state.date} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td><b>Time:</b></td>
                            <td><input type="time" id="time" name="time" defaultValue={this.state.time} onChange={this.handleChange} /></td>
                        </tr>
                    </table>
                    <button type="submit" onClick={this.create.bind(this)}>Add</button>
                </form>
            </div>
        );
    }
}

export default Menu;