import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Toolbox extends Component {
  render() {
    return  (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}


class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        <table style={{border: '2px solid black;'}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    )
  }
}



class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  handleChange(event) {
    this.setState({checked: event.target.checked});
    console.log(event.target.checked);
  }

  render() {
    const color = this.state.checked ? 'blue' : 'black';

    return (
      <tr>
        <td style={{border: '1px solid black;'}}>
          <input
            type="checkbox"
            defaultChecked={this.state.checked}
            onClick={(event) => console.log('wat')}
          >
          </input>
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

const style = {
  tableContent: {
      border: "1px solid black;"
  }
};



class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
}