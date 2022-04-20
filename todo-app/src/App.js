
import './App.scss';
import React from 'react';
import Box from './Box/Box';
import Menu from './Menu/Menu';
import eventBus from './EventBus';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }




  addTask(newTask) {
    const tasks = [...this.state.tasks];

    console.log(tasks)


    // eventBus.on("addTask", (data) =>
    //   this.setState({
    //     tasks: [...tasks, data]
    //   })
    // );

    this.setState({
      tasks: [...tasks, newTask]
    })
  }

  
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    // const tasks = [...this.state.tasks];

    // console.log(tasks)

    fetch("http://localhost:3001/todo")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(res => {
        this.setState({
          tasks: res
        })
      })

  }



  componentWillUnmount() {
    eventBus.remove("addTask");
  }

  render() {
    let tasks = this.state.tasks;

    console.log(this.state.tasks)


    // eventBus.dispatch("addTasks", this.state.tasks)
    return (
      <div class="containers">
        <Menu addTaskHandler={this.addTask.bind(this)} />
        <div class="box">
          <Box tasks={this.state.tasks} />
        </div>
      </div>
    );
  }

}

export default App;
